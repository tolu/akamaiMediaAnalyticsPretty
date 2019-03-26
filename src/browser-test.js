/* tslint:disable: no-console variable-name object-literal-sort-keys no-eval */
/* globals: console */

import {
  load,
} from './unpacked-ama.js';
/* add stuff based on proxy testing */

class Logger {
  constructor(name, color) {
    this._name = `%c  ${name}  `;
    this._style = `background: #222; color: ${color}`;
  }
  debug(...args) {
    console.log(this._name, this._style, ...args);
  }
  log(...args) {
    console.log(this._name, this._style, ...args);
  }
  warn(...args) {
    console.warn(this._name, this._style, ...args);
  }
  info(...args) {
    console.info(this._name, this._style, ...args);
  }
  error(...args) {
    console.error(this._name, this._style, ...args);
  }
}
const logger = new Logger('FOO', 'LimeGreen');
const amaLogger = new Logger('ama', 'Violet');

class FakeStorage {
  constructor() {
    this._cache = {};
  }
  get length() {
    return Object.keys(this._cache).length;
  }
  setItem(key, value) {
    this._cache[key] = value;
    logger.info('localStorage.setItem', key, value);
  }
  removeItem(key) {
    delete this._cache[key];
    logger.info('localStorage.removeItem', key);
  }
}

window.requests = [];
class FakeXHR {
  constructor() {
    this._xhr = new XMLHttpRequest();
    logger.log('create new xhr');
    window.requests.push(this);
  }
  open(method, url, async) {
    logger.log('xhr.open', method, url, async);
    this._xhr.open(method, url, async);
  }
  send(...args) {
    logger.log('xhr.send', args);
    this._xhr.send(...args);
  }
  set onreadystatechange(value) {
    this._xhr.onreadystatechange = value;
  }
  get status() {
    return this._xhr.status;
  }
  get readyState() {
    return this._xhr.readyState;
  }
  get statusText() {
    return this._xhr.statusText;
  }
  get responseXML() {
    logger.log('read responseXML');
    return new JsonDocument(this._xhr.responseText);
  }
}

const attrPattern = /^_/; // '@' in dotnet serializer
const attrFilter = (key) => attrPattern.test(key);
const nonAttrFilter = (key) => !attrPattern.test(key);
class JsonDocument {
  constructor(jsonString) {
    const json = JSON.parse(jsonString);
    logger.info('create JsonDocument', this);
    const key = Object.keys(json)[0];
    this.documentElement = new JsonElement(key, json[key]);
  }
}
class JsonElement {
  constructor(name, content, parent) {
    // logger.info('create JsonElement', name);
    this.tagName = name;
    this.nodeName = name;
    this.nodeType = 1;
    this.parentNode = parent;
    if (typeof content === 'string') {
      this.textContent = content;
    } else {
      const keys = Object.keys(content);
      this.attrs = keys.filter(attrFilter).reduce((attrs, prop) => {
        attrs[prop.replace(attrPattern, '')] = content[prop];
        return attrs;
      }, {});
      this.children = new JsonElementList();
      keys.filter(nonAttrFilter).map(prop => {
        const childContent = content[prop];
        if (Array.isArray(childContent)) {
          this.children.push(
            ...childContent.map(child => new JsonElement(prop, child, this)),
          );
        } else {
          this.children.push(new JsonElement(prop, childContent, this));
        }
      });
    }
  }
  getAttribute(name) {
    return this.attrs[name] || null;
  }
  get childNodes() {
    return this.children || [];
  }
  getElementsByTagName(name, flag = true) {
    let result = [];
    const ownHits = this.childNodes.filter(c => c.tagName === name);
    const childHits = this.childNodes.reduce((p, n) => {
      return [...p, ...n.getElementsByTagName(name, false)];
    }, []);
    result = [...ownHits, ...childHits];
    if (flag) {
      logger.log('getElementsByTagName', name, result);
    }
    return new JsonElementList(...result);
  }
}

class JsonElementList extends Array {
  get firstChild() {
    return this[0];
  }
  item(index) {
    return this[index];
  }
}

const fakeGlobals = {
  debug: true,
  console: amaLogger,
  setTimeout: (...args) => setTimeout(...args),
  clearTimeout: (...args) => clearTimeout(...args),
  setInterval: (...args) => setInterval(...args),
  clearInterval: (...args) => clearInterval(...args),
  window: {
    addEventListener(type, handler) {
      logger.log('window.addEventListener', type);
    },
    navigator: {
      userAgent: 'AppleTV/7.2.1 iOS/8.4.1 AppleTV/7.2.1',
    },
    location: '',
  },
  navigator: {
    geolocation: null,
  },
  document: {
    referrer: '', // last page
    URL: '', // current page
    currentScript: {
      src: '',
    },
  },
  localStorage: new FakeStorage(),
  sessionStorage: new FakeStorage(),
  XMLHttpRequest: FakeXHR,
};
const getFakeGlobalProp = propPath => {
  if (/Symbol\(/.test(propPath)) {
    return undefined;
  }
  const value = propPath.replace(/^fakeGlobals\./, '').split('.').reduce((p, n) => {
    if (typeof p === 'undefined' || typeof p[n] === 'undefined') {
      return undefined;
    }
    return p[n];
  }, fakeGlobals);
  if (typeof value === 'undefined' && !/^fakeGlobals\.(window|document|console|window|setTimeout|setInterval|clearTimeout|clearInterval)/.test(propPath)) {
    logger.log('getFakeGlobalProp()', propPath, value);
  }
  return value;
};

function getObjectLogger(root, obj) {
  if (/^(string|number|boolean|function)$/.test(typeof obj) || obj === null) {
    return obj;
  }
  const defaultObj = {};
  return new Proxy(obj || defaultObj, {
    get(target, property) {
      const prop = property.toString();
      try {
        const fake = getFakeGlobalProp(`${root}.${prop}`);
        if (typeof fake !== 'undefined') {
          return getObjectLogger(`${root}.${prop}`, fake);
        }
      } catch (e) {
        logger.log(e);
      }
      logger.log(`Proxy.get:`, `${root}.${prop}`);
      return getObjectLogger(`${root}.${prop}`);
    },
    set(target, property, value) {
      if (target === defaultObj) {
        logger.log(`Proxy.set: ${root}`, property, value);
      } else {
        target[property] = value;
      }
      return true;
    },
    apply(target, thisArg, argList) {
      target.apply(thisArg, argList);
      logger.log(`Proxy.apply: ${root}`, target, argList);
    },
  });
}
const globals = getObjectLogger('fakeGlobals');

const media = {
  beaconUrl: '/files/beacon-nrk1.json',
  streamUrl: 'https://nrkedge-live.nrk.no/live/nrkhd-osl-rr.netwerk.no/no/21/0/hls/nrk1/playlist.m3u8?b=10-3500&bw_start=1200&no_audio_only&no_iframes',
  duration: Number.POSITIVE_INFINITY,
  data: {
    show: null,
    title: 'nrk1',
    category: null,
    contentLength: null,
    device: 'SetTopUnit',
    playerId: 'Hls',
    deliveryType: 'L',
    playerInfo: 'SetTopUnit-AppleTv',
    cdnName: 'NrkEdge - Cdn',
  },
};

const JS_AkamaiMediaAnalytics = load(globals);
const akamaiAnalytics = new JS_AkamaiMediaAnalytics(media.beaconUrl);
logger.log('akamaiAnalytics keys', Object.keys(akamaiAnalytics));

// set stream url
akamaiAnalytics.setStreamURL(media.streamUrl, true);
akamaiAnalytics.setStreamDuration(media.duration);
// unique id that identifies end-users, settings this enables viewer diagnostics by default
// which means you can skip calling the viewer diagnostics ID API
akamaiAnalytics.setViewerId('TobiasLocalTest');
// set custom dimensions
Object.keys(media.data).forEach(key => {
  akamaiAnalytics.setData(key, media.data[key]);
});

// initialize playback session
const callbacks = {
  getStreamHeadPosition: () => {
    logger.log('streamHeadPosition');
    return Date.now();
  },
};
akamaiAnalytics.handleSessionInit(callbacks);

let clockOffset = 0;
let playing = false;
document.addEventListener('fwd', () => clockOffset += 30);
document.addEventListener('rwd', () => clockOffset -= 30);
document.addEventListener('play-pause', () => {
  playing = !playing;
  if (playing) {
    logger.log('handlePlaying');
    akamaiAnalytics.handlePlaying();
  } else {
    logger.log('handlePause');
    akamaiAnalytics.handlePause();
  }
});

window.ama = akamaiAnalytics;
