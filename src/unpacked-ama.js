/* using https://lelinhtinh.github.io/de4js/ + tslint / typescript auto fixes */
/* cSpell: disable */
/* tslint:disable: no-console variable-name object-literal-sort-keys triple-equals radix no-empty no-conditional-assignment no-bitwise one-variable-per-declaration no-unused-expression */

export const load = (globals) => {
    // use provided globals
    const {
        debug = false,
        console,
        document,
        window,
        XMLHttpRequest,
        localStorage,
        sessionStorage,
        setTimeout,
        setInterval,
        clearTimeout,
        clearInterval,
        navigator,
        location,
    } = globals;

    function akamaiMediaAnalytics(_0x6cbfx2) {
        var _0x6cbfx3 = {
            XML_PARSER: 0,
            M3U8_PARSER: 1,
        };
        function _0x6cbfx4() {
            var _0x6cbfx5;
            function _0x6cbfx6() {
                return {
                    getParser: function(_0x6cbfx7, _0x6cbfx8) {
                        try {
                            _logger.debug('getParser start');
                            if (_0x6cbfx7 === _0x6cbfx3.XML_PARSER) {
                                return (new amaXmlParser(_0x6cbfx8));
                            } else {
                                if (_0x6cbfx7 === _0x6cbfx3.M3U8_PARSER) {
                                    // @ts-ignore
                                    return (new amaM3u8Parser(_0x6cbfx8));
                                } else {
                                    _logger.log('Not supported : ' + _0x6cbfx7);
                                }
                            }
                        } catch (exception) {
                            _logger.error('exception occurred ' + exception);
                        } finally {
                            _logger.debug('getParser end');
                        }
                    },
                };
            }
            return {
                getInstance: function() {
                    if (!_0x6cbfx5) {
                        _0x6cbfx5 = _0x6cbfx6();
                    }
                    return _0x6cbfx5;
                },
            };
        }
        var _0x6cbfx9 = {
            paramSepartor: '~',
            encodedParamSepartor: '*@*',
            keyValuePairSeparator: '=',
        };
        function amaXmlParser(_0x6cbfxb) {
            var _0x6cbfxc = {
                title: false,
                category: false,
                subCategory: false,
                show: false,
                contentLength: false,
                contentType: false,
                device: false,
                deliveryType: false,
                playerId: false,
                eventName: false,
            };
            var _0x6cbfxd = _0x6cbfxb;
            var _0x6cbfxe = new amaDictionary();
            var _0x6cbfxf = new amaDictionary();
            var _0x6cbfx10 = new amaDictionary();
            var _0x6cbfx11 = new amaDictionary();
            var _0x6cbfx12 = new amaDictionary();
            var _prefix = '';
            var _0x6cbfx14 = {};
            var _0x6cbfx15 = false;
            var _configuration = {
                configDebug: false,
                printException: false,
            };
            var _0x6cbfx17 = '';
            var _0x6cbfx18 = '';
            var _0x6cbfx19 = '';
            var _0x6cbfx1a = [];
            _0x6cbfx175.deleteExpiredDataFromLocalStorage(_0x6cbfx174.LOCAL_STORAGE);
            this.print = function print() {
                try {
                    _logger.debug('print start');
                    _logger.log(_0x6cbfxd);
                    var _0x6cbfx1b = '';
                    var _0x6cbfx1c = '';
                    for (_0x6cbfx1b in _0x6cbfxe.getDictionary()) {
                        _0x6cbfx1c = _0x6cbfxe.getValueForKey(_0x6cbfx1b);
                        _logger.log(_0x6cbfx1b + ' : ' + _0x6cbfx1c);
                    }
                    for (_0x6cbfx1b in _0x6cbfxf.getDictionary()) {
                        _0x6cbfx1c = _0x6cbfxf.getValueForKey(_0x6cbfx1b);
                        _logger.log(_0x6cbfx1b + ' : ' + _0x6cbfx1c);
                    }
                    for (_0x6cbfx1b in _0x6cbfx10.getDictionary()) {
                        _0x6cbfx1c = _0x6cbfx10.getValueForKey(_0x6cbfx1b);
                        _logger.log(_0x6cbfx1b + ' : ' + _0x6cbfx1c);
                    }
                    for (_0x6cbfx1b in _0x6cbfx11.getDictionary()) {
                        _0x6cbfx1c = _0x6cbfx11.getValueForKey(_0x6cbfx1b);
                        _logger.log(_0x6cbfx1b + ' : ' + _0x6cbfx1c);
                    }
                    for (_0x6cbfx1b in _0x6cbfx12.getDictionary()) {
                        _0x6cbfx1c = _0x6cbfx12.getValueForKey(_0x6cbfx1b);
                        _logger.log(_0x6cbfx1b + ' : ' + _0x6cbfx1c);
                    }
                    for (_0x6cbfx1b in _0x6cbfx14) {
                        _logger.log(_0x6cbfx1b + ' : ' + _0x6cbfx14[_0x6cbfx1b]);
                    }
                    _logger.log(_0x6cbfx15.toString());
                    for (_0x6cbfx1b in _configuration) {
                        _logger.log(_0x6cbfx1b + ' : ' + _configuration[_0x6cbfx1b]);
                    }
                    _logger.log(_configuration.toString());
                } catch (exception) {
                    _logger.error('print  exception occurred ' + exception);
                } finally {
                    _logger.debug('print end');
                }
            };
            this.onError = function onError() {
                return _0x6cbfx17;
            };
            this.logDictionary = function logDictionary() {
                return _0x6cbfxf.getDictionary();
            };
            this.beaconDictionary = function beaconDictionary() {
                return _0x6cbfxe.getDictionary();
            };
            this.securityInfoDictionary = function securityInfoDictionary() {
                return _0x6cbfx11.getDictionary();
            };
            this.mediaAnalyticsDictionary = function mediaAnalyticsDictionary() {
                return _0x6cbfx12.getDictionary();
            };
            this.matchDictionary = function matchDictionary() {
                return _0x6cbfx14;
            };
            function parseAkamaiBeaconConfig(responseXml) {
                try {
                    _logger.debug('amaXmlParser startParsing start');
                    if (_typeUtils.isValid(responseXml)) {
                        var documentElement;
                        if (responseXml.documentElement) {
                            _logger.debug('Found document element' + responseXml.documentElement);
                            documentElement = responseXml.documentElement;
                        } else {
                            _logger.debug('NO document element found');
                            documentElement = responseXml;
                        }
                        _configuration.configDebug = Boolean(parseInt(documentElement.getAttribute('debug')));
                        _configuration.printException = Boolean(parseInt(documentElement.getAttribute('exception')));
                        var childNodes = documentElement.childNodes;
                        _logger.debug('current list of child nodes = ' + responseXml.documentElement);
                        _logger.debug('and first child node = ' + childNodes.firstChild + ' child element name = ' + childNodes.nodeName);
                        for (var idx = 0; idx < childNodes.length; idx++) {
                            var item = childNodes.item(idx);
                            _logger.debug('Child nodes at 0 = ' + item);
                            if (item.tagName === 'beaconId' || item.tagName === 'beaconVersion' || item.tagName === 'isActive') {
                                _logger.debug('current element tag name = ' + item.tagName + ' and content = ' + item.textContent);
                                _0x6cbfxe.addUpdate(item.tagName, item.textContent);
                            } else {
                                if (item.tagName === 'logTo') {
                                    _logger.debug('current element tag name = ' + item.tagName + ' and content = ' + item);
                                    parseLogInfoData(item);
                                } else {
                                    if (item.tagName === 'security') {
                                        _logger.debug('current element tag name = ' + item.tagName + ' and content = ' + item);
                                        parseSecurityInfoData(item);
                                    } else {
                                        if (item.tagName === 'bucketInfo') {
                                            _logger.debug('current element tag name = ' + item.tagName + ' and content = ' + item);
                                            parseBucketInfoData(item);
                                        } else {
                                            if (item.tagName === 'statistics') {
                                                _logger.debug('current element tag name = ' + item.tagName + ' and content = ' + item);
                                                parseStatisticData(item);
                                                var _0x6cbfx22 = documentElement.getElementsByTagName('dataMetrics');
                                                parseDataMetricsData(responseXml);
                                                parseMatchMetricsData(responseXml);
                                            } else {
                                                if (item.tagName === 'uniqueDimensions') {
                                                    _0x6cbfx47(item);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } catch (exception) {
                    _logger.error('amaXmlParser startParsing exception occurred ' + exception);
                } finally {
                    _logger.debug('amaXmlParser startParsing end');
                }
            }
            function parseLogInfoData(element) {
                try {
                    _logger.debug('amaXmlParser parseLogInfoData start');
                    if (_typeUtils.isValid(element)) {
                        _logger.debug('amaXmlParser parseLogInfoData start, element name = ' + element.nodeName);
                        var _0x6cbfx25 = element.getAttribute('logInterval');
                        if (!_typeUtils.isString(_0x6cbfx25) || _0x6cbfx25.trim().length <= 0 || !_typeUtils.isInteger(parseInt(_0x6cbfx25))) {
                            _0x6cbfx25 = '300';
                        }
                        _0x6cbfxf.addUpdate('logInterval', _0x6cbfx25);
                        var _0x6cbfx26 = element.getAttribute('secondaryLogTime');
                        if (!_typeUtils.isString(_0x6cbfx26) || _0x6cbfx26.trim().length <= 0 || !_typeUtils.isInteger(parseInt(_0x6cbfx26))) {
                            _0x6cbfx26 = '5';
                        }
                        _0x6cbfxf.addUpdate('secondaryLogTime', _0x6cbfx26);
                        _0x6cbfxf.addUpdate('isSessionWithRebufferLimit', element.getAttribute('isSessionWithRebufferLimit'));
                        _0x6cbfxf.addUpdate('startupTimeOutlierLimit', element.getAttribute('startupTimeOutlierLimit'));
                        var _0x6cbfx27 = element.getAttribute('rebufferDurationOutlier') * 1000;
                        if (_typeUtils.isInteger(_0x6cbfx27) && _0x6cbfx27 > 0) {
                            _0x6cbfxf.addUpdate('rebufferDurationOutlier', _0x6cbfx27.toString());
                        } else {
                            _0x6cbfx27 = 600 * 1000;
                            _0x6cbfxf.addUpdate('rebufferDurationOutlier', _0x6cbfx27.toString());
                        }
                        var _0x6cbfx28 = element.childNodes;
                        for (var iterator = 0; iterator < _0x6cbfx28.length; iterator++) {
                            _logger.debug('Log to parsing = ' + _0x6cbfx28.item(iterator).nodeName + ' and content = ' + _0x6cbfx28.item(iterator).textContent + ' node type = ' + _0x6cbfx28.item(iterator).nodeType);
                            if (_0x6cbfx28.item(iterator).nodeType === 1) {
                                _0x6cbfxf.addUpdate(_0x6cbfx28.item(iterator).nodeName, _0x6cbfx28.item(iterator).textContent);
                            }
                        }
                        validateHost();
                    }
                } catch (exception) {
                    _logger.error('amaXmlParser parseLogInfoData exception occurred ' + exception);
                } finally {
                    _logger.debug('amaXmlParser parseLogInfoData end');
                }
            }
            function validateHost() {
                try {
                    _logger.debug('amaXmlParser validateHost start');
                    var _0x6cbfx2a = _0x6cbfxf.getDictionary();
                    var _0x6cbfx2b = _0x6cbfx2a.host;
                    if ((_0x6cbfx2a.host.indexOf('http://') === -1) && (_0x6cbfx2a.host.indexOf('https://') === -1)) {
                        _0x6cbfx2a.host = 'http://' + _0x6cbfx2a.host;
                    }
                } catch (exception) {
                    _logger.error('amaXmlParser validateHost exception occurred ' + exception);
                } finally {
                    _logger.debug('amaXmlParser validateHost end');
                }
            }
            function parseSecurityInfoData(element) {
                try {
                    _logger.debug('amaXmlParser parseSecurityInfoData start');
                    if (_typeUtils.isValid(element)) {
                        var childNodes = element.childNodes;
                        var length = childNodes.length;
                        if (_typeUtils.isValid(childNodes)) {
                            for (var _0x6cbfx2f = 0; _0x6cbfx2f < length; _0x6cbfx2f++) {
                                _logger.debug('SecurityEl child name = ' + childNodes.item(_0x6cbfx2f).nodeName);
                                if (childNodes.item(_0x6cbfx2f).nodeName === 'ViewerDiagnostics') {
                                    childNodes = childNodes.item(_0x6cbfx2f);
                                    break;
                                }
                            }
                            if (_typeUtils.isValid(childNodes)) {
                                var _0x6cbfx30 = childNodes.childNodes;
                                if (_typeUtils.isValid(_0x6cbfx30)) {
                                    var _0x6cbfx31 = _0x6cbfx30.length;
                                    var _0x6cbfx32 = null;
                                    for (var _0x6cbfx33 = 0; _0x6cbfx33 < _0x6cbfx31; _0x6cbfx33++) {
                                        _logger.debug('viewerDiagnosticEl child name = ' + _0x6cbfx30.item(_0x6cbfx33).nodeName);
                                        if (_0x6cbfx30.item(_0x6cbfx33).nodeName === 'salt') {
                                            _0x6cbfx32 = _0x6cbfx30.item(_0x6cbfx33);
                                            break;
                                        }
                                    }
                                    if (_typeUtils.isValid(_0x6cbfx32)) {
                                        _0x6cbfx11.addUpdate('bytes', _0x6cbfx32.getAttribute('bytes'));
                                        _0x6cbfx11.addUpdate('hashfunction', _0x6cbfx32.getAttribute('hashfunction'));
                                        _0x6cbfx11.addUpdate('iterations', _0x6cbfx32.getAttribute('iterations'));
                                        _0x6cbfx11.addUpdate('value', _0x6cbfx32.getAttribute('value'));
                                        _0x6cbfx11.addUpdate('version', _0x6cbfx32.getAttribute('version'));
                                    }
                                }
                            }
                        }
                    }
                } catch (exception) {
                    _logger.error('amaXmlParser parseSecurityInfoData exception occurred ' + exception);
                } finally {
                    _logger.debug('amaXmlParser parseSecurityInfoData end');
                }
            }
            function parseBucketInfoData(_0x6cbfx24) {
                try {
                    _logger.debug('amaXmlParser parseBucketInfoData start');
                    if (_typeUtils.isValid(_0x6cbfx24)) {
                        var _0x6cbfx28 = _0x6cbfx24.childNodes;
                        if (_0x6cbfx28 !== null && _0x6cbfx28 !== '') {
                            for (var _0x6cbfx21 = 0; _0x6cbfx21 < _0x6cbfx28.length; _0x6cbfx21++) {
                                if (_0x6cbfx28.item(_0x6cbfx21).nodeType === 1) {
                                    _0x6cbfx10.addUpdate(_0x6cbfx28.item(_0x6cbfx21).nodeName, _0x6cbfx28.item(_0x6cbfx21).textContent);
                                }
                            }
                        }
                    }
                } catch (exception) {
                    _logger.error('amaXmlParser parseBucketInfoData exception occurred ' + exception);
                } finally {
                    _logger.debug('amaXmlParser parseBucketInfoData end');
                }
            }
            function parseStatisticData(_0x6cbfx24) {
                try {
                    _logger.debug('amaXmlParser parseStatisticData start');
                    if (_typeUtils.isValid(_0x6cbfx24)) {
                        if (_0x6cbfx24.childNodes.item(0).nodeName === 'useKey') {
                            _logger.debug('amaXmlParser use key is = ' + _0x6cbfx24.childNodes.item(0).textContent);
                            _0x6cbfx15 = Boolean(_0x6cbfx24.childNodes.item(0).textContent);
                        }
                    }
                } catch (exception) {
                    _logger.error('amaXmlParser parseStatisticData exception occurred ' + exception);
                } finally {
                    _logger.debug('amaXmlParser parseStatisticData end');
                }
            }
            function parseDataMetricsData(responseXml) {
                try {
                    _logger.debug('amaXmlParser parseDataMetricsData start');
                    if (_typeUtils.isValid(responseXml)) {
                        var documentElement = responseXml.documentElement;
                        var nodeList = documentElement.getElementsByTagName('dataMetrics');
                        for (var i = 0; i < nodeList.length; i++) {
                            var element = nodeList.item(i);
                            var parentNode = element.parentNode;
                            var nodeName = parentNode.nodeName;
                            var _0x6cbfx3b = [];
                            var _0x6cbfx3c = element.getElementsByTagName('data');
                            for (var _0x6cbfx3d = 0; _0x6cbfx3d < _0x6cbfx3c.length; _0x6cbfx3d++) {
                                var _0x6cbfx3e = _0x6cbfx3c.item(_0x6cbfx3d);
                                nodeName = _0x6cbfx3e.getAttribute('name');
                                var _0x6cbfx3f = _0x6cbfx3e.getAttribute('key');
                                var nodeValue = _0x6cbfx3e.getAttribute('value');
                                var _0x6cbfx40 = _0x6cbfx3e.getAttribute('sendOnce');
                                var _0x6cbfx41 = _0x6cbfx3e.getAttribute('fallback');
                                var _0x6cbfx42 = _0x6cbfx3e.getAttribute('size');
                                var _0x6cbfx43 = _0x6cbfx3e.getAttribute('regExpATV');
                                var _0x6cbfx44 = {};
                                _0x6cbfx44.name = nodeName;
                                _0x6cbfx44.key = _0x6cbfx3f;
                                if (nodeName in _0x6cbfxc) {
                                    _0x6cbfxc[nodeName] = true;
                                } else {
                                    if (_0x6cbfx3f.indexOf('_cd_') != -1) {
                                        _0x6cbfxc[nodeName] = true;
                                    }
                                }
                                if (nodeValue) {
                                    _0x6cbfx44.value = nodeValue;
                                }
                                if (_0x6cbfx40) {
                                    _0x6cbfx44.sendOnce = _0x6cbfx40;
                                }
                                if (_0x6cbfx41) {
                                    _0x6cbfx44.fallback = _0x6cbfx41;
                                }
                                if (_0x6cbfx42) {
                                    _0x6cbfx44.size = _0x6cbfx42;
                                }
                                if (_0x6cbfx43) {
                                    _0x6cbfx44.regExp = _0x6cbfx43;
                                }
                                _0x6cbfx3b.push(_0x6cbfx44);
                            }
                            _0x6cbfx12.addUpdate(parentNode.nodeName, _0x6cbfx3b);
                        }
                    }
                } catch (exception) {
                    _logger.error('amaXmlParser parseDataMetricsData exception occurred ' + exception);
                } finally {
                    _logger.debug('amaXmlParser parseDataMetricsData end');
                }
            }
            function parseMatchMetricsData(responseXml) {
                try {
                    _logger.debug('amaXmlParser parseMatchMetricsData start');
                    if (_typeUtils.isValid(responseXml)) {
                        var _0x6cbfx37 = responseXml.documentElement;
                        var _0x6cbfx46 = _0x6cbfx37.getElementsByTagName('match');
                        for (var _0x6cbfx21 = 0; _0x6cbfx21 < _0x6cbfx46.length; _0x6cbfx21++) {
                            var match = _0x6cbfx46.item(_0x6cbfx21);
                            var parentKey = match.parentNode.parentNode.getAttribute('name');
                            if (!_0x6cbfx14[parentKey]) {
                                _0x6cbfx14[parentKey] = {};
                            }
                            _0x6cbfx14[parentKey][match.getAttribute('key')] = {
                                type: match.getAttribute('type'),
                                name: match.getAttribute('name'),
                                value: match.getAttribute('value'),
                            };
                        }
                    }
                } catch (exception) {
                    _logger.error('amaXmlParser parseMatchMetricsData exception occurred ' + exception);
                } finally {
                    _logger.debug('amaXmlParser parseMatchMetricsData end');
                }
            }
            function _0x6cbfx47(element) {
                if (_typeUtils.isValid(element)) {
                    _prefix = element.getAttribute('prefix');
                    var elementList = element.getElementsByTagName('dimension');
                    var length = elementList.length;
                    var results = [];
                    for (var idx = 0; idx < length; idx++) {
                        var _0x6cbfx44 = {};
                        var _0x6cbfx1b = elementList[idx].getAttribute('key');
                        var _0x6cbfx4b = elementList[idx].getAttribute('name');
                        var _expiry = elementList[idx].getAttribute('expiry');
                        if (_typeUtils.isString(_0x6cbfx1b)) {
                            _0x6cbfx44.key = _0x6cbfx1b;
                        }
                        if (_typeUtils.isString(_0x6cbfx4b)) {
                            _0x6cbfx44.name = _0x6cbfx4b;
                        }
                        if (_typeUtils.isString(_expiry)) {
                            _0x6cbfx44.expiry = Math.floor(parseInt(_expiry) / 1440);
                        }
                        results.push(_0x6cbfx44);
                    }
                    _0x6cbfx12.addUpdate(element.tagName, results);
                }
            }
            this.parse = function parse(_0x6cbfx4d) {
                try {
                    _logger.debug('amaXmlParser parse start');
                    var xhr = new XMLHttpRequest();
                    if (_typeUtils.isValid(xhr) && _typeUtils.isValid(_0x6cbfxd) && _typeUtils.isString(_0x6cbfxd)) {
                        xhr.open('GET', _0x6cbfxd, true);
                        xhr.onreadystatechange = function() {
                            if (xhr.readyState === 4) {
                                if (xhr.status === 200 || xhr.status === 0) {
                                    if (!_typeUtils.isValid(xhr.responseXML)) {
                                        _0x6cbfx17 = 'Invalid XML';
                                    } else {
                                        _logger.log('Received response beacon xml = ' + xhr.responseXML);
                                        parseAkamaiBeaconConfig(xhr.responseXML);
                                    }
                                } else {
                                    _0x6cbfx17 = xhr.statusText;
                                    _logger.log('amaXmlParser parse error occurred : ' + _0x6cbfx17);
                                }
                                if (typeof (_0x6cbfx4d) === 'function') {
                                    _0x6cbfx4d();
                                    xhr = null;
                                }
                            }
                        };
                        xhr.send();
                    }
                } catch (exception) {
                    _logger.error('amaXmlParser parse exception occurred ' + exception);
                } finally {
                    _logger.debug('amaXmlParser parse end');
                }
            };
            this.isCustomDataMetrics = function isCustomDataMetrics(_0x6cbfx1b) {
                return true;
            };
            this.getbeaconStringFromMetrics = function getbeaconStringFromMetrics(_0x6cbfx4f, _0x6cbfx3b, _0x6cbfx50) {
                var _0x6cbfx51 = '';
                try {
                    if (_typeUtils.isString(_0x6cbfx4f) && _typeUtils.isInstanceOf(_0x6cbfx3b, amaDictionary) && _typeUtils.isInstanceOf(_0x6cbfx50, amaDictionary)) {
                        var _0x6cbfx52 = _0x6cbfxf.getValueForKey('urlParamSeparator');
                        if (!_typeUtils.isString(_0x6cbfx52)) {
                            _0x6cbfx52 = _0x6cbfx9.paramSepartor;
                        }
                        var _0x6cbfx53 = _0x6cbfxf.getValueForKey('encodedParamSeparator');
                        if (!_typeUtils.isString(_0x6cbfx53)) {
                            _0x6cbfx53 = _0x6cbfx9.encodedParamSepartor;
                        }
                        var _0x6cbfx2b = _0x6cbfxf.getValueForKey('host');
                        var _0x6cbfx54 = _0x6cbfxf.getValueForKey('path');
                        if (_typeUtils.isString(_0x6cbfx2b) && _typeUtils.isString(_0x6cbfx54)) {
                            _0x6cbfx51 = _0x6cbfx2b + _0x6cbfx54 + '?';
                        } else {
                            _logger.warn('One of the value not set host = ' + _0x6cbfx2b + ' path = ' + _0x6cbfx54);
                        }
                        var _0x6cbfx55 = _0x6cbfx12.getDictionary().common;
                        _0x6cbfx51 += _0x6cbfx5f(_0x6cbfx55, _0x6cbfx3b, _0x6cbfx50, _0x6cbfx52);
                        var _0x6cbfx56 = _0x6cbfx4f.split(';');
                        var _0x6cbfx49 = _0x6cbfx56.length;
                        var _0x6cbfx57 = null;
                        var _0x6cbfx58 = '';
                        for (var _0x6cbfx59 = 0; _0x6cbfx59 < _0x6cbfx49; _0x6cbfx59++) {
                            _0x6cbfx57 = _0x6cbfx12.getDictionary()[_0x6cbfx56[_0x6cbfx59]];
                            for (var _0x6cbfx5a = 0; _0x6cbfx5a < _0x6cbfx57.length; _0x6cbfx5a++) {
                                if (_0x6cbfx57[_0x6cbfx5a].key === 'va' && _0x6cbfx57[_0x6cbfx5a].sendOnce === '1') {
                                    _0x6cbfx194.setIsVisitStartSent(true);
                                    break;
                                }
                            }
                            if (_0x6cbfx56[_0x6cbfx59] === 'uniqueDimensions') {
                                _0x6cbfx58 = _0x6cbfx66(_0x6cbfx57, _0x6cbfx3b, _0x6cbfx50, _0x6cbfx52);
                            } else {
                                _0x6cbfx58 = _0x6cbfx5f(_0x6cbfx57, _0x6cbfx3b, _0x6cbfx50, _0x6cbfx52);
                            }
                            if (_typeUtils.isString(_0x6cbfx58) && _0x6cbfx58.length > 0) {
                                _0x6cbfx51 += _0x6cbfx52 + _0x6cbfx58;
                            }
                        }
                    }
                } catch (exception) {
                    _logger.error('amaXmlParser getbeaconStringFromMetrics exception occurred ' + exception);
                } finally {
                    return _0x6cbfx51;
                }
            };
            this.printConfig = function printConfig() {
                var _0x6cbfx5b = this.logDictionary();
                for (var _0x6cbfx1b in _0x6cbfx5b) {
                    _logger.debug(_0x6cbfx1b + ':' + _0x6cbfx5b[_0x6cbfx1b]);
                }
                var _0x6cbfx5c = this.beaconDictionary();
                for (var _0x6cbfx1b in _0x6cbfx5c) {
                    _logger.debug(_0x6cbfx1b + ':' + _0x6cbfx5c[_0x6cbfx1b]);
                }
                var _0x6cbfx5d = this.mediaAnalyticsDictionary();
                for (var _0x6cbfx1b in _0x6cbfx5d) {
                    _logger.debug(_0x6cbfx1b + ':' + _0x6cbfx5d[_0x6cbfx1b]);
                }
                var _0x6cbfx5e = this.matchDictionary();
                for (var _0x6cbfx1b in _0x6cbfx5e) {
                    _logger.debug(_0x6cbfx1b + ':' + _0x6cbfx5e[_0x6cbfx1b]);
                }
            };
            function _0x6cbfx5f(_0x6cbfx60, _0x6cbfx61, _0x6cbfx50, _0x6cbfx52) {
                var _0x6cbfx62 = '';
                if (_typeUtils.isString(_0x6cbfx52) && _typeUtils.isInstanceOf(_0x6cbfx61, amaDictionary) && _typeUtils.isInstanceOf(_0x6cbfx50, amaDictionary) && _typeUtils.isValid(_0x6cbfx60)) {
                    var _0x6cbfx63 = _0x6cbfx60.length;
                    for (var _0x6cbfx59 = 0; _0x6cbfx59 < _0x6cbfx63; _0x6cbfx59++) {
                        var _0x6cbfx64 = _0x6cbfx60[_0x6cbfx59].name;
                        if (_typeUtils.isString(_0x6cbfx64)) {
                            var _0x6cbfx65 = _0x6cbfx50.getValueForKey(_0x6cbfx64);
                            if (!_typeUtils.isString(_0x6cbfx65)) {
                                _0x6cbfx65 = _0x6cbfx61.getValueForKey(_0x6cbfx64);
                            }
                            if (!_typeUtils.isString(_0x6cbfx65) && _typeUtils.isValid(_0x6cbfx60[_0x6cbfx59].fallback)) {
                                _0x6cbfx65 = _0x6cbfx69(_0x6cbfx60[_0x6cbfx59].fallback, _0x6cbfx61, _0x6cbfx50);
                            }
                            if (_typeUtils.isString(_0x6cbfx65)) {
                                if (_typeUtils.isString(_0x6cbfx60[_0x6cbfx59].sendOnce) && '1' === _0x6cbfx60[_0x6cbfx59].sendOnce) {
                                    if (_0x6cbfx1a.indexOf(_0x6cbfx64) !== -1) {
                                        continue;
                                    } else {
                                        _0x6cbfx1a.push(_0x6cbfx64);
                                    }
                                }
                                if (0 !== _0x6cbfx62.length) {
                                    _0x6cbfx62 = _0x6cbfx62.concat(_0x6cbfx52);
                                }
                                _0x6cbfx65 = _0x6cbfx6b(_0x6cbfx60[_0x6cbfx59], _0x6cbfx65);
                                _0x6cbfx62 = _0x6cbfx62.concat(_0x6cbfx60[_0x6cbfx59].key);
                                _0x6cbfx62 = _0x6cbfx62.concat(_0x6cbfx9.keyValuePairSeparator);
                                _0x6cbfx62 = _0x6cbfx62.concat(_0x6cbfx65);
                            }
                        }
                    }
                }
                return _0x6cbfx62;
            }
            function _0x6cbfx66(_0x6cbfx60, _0x6cbfx61, _0x6cbfx50, _0x6cbfx52) {
                var _0x6cbfx62 = '';
                if (_typeUtils.isString(_0x6cbfx52) && _typeUtils.isInstanceOf(_0x6cbfx61, amaDictionary) && _typeUtils.isInstanceOf(_0x6cbfx50, amaDictionary) && _typeUtils.isValid(_0x6cbfx60)) {
                    var _0x6cbfx63 = _0x6cbfx60.length;
                    var _0x6cbfx64 = '';
                    var _0x6cbfx65 = '';
                    for (var _0x6cbfx59 = 0; _0x6cbfx59 < _0x6cbfx63; _0x6cbfx59++) {
                        _0x6cbfx64 = _0x6cbfx60[_0x6cbfx59].name;
                        _0x6cbfx65 = _0x6cbfx61.getValueForKey(_0x6cbfx64);
                        if (!_typeUtils.isString(_0x6cbfx65)) {
                            _0x6cbfx65 = _0x6cbfx50.getValueForKey(_0x6cbfx64);
                        }
                        if (_typeUtils.isString(_0x6cbfx65)) {
                            var _0x6cbfx1e = _0x6cbfx74(_0x6cbfx65);
                            var _0x6cbfx67 = 0.0;
                            var _0x6cbfx68 = new Date().getTime();
                            if (_typeUtils.isNumber(_0x6cbfx1e)) {
                                _0x6cbfx67 = _0x6cbfx68 - parseFloat(_0x6cbfx1e);
                                _0x6cbfx67 = (_0x6cbfx67 / 1000) / 60;
                                _0x6cbfx67 = (_0x6cbfx67 > 0) ? parseFloat(_0x6cbfx67.toFixed(2)) : 0;
                            }
                            _0x6cbfx70(_0x6cbfx65, _0x6cbfx68, _0x6cbfx60[_0x6cbfx59].expiry);
                            if (0 !== _0x6cbfx62.length) {
                                _0x6cbfx62 = _0x6cbfx62.concat(_0x6cbfx52);
                            }
                            _0x6cbfx62 = _0x6cbfx62.concat(_prefix + _0x6cbfx60[_0x6cbfx59].key);
                            _0x6cbfx62 = _0x6cbfx62.concat(_0x6cbfx9.keyValuePairSeparator);
                            _0x6cbfx62 = _0x6cbfx62.concat(_0x6cbfx67.toString());
                        }
                    }
                }
                return _0x6cbfx62;
            }
            function _0x6cbfx69(_0x6cbfx6a, _0x6cbfx61, _0x6cbfx50) {
                var _0x6cbfx65;
                if (_typeUtils.isInstanceOf(_0x6cbfx50, amaDictionary) && _typeUtils.isInstanceOf(_0x6cbfx61, amaDictionary) && _typeUtils.isString(_0x6cbfx6a)) {
                    _0x6cbfx65 = _0x6cbfx61.getValueForKey(_0x6cbfx6a);
                    if (!_typeUtils.isString(_0x6cbfx65)) {
                        _0x6cbfx65 = _0x6cbfx50.getValueForKey(_0x6cbfx6a);
                    }
                }
                return _0x6cbfx65;
            }
            function _0x6cbfx6b(_0x6cbfx6c, _0x6cbfx6d) {
                try {
                    if (_typeUtils.isValid(_0x6cbfx6c) && _typeUtils.isString(_0x6cbfx6d)) {
                        if (_typeUtils.isValid(_0x6cbfx6c.regExp)) {
                            var _0x6cbfx6e = new RegExp(_0x6cbfx6c.regExp);
                            var _0x6cbfx6f = _0x6cbfx6e.exec(_0x6cbfx6d);
                            if (_typeUtils.isValid(_0x6cbfx6f)) {
                                _0x6cbfx6d = _0x6cbfx6f[_0x6cbfx6f.length - 1];
                            }
                        }
                        if (_typeUtils.isValid(_0x6cbfx6c.size)) {
                            _0x6cbfx6d = _0x6cbfx6d.substring(0, _0x6cbfx6c.size);
                        }
                    }
                } catch (exception) {
                    _logger.error('amaXmlParser applyFieldConstraints exception occurred ' + exception);
                } finally {
                    return _0x6cbfx6d;
                }
            }
            function _0x6cbfx70(_0x6cbfx1b, _0x6cbfx1e, _0x6cbfx71) {
                try {
                    _logger.debug('amaXmlParser setInfoInLocalStorage ');
                    if (_typeUtils.isInteger(_0x6cbfx71) && _typeUtils.isString(_0x6cbfx1b) && _typeUtils.isValid(_0x6cbfx1e)) {
                        var _0x6cbfx72 = {
                            value: _0x6cbfx1e,
                        };
                        var _0x6cbfx73 = new Date();
                        if (parseInt(_0x6cbfx71) > 0) {
                            _0x6cbfx73.setDate(_0x6cbfx73.getDate() + parseInt(_0x6cbfx71));
                        } else {
                            _0x6cbfx73.setDate(_0x6cbfx73.getDate() + 90);
                        }
                        _0x6cbfx72.expiryDate = _0x6cbfx73.toDateString();
                        _0x6cbfx175.setItem(_0x6cbfx174.LOCAL_STORAGE, _0x6cbfx1b, JSON.stringify(_0x6cbfx72));
                    }
                } catch (exception) {
                    _logger.error('amaXmlParser setInfoInLocalStorage exception occurred ' + exception);
                }
            }
            function _0x6cbfx74(_0x6cbfx1b) {
                try {
                    _logger.debug('amaXmlParser getInfoFromLocalStorage ');
                    if (_typeUtils.isString(_0x6cbfx1b)) {
                        var _0x6cbfx1e = _0x6cbfx175.getItem(_0x6cbfx174.LOCAL_STORAGE, _0x6cbfx1b);
                        if (_typeUtils.isString(_0x6cbfx1e)) {
                            var _0x6cbfx72 = JSON.parse(_0x6cbfx1e);
                            var _0x6cbfx65 = _0x6cbfx72.value;
                            return _0x6cbfx65;
                        }
                    }
                } catch (exception) {
                    _logger.error('amaXmlParser getInfoFromLocalStorage exception occurred ' + exception);
                }
            }
            this.clearSendOnceInfo = function clearSendOnceInfo() {
                _0x6cbfx1a.length = 0;
            };
        }
        function _0x6cbfx75() {
            var _0x6cbfx76 = '';
            var _0x6cbfx77 = '';
            var _0x6cbfx78 = '';
            var _0x6cbfx79 = '';
            var _0x6cbfx7a = '';
            this.getOperatingSystemName = function(_0x6cbfx7b) {
                if (_0x6cbfx7b) {
                    try {
                        var _0x6cbfx6e = /\((\w+)/;
                        var _0x6cbfx6f = _0x6cbfx6e.exec(_0x6cbfx7b);
                        if (_typeUtils.isValid(_0x6cbfx6f) && _0x6cbfx6f.length > 1) {
                            _0x6cbfx77 = _0x6cbfx6f[1].toLowerCase();
                            if (_0x6cbfx7b.indexOf('Xbox') !== -1) {
                                _0x6cbfx77 = 'Xbox';
                            } else {
                                if (_0x6cbfx77.indexOf('compatible') !== -1 || _0x6cbfx77.indexOf('windows') !== -1 || _0x6cbfx77.indexOf('mobile') !== -1) {
                                    _0x6cbfx77 = 'Windows';
                                } else {
                                    if (_0x6cbfx77.indexOf('x11') !== -1) {
                                        _0x6cbfx77 = 'Linux';
                                    } else {
                                        if (_0x6cbfx77.indexOf('macintosh') !== -1 || _0x6cbfx77.indexOf('mac os') !== -1 || _0x6cbfx77.indexOf('macos') !== -1) {
                                            _0x6cbfx77 = 'Mac OS';
                                        } else {
                                            if (_0x6cbfx77.indexOf('ipad') !== -1) {
                                                _0x6cbfx77 = 'iPad';
                                            } else {
                                                if (_0x6cbfx77.indexOf('iphone') !== -1) {
                                                    _0x6cbfx77 = 'iPhone';
                                                } else {
                                                    if (_0x6cbfx77.indexOf('ipod') !== -1) {
                                                        _0x6cbfx77 = 'iOS';
                                                    } else {
                                                        if (_0x6cbfx7b.indexOf('Android') !== -1) {
                                                            _0x6cbfx77 = 'Android';
                                                        } else {
                                                            if (_0x6cbfx7b.indexOf('PlayStation 4') !== -1) {
                                                                _0x6cbfx77 = 'PlayStation 4';
                                                            } else {
                                                                if (_0x6cbfx7b.indexOf('PLAYSTATION 3') !== -1) {
                                                                    _0x6cbfx77 = 'PlayStation 3';
                                                                } else {
                                                                    _0x6cbfx77 = 'Others';
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } catch (ex) {
                        _logger.error('Exception,  finding Osname');
                        _0x6cbfx77 = 'Others';
                    }
                }
                return _0x6cbfx77;
            };
            this.getOperatingSystemVersion = function(_0x6cbfx7b) {
                if (_0x6cbfx7b) {
                    try {
                        var regex = /(NT|Phone|OS X|Android|Linux|CPU.*?OS) ([0-9\._]+)/;
                        var match = regex.exec(_0x6cbfx7b);
                        if (_typeUtils.isValid(match) && match.length > 2) {
                            _0x6cbfx79 = match[2] ? match[2] : '';
                            var _0x6cbfx7c = '';
                            if (_0x6cbfx77 === 'Windows' || this.getOperatingSystemName(_0x6cbfx7b) === 'Windows') {
                                _0x6cbfx7c = this.getWindowsVersion(_0x6cbfx79);
                                if (_0x6cbfx7c !== '') {
                                    _0x6cbfx79 = _0x6cbfx7c;
                                }
                            }
                        }
                    } catch (ex) {
                        _logger.error('Exception,  OSVersion' + ex);
                    }
                }
                return _0x6cbfx79;
            };
            this.getWindowsVersion = function(_0x6cbfx7d) {
                var _0x6cbfx7c = '';
                if (_typeUtils.isString(_0x6cbfx7d)) {
                    if (_0x6cbfx7d === '6.3' || _0x6cbfx7d === '6.2') {
                        _0x6cbfx7c = '8';
                    } else {
                        if (_0x6cbfx7d === '6.1') {
                            _0x6cbfx7c = '7';
                        } else {
                            if (_0x6cbfx7d === '6.0') {
                                _0x6cbfx7c = 'Vista';
                            } else {
                                if (_0x6cbfx7d === '5.2' || _0x6cbfx7d === '5.1') {
                                    _0x6cbfx7c = 'XP';
                                } else {
                                    var _0x6cbfx7e = _0x6cbfx7d.split('.');
                                    if (parseInt(_0x6cbfx7e[0]) >= 8) {
                                        _0x6cbfx7c = _0x6cbfx7e[0];
                                    } else {
                                        _0x6cbfx7c = 'Other';
                                    }
                                }
                            }
                        }
                    }
                }
                return _0x6cbfx7c;
            };
            this.getBrowserName = function(userAgent) {
                if (userAgent) {
                    var _browserPattern = /(MSIE|Chrome|Version|Firefox)[ \/]([0-9]+)/;
                    try {
                        var _0x6cbfx6f = _browserPattern.exec(userAgent);
                        if (_typeUtils.isValid(_0x6cbfx6f) && _0x6cbfx6f.length > 1) {
                            _0x6cbfx76 = _0x6cbfx6f[1];
                            if (_0x6cbfx6f[1] === 'Version') {
                                _browserPattern = /(Opera|Safari)/;
                                var _0x6cbfx7f = _browserPattern.exec(userAgent);
                                if (_typeUtils.isValid(_0x6cbfx7f) && _0x6cbfx7f.length > 1) {
                                    _0x6cbfx76 = _0x6cbfx7f[1];
                                }
                            }
                        }
                    } catch (ex) {
                        _logger.error('Exception,  browserName' + ex);
                    }
                    try {
                        var _0x6cbfx80 = userAgent.indexOf('Edge');
                        if (_0x6cbfx80 !== -1) {
                            var userAgentLength = userAgent.length;
                            var _0x6cbfx81 = userAgent.substr(_0x6cbfx80, userAgentLength - _0x6cbfx80);
                            var _0x6cbfx82 = _0x6cbfx81.split('/');
                            _0x6cbfx76 = _0x6cbfx82[0];
                            _0x6cbfx78 = _0x6cbfx82[1];
                        } else {
                            if (_typeUtils.isValid(_0x6cbfx6f) && _0x6cbfx6f.length > 2) {
                                _0x6cbfx78 = _0x6cbfx6f[2];
                            }
                        }
                        if (_0x6cbfx76 === '') {
                            _browserPattern = /Trident\/7.0/;
                            var _0x6cbfx83 = _browserPattern.exec(userAgent);
                            if (_typeUtils.isValid(_0x6cbfx83) && _0x6cbfx83.length > 0) {
                                var _0x6cbfx84 = _0x6cbfx83[0].split('/');
                                if (_0x6cbfx84[1] === '7.0') {
                                    _0x6cbfx76 = 'MSIE';
                                    _0x6cbfx78 = '11.0';
                                }
                            }
                        }
                        if (_0x6cbfx76 && _0x6cbfx78) {
                            _0x6cbfx76 = _0x6cbfx76 + ' ' + _0x6cbfx78;
                        }
                    } catch (ex) {
                        _logger.error('Exception,  browserVersion' + ex);
                    }
                }
                return _0x6cbfx76;
            };
            this.getDeviceName = function(userAgent) {
                if (userAgent) {
                    try {
                        var _ua = userAgent;
                        _ua = _ua.toLowerCase();
                        if (_ua.indexOf('ipad') !== -1) {
                            _0x6cbfx7a = 'iPad';
                        } else {
                            if (_ua.indexOf('ipod') !== -1) {
                                _0x6cbfx7a = 'iPod';
                            } else {
                                if (_ua.indexOf('iphone') !== -1) {
                                    _0x6cbfx7a = 'iPhone';
                                } else {
                                    if (_ua.indexOf('android') !== -1) {
                                        _0x6cbfx7a = 'Android Device';
                                    } else {
                                        if (_ua.indexOf('xbox') !== -1) {
                                            _0x6cbfx7a = 'Xbox';
                                        } else {
                                            if (_ua.indexOf('macintosh') !== -1 || _ua.indexOf('windows') !== -1 || _ua.indexOf('compatible') !== -1) {
                                                _0x6cbfx7a = 'Desktop';
                                            } else {
                                                if (_ua.indexOf('playstation 4') !== -1) {
                                                    _0x6cbfx7a = 'PlayStation 4';
                                                } else {
                                                    if (_ua.indexOf('playstation 3') !== -1) {
                                                        _0x6cbfx7a = 'PlayStation 3';
                                                    } else {
                                                        _0x6cbfx7a = 'Others';
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } catch (e) {
                        _logger.error('Exception,  getting device name : ' + e);
                        _0x6cbfx7a = 'Others';
                    }
                }
                return _0x6cbfx7a;
            };
        }
        function DebugLogger() {
            var _enableDebugLogging = debug;
            this.log = function(message, _type) {
                if (_enableDebugLogging === true && _typeUtils.isValid(message) && message !== '') {
                    var _0x6cbfx89 = [];
                    var _0x6cbfx7;
                    var _0x6cbfx8a = _typeUtils.isString(_type) ? _type : 'Debug';
                    _0x6cbfx89[0] = {
                        message: message,
                        type: _0x6cbfx8a,
                        time: getTimestamp(),
                    };
                    var _0x6cbfx8b = {
                        logMessage: _0x6cbfx89,
                        type: 'log',
                    };
                    _diagnoser.processLogs({
                        api: 'reportLogs',
                        value: _0x6cbfx8b,
                    });
                    console.log(message);
                }
            };
            this.debug = function(_0x6cbfx1e, _0x6cbfx88) {
                if (_enableDebugLogging === true && _typeUtils.isValid(_0x6cbfx1e) && _0x6cbfx1e !== '') {
                    var _0x6cbfx8c = new Date();
                    var _0x6cbfx8d = _0x6cbfx8c.getDate() + '-' + (_0x6cbfx8c.getMonth() + 1) + '-' + _0x6cbfx8c.getFullYear() + ',' + _0x6cbfx8c.getHours() + ':' + _0x6cbfx8c.getMinutes() + ':' + _0x6cbfx8c.getSeconds() + ':' + _0x6cbfx8c.getMilliseconds() + ' ';
                    var _0x6cbfx8a = _typeUtils.isString(_0x6cbfx88) ? _0x6cbfx88 : 'Debug';
                    var _0x6cbfx89 = [];
                    _0x6cbfx89[0] = {
                        message: _0x6cbfx1e,
                        type: _0x6cbfx8a,
                        time: getTimestamp(),
                    };
                    var _0x6cbfx8b = {
                        logMessage: _0x6cbfx89,
                        type: 'log',
                    };
                    _diagnoser.processLogs({
                        api: 'reportLogs',
                        value: _0x6cbfx8b,
                    });
                    console.debug(_0x6cbfx8d + _0x6cbfx1e);
                }
            };
            this.warn = function(_0x6cbfx1e) {
                if (_enableDebugLogging === true && _typeUtils.isValid(_0x6cbfx1e) && _0x6cbfx1e !== '') {
                    var _0x6cbfx89 = [];
                    _0x6cbfx89[0] = {
                        message: _0x6cbfx1e,
                        type: 'ERROR',
                        time: getTimestamp(),
                    };
                    var _0x6cbfx8b = {
                        logMessage: _0x6cbfx89,
                        type: 'log',
                    };
                    _diagnoser.processLogs({
                        api: 'reportLogs',
                        value: _0x6cbfx8b,
                    });
                    console.warn(_0x6cbfx1e);
                }
            };
            this.error = function(_0x6cbfx1e) {
                if (_enableDebugLogging === true && _typeUtils.isValid(_0x6cbfx1e) && _0x6cbfx1e !== '') {
                    var _0x6cbfx89 = [];
                    _0x6cbfx89[0] = {
                        message: _0x6cbfx1e,
                        type: 'ERROR',
                        time: getTimestamp(),
                    };
                    var _0x6cbfx8b = {
                        logMessage: _0x6cbfx89,
                        type: 'log',
                    };
                    _diagnoser.processLogs({
                        api: 'reportLogs',
                        value: _0x6cbfx8b,
                    });
                    console.error(_0x6cbfx1e);
                }
            };
            this.dir = function(_0x6cbfx1e) {
                if (_enableDebugLogging === true && _typeUtils.isValid(_0x6cbfx1e) && _0x6cbfx1e !== '') {
                    var _0x6cbfx89 = [];
                    _0x6cbfx89[0] = {
                        message: _0x6cbfx1e,
                        type: 'log',
                        time: getTimestamp(),
                    };
                    var _0x6cbfx8b = {
                        logMessage: _0x6cbfx89,
                        type: 'log',
                    };
                    _diagnoser.processLogs({
                        api: 'reportLogs',
                        value: _0x6cbfx8b,
                    });
                    console.dir(_0x6cbfx1e);
                }
            };
            function getTimestamp() {
                var date = new Date();
                return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() + ',' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ':' + date.getMilliseconds() + ' ';
            }
            this.enableDebugLogging = function(enableDebug) {
                _enableDebugLogging = debug;
            };
        }
        function amaTimeSpan() {
            var _0x6cbfx90 = new Date();
            var _0x6cbfx91 = _0x6cbfx90.getTime();
            this.timeInMillisecond = function(_0x6cbfx92) {
                var _0x6cbfx90 = new Date();
                var _0x6cbfx93 = _0x6cbfx90.getTime() - _0x6cbfx91;
                if (_0x6cbfx92) {
                    this.resetTimeSpan();
                }
                return _0x6cbfx93;
            };
            this.timeInSecond = function(_0x6cbfx92) {
                var _0x6cbfx90 = new Date();
                var _0x6cbfx93 = _0x6cbfx90.getTime() - _0x6cbfx91;
                if (_0x6cbfx92) {
                    this.resetTimeSpan();
                }
                return _0x6cbfx93 / 1000;
            };
            this.timeInMicrosecond = function(_0x6cbfx92) {
                var _0x6cbfx90 = new Date();
                var _0x6cbfx93 = _0x6cbfx90.getTime() - _0x6cbfx91;
                if (_0x6cbfx92) {
                    this.resetTimeSpan();
                }
                return _0x6cbfx93 * 1000;
            };
            this.resetTimeSpan = function() {
                _0x6cbfx91 = new Date().getTime();
            };
            return this;
        }
        function _0x6cbfx94(_0x6cbfx7b) {
            var _0x6cbfx95;
            var _0x6cbfx96;
            var _0x6cbfx76;
            var _0x6cbfx7a;
            var _0x6cbfx97 = '';
            if (_typeUtils.isString(_0x6cbfx7b) && _0x6cbfx7b.length > 0) {
                _0x6cbfx97 = _0x6cbfx7b;
            } else {
                _0x6cbfx97 = window.navigator.userAgent;
            }
            var _0x6cbfx98 = new _0x6cbfx75();
            this.build = function() {
                _0x6cbfx99();
                _0x6cbfx9a();
                _0x6cbfx9b();
                _0x6cbfx9c();
            };
            function _0x6cbfx99() {
                _logger.debug('getOperatingSystemName(): start');
                if (_typeUtils.isObject(_0x6cbfx98)) {
                    _0x6cbfx95 = _0x6cbfx98.getOperatingSystemName(_0x6cbfx97);
                } else {
                    _logger.error('getOperatingSystemName():  _userAgentParser is not defined ');
                }
                _logger.debug('getOperatingSystemName(): end');
            }
            function _0x6cbfx9a() {
                _logger.debug('getOperatingSystemVersion(): start');
                if (_typeUtils.isObject(_0x6cbfx98)) {
                    _0x6cbfx96 = _0x6cbfx98.getOperatingSystemVersion(_0x6cbfx97);
                } else {
                    _logger.error('getOperatingSystemVersion():  _userAgentParser is not defined ');
                }
                _logger.debug('getOperatingSystemVersion(): end');
            }
            function _0x6cbfx9b() {
                _logger.debug('getBrowserInformation(): start');
                if (_typeUtils.isObject(_0x6cbfx98)) {
                    _0x6cbfx76 = _0x6cbfx98.getBrowserName(_0x6cbfx97);
                } else {
                    _logger.error('getBrowserInformation():  _userAgentParser is not defined ');
                }
                _logger.debug('getBrowserInformation(): end');
            }
            function _0x6cbfx9c() {
                _logger.debug('getDeviceName(): start');
                if (_typeUtils.isObject(_0x6cbfx98)) {
                    _0x6cbfx7a = _0x6cbfx98.getDeviceName(_0x6cbfx97);
                } else {
                    _logger.error('getDeviceName():  _userAgentParser is not defined ');
                }
                _logger.debug('getDeviceName(): end');
            }
            this.accept = function(_0x6cbfx9d) {
                _0x6cbfx9d.visit(this);
            };
            this.iterator = function() {
                return {
                    os: _0x6cbfx95,
                    fullOs: _0x6cbfx95 + '-' + _0x6cbfx96,
                    browser: _0x6cbfx76,
                    device: _0x6cbfx7a,
                    userAgent: _0x6cbfx97,
                };
            };
            this.browserInfo = function() {
                return _0x6cbfx76;
            };
        }
        function _0x6cbfx9e() {
            var _0x6cbfx9f = '';
            this.getViewerId = function() {
                _logger.debug('getViewerId(): start');
                if (_typeUtils.isString(_0x6cbfx9f) && _0x6cbfx9f.length > 0) {} else {
                    try {
                        _0x6cbfx9f = _0x6cbfx175.getItem(_0x6cbfx174.LOCAL_STORAGE, 'akamai_clientId');
                        if (!_typeUtils.isValid(_0x6cbfx9f) || _0x6cbfx9f === '') {
                            var _0x6cbfxa0 = new _0x6cbfx16c();
                            _0x6cbfx9f = _0x6cbfxa0.UUID();
                            _0x6cbfx175.setItem(_0x6cbfx174.LOCAL_STORAGE, 'akamai_clientId', _0x6cbfx9f);
                        }
                    } catch (e) {
                        _logger.debug('Exception,  getting viewerId' + e);
                    }
                }
                _logger.debug('getViewerId(): end');
                return _0x6cbfx9f;
            };
            this.setViewerId = function(_0x6cbfxa1) {
                try {
                    _0x6cbfx175.setItem(_0x6cbfx174.LOCAL_STORAGE, 'akamai_clientId', _0x6cbfxa1);
                    _0x6cbfx9f = _0x6cbfxa1;
                } catch (ex) {
                    _logger.debug('window.localStorage Exception :' + ex);
                }
            };
            this.accept = function(_0x6cbfx9d) {
                _0x6cbfx9d.visit(this);
            };
            this.iterator = function() {
                return {
                    viewerId: this.getViewerId(),
                    clientId: _0x6cbfx9f,
                };
            };
        }
        function _0x6cbfxa2() {
            var _0x6cbfxa3;
            var _0x6cbfxa4;
            var _0x6cbfxa5;
            var _0x6cbfxa6 = '-';
            this.generatePageInformation = function(_0x6cbfx50) {
                _logger.debug('generatePageInformation() called');
                try {
                    var _0x6cbfxa7;
                    var _0x6cbfxa8;
                    var _0x6cbfxa9;
                    var _0x6cbfxaa;
                    if (_typeUtils.isValid(_0x6cbfx50)) {
                        _0x6cbfxa7 = _0x6cbfx50.getValueForKey('pageUrl');
                        _0x6cbfxa8 = _0x6cbfx50.getValueForKey('pageReferrer');
                    }
                    if (_typeUtils.isString(_0x6cbfxa7) && _0x6cbfxa7.length > 0) {
                        _0x6cbfxa9 = this.getHostNameFromUrl(_0x6cbfxa7);
                    }
                    if (_typeUtils.isString(_0x6cbfxa8) && _0x6cbfxa8.length > 0) {
                        _0x6cbfxaa = this.getHostNameFromUrl(_0x6cbfxa8);
                    }
                    if (document && document.referrer) {
                        var _0x6cbfxab = document.referrer;
                        _0x6cbfxab = _0x6cbfxab.split('/', 3);
                        if (_0x6cbfxab && _0x6cbfxab[2]) {
                            _0x6cbfxa6 = _0x6cbfxab[2];
                        }
                    }
                    if (window === window.top) {
                        _0x6cbfxa3 = _0x6cbfxa7 ? _0x6cbfxa7 : document.URL;
                        _0x6cbfxa4 = (_0x6cbfxa7 && _0x6cbfxa9) ? _0x6cbfxa9 : document.location.hostname;
                        _0x6cbfxa5 = _0x6cbfxa8 ? _0x6cbfxa8 : (document.referrer ? document.referrer : '-');
                        _0x6cbfxa6 = (_0x6cbfxa8 && _0x6cbfxaa) ? _0x6cbfxaa : (document.referrer ? _0x6cbfxa6 : '-');
                    } else {
                        _0x6cbfxa3 = _0x6cbfxa7 ? _0x6cbfxa7 : (document.referrer ? document.referrer : '-');
                        _0x6cbfxa4 = (_0x6cbfxa7 && _0x6cbfxa9) ? _0x6cbfxa9 : (document.referrer ? _0x6cbfxa6 : '-');
                        _0x6cbfxa5 = _0x6cbfxa8 ? _0x6cbfxa8 : 'NA';
                        _0x6cbfxa6 = (_0x6cbfxa8 && _0x6cbfxaa) ? _0x6cbfxaa : 'NA';
                    }
                } catch (e) {
                    _logger.debug('Exception,  generatePageInformation() :' + e);
                }
            };
            this.getHostNameFromUrl = function(_0x6cbfx1c) {
                try {
                    var _0x6cbfxac = /^(\w+?:)?\/\/([^\/:]+):?([^\/]+)?(\/[^#?]*)#?([^?]+)?\??(.+)?/;
                    var _0x6cbfx6f = _0x6cbfxac.exec(_0x6cbfx1c);
                    var _0x6cbfxa4 = _0x6cbfx6f[2];
                    return _0x6cbfxa4;
                } catch (e) {
                    _logger.debug('Exception,  getHostNameFromUrl :' + e);
                }
            };
            this.accept = function(_0x6cbfx9d) {
                _0x6cbfx9d.visit(this);
            };
            this.iterator = function() {
                return {
                    pageUrl: _0x6cbfxa3,
                    pageHost: _0x6cbfxa4,
                    pageReferrer: _0x6cbfxa5,
                    pageReferrerHost: _0x6cbfxa6,
                };
            };
        }
        function amaParseStreamURL() {
            var _protocol = null;
            var _hostname = null;
            var _port = '0';
            var _path = null;
            var _streamName = null;
            var _0x6cbfx2b = null;
            var _hash = null;
            var _0x6cbfxb2 = null;
            var _hostAndPort = null;
            this.parseStreamURL = function(_0x6cbfxb4, _0x6cbfxb5) {
                if (!_typeUtils.isString(_0x6cbfxb4) || _0x6cbfxb4 === '') {
                    return;
                }
                var _0x6cbfxac = /(\w+):\/\/([^\/:]+):?([^\/]+)?(\/[^#?]*)#?([^?]+)?\??(.+)?/;
                try {
                    var matches = _0x6cbfxac.exec(_0x6cbfxb4);
                    _logger.debug(' components = ' + matches[1] + matches[2] + matches[3] + matches[4] + matches[5] + matches[6]);
                    _protocol = matches[1];
                    _hostname = matches[2];
                    _port = matches[3] ? matches[3] : '80';
                    _path = matches[4];
                    var _pathSegments = _path.split('/');
                    var _pathSegmentsLength = _pathSegments.length;
                    _streamName = _pathSegments[_pathSegmentsLength - 1];
                    _logger.debug('stream name is = ' + _streamName + ' path length= ' + _pathSegmentsLength);
                    var _streamNameLower = _streamName.toLowerCase();
                    if ((_streamNameLower.indexOf('.m3u') != -1) || (_streamNameLower.indexOf('manifest') != -1) || (_streamNameLower.indexOf('.f4m') != -1) || (_streamNameLower.indexOf('.mpd') != -1)) {
                        if (_pathSegmentsLength >= 3) {
                            _streamName = _pathSegments[_pathSegmentsLength - 2] + '/' + _pathSegments[_pathSegmentsLength - 1];
                            _logger.debug('stream name is = ' + _streamName);
                        }
                    }
                    _hash = matches[5] ? matches[5] : '';
                    _0x6cbfxb2 = matches[6] ? matches[6] : '';
                    _hostAndPort = _hostname + ':' + _port;
                    if (_0x6cbfxb5) {
                        _0x6cbfxb5.protocol = _protocol;
                        _0x6cbfxb5.hostName = _hostname;
                        _0x6cbfxb5.port = _port;
                        _0x6cbfxb5.path = _path;
                        _0x6cbfxb5.streamName = _streamName;
                        _0x6cbfxb5.hash = _hash;
                        _0x6cbfxb5.hostAndPort = _hostAndPort;
                    }
                } catch (e) {
                    _logger.debug('Exception,  parseStreamUrl :' + e);
                }
            };
            this.protocol = function() {
                return _protocol;
            };
            this.hostName = function() {
                return _hostname;
            };
            this.port = function() {
                return _port;
            };
            this.path = function() {
                return _path;
            };
            this.streamName = function() {
                return _streamName;
            };
            this.hash = function() {
                return _hash;
            };
            this.hostAndPort = function() {
                return _hostAndPort;
            };
        }
        function amaPlayingState() {
            var _0x6cbfxb8 = 'playing';
            var _0x6cbfxb9 = false;
            var _0x6cbfxba = 0;
            var _0x6cbfxbb = 0;
            var _0x6cbfxbc = false;
            var _0x6cbfxbd = 0.0;
            var _0x6cbfxbe = 0.0;
            var _0x6cbfxbf = 0;
            var _0x6cbfxc0 = new amaDictionary();
            var _0x6cbfxc1;
            var _0x6cbfxc2 = 0;
            var _0x6cbfxc3 = 0;
            var _0x6cbfxc4;
            var _0x6cbfxc5;
            var _0x6cbfxc6 = 0.0;
            var _0x6cbfxc7 = 0;
            var _0x6cbfxc8 = 0;
            var _averageBitrate = '';
            var _0x6cbfxca = '';
            var _0x6cbfxcb = '';
            var _0x6cbfxcc = 0;
            var _0x6cbfxcd = 0;
            var _0x6cbfxce = 0;
            var _0x6cbfxcf = 0;
            var _0x6cbfxd0 = '';
            var _0x6cbfxd1;
            this.getState = function getState() {
                return _0x6cbfxb8;
            };
            this.beginState = function beginState(_0x6cbfxd2) {
                _logger.debug('amaPlayingState beginState start');
                _0x6cbfxc4 = new amaTimeSpan();
                _0x6cbfxc5 = new amaTimeSpan();
                if (_typeUtils.isObject(_0x6cbfxd2)) {
                    _0x6cbfxc6 = _0x6cbfxd2.streamHeadPosition * 1000;
                }
                _0x6cbfxb9 = true;
                _logger.debug('amaPlayingState beginState end');
            };
            this.updateState = function updateState(_0x6cbfxd2) {
                _logger.debug('amaPlayingState updateState start');
                try {
                    if (_0x6cbfxb9 === false) {
                        return;
                    }
                    if (_typeUtils.isObject(_0x6cbfxd2)) {
                        if (_typeUtils.isValid(_0x6cbfxd2.bitrate)) {
                            if (_typeUtils.isValid(_0x6cbfxd2.streamHeadPosition)) {
                                if (_0x6cbfxbd === 0.0) {
                                    _0x6cbfxc1 = _0x6cbfxd2.streamHeadPosition * 1000;
                                    _0x6cbfxbd = _0x6cbfxd2.bitrate;
                                } else {
                                    this.updateCurrentBitrate(_0x6cbfxd2.streamHeadPosition * 1000, _0x6cbfxd2.bitrate);
                                }
                                _logger.debug('state updated - updating bitrate ' + _0x6cbfxd2.streamHeadPosition * 1000, _0x6cbfxd2.bitrate);
                            }
                        } else {
                            _logger.debug('update state current stream head position = ' + _0x6cbfxc6 + ' passed stream head position = ' + _0x6cbfxd2.streamHeadPosition * 1000);
                            var _0x6cbfxd3 = _0x6cbfxd2.streamHeadPosition * 1000;
                            if (_0x6cbfxd3 > _0x6cbfxc6) {
                                _0x6cbfxbb = (_0x6cbfxd3 - _0x6cbfxc6);
                                _0x6cbfxc2 += (_0x6cbfxd3 - _0x6cbfxc6);
                                _0x6cbfxc6 = _0x6cbfxd3;
                                _logger.debug('state updated ' + _0x6cbfxbb + ' ' + _0x6cbfxc2 + ' ' + _0x6cbfxc6);
                            }
                        }
                    }
                } catch (exception) {
                    _logger.error('amaPlayingState updateState exception occurred ' + exception);
                } finally {
                    _logger.debug('amaPlayingState updateState end');
                }
            };
            this.updateIteratorData = function updateIteratorData(_0x6cbfxd2) {
                _logger.debug('amaPlayingState getStateData start');
                try {
                    _0x6cbfxca = '';
                    _0x6cbfxcb = '';
                    if (_0x6cbfxb9 === false) {
                        return;
                    }
                    if (_typeUtils.isValid(_0x6cbfxc5)) {
                        _logger.debug('GetStateData - bitrateplaytime before update = ' + _0x6cbfxbf);
                        _0x6cbfxbf += _0x6cbfxc5.timeInMillisecond();
                        _logger.debug('GetStateData - bitrateplaytime after update = ' + _0x6cbfxbf);
                    }
                    if (_typeUtils.isValid(_0x6cbfxc4)) {
                        var _0x6cbfxd4 = _0x6cbfxc4.timeInMillisecond();
                        _0x6cbfxba += _0x6cbfxd4;
                        _0x6cbfxc3 += _0x6cbfxd4;
                    }
                    _logger.debug('amaPlayingState getStateData and playclocktime = ' + _0x6cbfxba);
                    _logger.debug('amaPlayingState getStateData - stateData is a valid object  ');
                    var _0x6cbfxd5 = 0.0;
                    var _0x6cbfxd6 = 0.0;
                    var _0x6cbfxd7;
                    var _0x6cbfxd8 = 0;
                    var _0x6cbfxd9 = 0;
                    var _0x6cbfxda = 0;
                    var _0x6cbfxdb = 0;
                    var _0x6cbfx1b;
                    for (_0x6cbfx1b in _0x6cbfxc0.getDictionary()) {
                        var _0x6cbfxdc = _0x6cbfxc0.getValueForKey(_0x6cbfx1b);
                        var _0x6cbfxdd = 0.0;
                        if (_0x6cbfxdc === 0) {
                            continue;
                        }
                        var _0x6cbfxde, _0x6cbfxdf;
                        for (_0x6cbfxdf in _0x6cbfxdc) {
                            _0x6cbfxde = _0x6cbfxdc[_0x6cbfxdf];
                            var _0x6cbfxe0 = _0x6cbfxde.streamHeadPos;
                            _0x6cbfxca += _0x6cbfx1b.concat(':', _0x6cbfxe0.toString(), ':');
                            var _0x6cbfxe1 = _0x6cbfxde.playTimeSpent;
                            if (!_typeUtils.isValid(_0x6cbfxe1)) {
                                _logger.debug('GTST: playtime is not valid');
                            } else {
                                _logger.debug('GTST: playtime is valid' + _0x6cbfxe1);
                            }
                            _0x6cbfxca += _0x6cbfxe1.toString();
                            _0x6cbfxca += (':').concat(':', ',');
                            if (_0x6cbfx1b === _0x6cbfxbd.toString()) {
                                _0x6cbfxdd += (_0x6cbfxbf + _0x6cbfxde.playTimeSpent);
                            } else {
                                _0x6cbfxdd += _0x6cbfxde.playTimeSpent;
                            }
                            _0x6cbfxd7 = parseInt(_0x6cbfx1b);
                            if (_0x6cbfxd7 > 0 && _0x6cbfxd7 < 1500000) {
                                _0x6cbfxd9 += _0x6cbfxde.playTimeSpent;
                            } else {
                                if (_0x6cbfxd7 >= 1500000 && _0x6cbfxd7 < 2500000) {
                                    _0x6cbfxda += _0x6cbfxde.playTimeSpent;
                                } else {
                                    if (_0x6cbfxd7 >= 2500000) {
                                        _0x6cbfxdb += _0x6cbfxde.playTimeSpent;
                                    } else {
                                        _0x6cbfxd8 += _0x6cbfxde.playTimeSpent;
                                    }
                                }
                            }
                        }
                        _0x6cbfxd5 += (parseInt(_0x6cbfx1b) * _0x6cbfxdd);
                        _0x6cbfxd6 += _0x6cbfxdd;
                        _0x6cbfxd0 = 'U:' + _0x6cbfxd8.toString() + ',S:' + _0x6cbfxd9.toString() + ',Q:' + _0x6cbfxda.toString() + ',D:' + _0x6cbfxdb.toString();
                        if (!_typeUtils.isValid(_0x6cbfxdd)) {
                            _logger.debug('GTST: totalPlayTimeSpent is not valid');
                        } else {
                            _logger.debug('GTST: totalPlayTimeSpent is valid' + _0x6cbfxdd);
                        }
                        _0x6cbfxcb += _0x6cbfx1b.concat(':', _0x6cbfxdd.toString(), ',');
                    }
                    if (!_0x6cbfxc0.isExist(_0x6cbfxbd)) {
                        // @ts-ignore
                        _0x6cbfxd5 += (parseInt(_0x6cbfxbd) * _0x6cbfxbf);
                        _0x6cbfxd6 += _0x6cbfxbf;
                        if (!_typeUtils.isValid(_0x6cbfxbf)) {
                            _logger.debug('GTST: bitratePlayTime is not valid');
                        } else {
                            _logger.debug('GTST: bitratePlayTime is valid' + _0x6cbfxbf);
                        }
                        _0x6cbfxcb += _0x6cbfxbd.toString() + ':' + _0x6cbfxbf.toString() + ',';
                    }
                    if (!_typeUtils.isValid(_0x6cbfxc1)) {
                        _logger.debug('GTST: bitrateSwitchHeadPosition is not valid');
                    } else {
                        _logger.debug('GTST: bitrateSwitchHeadPosition is valid' + _0x6cbfxc1);
                    }
                    if (_typeUtils.isValid(_0x6cbfxbd) && _0x6cbfxbd !== 0.0) {
                        _0x6cbfxca += _0x6cbfxbd.toString() + ':' + _0x6cbfxc1.toString() + ':' + _0x6cbfxbf.toString() + ':' + ':' + ',';
                    }
                    if (_0x6cbfxd6 !== 0) {
                        if (!_typeUtils.isValid(_0x6cbfxd5)) {
                            _logger.debug('GTST: averagedBitrateNumerator is not valid');
                        } else {
                            _logger.debug('GTST: averagedBitrateNumerator is valid' + _0x6cbfxd5);
                        }
                        if (!_typeUtils.isValid(_0x6cbfxd6)) {
                            _logger.debug('GTST: averagedBitrateDenominator is not valid');
                        } else {
                            _logger.debug('GTST: averagedBitrateDenominator is valid' + _0x6cbfxd6);
                        }
                        _averageBitrate = _0x6cbfxd5.toString().concat(':', _0x6cbfxd6.toString());
                    }
                    if (_typeUtils.isValid(_0x6cbfxc4)) {
                        _0x6cbfxc4.resetTimeSpan();
                    }
                    if (_typeUtils.isValid(_0x6cbfxc5)) {
                        _0x6cbfxc5.resetTimeSpan();
                    }
                    if (!_0x6cbfxbc && _0x6cbfxc3 >= 5000) {
                        _0x6cbfxbc = true;
                        _0x6cbfxd1 = '1';
                    } else {
                        if ('1' === _0x6cbfxd1) {
                            _0x6cbfxd1 = '0';
                        }
                    }
                    _0x6cbfxcc = _0x6cbfxbb;
                    _0x6cbfxcd = _0x6cbfxba;
                    _0x6cbfxcf = _0x6cbfxc7;
                    _0x6cbfxce = _0x6cbfxc8;
                    _0x6cbfxc8 = 0;
                    _0x6cbfxc7 = 0;
                    _0x6cbfxba = 0;
                    _0x6cbfxbb = 0;
                    _0x6cbfxbf = 0;
                    _0x6cbfxc0.removeAll();
                } catch (exception) {
                    _logger.error('amaPlayingState getStateData exception occurred ' + exception);
                } finally {
                    _logger.debug('amaPlayingState getStateData end');
                }
            };
            this.iterator = function iterator() {
                return {
                    playStreamTime: _0x6cbfxcc.toString(),
                    totalPlayStreamTime: _0x6cbfxc2.toString(),
                    playClockTime: _0x6cbfxcd.toString(),
                    totalPlayClockTime: _0x6cbfxc3.toString(),
                    transitionCount: (_0x6cbfxcf + _0x6cbfxce).toString(),
                    transitionUpSwitchCount: _0x6cbfxcf.toString(),
                    transitionDownSwitchCount: _0x6cbfxce.toString(),
                    currentStreamTime: _0x6cbfxc6.toString(),
                    averagedBitRate: _averageBitrate,
                    transitionStreamTimeSession: _0x6cbfxca.substr(0, _0x6cbfxca.length - 1),
                    transitionStreamTimes: _0x6cbfxcb.substr(0, _0x6cbfxcb.length - 1),
                    bitRateBucketTimes: _0x6cbfxd0,
                    isView: _0x6cbfxd1,
                };
            };
            function getTransitionSession(_0x6cbfxd2) {
                _logger.debug('amaPlayingState getTransitionSession start');
                try {
                    var _0x6cbfxd5 = 0.0;
                    var _0x6cbfxd6 = 0.0;
                    var _0x6cbfx1b;
                    for (_0x6cbfx1b in _0x6cbfxc0.getDictionary()) {
                        var _0x6cbfxdc = _0x6cbfxc0.getValueForKey(_0x6cbfx1b);
                        var _0x6cbfxdd = 0.0;
                        if (_0x6cbfxdc === 0) {
                            continue;
                        }
                        var _0x6cbfxde, _0x6cbfxdf;
                        for (_0x6cbfxdf in _0x6cbfxdc) {
                            _0x6cbfxde = _0x6cbfxdc[_0x6cbfxdf];
                            var _0x6cbfxe0 = _0x6cbfxde.streamHeadPos;
                            _0x6cbfxca += _0x6cbfx1b.concat(':', _0x6cbfxe0.toString(), ':');
                            var _0x6cbfxe1 = _0x6cbfxde.playTimeSpent;
                            if (!_typeUtils.isValid(_0x6cbfxe1)) {
                                _logger.debug('GTST: playtime is not valid');
                            } else {
                                _logger.debug('GTST: playtime is valid' + _0x6cbfxe1);
                            }
                            _0x6cbfxca += _0x6cbfxe1.toString();
                            _0x6cbfxca += (':').concat(':', ',');
                            if (_0x6cbfx1b === _0x6cbfxbd.toString()) {
                                _0x6cbfxdd += (_0x6cbfxbf + _0x6cbfxde.playTimeSpent);
                            } else {
                                _0x6cbfxdd += _0x6cbfxde.playTimeSpent;
                            }
                        }
                        _0x6cbfxd5 += (parseInt(_0x6cbfx1b) * _0x6cbfxdd);
                        _0x6cbfxd6 += _0x6cbfxdd;
                        if (!_typeUtils.isValid(_0x6cbfxdd)) {
                            _logger.debug('GTST: totalPlayTimeSpent is not valid');
                        } else {
                            _logger.debug('GTST: totalPlayTimeSpent is valid' + _0x6cbfxdd);
                        }
                        _0x6cbfxcb += _0x6cbfx1b.concat(':', _0x6cbfxdd.toString(), ',');
                    }
                    if (!_0x6cbfxc0.isExist(_0x6cbfxbd)) {
                        _0x6cbfxd5 += (parseInt(_0x6cbfxbd) * _0x6cbfxbf);
                        _0x6cbfxd6 += _0x6cbfxbf;
                        if (!_typeUtils.isValid(_0x6cbfxbf)) {
                            _logger.debug('GTST: bitratePlayTime is not valid');
                        } else {
                            _logger.debug('GTST: bitratePlayTime is valid' + _0x6cbfxbf);
                        }
                        _0x6cbfxcb += _0x6cbfxbd.toString() + ':' + _0x6cbfxbf.toString() + ',';
                    }
                    if (!_typeUtils.isValid(_0x6cbfxc1)) {
                        _logger.debug('GTST: bitrateSwitchHeadPosition is not valid');
                    } else {
                        _logger.debug('GTST: bitrateSwitchHeadPosition is valid' + _0x6cbfxc1);
                    }
                    if (_typeUtils.isValid(_0x6cbfxbd) && _0x6cbfxbd !== 0.0) {
                        _0x6cbfxca += _0x6cbfxbd.toString() + ':' + _0x6cbfxc1.toString() + ':' + _0x6cbfxbf.toString() + ':' + ':' + ',';
                    }
                    if (_0x6cbfxd6 !== 0) {
                        if (!_typeUtils.isValid(_0x6cbfxd5)) {
                            _logger.debug('GTST: averagedBitrateNumerator is not valid');
                        } else {
                            _logger.debug('GTST: averagedBitrateNumerator is valid' + _0x6cbfxd5);
                        }
                        if (!_typeUtils.isValid(_0x6cbfxd6)) {
                            _logger.debug('GTST: averagedBitrateDenominator is not valid');
                        } else {
                            _logger.debug('GTST: averagedBitrateDenominator is valid' + _0x6cbfxd6);
                        }
                        _averageBitrate = _0x6cbfxd5.toString().concat(':', _0x6cbfxd6.toString());
                        _0x6cbfxd2.addUpdate('averagedBitRate', _averageBitrate);
                    }
                    if (_0x6cbfxca && _0x6cbfxca.length > 0) {
                        _0x6cbfxd2.addUpdate('transitionStreamTimeSession', _0x6cbfxca.substr(0, _0x6cbfxca.length - 1));
                    }
                    if (_0x6cbfxcb && _0x6cbfxcb.length > 0) {
                        _0x6cbfxd2.addUpdate('transitionStreamTimes', _0x6cbfxcb.substr(0, _0x6cbfxcb.length - 1));
                    }
                } catch (exception) {
                    _logger.error('amaPlayingState getTransitionSession exception occurred ' + exception);
                } finally {
                    _logger.debug('amaPlayingState getTransitionSession end');
                }
            }
            this.updateCurrentBitrate = function updateCurrentBitrate(_0x6cbfxe0, _0x6cbfxde) {
                _logger.debug('amaPlayingState updateCurrentBitrate start');
                try {
                    if (_0x6cbfxb9 === false) {
                        return;
                    }
                    if (_0x6cbfxc5 !== null && _0x6cbfxbd !== _0x6cbfxde && _0x6cbfxde > 0) {
                        _logger.debug('updateCurrentBitrate - bitrateplaytime before update = ' + _0x6cbfxbf);
                        _0x6cbfxbf += _0x6cbfxc5.timeInMillisecond();
                        _logger.debug('updateCurrentBitrate - bitrateplaytime after update = ' + _0x6cbfxbf);
                        var _0x6cbfxe3 = {};
                        var _0x6cbfxe4;
                        _0x6cbfxe3.streamHeadPos = _0x6cbfxc1;
                        _0x6cbfxe3.playTimeSpent = _0x6cbfxbf;
                        if (_0x6cbfxc0.isExist(_0x6cbfxbd.toString())) {
                            _logger.debug('bitrate already exist in the dictionary, bitrate = ' + _0x6cbfxbd);
                            var _0x6cbfxe5 = _0x6cbfxc0.getValueForKey(_0x6cbfxbd);
                            _0x6cbfxe5.push(_0x6cbfxe3);
                            _0x6cbfxc0.addUpdate(_0x6cbfxbd.toString(), _0x6cbfxe5);
                        } else {
                            _logger.debug('Creating new entry as bitrate is not exist, bitrate = ' + _0x6cbfxbd);
                            var _0x6cbfxe6 = [];
                            _0x6cbfxe6.push(_0x6cbfxe3);
                            _0x6cbfxc0.addUpdate(_0x6cbfxbd.toString(), _0x6cbfxe6);
                        }
                        _logger.debug('Printing bitrate information while updating current bitrate');
                        for (var _0x6cbfxe7 in _0x6cbfxc0.getDictionary()) {
                            _logger.debug('key : ' + _0x6cbfxe7);
                            _logger.debug('and value = ');
                            var _0x6cbfxe8 = _0x6cbfxc0.getValueForKey(_0x6cbfxe7);
                            for (var _0x6cbfx59 in _0x6cbfxe8) {
                                var bti = _0x6cbfxe8[_0x6cbfx59];
                                _logger.debug('streamHead = ' + bti.streamHeadPos + ' playTimeSpent = ' + bti.playTimeSpent);
                            }
                        }
                        if (_0x6cbfxbd < _0x6cbfxde) {
                            _0x6cbfxc7++;
                        } else {
                            if (_0x6cbfxbd > _0x6cbfxde) {
                                _0x6cbfxc8++;
                            }
                        }
                        _0x6cbfxbd = _0x6cbfxde;
                        _0x6cbfxc1 = _0x6cbfxe0;
                        _0x6cbfxbf = 0;
                        _0x6cbfxc5.resetTimeSpan();
                    }
                } catch (exception) {
                    _logger.error('amaPlayingState updateCurrentPlayingBitrate exception occurred ' + exception);
                } finally {
                    _logger.debug('amaPlayingState updateCurrentPlayingBitrate end');
                }
            };
            this.resetState = function resetState(_0x6cbfxe9) {
                _logger.debug('amaPlayingState resetState start');
                _0x6cbfxba = 0;
                _0x6cbfxbb = 0;
                // REMOVED: bitRatePlayTime = 0;
                _0x6cbfxc4 = null;
                _0x6cbfxc5 = null;
                _0x6cbfxb9 = false;
                _0x6cbfxc0.removeAll();
                _logger.debug('amaPlayingState resetState end');
            };
            this.endState = function endState(_0x6cbfxd2) {
                _logger.debug('amaPlayingState endState start');
                if (_0x6cbfxb9 === false) {
                    return;
                }
                _logger.debug('endState - bitrateplaytime before update = ' + _0x6cbfxbf);
                _0x6cbfxbf += _0x6cbfxc5.timeInMillisecond();
                _logger.debug('endState - bitrateplaytime after update = ' + _0x6cbfxbf);
                var _0x6cbfxd4 = _0x6cbfxc4.timeInMillisecond();
                _0x6cbfxba += _0x6cbfxd4;
                _0x6cbfxc3 += _0x6cbfxd4;
                _0x6cbfxc5 = null;
                _0x6cbfxc4 = null;
                var _0x6cbfxd3 = _0x6cbfxd2.streamHeadPosition * 1000;
                _0x6cbfxbb += (_0x6cbfxd3 - _0x6cbfxc6);
                _logger.debug('previous totalplaystream time while ending playing state = ' + _0x6cbfxc2);
                _0x6cbfxc2 += (_0x6cbfxd3 - _0x6cbfxc6);
                _logger.debug('totalplaystream time while ending playing state = ' + _0x6cbfxc2);
                _logger.debug('amaPlayingState endState end');
            };
            return this;
        }
        function amaInitState() {
            var _0x6cbfxb8 = 'initialize';
            var _0x6cbfxea = 0;
            var _0x6cbfxb9 = false;
            var _0x6cbfxeb = null;
            this.getState = function() {
                return _0x6cbfxb8;
            };
            this.beginState = function(_0x6cbfxd2) {
                _0x6cbfxeb = new amaTimeSpan();
                _0x6cbfxb9 = true;
            };
            this.updateState = function(_0x6cbfxd2) {};
            this.endState = function(_0x6cbfxd2) {
                if (_typeUtils.isValid(_0x6cbfxeb)) {
                    _0x6cbfxea = _0x6cbfxeb.timeInMillisecond();
                    _0x6cbfxeb = null;
                }
            };
            this.updateIteratorData = function() {};
            this.iterator = function() {
                return {
                    endOfStream: '0',
                    startupTime: _0x6cbfxea.toString(),
                };
            };
            this.resetState = function(_0x6cbfxe9) {
                _logger.debug('executing reset on init state');
            };
            return this;
        }
        function amaRebufferState() {
            var _0x6cbfxb8 = 'rebuffer';
            var _0x6cbfxb9 = false;
            var _0x6cbfxec = 0;
            var _0x6cbfxed = 0;
            var _0x6cbfxee = null;
            var _0x6cbfxef = 0.0;
            var _0x6cbfxf0 = -1;
            var _0x6cbfxf1 = 0;
            var _0x6cbfxf2 = -1;
            var _0x6cbfxf3 = -1;
            var _0x6cbfxf4 = 0;
            var _0x6cbfxf5 = '';
            var _0x6cbfxf6 = false;
            var _0x6cbfxf7 = true;
            var _0x6cbfxf8 = 0.0;
            var _0x6cbfxf9 = '';
            this.getState = function() {
                return _0x6cbfxb8;
            };
            this.beginState = function(_0x6cbfxd2) {
                _logger.debug('executing amaRebufferState begin state');
                try {
                    if (!_typeUtils.isValid(_0x6cbfxd2)) {
                        return;
                    }
                    _0x6cbfxee = new amaTimeSpan();
                    var _0x6cbfx68 = new Date();
                    _logger.debug('Rebuffer begin state, rebuffer start time= ' + _0x6cbfx68.getTime());
                    if (_typeUtils.isObject(_0x6cbfxd2)) {
                        if (_typeUtils.isValid(_0x6cbfxd2.rebufferStart)) {
                            _0x6cbfxef = _0x6cbfxd2.rebufferStart;
                        }
                    }
                    if (_typeUtils.isValid(_0x6cbfxd2.currentLogTime)) {
                        _0x6cbfxf2 = _0x6cbfxd2.currentLogTime;
                    }
                    _0x6cbfxec += 1;
                    _0x6cbfxed += 1;
                    if (_0x6cbfxf0 > -1 && _0x6cbfxf0 < _0x6cbfxef && _0x6cbfxec == 1) {
                        _logger.debug('Calculating rebuffer difference. rebufferStart ' + _0x6cbfxef + ' - endOfLastRebuffer ' + _0x6cbfxf0);
                        _0x6cbfxf1 = _0x6cbfxef - _0x6cbfxf0;
                        _logger.debug('rebuffer difference is ' + _0x6cbfxf1);
                    }
                    _logger.debug('Rebuffer start time  = ' + _0x6cbfxef);
                    _0x6cbfxb9 = true;
                } catch (exception) {
                    _logger.error('amaRebufferState begin exception occurred ' + exception);
                } finally {
                    _logger.debug('executed amaRebufferState begin state');
                }
            };
            this.updateState = function(_0x6cbfxd2) {
                if (_0x6cbfxb9 === false) {
                    return;
                }
            };
            this.updateIteratorData = function(_0x6cbfxd2) {
                _logger.debug('executing amaRebufferState getStateData');
                try {
                    _0x6cbfxf9 = '';
                    if (_0x6cbfxb9 === false) {
                        _logger.debug('getStateData : state is not valid');
                        return;
                    }
                    var _0x6cbfxfa = _0x6cbfxd2.currentState;
                    if (_0x6cbfxf6) {
                        _0x6cbfxf9 += '1:';
                        _logger.debug('Previous rebuffer was continuous rebuffer');
                    } else {
                        _0x6cbfxf9 += '0:';
                    }
                    if (_0x6cbfxf7) {
                        _0x6cbfxf9 += '-1';
                        _0x6cbfxf7 = false;
                    } else {
                        if (_0x6cbfxf6) {
                            _0x6cbfxf9 += '0';
                        } else {
                            _0x6cbfxf9 += _0x6cbfxf1.toString();
                            _logger.debug('rebuffer diff string = ' + _0x6cbfxf1);
                        }
                    }
                    _0x6cbfxf9 += ';';
                    _logger.debug('Intermediate rebuffer session string = ' + _0x6cbfxf9);
                    if (_0x6cbfxfa === 'rebuffer') {
                        _0x6cbfxf3 = _0x6cbfxee.timeInMillisecond();
                        _0x6cbfxf8 += _0x6cbfxf3;
                        _logger.debug('getStateData: rebuffer state and rebuffer duration = ' + _0x6cbfxf3);
                        _0x6cbfxf4 += _0x6cbfxf3;
                        if (_0x6cbfxf5) {
                            _0x6cbfxf9 += _0x6cbfxf5;
                            _logger.debug('Intermediate rebuffer session string = ' + _0x6cbfxf9);
                        }
                        var _0x6cbfxfb = _0x6cbfxef - _0x6cbfxf2;
                        if (_0x6cbfxf6) {
                            _0x6cbfxf9 += '0:';
                        } else {
                            _0x6cbfxf9 += (_0x6cbfxfb.toString() + ':');
                            _logger.debug('Intermediate rebuffer session string = ' + _0x6cbfxf9);
                        }
                        _0x6cbfxf9 += (_0x6cbfxf3.toString() + ';');
                        _logger.debug('Intermediate rebuffer session string = ' + _0x6cbfxf9);
                        _0x6cbfxf6 = true;
                        _0x6cbfxee.resetTimeSpan();
                    } else {
                        _logger.debug('Rebuffer sessions  = ' + _0x6cbfxf5);
                        _0x6cbfxf9 += _0x6cbfxf5;
                        _0x6cbfxf6 = false;
                    }
                } catch (e) {
                    _logger.error('amaRebufferState getStateData exception occurred ' + e);
                } finally {
                    _logger.debug('executed amaRebufferState getStateData');
                }
            };
            this.iterator = function() {
                return {
                    isFirstRebuffer: _0x6cbfxf7,
                    rebufferSession: _0x6cbfxf9,
                    rebufferCount: _0x6cbfxec.toString(),
                    rebufferTime: _0x6cbfxf8.toString(),
                    totalRebufferTime: _0x6cbfxf4.toString(),
                    totalRebufferCount: _0x6cbfxed.toString(),
                };
            };
            this.endState = function(_0x6cbfxd2) {
                _logger.debug('executing rebuffer end state');
                if (_typeUtils.isValid(_0x6cbfxd2.rebufferEnd)) {
                    _0x6cbfxf0 = _0x6cbfxd2.rebufferEnd;
                }
                _0x6cbfxf3 = _0x6cbfxee.timeInMillisecond();
                _0x6cbfxf8 += _0x6cbfxf3;
                _logger.debug('endState: rebuffer state ended and rebuffer duration = ' + _0x6cbfxf3);
                _0x6cbfxf4 += _0x6cbfxf3;
                var _0x6cbfxfc = _0x6cbfxef - _0x6cbfxf2;
                if (_0x6cbfxf6 && _0x6cbfxec === 0) {
                    _0x6cbfxf5 += '0:' + _0x6cbfxf3.toString() + ';';
                } else {
                    _0x6cbfxf5 += _0x6cbfxfc.toString() + ':' + _0x6cbfxf3.toString() + ';';
                }
                _0x6cbfxee = null;
                _logger.debug('executed rebuffer end state. rebuffer session = ' + _0x6cbfxf5);
            };
            this.resetState = function(_0x6cbfxe9) {
                _logger.debug('executing amaRebufferState reset state');
                _0x6cbfxec = 0;
                _0x6cbfxf3 = -1;
                _0x6cbfxf8 = 0.0;
                _0x6cbfxf5 = '';
                _0x6cbfxf1 = 0;
                if (_0x6cbfxf6 === false) {
                    _logger.debug('setting isStateValid to false as it is not continuous rebuffer');
                    _0x6cbfxb9 = false;
                    _0x6cbfxef = 0.0;
                    _0x6cbfxf2 = 0;
                }
                if (_typeUtils.isValid(_0x6cbfxe9)) {
                    _logger.debug('removing rebufferSession, rebufferCount and rebufferTime ');
                    _0x6cbfxe9.removeIfExist('rebufferSession');
                    _0x6cbfxe9.removeIfExist('rebufferCount');
                    _0x6cbfxe9.removeIfExist('rebufferTime');
                }
                _logger.debug('executed amaRebufferState reset state');
            };
            return this;
        }
        function amaPlaybackEndState() {
            var _0x6cbfxb8 = 'end';
            var _0x6cbfxfd = null;
            var _0x6cbfxfe = '';
            this.getState = function() {
                return _0x6cbfxb8;
            };
            this.beginState = function(_0x6cbfxd2) {
                try {
                    _logger.debug('amaEndState beginState start');
                    if (_typeUtils.isObject(_0x6cbfxd2)) {
                        if (_typeUtils.isValid(_0x6cbfxd2.errorCode)) {
                            _logger.debug('amaEndState - setting error code = ' + _0x6cbfxd2.errorCode);
                            _0x6cbfxfd = _0x6cbfxd2.errorCode;
                        }
                        if (_typeUtils.isValid(_0x6cbfxd2.endReasonCode)) {
                            _logger.debug('amaEndState - setting end reason code = ' + _0x6cbfxd2.endReasonCode);
                            _0x6cbfxfe = _0x6cbfxd2.endReasonCode;
                        }
                    }
                } catch (exception) {
                    _logger.error('amaEndState getStateData exception occurred ' + exception);
                } finally {
                    _logger.debug('amaEndState beginState end');
                }
            };
            this.updateState = function(_0x6cbfxd2) {
                if (_typeUtils.isObject(_0x6cbfxd2)) {
                    _0x6cbfxfd = _0x6cbfxd2.errorCode;
                }
            };
            this.endState = function(_0x6cbfxd2) {
                if (_typeUtils.isObject(_0x6cbfxd2)) {}
            };
            this.updateIteratorData = function() {
                _logger.debug('amaEndState udpateIteratorData start');
                try {} catch (exception) {
                    _logger.error('amaEndState getStateData exception occurred ' + exception);
                } finally {
                    _logger.debug('amaEndState getStateData end');
                }
            };
            this.iterator = function() {
                return {
                    errorCode: _0x6cbfxfd,
                    endReasonCode: _0x6cbfxfe,
                };
            };
            this.resetState = function(_0x6cbfxe9) {
                _logger.debug('amaEndState resetState start');
                _0x6cbfxfd = null;
                _0x6cbfxfe = null;
                _logger.debug('amaEndState resetState end');
            };
            return this;
        }
        function amaPauseState() {
            var _0x6cbfxb8 = 'pause';
            var _0x6cbfxff = 0;
            var _0x6cbfxb9 = false;
            var _0x6cbfx100 = 0;
            var _0x6cbfx101 = 0;
            var _0x6cbfx102 = 0;
            var _0x6cbfx103 = null;
            this.getState = function() {
                return _0x6cbfxb8;
            };
            this.beginState = function(_0x6cbfxd2) {
                _logger.debug('amaPauseState beginState start');
                if (_typeUtils.isObject(_0x6cbfxd2)) {
                    _0x6cbfx103 = new amaTimeSpan();
                    _0x6cbfx101 += 1;
                    _0x6cbfx102 += 1;
                    _0x6cbfxb9 = true;
                }
                _logger.debug('amaPauseState beginState end');
            };
            this.updateState = function(_0x6cbfxd2) {
                if (_typeUtils.isObject(_0x6cbfxd2) && _0x6cbfxb9 !== false) {}
            };
            this.endState = function(_0x6cbfxd2) {
                _logger.debug('amaPauseState endState start');
                _0x6cbfxff += _0x6cbfx103.timeInMillisecond();
                _0x6cbfx100 += _0x6cbfx103.timeInMillisecond();
                _0x6cbfx103 = null;
                _logger.debug('amaPauseState endState end');
            };
            this.updateIteratorData = function() {
                _logger.debug('amaPauseState getStateData start');
                try {
                    if (_0x6cbfxb9 !== false) {
                        if (_typeUtils.isValid(_0x6cbfx103)) {
                            _0x6cbfxff += _0x6cbfx103.timeInMillisecond();
                            _0x6cbfx100 += _0x6cbfx103.timeInMillisecond();
                            _0x6cbfx103.resetTimeSpan();
                        }
                    }
                } catch (exception) {
                    _logger.error('amaPauseState getStateData exception occurred ' + exception);
                } finally {
                    _logger.debug('amaPauseState getStateData end');
                }
            };
            this.iterator = function() {
                return {
                    pauseDuration: _0x6cbfxff.toString(),
                    pauseCount: _0x6cbfx101.toString(),
                };
            };
            this.resetState = function(_0x6cbfxe9) {
                _logger.debug('amaPauseState resetState start');
                _0x6cbfx101 = 0;
                _0x6cbfxff = 0;
                _0x6cbfxb9 = false;
                _0x6cbfx103 = null;
                _logger.debug('amaPauseState resetState end');
            };
            return this;
        }
        function amaSeekState() {
            var _0x6cbfxb8 = 'seek';
            var _0x6cbfx104 = 0;
            var _0x6cbfx105 = 0;
            var _0x6cbfx106 = 0;
            var _0x6cbfx107 = 0;
            var _0x6cbfx108 = null;
            var _0x6cbfxb9 = false;
            this.getState = function() {
                return _0x6cbfxb8;
            };
            this.beginState = function(_0x6cbfxd2) {
                _logger.debug('amaSeekState beginState start');
                if (_typeUtils.isObject(_0x6cbfxd2)) {
                    _0x6cbfx108 = new amaTimeSpan();
                    _0x6cbfx106 += 1;
                    _0x6cbfx107 += 1;
                    _0x6cbfxb9 = true;
                }
                _logger.debug('amaSeekState beginState end');
            };
            this.updateState = function(_0x6cbfxd2) {
                if (_typeUtils.isObject(_0x6cbfxd2) && _0x6cbfxb9 !== false) {}
            };
            this.endState = function(_0x6cbfxd2) {
                _logger.debug('amaSeekState endState start');
                _0x6cbfx104 += _0x6cbfx108.timeInMillisecond();
                _0x6cbfx105 += _0x6cbfx108.timeInMillisecond();
                _0x6cbfx108 = null;
                _logger.debug('amaSeekState endState end');
            };
            this.updateIteratorData = function(_0x6cbfxd2) {
                _logger.debug('amaSeekState updateIteratorData start');
                try {
                    if (_0x6cbfxb9 !== false) {
                        if (_0x6cbfx108 !== null) {
                            _0x6cbfx104 += _0x6cbfx108.timeInMillisecond();
                            _0x6cbfx105 += _0x6cbfx108.timeInMillisecond();
                            _0x6cbfx108.resetTimeSpan();
                        }
                    }
                } catch (e) {
                    _logger.error('amaSeekState updateIteratorData exception occurred ' + e);
                } finally {
                    _logger.debug('amaSeekState updateIteratorData end');
                }
            };
            this.iterator = function() {
                return {
                    seekDuration: _0x6cbfx104.toString(),
                    seekCount: _0x6cbfx106.toString(),
                };
            };
            this.resetState = function(_0x6cbfxe9) {
                _logger.debug('amaSeekState resetState start');
                _0x6cbfx106 = 0;
                _0x6cbfx104 = 0;
                _0x6cbfxb9 = false;
                _0x6cbfx108 = null;
                _logger.debug('amaSeekState resetState end');
            };
            return this;
        }
        var adEndStatusEnum = {
            adPlayedCompletely: 0,
            adStoppedClosed: 1,
            adAppClosed: 2,
            adError: 3,
        };
        function amaAdState() {
            var _0x6cbfxb8 = 'ad';
            var _0x6cbfx109 = [];
            var _0x6cbfx10a = 0;
            var _0x6cbfx10b = null;
            var adStartupTime = 0;
            var adPlayTime = 0;
            var adPlayBucket = -1;
            var adEndStatus = -1;
            var adSession = null;
            var _0x6cbfx10c = null;
            this.getState = function() {
                return _0x6cbfxb8;
            };
            this.beginState = function(_0x6cbfxd2) {
                try {
                    _logger.debug('amaAdState beginState start');
                    _0x6cbfx10c = new amaTimeSpan();
                    if (_typeUtils.isObject(_0x6cbfxd2)) {
                        _0x6cbfx10b = {};
                        for (var _0x6cbfx10d in _0x6cbfxd2) {
                            _0x6cbfx10b[_0x6cbfx10d] = _0x6cbfxd2[_0x6cbfx10d];
                        }
                    }
                } catch (exception) {
                    _logger.error('amaEndState getStateData exception occurred ' + exception);
                } finally {
                    _logger.debug('amaEndState beginState end');
                }
            };
            this.updateState = function(_0x6cbfxd2) {
                switch (_0x6cbfxd2.event) {
                case 'adStartup':
                    _0x6cbfx10b.adPlayBucket = 0;
                    _0x6cbfx10b.adStartupTime = _0x6cbfx10c.timeInMillisecond();
                    break;
                case 'adFirstQuartile':
                    _0x6cbfx10b.adPlayBucket = 1;
                    break;
                case 'adMidPoint':
                    _0x6cbfx10b.adPlayBucket = 2;
                    break;
                case 'adThirdQuartile':
                    _0x6cbfx10b.adPlayBucket = 3;
                    break;
                case 'adCompleted':
                    _0x6cbfx10b.adPlayBucket = 4;
                    _0x6cbfx10b.adEndStatus = adEndStatusEnum.adPlayedCompletely;
                    break;
                case 'adStopped':
                    _0x6cbfx10b.adEndStatus = adEndStatusEnum.adStoppedClosed;
                    break;
                case 'adError':
                    _0x6cbfx10b.adEndStatus = adEndStatusEnum.adError;
                    break;
                case 'adAppClosed':
                    _0x6cbfx10b.adEndStatus = adEndStatusEnum.adAppClosed;
                    break;
                }
                if (_typeUtils.isObject(_0x6cbfxd2)) {
                    for (var _0x6cbfx10d in _0x6cbfxd2.updateParams) {
                        _0x6cbfx10b[_0x6cbfx10d] = _0x6cbfxd2.updateParams[_0x6cbfx10d];
                    }
                }
            };
            this.endState = function(_0x6cbfxd2) {
                _0x6cbfx10a++;
                _0x6cbfx109.push(_0x6cbfx10b);
            };
            function _0x6cbfx10e() {
                var _0x6cbfx10f = '';
                for (var _0x6cbfxdf = 0; _0x6cbfxdf < _0x6cbfx109.length; _0x6cbfxdf++) {
                    var _0x6cbfx110 = _0x6cbfx109[_0x6cbfxdf];
                    _0x6cbfx110.adPlayTime = _0x6cbfx10c.timeInMillisecond();
                    if (_typeUtils.isValid(_0x6cbfx110.id)) {
                        _0x6cbfx10f += _0x6cbfx110.id;
                    }
                    _0x6cbfx10f += ':';
                    if (_typeUtils.isValid(_0x6cbfx110.adType)) {
                        _0x6cbfx10f += _0x6cbfx110.adType;
                    }
                    _0x6cbfx10f += ':';
                    if (_typeUtils.isValid(_0x6cbfx110.startPos)) {
                        _0x6cbfx10f += _0x6cbfx110.startPos;
                    }
                    _0x6cbfx10f += ':';
                    if (_typeUtils.isValid(_0x6cbfx110.adStartupTime)) {
                        _0x6cbfx10f += _0x6cbfx110.adStartupTime;
                    }
                    _0x6cbfx10f += ':';
                    if (_typeUtils.isValid(_0x6cbfx110.adPlayTime)) {
                        _0x6cbfx10f += _0x6cbfx110.adPlayTime;
                    }
                    _0x6cbfx10f += ':';
                    if (_typeUtils.isValid(_0x6cbfx110.adPlayBucket)) {
                        _0x6cbfx10f += _0x6cbfx110.adPlayBucket;
                    }
                    _0x6cbfx10f += ':';
                    if (_typeUtils.isValid(_0x6cbfx110.adEndStatus)) {
                        _0x6cbfx10f += _0x6cbfx110.adEndStatus;
                    }
                    _0x6cbfx10f += ':';
                    if (!_typeUtils.isNan(_0x6cbfx110.adDuration)) {
                        _0x6cbfx10f += _0x6cbfx110.adDuration;
                    }
                    _0x6cbfx10f += ':';
                    if (_typeUtils.isValid(_0x6cbfx110.adTitle)) {
                        _0x6cbfx10f += _0x6cbfx110.adTitle;
                    }
                    _0x6cbfx10f += ':';
                    if (_typeUtils.isValid(_0x6cbfx110.adCategory)) {
                        _0x6cbfx10f += _0x6cbfx110.adCategory;
                    }
                    _0x6cbfx10f += ':';
                    if (_typeUtils.isValid(_0x6cbfx110.adPartnerId)) {
                        _0x6cbfx10f += _0x6cbfx110.adPartnerId;
                    }
                    _0x6cbfx10f += ':';
                    if (_typeUtils.isValid(_0x6cbfx110.adServer)) {
                        _0x6cbfx10f += _0x6cbfx110.adServer;
                    }
                    _0x6cbfx10f += ':';
                    if (_typeUtils.isValid(_0x6cbfx110.adDaypart)) {
                        _0x6cbfx10f += _0x6cbfx110.adDaypart;
                    }
                    _0x6cbfx10f += ':';
                    if (_typeUtils.isValid(_0x6cbfx110.adIndustryCategory)) {
                        _0x6cbfx10f += _0x6cbfx110.adIndustryCategory;
                    }
                    _0x6cbfx10f += ':';
                    if (_typeUtils.isValid(_0x6cbfx110.adEvent)) {
                        _0x6cbfx10f += _0x6cbfx110.adEvent;
                    }
                    _0x6cbfx10f += ',';
                }
                _0x6cbfx109 = [];
                return _0x6cbfx10f.substring(0, _0x6cbfx10f.length - 1);
            }
            this.updateIteratorData = function(_0x6cbfxd2) {
                _logger.debug('amaEndState udpateIteratorData start');
                try {
                    adSession = '';
                    if (_typeUtils.isObject(_0x6cbfxd2) && _typeUtils.isValid(_0x6cbfx10b)) {
                        for (var _0x6cbfx10d in _0x6cbfxd2) {
                            _0x6cbfx10b[_0x6cbfx10d] = _0x6cbfxd2[_0x6cbfx10d];
                        }
                    }
                } catch (exception) {
                    _logger.error('amaEndState updateIteratorData exception occurred ' + exception);
                } finally {
                    _logger.debug('amaEndState updateIteratorData end');
                }
            };
            this.iterator = function() {
                return {
                    adCount: _0x6cbfx10a.toString(),
                    adStartupTime: adStartupTime.toString(),
                    adPlayTime: adPlayTime.toString(),
                    adPlayBucket: adPlayBucket.toString(),
                    adSession: _0x6cbfx10e,
                    endStatus: adEndStatus,
                };
            };
            this.resetState = function(_0x6cbfxe9) {
                _logger.debug('amaEndState resetState start');
                adSession = null;
                _0x6cbfx10a = 0;
                _logger.debug('amaEndState resetState end');
            };
            return this;
        }
        var stateEnum = {
            unknownState: 'unknown',
            initState: 'init',
            playStartState: 'playStart',
            playingState: 'playing',
            rebufferState: 'rebuffer',
            pauseState: 'pause',
            seekState: 'seek',
            endState: 'end',
            adState: 'ad',
        };
        function amaStateMachine() {
            var _0x6cbfxfa = null;
            var _0x6cbfx111 = null;
            this.initialize = function() {
                _0x6cbfx111 = new amaDictionary();
                _0x6cbfx111.addUpdate(stateEnum.initState, new amaInitState());
                _0x6cbfx111.addUpdate(stateEnum.playStartState, new amaPlaystartState());
                _0x6cbfx111.addUpdate(stateEnum.playingState, new amaPlayingState());
                _0x6cbfx111.addUpdate(stateEnum.rebufferState, new amaRebufferState());
                _0x6cbfx111.addUpdate(stateEnum.pauseState, new amaPauseState());
                _0x6cbfx111.addUpdate(stateEnum.seekState, new amaSeekState());
                _0x6cbfx111.addUpdate(stateEnum.endState, new amaPlaybackEndState());
                _0x6cbfx111.addUpdate(stateEnum.adState, new amaAdState());
            };
            this.getCurrentState = function() {
                var _0x6cbfx112 = _0x6cbfxfa.getState();
                return _0x6cbfx112;
            };
            this.getCurrentStateEnum = function() {
                var _0x6cbfx113 = _0x6cbfx11e(this.getCurrentState());
                _logger.debug('Receive enum for state is = ' + _0x6cbfx113);
                return _0x6cbfx113;
            };
            this.getCurrentMediaState = function() {
                return _0x6cbfxfa;
            };
            this.moveToState = function(_0x6cbfxb8, _0x6cbfx114, _0x6cbfx115) {
                _logger.debug('Moving to state ' + _0x6cbfxb8);
                if (_0x6cbfx111.isExist(_0x6cbfxb8)) {
                    if (_typeUtils.isValid(_0x6cbfxfa)) {
                        if (_0x6cbfxb8 === _0x6cbfxfa.getState()) {
                            return false;
                        }
                        _logger.debug('current state is ' + _0x6cbfxfa.getState());
                        if (_0x6cbfx114.constructor !== amaDictionary) {
                            _logger.debug('endStateParam is not amaDictionary. converting it to amaDictionary');
                            _0x6cbfxfa.endState(_0x6cbfx114);
                        } else {
                            _logger.debug('endStateParam is amaDictionary');
                            _0x6cbfxfa.endState(_0x6cbfx114);
                        }
                    }
                    _0x6cbfxfa = _0x6cbfx111.getValueForKey(_0x6cbfxb8);
                    if (_0x6cbfx115.constructor !== amaDictionary) {
                        _logger.debug('beginStateParam is not amaDictionary. converting it to amaDictionary');
                        _logger.debug('Received begin state param = ' + _0x6cbfx115 + ' for state ' + _0x6cbfxb8);
                        _0x6cbfxfa.beginState(_0x6cbfx115);
                    } else {
                        _logger.debug('endStateParam is amaDictionary');
                        _0x6cbfxfa.beginState(_0x6cbfx115);
                    }
                } else {
                    _logger.debug('state is invalid');
                    return false;
                }
                return true;
            };
            function _0x6cbfx116() {
                _logger.debug('Media states are = ');
                var _0x6cbfx112 = null;
                var _0x6cbfxb8 = null;
                for (_0x6cbfxb8 in _0x6cbfx111.getDictionary()) {
                    _0x6cbfx112 = _0x6cbfx111.getValueForKey(_0x6cbfxb8);
                    _logger.debug(_0x6cbfx112.getState() + ' ' + _0x6cbfx112);
                }
            }
            this.updateIteratorDataForAllState = function() {
                var _0x6cbfxd2 = {};
                var _0x6cbfxb8;
                var _0x6cbfx112 = null;
                _0x6cbfxd2.currentState = this.getCurrentState();
                for (_0x6cbfxb8 in _0x6cbfx111.getDictionary()) {
                    _0x6cbfx112 = _0x6cbfx111.getValueForKey(_0x6cbfxb8);
                    _0x6cbfx112.updateIteratorData(_0x6cbfxd2);
                }
            };
            this.accept = function(_0x6cbfx117) {
                var _0x6cbfxb8;
                var _0x6cbfx112 = null;
                _0x6cbfx117.visit(this);
                for (_0x6cbfxb8 in _0x6cbfx111.getDictionary()) {
                    _0x6cbfx112 = _0x6cbfx111.getValueForKey(_0x6cbfxb8);
                    _0x6cbfx117.visit(_0x6cbfx112);
                }
            };
            this.iterator = function() {
                return {
                    playerState: _0x6cbfx118,
                };
            };
            function _0x6cbfx118() {
                var _0x6cbfx119 = _0x6cbfxfa.getState();
                var _0x6cbfx11a;
                if (_0x6cbfx119 === 'initialize') {
                    _0x6cbfx11a = 'I';
                } else {
                    if (_0x6cbfx119 === 'playing') {
                        _0x6cbfx11a = 'PL';
                    } else {
                        if (_0x6cbfx119 === 'rebuffer') {
                            _0x6cbfx11a = 'B';
                        } else {
                            if (_0x6cbfx119 === 'pause') {
                                _0x6cbfx11a = 'PS';
                            } else {
                                if (_0x6cbfx119 === 'seek') {
                                    _0x6cbfx11a = 'SK';
                                } else {
                                    if (_0x6cbfx119 === 'end') {
                                        _0x6cbfx11a = 'E';
                                    }
                                }
                            }
                        }
                    }
                }
                return _0x6cbfx11a;
            }
            function _0x6cbfx11b(_0x6cbfxb8, _0x6cbfx11c) {
                for (var _0x6cbfx10d in _0x6cbfx11c) {
                    _logger.debug(_0x6cbfx10d + ':' + _0x6cbfx11c[_0x6cbfx10d]);
                }
            }
            this.updateStateData = function(_0x6cbfxb8, _0x6cbfx11d) {
                _logger.debug('updating state with state = ' + _0x6cbfxb8);
                if (_0x6cbfxb8 === this.getCurrentState()) {
                    _0x6cbfxfa.updateState(_0x6cbfx11d);
                } else {
                    if (_0x6cbfx111.isExist(_0x6cbfxb8)) {
                        var _0x6cbfx112 = mediaState.getValueForKey(_0x6cbfxb8);
                        _0x6cbfx112.updateState(_0x6cbfx11d);
                    }
                }
            };
            function _0x6cbfx11e(_0x6cbfxb8) {
                if (_0x6cbfxb8 === 'init') {
                    return stateEnum.initState;
                } else {
                    if (_0x6cbfxb8 === 'playStart') {
                        return stateEnum.playStartState;
                    } else {
                        if (_0x6cbfxb8 === 'playing') {
                            return stateEnum.playingState;
                        } else {
                            if (_0x6cbfxb8 === 'rebuffer') {
                                return stateEnum.rebufferState;
                            } else {
                                if (_0x6cbfxb8 === 'pause') {
                                    return stateEnum.pauseState;
                                } else {
                                    if (_0x6cbfxb8 === 'seek') {
                                        return stateEnum.seekState;
                                    } else {
                                        if (_0x6cbfxb8 === 'end') {
                                            return stateEnum.endState;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return stateEnum.unknownState;
            }
            this.getCurrentStateData = function(_0x6cbfx11f) {
                var _0x6cbfxd2 = {};
            };
            this.getStateData = function(_0x6cbfxb8, _0x6cbfx11f) {
                if (_0x6cbfx111.isExist(_0x6cbfxb8)) {
                    var _0x6cbfxd2 = {};
                    var _0x6cbfx120 = _0x6cbfx111[_0x6cbfxb8];
                }
            };
            this.endAllStates = function(_0x6cbfxd2) {
                _logger.debug('end all the states called...');
                var _0x6cbfx112 = null;
                var _0x6cbfxb8 = null;
                for (_0x6cbfxb8 in _0x6cbfx111.getDictionary()) {
                    _0x6cbfx112 = _0x6cbfx111.getValueForKey(_0x6cbfxb8);
                    _0x6cbfx112.endState(_0x6cbfxd2);
                }
            };
            this.endCurrentState = function(_0x6cbfxd2) {
                _logger.debug('end current state called...');
                _0x6cbfxfa.endState(_0x6cbfxd2);
            };
            this.endState = function(_0x6cbfxb8, _0x6cbfxd2) {
                _logger.debug('end state called...');
                if (_0x6cbfx111.isExist(_0x6cbfxb8)) {
                    var _0x6cbfx120 = _0x6cbfx111[_0x6cbfxb8];
                    _0x6cbfx120.endState();
                }
            };
            this.resetAllState = function(_0x6cbfx121) {
                var _0x6cbfxb8 = null;
                var _0x6cbfx112 = null;
                _logger.debug('current state while resetting = ' + this.getCurrentState());
                for (_0x6cbfxb8 in _0x6cbfx111.getDictionary()) {
                    _logger.debug('resetting all the states except current state. State = ' + _0x6cbfxb8);
                    if (_0x6cbfxb8 === 'rebuffer') {
                        _0x6cbfx112 = _0x6cbfx111.getValueForKey(_0x6cbfxb8);
                        _0x6cbfx112.resetState(_0x6cbfx121);
                    } else {
                        if (_0x6cbfxb8 !== this.getCurrentState()) {
                            _0x6cbfx112 = _0x6cbfx111.getValueForKey(_0x6cbfxb8);
                            _0x6cbfx112.resetState(_0x6cbfx121);
                        }
                    }
                }
            };
            this.resetCurrentState = function() {
                _0x6cbfxfa.resetState();
            };
            this.resetState = function(_0x6cbfxb8) {
                if (_0x6cbfx111.isExist(_0x6cbfxb8)) {
                    var _0x6cbfx120 = _0x6cbfx111[_0x6cbfxb8];
                    _0x6cbfx120.resetState();
                }
            };
            this.uninitialize = function() {
                _0x6cbfx111.removeAll();
            };
            return this;
        }
        function amaPlaystartState() {
            var _0x6cbfxaf = '';
            var _0x6cbfxb8 = 'playStart';
            var _0x6cbfx122 = '';
            var _0x6cbfxb9 = false;
            var _0x6cbfxb0 = 0;
            var _0x6cbfx123 = null;
            var _0x6cbfxae = null;
            var _0x6cbfxad = null;
            var _0x6cbfx124 = 0.0;
            var _0x6cbfx125 = null;
            var _0x6cbfx126 = '-';
            var _0x6cbfx127 = null;
            var _0x6cbfx128 = null;
            this.getState = function() {
                return _0x6cbfxb8;
            };
            this.beginState = function(_0x6cbfxd2) {
                if (!_typeUtils.isValid(_0x6cbfxd2)) {
                    return;
                }
                _logger.debug('executing playstart begin state');
                _0x6cbfx122 = _0x6cbfxd2.isFirstTitle;
                var _0x6cbfx129 = false;
                if (_typeUtils.isString(_0x6cbfxd2.streamURL) && _0x6cbfxd2.streamURL.indexOf('blob:') === -1) {
                    _0x6cbfx123 = _0x6cbfxd2.streamURL;
                    _0x6cbfx129 = _0x6cbfxd2.shouldMakeManifestRequest;
                } else {
                    _0x6cbfx123 = '';
                    _logger.debug('Received blob as streamURL, rejecting it.');
                }
                var _0x6cbfx12a = _0x6cbfxd2.manifest;
                _logger.debug('received streamURL = ' + _0x6cbfx123);
                StreamTypeDetector(_0x6cbfx123, _0x6cbfx12a, _0x6cbfx129, function(_0x6cbfx12b) {
                    _0x6cbfx125 = _0x6cbfx12b.getStreamFormat();
                    _0x6cbfx126 = _0x6cbfx12b.getDeliveryType();
                    _0x6cbfx124 = _0x6cbfx12b.getStreamLength();
                    _0x6cbfxb0 = _0x6cbfx12b.getStreamName();
                    _0x6cbfxae = _0x6cbfx12b.hostName;
                    _0x6cbfxad = _0x6cbfx12b.protocol;
                    if (_0x6cbfxad !== 'https') {
                        _0x6cbfxaf = '80';
                    } else {
                        _0x6cbfxaf = '443';
                    }
                    _logger.debug('parsed stream url and components - stream name = ' + _0x6cbfxb0 + +' host name ' + _0x6cbfxae + ' protocol ' + _0x6cbfxad + ' duration = ' + _0x6cbfx124);
                });
                _0x6cbfxb9 = true;
                _logger.debug('executed playstart begin state');
            };
            this.updateState = function(_0x6cbfxd2) {
                if (_0x6cbfxb9 === false) {
                    return;
                }
            };
            this.updateIteratorData = function(_0x6cbfxd2) {
                if (_0x6cbfxb9 === false) {
                    return;
                }
                _logger.debug('Setting key values in stateData, Format = ' + _0x6cbfx125 + ' stream URL = ' + _0x6cbfx123 + ' Stream Length = ' + _0x6cbfx124 + ' Stream Name = ' + _0x6cbfxb0);
            };
            this.iterator = function() {
                return {
                    streamUrl: _0x6cbfx123,
                    endOfStream: '0',
                    streamLength: _typeUtils.isNumber(_0x6cbfx124) ? _0x6cbfx124.toString() : _0x6cbfx124,
                    streamName: _0x6cbfxb0,
                    format: _0x6cbfx125,
                    deliveryType: _0x6cbfx126,
                    title: _0x6cbfxb0,
                    eventName: _0x6cbfxb0,
                    hostName: _0x6cbfxae,
                    port: _0x6cbfxaf,
                    isFirstTitle: _0x6cbfx122,
                };
            };
            this.endState = function(_0x6cbfxd2) {
                _logger.debug('executing playstart end state');
            };
            this.resetState = function(_0x6cbfxe9) {
                _logger.debug('executing playstart reset state');
                _0x6cbfx123 = null;
                _0x6cbfx124 = 0;
                _0x6cbfxb0 = null;
                _0x6cbfx125 = null;
                _logger.debug('executed playstart reset state');
            };
            return this;
        }
        function amaBeaconDataStore() {
            this.visit = function(_0x6cbfx12c) {
                var _0x6cbfx4a = _0x6cbfx12c.iterator();
                var _0x6cbfx12d = this.getDataStore();
                _0x6cbfxa0.foreachKey(_0x6cbfx4a, _0x6cbfx12e, _0x6cbfx12d);
            };
            function _0x6cbfx12e(_0x6cbfx1b, _0x6cbfx65, _0x6cbfx12d) {
                switch (_0x6cbfx1b) {
                default:
                    _0x6cbfx12d.addUpdate(_0x6cbfx1b, _0x6cbfx65);
                    break;
                case 'isVisitStart':
                    if (!_0x6cbfx194.getIsVisitStartSent()) {
                        _0x6cbfx12d.addUpdate('isVisitStart', _0x6cbfx65);
                    } else {
                        _0x6cbfx12d.removeIfExist('isVisitStart');
                    }
                    break;
                }
            }
        }
        function amaCustomDataStore() {
            this.addCustomMetric = function(_0x6cbfx1b, _0x6cbfx65) {
                if (_typeUtils.isObject(customMetrics) && _typeUtils.isString(_0x6cbfx1b) && _typeUtils.isString(_0x6cbfx65)) {
                    customMetrics.addUpdate(_0x6cbfx1b, _0x6cbfx65);
                }
            };
            this.visit = function(_0x6cbfx12c) {
                var _0x6cbfx4a = _0x6cbfx12c.iterator();
                var _0x6cbfx12d = this.getDataStore();
                _0x6cbfxa0.foreachKey(_0x6cbfx4a, _0x6cbfx12e, _0x6cbfx12d);
            };
            function _0x6cbfx12e(_0x6cbfx1b, _0x6cbfx65, _0x6cbfx12d) {
                _0x6cbfx12d.addUpdate(_0x6cbfx1b, _0x6cbfx65);
            }
        }
        function amaDataStoreBase() {
            this.dataStore = new amaDictionary();
            this.foreachKey = function(_0x6cbfx12f, _0x6cbfx72, _0x6cbfx130) {};
            this.visit = function(_0x6cbfx12c) {
                var _0x6cbfx4a = _0x6cbfx12c.iterator();
                var _0x6cbfx12d = this.getDataStore();
                _0x6cbfxa0.foreachKey(_0x6cbfx4a, _0x6cbfx12e, _0x6cbfx12d);
            };
            function _0x6cbfx12e(_0x6cbfx1b, _0x6cbfx65, _0x6cbfx12d) {
                _0x6cbfx12d.addUpdate(_0x6cbfx1b, _0x6cbfx65);
            }
        }
        amaDataStoreBase.prototype.getDataStore = function() {
            return this.dataStore;
        };
        function amaNetworkDataStore() {
            this.visit = function(_0x6cbfx12c) {
                var _0x6cbfx4a = _0x6cbfx12c.iterator();
                var _0x6cbfx12d = this.getDataStore();
                _0x6cbfxa0.foreachKey(_0x6cbfx4a, _0x6cbfx12e, _0x6cbfx12d);
            };
            function _0x6cbfx12e(_0x6cbfx1b, _0x6cbfx65, _0x6cbfx12d) {
                _0x6cbfx12d.addUpdate(_0x6cbfx1b, _0x6cbfx65);
            }
        }
        function amaStateMachineDataStore() {
            var _0x6cbfxbc = false;
            var _0x6cbfx131 = false;
            this.visit = function(_0x6cbfx12c) {
                var _0x6cbfx4a = _0x6cbfx12c.iterator();
                var _0x6cbfx12d = this.getDataStore();
                _0x6cbfxa0.foreachKey(_0x6cbfx4a, _0x6cbfx12e, _0x6cbfx12d);
            };
            function _0x6cbfx12e(_0x6cbfx1b, _0x6cbfx65, _0x6cbfx12d) {
                switch (_0x6cbfx1b) {
                default:
                    _0x6cbfx12d.addUpdate(_0x6cbfx1b, _0x6cbfx65);
                    break;
                case 'endReasonCode':
                    if ('Play.End.Detected' === _0x6cbfx65) {
                        _0x6cbfx12d.addUpdate('endOfStream', '1');
                    }
                    _0x6cbfx12d.addUpdate(_0x6cbfx1b, _0x6cbfx65);
                    break;
                case 'rebufferTime':
                    _0x6cbfx12d.addUpdate(_0x6cbfx1b, _0x6cbfx65);
                    if (parseInt(_0x6cbfx65) > 500 && !_0x6cbfx131) {
                        _0x6cbfx12d.addUpdate('isSessionWithRebuffer', '1');
                        _0x6cbfx131 = true;
                    } else {
                        if (_0x6cbfx131) {
                            _0x6cbfx12d.removeIfExist('isSessionWithRebuffer');
                        }
                    }
                    break;
                case 'totalPlayClockTime':
                }
            }
        }
        function amaViewerDataStore() {
            this.visit = function(_0x6cbfx12c) {
                var _0x6cbfx4a = _0x6cbfx12c.iterator();
                var _0x6cbfx12d = this.getDataStore();
                _0x6cbfxa0.foreachKey(_0x6cbfx4a, _0x6cbfx12e, _0x6cbfx12d);
            };
            function _0x6cbfx12e(_0x6cbfx1b, _0x6cbfx65, _0x6cbfx12d) {
                _0x6cbfx12d.addUpdate(_0x6cbfx1b, _0x6cbfx65);
            }
        }
        function amaVisitDataStore() {
            var _0x6cbfx132 = false;
            var _0x6cbfx133 = 0;
            var _0x6cbfx134 = 0;
            var _0x6cbfx135 = 0;
            var _0x6cbfx136 = 0;
            var _0x6cbfx137 = 0;
            var _0x6cbfx138 = 0;
            var _0x6cbfx139 = 0;
            var _0x6cbfx13a = 0;
            var _0x6cbfx13b = {};
            var _0x6cbfx13c = 8;
            var _0x6cbfxbc = false;
            var _0x6cbfx13d = '';
            var _0x6cbfx13e = 0;
            var _0x6cbfx13f = {};
            var _0x6cbfx140 = 0;
            var _0x6cbfx141 = 0;
            var _0x6cbfx142 = 0;
            this.setIsVisitStartSent = function(_0x6cbfx65) {
                _0x6cbfx132 = _0x6cbfx65;
            };
            this.getIsVisitStartSent = function() {
                return _0x6cbfx132;
            };
            this.visit = function(_0x6cbfx12c) {
                var _0x6cbfx4a = _0x6cbfx12c.iterator();
                if (_0x6cbfx4a.eventCode === 'E' && _0x6cbfx4a.sequenceId === '1') {
                    _0x6cbfx13e++;
                    _0x6cbfx13f.visitStartupErrors = _0x6cbfx13e.toString();
                }
                _0x6cbfxa0.foreachKey(_0x6cbfx4a, _0x6cbfx12e, _0x6cbfx13f);
            };
            function _0x6cbfx12e(_0x6cbfx1b, _0x6cbfx65, _0x6cbfx12d) {
                switch (_0x6cbfx1b) {
                default:
                    _0x6cbfx12d[_0x6cbfx1b] = _0x6cbfx65;
                    break;
                case 'endReasonCode':
                    if ('Play.End.Detected' === _0x6cbfx65) {
                        _0x6cbfx12d.endOfStream = '1';
                    }
                    _0x6cbfx12d[_0x6cbfx1b] = _0x6cbfx65;
                    break;
                case 'playClockTime':
                    _0x6cbfx133 += parseInt(_0x6cbfx65);
                    _0x6cbfx12d[_0x6cbfx1b] = _0x6cbfx65;
                    _0x6cbfx12d.visitPlayClockTime = _0x6cbfx133.toString();
                    break;
                case 'playStreamTime':
                    _0x6cbfx134 += parseInt(_0x6cbfx65);
                    _0x6cbfx12d.visitPlayStreamTime = _0x6cbfx134.toString();
                    break;
                case 'rebufferCount':
                    _0x6cbfx135 += parseInt(_0x6cbfx65);
                    _0x6cbfx12d.visitRebufferCount = _0x6cbfx135.toString();
                    break;
                case 'rebufferTime':
                    _0x6cbfx136 += parseInt(_0x6cbfx65);
                    _0x6cbfx12d.visitRebufferTime = _0x6cbfx136.toString();
                    break;
                case 'eventCode':
                    if (_0x6cbfx65 === 'I') {
                        _0x6cbfxbc = false;
                        _0x6cbfx137++;
                        _0x6cbfx12d.visitAttempts = _0x6cbfx137.toString();
                    } else {
                        if (_0x6cbfx65 === 'S') {
                            _0x6cbfx138++;
                            _0x6cbfx12d.visitPlays = _0x6cbfx138.toString();
                        } else {
                            if (_0x6cbfx65 === 'E') {
                                _0x6cbfx13a++;
                                _0x6cbfx12d.visitErrors = _0x6cbfx13a.toString();
                            } else {
                                if (_0x6cbfx65 === 'V') {
                                    _0x6cbfx12d.isVisitEnd = '1';
                                }
                            }
                        }
                    }
                    break;
                case 'visitDuration':
                    _0x6cbfx12d.visitInterval = _0x6cbfx65;
                    break;
                case 'isVisitStart':
                    if (!_0x6cbfx132) {
                        _0x6cbfx12d.isVisitStart = _0x6cbfx65;
                    } else {
                        delete _0x6cbfx12d[_0x6cbfx1b];
                    }
                    break;
                case 'transitionStreamTimes':
                    if (_typeUtils.isString(_0x6cbfx65)) {
                        var _0x6cbfx143 = _0x6cbfx65.split(',');
                        var _0x6cbfx144 = _0x6cbfx143.length;
                        var _0x6cbfx145;
                        var _0x6cbfx146;
                        var _0x6cbfx147 = '0';
                        for (var _0x6cbfx21 = 0; _0x6cbfx21 < _0x6cbfx144; _0x6cbfx21++) {
                            _0x6cbfx145 = _0x6cbfx143[_0x6cbfx21].split(':');
                            var _0x6cbfx148 = parseInt(_0x6cbfx145[0]);
                            var _0x6cbfx149 = parseInt(_0x6cbfx145[1]);
                            var _0x6cbfx14a = Math.floor(_0x6cbfx148 / 500000);
                            var _0x6cbfxdf = _0x6cbfx14a < _0x6cbfx13c ? _0x6cbfx14a : _0x6cbfx13c - 1;
                            if (_typeUtils.isInteger(_0x6cbfx13b[_0x6cbfxdf])) {
                                _0x6cbfx13b[_0x6cbfx14a] += _0x6cbfx149;
                            } else {
                                _0x6cbfx13b[_0x6cbfx14a] = _0x6cbfx149;
                            }
                        }
                        _0x6cbfx146 = _0x6cbfxdf;
                        for (_0x6cbfx1b in _0x6cbfx13b) {
                            if (_0x6cbfx13b[_0x6cbfx1b] > _0x6cbfx13b[_0x6cbfx146]) {
                                _0x6cbfx146 = _0x6cbfx1b;
                            }
                        }
                        _0x6cbfx147 += _0x6cbfx146;
                        _0x6cbfx12d.visitMaxPersistentBitRateBucket = _0x6cbfx147;
                    }
                    break;
                case 'adCount':
                    var _0x6cbfx14b = parseInt(_0x6cbfx65);
                    if (!_typeUtils.isInteger(_0x6cbfx14b)) {
                        _0x6cbfx140 += _0x6cbfx14b;
                        _0x6cbfx12d.visitAdStartCount = _0x6cbfx140.toString();
                    }
                    break;
                case 'adAbandonCount':
                    var _0x6cbfx14c = parseInt(_0x6cbfx65);
                    if (!_typeUtils.isInteger(_0x6cbfx14c)) {
                        _0x6cbfx141 += _0x6cbfx14c;
                        _0x6cbfx12d.visitAdAbandonCount = _0x6cbfx141.toString();
                    }
                    break;
                case 'adPlayClockTime':
                    var _0x6cbfx14d = parseInt(_0x6cbfx65);
                    if (!_typeUtils.isNumber(_0x6cbfx14d)) {
                        _0x6cbfx142 += _0x6cbfx14d;
                        _0x6cbfx12d.visitAdPlayClockTime = _0x6cbfx142.toString();
                    }
                    break;
                case 'isView':
                    var _0x6cbfx14e = parseInt(_0x6cbfx65);
                    if (_0x6cbfx14e === 1) {
                        _0x6cbfx139++;
                        _0x6cbfx12d.visitViews = _0x6cbfx139.toString();
                    }
                    break;
                }
            }
            this.iterator = function() {
                return _0x6cbfx13f;
            };
            this.getVisitId = function() {
                return _0x6cbfx13d;
            };
            this.setVisitId = function(_0x6cbfx14f) {
                _0x6cbfx13d = _0x6cbfx14f;
            };
        }
        var DataStoreFactoryEnum = {
            beaconDataStore: 'beaconDataStore',
            customDataStore: 'customDataStore',
            networkDataStore: 'networkDataStore',
            stateMachineDataStore: 'stateMachineDataStore',
            viewerDataStore: 'viewerDataStore',
            visitDataStore: 'visitDataStore',
        };
        var _0x6cbfx150 = function() {
            var _0x6cbfx151;
            function _0x6cbfx6() {
                var _0x6cbfx152 = new amaDataStoreBase();
                var _0x6cbfx153 = {};
                _0x6cbfx153[DataStoreFactoryEnum.beaconDataStore] = _0x6cbfx154();
                _0x6cbfx153[DataStoreFactoryEnum.customDataStore] = _0x6cbfx155();
                _0x6cbfx153[DataStoreFactoryEnum.networkDataStore] = _0x6cbfx156();
                _0x6cbfx153[DataStoreFactoryEnum.stateMachineDataStore] = _0x6cbfx157();
                _0x6cbfx153[DataStoreFactoryEnum.viewerDataStore] = _0x6cbfx158();
                _0x6cbfx153[DataStoreFactoryEnum.visitDataStore] = _0x6cbfx159();
                function _0x6cbfx154() {
                    _0x6cbfx15a(amaBeaconDataStore, _0x6cbfx152);
                    return new amaBeaconDataStore();
                }
                function _0x6cbfx155() {
                    _0x6cbfx15a(amaCustomDataStore, _0x6cbfx152);
                    return new amaCustomDataStore();
                }
                function _0x6cbfx156() {
                    _0x6cbfx15a(amaNetworkDataStore, _0x6cbfx152);
                    return new amaNetworkDataStore();
                }
                function _0x6cbfx157() {
                    _0x6cbfx15a(amaStateMachineDataStore, _0x6cbfx152);
                    return new amaStateMachineDataStore();
                }
                function _0x6cbfx158() {
                    _0x6cbfx15a(amaViewerDataStore, _0x6cbfx152);
                    return new amaViewerDataStore();
                }
                function _0x6cbfx159() {
                    _0x6cbfx15a(amaVisitDataStore, _0x6cbfx152);
                    return new amaVisitDataStore();
                }
                function _0x6cbfx15a(_0x6cbfx15b, _0x6cbfx15c) {
                    try {
                        _0x6cbfx15b.prototype = Object.create(_0x6cbfx15c);
                    } catch (e) {
                        _logger.error('Exception thrown from InheritObject' + e);
                    }
                }
                function _0x6cbfx15d(_0x6cbfx15e, _0x6cbfx1b, _0x6cbfx65) {
                    var _0x6cbfx15f = {
                        value: _0x6cbfx65,
                        writable: true,
                        enumerable: true,
                        configurable: true,
                    };
                    Object.defineProperty(_0x6cbfx15e, _0x6cbfx1b, _0x6cbfx15f);
                }
                return {
                    getDataStore: function(_0x6cbfx7) {
                        return _0x6cbfx153[_0x6cbfx7];
                    },
                };
            }
            return {
                getFactory: function() {
                    if (!_0x6cbfx151) {
                        _0x6cbfx151 = _0x6cbfx6();
                    }
                    return _0x6cbfx151;
                },
            };
        }();
        function amaDictionary() {
            var _data = {};
            this.addUpdate = function(key, value) {
                _data[key] = value;
            };
            this.addUpdateFromDictionary = function(_0x6cbfx161) {
                var _0x6cbfx1b;
                for (_0x6cbfx1b in _0x6cbfx161) {
                    _data[_0x6cbfx1b] = _0x6cbfx161[_0x6cbfx1b];
                }
            };
            this.print = function() {
                _logger.debug('Content(s) of current dictionary ============');
                for (_0x6cbfx1b in _data) {
                    _logger.debug('key : ' + _0x6cbfx1b + ' value : ' + _data[_0x6cbfx1b]);
                }
                _logger.debug('============ End of contents');
            };
            this.getValueForKey = function(_0x6cbfx1b) {
                return _data[_0x6cbfx1b];
            };
            this.isExist = function(_0x6cbfx1b) {
                var _0x6cbfxe7;
                for (_0x6cbfxe7 in _data) {
                    if (_0x6cbfxe7 === _0x6cbfx1b) {
                        return true;
                    }
                }
                return false;
            };
            this.getIndexOf = function(_0x6cbfx1b) {
                var _0x6cbfxe7, _0x6cbfxdf = 0;
                for (_0x6cbfxe7 in _data) {
                    _0x6cbfxdf++;
                    if (_0x6cbfxe7 === _0x6cbfx1b) {
                        return _0x6cbfxdf;
                    }
                }
                return -1;
            };
            this.removeIfExist = function(_0x6cbfx1b) {
                if (this.isExist(_0x6cbfx1b)) {
                    delete _data[_0x6cbfx1b];
                    return true;
                }
                return false;
            };
            this.removeAll = function() {
                var _0x6cbfxe7;
                for (_0x6cbfxe7 in _data) {
                    delete _data[_0x6cbfxe7];
                }
            };
            this.dictionaryLength = function() {
                var _0x6cbfxe7, _0x6cbfx162 = 0;
                for (_0x6cbfxe7 in _data) {
                    _0x6cbfx162++;
                }
                return _0x6cbfx162;
            };
            this.getDictionary = function() {
                return _data;
            };
            return this;
        }
        function _xhrHelper() {
            var xhr = null;
            this.getData = function(url, xhrDoneHandler) {
                if (_typeUtils.isString(url) && url !== '') {
                    xhr = new XMLHttpRequest();
                    _logger.debug(url);
                    xhr.open('GET', url, true);
                    xhr.onreadystatechange = function() {
                        if (xhr.readyState === 4) {
                            if (typeof (xhrDoneHandler) === 'function') {
                                xhrDoneHandler(xhr);
                                xhr = null;
                            }
                        }
                    };
                    xhr.send();
                }
            };
            this.abortRequest = function() {
                if (_typeUtils.isValid(xhr)) {
                    xhr.abort();
                }
            };
        }
        _xhrHelper.getData = function(url, xhrDoneHandler) {
            if (_typeUtils.isString(url) && url !== '') {
                _logger.debug(url);
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url, true);
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        if (typeof (xhrDoneHandler) === 'function') {
                            xhrDoneHandler(xhr);
                            xhr = null;
                        }
                    }
                };
                xhr.send();
            }
        };
        _xhrHelper.encodeMetricString = function(metricString) {
            try {
                if (_typeUtils.isString(metricString)) {
                    metricString = encodeURI(metricString);
                    metricString = metricString.replace(/#/g, '%23');
                }
            } catch (exception) {
                _logger.error('amaNetworkUtilities encodeMetricString exception occurred ' + exception);
            } finally {
                return metricString;
            }
        };
        function _0x6cbfx166(_0x6cbfx167, _0x6cbfx168) {
            var _0x6cbfx169 = {
                name: _0x6cbfx167,
                message: _0x6cbfx168,
                customType: 0,
                additionalMessage: '',
            };
            this.setCustomErrorType = function(_0x6cbfx16a) {
                if (_typeUtils.isNumber(_0x6cbfx16a)) {
                    _0x6cbfx169.customType = _0x6cbfx16a;
                } else {
                    _logger.log('Invalid input ' + _0x6cbfx16a);
                }
            };
            this.errorDescription = function() {
                return _0x6cbfx169;
            };
            this.submitAdditionalMessage = function(_0x6cbfx16b) {
                if (_typeUtils.isString(_0x6cbfx16b)) {
                    _0x6cbfx169.additionalMessage = _0x6cbfx16b;
                } else {
                    _logger.log('Invalid input ' + _0x6cbfx16b);
                }
            };
            this.logError = function() {
                _logger.log('Error name : ' + _0x6cbfx169.name + ', message : ' + _0x6cbfx169.message + ', custom error type : ' + _0x6cbfx169.customType);
                _logger.log('additional message : ' + _0x6cbfx169.additionalMessage);
            };
        }
        function _0x6cbfx16c() {
            this.UUID = function() {
                var uuid = '';
                try {
                    _logger.debug('amaUtility UUID start');
                    var timestamp = new Date().getTime();
                    uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(_0x6cbfx16f) {
                        var _0x6cbfx170 = (timestamp + Math.random() * 16) % 16 | 0;
                        timestamp = Math.floor(timestamp / 16);
                        return (_0x6cbfx16f == 'x' ? _0x6cbfx170 : (_0x6cbfx170 & 0x3 | 0x8)).toString(16);
                    });
                } catch (exception) {
                    _logger.error('amaUtility UUID exception occurred ' + exception);
                } finally {
                    _logger.debug('amaUtility UUID end ' + uuid);
                    return uuid;
                }
            };
            this.foreachKeyInSet = function(_0x6cbfx12f, _0x6cbfx72, _0x6cbfx130) {
                var _0x6cbfx65;
                if (_typeUtils.isArray(_0x6cbfx12f) && _typeUtils.isObject(_0x6cbfx72) && _typeUtils.isFunction(_0x6cbfx130)) {
                    for (var _0x6cbfxe7 in _0x6cbfx12f) {
                        if (_typeUtils.isValid(_0x6cbfx72[_0x6cbfx1b])) {
                            if (_typeUtils.isFunction(_0x6cbfx72[_0x6cbfx1b])) {
                                _0x6cbfx65 = _0x6cbfx72[_0x6cbfx1b]();
                            } else {
                                _0x6cbfx65 = _0x6cbfx72[_0x6cbfx1b];
                            }
                            if (_typeUtils.isValid(_0x6cbfx65)) {
                                _0x6cbfx130(_0x6cbfx1b, _0x6cbfx65);
                            } else {
                                _logger.debug('value for key ' + _0x6cbfx1b + ' is undefined');
                            }
                        }
                    }
                }
            };
            this.foreachKey = function(_0x6cbfx72, _0x6cbfx130, _0x6cbfx12d) {
                var _0x6cbfx65;
                if (_typeUtils.isObject(_0x6cbfx72) && _typeUtils.isFunction(_0x6cbfx130)) {
                    for (var _0x6cbfx1b in _0x6cbfx72) {
                        if (_typeUtils.isFunction(_0x6cbfx72[_0x6cbfx1b])) {
                            _0x6cbfx65 = _0x6cbfx72[_0x6cbfx1b]();
                        } else {
                            _0x6cbfx65 = _0x6cbfx72[_0x6cbfx1b];
                        }
                        if (_typeUtils.isValid(_0x6cbfx65)) {
                            _0x6cbfx130(_0x6cbfx1b, _0x6cbfx65, _0x6cbfx12d);
                        } else {
                            _logger.debug('value for key ' + _0x6cbfx1b + ' is undefined');
                        }
                    }
                }
            };
        }
        function amaURLUtility() {}
        amaURLUtility.isURL = function(_0x6cbfx1c) {
            var _0x6cbfx171 = false;
            try {
                var _0x6cbfx172 = new RegExp('((http|https)(://))?([a-zA-Z0-9]+[.]{1}){2}[a-zA-z0-9]+(/{1}[a-zA-Z0-9]+)*/?', 'i');
                if (_0x6cbfx172.test(_0x6cbfx1c)) {
                    _0x6cbfx171 = true;
                }
            } catch (e) {
                _logger.error('isURL : exception occurred ' + e);
            }
            return _0x6cbfx171;
        };
        amaURLUtility.parseURLComponents = function(_0x6cbfx1c) {
            var _0x6cbfx173 = {};
            var _0x6cbfxac = /^(\w+?:)?\/\/([^\/:]+):?([^\/]+)?(\/[^#?]*)#?([^?]+)?\??(.+)?/;
            try {
                var _0x6cbfx6f = _0x6cbfxac.exec(_0x6cbfx1c);
                if (!_typeUtils.isValid(_0x6cbfx6f[1])) {
                    _0x6cbfx173.protocol = location.protocol;
                } else {
                    _0x6cbfx173.protocol = _0x6cbfx6f[1];
                }
                _0x6cbfx173.hostName = _0x6cbfx6f[2];
                _0x6cbfx173.port = _0x6cbfx6f[3] ? _0x6cbfx6f[3] : '80';
                _0x6cbfx173.path = _0x6cbfx6f[4];
                var _0x6cbfxb6 = this.path.split('/');
                var _0x6cbfxb7 = _0x6cbfxb6.length;
                _0x6cbfx173.name = _0x6cbfxb6[_0x6cbfxb7 - 1];
                var _0x6cbfxab = _0x6cbfx173.name.toLowerCase();
                if ((_0x6cbfxab.indexOf('.m3u') != -1) || (_0x6cbfxab.indexOf('manifest') != -1) || (_0x6cbfxab.indexOf('.f4m') != -1) || (_0x6cbfxab.indexOf('.mpd') != -1)) {
                    if (_0x6cbfxb7 >= 3) {
                        _0x6cbfx173.name = _0x6cbfxb6[_0x6cbfxb7 - 2] + '/' + _0x6cbfxb6[_0x6cbfxb7 - 1];
                    }
                }
                _0x6cbfx173.hash = _0x6cbfx6f[5] ? _0x6cbfx6f[5] : '';
                _0x6cbfx173.search = _0x6cbfx6f[6] ? _0x6cbfx6f[6] : '';
                _0x6cbfx173.host = _0x6cbfx173.hostName + ':' + _0x6cbfx173.port;
            } catch (e) {
                _logger.debug('Exception,  parseStreamUrl :' + e);
            }
            return _0x6cbfx173;
        };
        var _0x6cbfx174 = {
            LOCAL_STORAGE: 0,
            SESSION_STORAGE: 1,
        };
        function _0x6cbfx175() {}
        _0x6cbfx175.isLocalStorageEnabled = false;
        _0x6cbfx175.isStorageAvailable = function() {
            var _0x6cbfx176 = 'AkamaiTest';
            try {
                localStorage.setItem(_0x6cbfx176, _0x6cbfx176);
                localStorage.removeItem(_0x6cbfx176);
                _0x6cbfx175.isLocalStorageEnabled = true;
            } catch (e) {
                _0x6cbfx175.isLocalStorageEnabled = false;
            }
            return _0x6cbfx175.isLocalStorageEnabled;
        };
        _0x6cbfx175.getItem = function(_0x6cbfx7, _0x6cbfx1b) {
            _logger.debug('amaStorageManager getItem start');
            var _0x6cbfx177 = null;
            if (!_0x6cbfx175.isLocalStorageEnabled) {
                _logger.debug('amaStorageManager getItem, Local Storage is not available');
                return _0x6cbfx177;
            }
            try {
                if (_typeUtils.isString(_0x6cbfx1b)) {
                    switch (_0x6cbfx7) {
                    case _0x6cbfx174.LOCAL_STORAGE:
                        _0x6cbfx177 = localStorage.getItem(_0x6cbfx1b);
                        break;
                    case _0x6cbfx174.SESSION_STORAGE:
                        _0x6cbfx177 = sessionStorage.getItem(_0x6cbfx1b);
                        break;
                    }
                }
            } catch (exception) {
                _logger.error('amaStorageManager getItem exception occurred ' + exception);
            } finally {
                _logger.debug('amaStorageManager getItem end : ' + _0x6cbfx177);
                _0x6cbfx177 = (_0x6cbfx177 === 'undefined' ? null : _0x6cbfx177);
                return _0x6cbfx177;
            }
        };
        _0x6cbfx175.setItem = function(_0x6cbfx7, _0x6cbfx1b, _0x6cbfx65) {
            try {
                _logger.debug('amaStorageManager setItem start');
                if (!_0x6cbfx175.isLocalStorageEnabled) {
                    _logger.debug('amaStorageManager setItem, Local Storage is not available');
                    return;
                }
                if (_typeUtils.isString(_0x6cbfx1b) && _typeUtils.isString(_0x6cbfx65)) {
                    switch (_0x6cbfx7) {
                    case _0x6cbfx174.LOCAL_STORAGE:
                        localStorage.setItem(_0x6cbfx1b, _0x6cbfx65);
                        break;
                    case _0x6cbfx174.SESSION_STORAGE:
                        sessionStorage.setItem(_0x6cbfx1b, _0x6cbfx65);
                        break;
                    }
                }
            } catch (exception) {
                _logger.error('amaStorageManager setItem exception occurred ' + exception);
            } finally {
                _logger.debug('amaStorageManager setItem end');
            }
        };
        _0x6cbfx175.removeItem = function(_0x6cbfx7, _0x6cbfx1b) {
            try {
                _logger.debug('amaStorageManager removeItem started');
                if (!_0x6cbfx175.isLocalStorageEnabled) {
                    _logger.debug('amaStorageManager removeItem, Local Storage is not available');
                    return;
                }
                if (_typeUtils.isString(_0x6cbfx1b)) {
                    switch (_0x6cbfx7) {
                    case _0x6cbfx174.LOCAL_STORAGE:
                        localStorage.removeItem(_0x6cbfx1b);
                        break;
                    case _0x6cbfx174.SESSION_STORAGE:
                        sessionStorage.removeItem(_0x6cbfx1b);
                        break;
                    }
                }
            } catch (exception) {
                _logger.error('amaStorageManager removeItem exception occurred ' + exception);
            } finally {
                _logger.debug('amaStorageManager removeItem end');
            }
        };
        _0x6cbfx175.clear = function(_0x6cbfx7) {
            try {
                _logger.debug('amaStorageManager clear started');
                if (!_0x6cbfx175.isLocalStorageEnabled) {
                    _logger.debug('amaStorageManager clear, Local Storage is not available');
                    return;
                }
                switch (_0x6cbfx7) {
                case _0x6cbfx174.LOCAL_STORAGE:
                    localStorage.clear();
                    break;
                case _0x6cbfx174.SESSION_STORAGE:
                    sessionStorage.clear();
                    break;
                }
            } catch (exception) {
                _logger.error('amaStorageManager clear exception occurred ' + exception);
            } finally {
                _logger.debug('amaStorageManager clear end');
            }
        };
        _0x6cbfx175.deleteExpiredDataFromLocalStorage = function(_0x6cbfx7) {
            if (!_0x6cbfx175.isLocalStorageEnabled) {
                _logger.debug('amaStorageManager deleteExpiredDataFromLocalStorage, Local Storage is not available');
                return;
            }
            if (_0x6cbfx7 === _0x6cbfx174.LOCAL_STORAGE) {
                var _0x6cbfx178 = localStorage.length;
                var _0x6cbfx90 = new Date().getTime();
                for (var _0x6cbfx59 = _0x6cbfx178 - 1; _0x6cbfx59 >= 0; _0x6cbfx59--) {
                    var _0x6cbfx179 = localStorage.getItem(localStorage.key(_0x6cbfx59));
                    if (_typeUtils.isString(_0x6cbfx179) && _0x6cbfx179.indexOf('expiryDate') !== -1) {
                        var _0x6cbfx10d = JSON.parse(_0x6cbfx179);
                        if (_typeUtils.isValid(_0x6cbfx10d) && _typeUtils.isValid(_0x6cbfx10d.expiryDate)) {
                            var dataExpiryDate = Date.parse(_0x6cbfx10d.expiryDate);
                            if (dataExpiryDate <= _0x6cbfx90) {
                                localStorage.removeItem(localStorage.key(_0x6cbfx59));
                            }
                        }
                    }
                }
            } else {
                if (_0x6cbfx7 === _0x6cbfx174.SESSION_STORAGE) {
                    var _0x6cbfx178 = sessionStorage.length;
                    for (var _0x6cbfx59 = _0x6cbfx178 - 1; _0x6cbfx59 >= 0; _0x6cbfx59--) {
                        var _0x6cbfx179 = sessionStorage.getItem(sessionStorage.key(_0x6cbfx59));
                        if (_typeUtils.isString(_0x6cbfx179) && _0x6cbfx179.indexOf('expiryDate') !== -1) {
                            var _0x6cbfx10d = JSON.parse(_0x6cbfx179);
                            if (_typeUtils.isValid(_0x6cbfx10d) && _typeUtils.isValid(_0x6cbfx10d.expiryDate)) {
                                dataExpiryDate = Date.parse(_0x6cbfx10d.expiryDate);
                                if (dataExpiryDate <= _0x6cbfx90) {
                                    sessionStorage.removeItem(sessionStorage.key(_0x6cbfx59));
                                }
                            }
                        }
                    }
                }
            }
        };
        var _0x6cbfx17a = '4.16.26';
        var _0x6cbfx17b = 'CoreLibrary';
        var _playerLoaderInfo = _0x6cbfx17b + '-' + _0x6cbfx17a;
        var _0x6cbfx17d;
        var _stateMachine = null;
        var _dataStore = null;
        var _diagnoser = null;
        var _viewMetrics = null;
        var _0x6cbfx182 = null;
        var _0x6cbfx183 = null;
        var _dictionary = null;
        var _xmlParser = null;
        var _0x6cbfx186 = true;
        var _0x6cbfx187 = null;
        var _0x6cbfx188 = null;
        var _0x6cbfx189 = false;
        var _0x6cbfx18a = null;
        var _0x6cbfx18b = null;
        var _0x6cbfx18c = null;
        var _0x6cbfxa0 = null;
        var _0x6cbfx13d = null;
        var _timespan = null;
        var _0x6cbfx18e = null;
        var _logger = null;
        var _serverIpManager = null;
        var _beaconManager = null;
        var _0x6cbfx192;
        var _0x6cbfx193 = null;
        var _0x6cbfx194 = null;
        var _0x6cbfx195 = null;
        var _0x6cbfx196 = 0;
        var _timeSpan = null;
        var _0x6cbfx151 = this;
        var _evtDispatcher = null;
        var _0x6cbfx199 = null;
        var _0x6cbfx19a = null;
        var _0x6cbfx19b = 600000;
        var _shouldSdkFetchManifest = false;
        var _0x6cbfx12a = '';
        var _streamUrl = '';
        var _streamDuration;
        var _0x6cbfx19d = true;
        var _0x6cbfx122 = '1';
        var _beaconUrl = '';
        var _0x6cbfx1b = _0x6cbfx2;
        this.getKey = function() {
            return _0x6cbfx1b;
        };
        this.initialize = function(_0x6cbfx19f) {
            try {
                _diagnoser = new amaDiagnoser(this.getKey());
                _0x6cbfx18a = new Array();
                _logger = new DebugLogger();
                _logger.enableDebugLogging(false);
                _beaconUrl = _0x6cbfx19f;
                if (!_0x6cbfx175.isStorageAvailable()) {
                    _logger.debug('Local Storage is not available, viewerID will change.');
                }
                if (_typeUtils.isValid(_beaconUrl)) {
                    _xmlParser = null;
                    _xmlParser = new amaXmlParser(_beaconUrl);
                    _xmlParser.parse(onXmlParsingCompleted);
                    var error = _xmlParser.onError();
                    if (error !== '') {
                        _0x6cbfx186 = false;
                        return error;
                    }
                }
                _0x6cbfx182 = new _0x6cbfx94();
                _0x6cbfx182.build();
                _0x6cbfx183 = new _0x6cbfx9e();
                _0x6cbfxa0 = new _0x6cbfx16c();
                if (_typeUtils.isObject(AMAInstanceManager.visitDataStore)) {
                    _0x6cbfx194 = AMAInstanceManager.visitDataStore;
                } else {
                    _0x6cbfx194 = _0x6cbfx150.getFactory().getDataStore(DataStoreFactoryEnum.visitDataStore);
                    AMAInstanceManager.visitDataStore = _0x6cbfx194;
                }
                _0x6cbfx13d = _0x6cbfx194.getVisitId();
                if (!_typeUtils.isValid(_0x6cbfx13d) || _0x6cbfx13d === '') {
                    _0x6cbfx13d = _0x6cbfxa0.UUID();
                    _0x6cbfx194.setVisitId(_0x6cbfx13d);
                }
                _viewMetrics = new amaViewMetrics();
                _serverIpManager = new amaServerIPManager();
                _beaconManager = new amaBeaconManager();
                _viewMetrics.startVisitSession();
                _timeSpan = new amaTimeSpan();
                _dataStore = new amaDataStore();
                _logger.debug('Generated visit id  = ' + _0x6cbfx13d);
            } catch (e) { console.error(e); }
        };
        this.handleSessionInit = function(akamaiCallbacks) {
            try {
                if (!_diagnoser.isInitialized()) {
                    _diagnoser.initialize(_beaconUrl, _playerLoaderInfo);
                    _diagnoser.processLogs({
                        api: 'reportSetupParams',
                        value: _beaconUrl,
                    });
                    _diagnoser.processLogs({
                        api: 'setCurrentVersion',
                        value: _playerLoaderInfo,
                    });
                }
                _stateMachine = new amaStateMachine();
                _dictionary = new amaDictionary();
                _0x6cbfx193 = _0x6cbfx150.getFactory().getDataStore(DataStoreFactoryEnum.stateMachineDataStore);
                _timespan = new amaTimeSpan();
                _evtDispatcher = new amaCommonEventDispatcher();
                var pageInfo = new _0x6cbfxa2();
                pageInfo.generatePageInformation(_dataStore.getCustomMetricsData());
                var _0x6cbfx1a1 = null;
                _0x6cbfx186 = true;
                if (_0x6cbfx19d) {
                    this.enableLocation();
                }
                if (_typeUtils.isValid(akamaiCallbacks)) {
                    _dictionary.addUpdateFromDictionary(akamaiCallbacks);
                }
                _stateMachine.initialize();
                var _0x6cbfx114 = {};
                var _0x6cbfx115 = {};
                _stateMachine.moveToState(stateEnum.initState, _0x6cbfx114, _0x6cbfx115);
                var _0x6cbfx121 = _dataStore.getMetricsData();
                _0x6cbfx195 = _0x6cbfxa0.UUID();
                _logger.debug('Generated session id/attempt id ' + _0x6cbfx195);
                _dataStore.printDataStore();
                _stateMachine.updateIteratorDataForAllState();
                if (_typeUtils.isValid(_dataStore)) {
                    var _0x6cbfx50 = _dataStore.getCustomMetricsData();
                    _diagnoser.processLogs({
                        api: 'setCustomDimension',
                        value: _0x6cbfx50.getDictionary(),
                    });
                }
                _stateMachine.accept(_0x6cbfx193);
                _stateMachine.accept(_0x6cbfx194);
                _0x6cbfx182.accept(_0x6cbfx150.getFactory().getDataStore(DataStoreFactoryEnum.beaconDataStore));
                pageInfo.accept(_0x6cbfx150.getFactory().getDataStore(DataStoreFactoryEnum.beaconDataStore));
                _0x6cbfx183.accept(_0x6cbfx150.getFactory().getDataStore(DataStoreFactoryEnum.viewerDataStore));
                if (_typeUtils.isValid(_0x6cbfx19a)) {
                    _0x6cbfx19a.accept(_0x6cbfx150.getFactory().getDataStore(DataStoreFactoryEnum.networkDataStore));
                }
                _0x6cbfx17d = 'I';
                this.accept(_0x6cbfx194);
                _dataStore.printDataStore();
                if (_0x6cbfx182) {
                    var _0x6cbfx1a2 = _0x6cbfx182.browserInfo();
                    if (_typeUtils.isString(_0x6cbfx1a2)) {
                        _0x6cbfx1a2 = _0x6cbfx1a2.toLowerCase();
                        if (_0x6cbfx1a2.indexOf('safari') === -1) {
                            _evtDispatcher.registerForEvent(_0x6cbfx4f.Sleep, _0x6cbfx1a4);
                        } else {
                            _logger.debug('Sleep tracking disabled');
                        }
                    }
                }
                _evtDispatcher.registerForEvent(_0x6cbfx4f.Rebuffer, _0x6cbfx1a4);
                _0x6cbfx1b3(_0x6cbfx1e3.IMetric);
                return _0x6cbfx1a1;
            } catch (e) {
                _logger.error('handleSessionInit : exception occurred ' + e);
            }
        };
        this.setLoaderInformation = function(_0x6cbfx1a3) {
            try {
                if (_typeUtils.isString(_0x6cbfx1a3) && _0x6cbfx1a3.length > 0) {
                    _playerLoaderInfo = _playerLoaderInfo + ':' + _0x6cbfx1a3;
                }
            } catch (e) {
                _logger.error('setLoaderInformation : exception occurred ' + e);
            }
        };
        function _0x6cbfx1a4(_0x6cbfx1a5) {
            try {
                var _0x6cbfx1a6 = _0x6cbfx1a5.getEventName();
                _logger.debug('commonEventListener ' + _0x6cbfx1a6);
                switch (_0x6cbfx1a6) {
                case _0x6cbfx4f.Sleep: {
                        var _0x6cbfx1a7 = _dictionary.getDictionary(); _0x6cbfx1db(); _0x6cbfx151.handleSessionInit(_0x6cbfx1a7); _0x6cbfx151.handlePlayStart();
                        break;
                    }
                case _0x6cbfx4f.Rebuffer: {
                        _0x6cbfx151.handleError('Error.Continous.Rebuffer');
                        break;
                    }
                default:
                    {
                        _logger.debug('Unsupported Event');
                        break;
                    }
                }
            } catch (e) {
                _logger.error('commonEventListener : exception occurred ' + e);
            }
        }
        this.accept = function(_0x6cbfx1a8) {
            try {
                _0x6cbfx1a8.visit(this);
            } catch (e) {
                _logger.error('accept : exception occurred ' + e);
            }
        };
        this.acceptBeaconManager = function(_0x6cbfx1a8) {
            try {
                _0x6cbfx1a8.visit(_0x6cbfx151);
            } catch (e) {
                _logger.error('acceptBeaconManager : exception occurred ' + e);
            }
        };
        function _0x6cbfx1a9() {
            var _0x6cbfx1aa = _0x6cbfx182.softwareVersion();
            if (_typeUtils.isValid(_0x6cbfx1aa)) {
                var _0x6cbfx1ab = 'tvOS-' + _0x6cbfx182.systemVersion().split('.')[0];
                _dataStore.updateMetricData('os', _0x6cbfx1ab);
                _dataStore.updateMetricData('device', 'AppleTV');
                _dataStore.updateMetricData('fullOs', 'tvOS-' + _0x6cbfx182.systemVersion());
                _dataStore.updateMetricData('playerType', 'AppleTV');
            } else {
                _logger.debug('Failed to get software version');
            }
            _logger.debug('received softwareVersion = ' + _0x6cbfx1aa);
        }
        function onXmlParsingCompleted() {
            try {
                _logger.debug('Config parse callback received');
                if (_0x6cbfx189 === false) {
                    _0x6cbfx189 = true;
                    if (_typeUtils.isValid(_xmlParser)) {
                        _logger.debug('Config parse is a valid object');
                    }
                    var _0x6cbfx1ad = _xmlParser.beaconDictionary();
                    _logger.debug('beacon id for the session = ' + _0x6cbfx1ad.beaconId);
                    _dataStore.updateMetricData('beaconId', _0x6cbfx1ad.beaconId);
                    var _0x6cbfx1ae = _xmlParser.logDictionary();
                    if (_typeUtils.isValid(_0x6cbfx1ae)) {
                        _diagnoser.processLogs({
                            api: 'reportSetupParams',
                            value: _0x6cbfx1ae.host + _0x6cbfx1ae.path,
                        });
                    }
                    var _0x6cbfx10d;
                    for (_0x6cbfx10d = 0; _0x6cbfx10d < _0x6cbfx18a.length; _0x6cbfx10d++) {
                        _0x6cbfx17d = _0x6cbfx1b1(_0x6cbfx18a[_0x6cbfx10d]);
                        _0x6cbfx151.acceptBeaconManager(_0x6cbfx150.getFactory().getDataStore(DataStoreFactoryEnum.beaconDataStore));
                        var _0x6cbfx5c = _dataStore.generateLineData(_0x6cbfx18a[_0x6cbfx10d], _xmlParser);
                        if (_0x6cbfx18a[_0x6cbfx10d] === _0x6cbfx1e3.SMetric) {
                            _0x6cbfx1d3();
                        }
                        _viewMetrics.updateViewMetrics(_dataStore, _xmlParser);
                        var beacon = new amaBeacon(_0x6cbfx5c);
                        _beaconManager.sendBeacon(beacon);
                        _0x6cbfx196++;
                    }
                    while (_0x6cbfx18a.length > 0) {
                        _0x6cbfx18a.pop();
                    }
                    var _0x6cbfx1b0 = new _0x6cbfx1f8();
                    if (_typeUtils.isValid(_0x6cbfx1b0)) {
                        _0x6cbfx18c = _0x6cbfx1b0.getViewerDiagnosticsId(_xmlParser, _0x6cbfx18b, _0x6cbfx183.getViewerId(), _0x6cbfx18c);
                    }
                    if (!_typeUtils.isValid(_0x6cbfx192)) {
                        _0x6cbfx1c9();
                    }
                } else {
                    _logger.debug('this may be an error or some inconsistent state as isConfigReceived can\'t be true when we receive a callback');
                }
            } catch (e) {
                _logger.error('configReceived : exception occurred ' + e);
            }
        }
        function _0x6cbfx1b1(_0x6cbfx1b2) {
            var _0x6cbfx7;
            if ('init' === _0x6cbfx1b2) {
                _0x6cbfx7 = 'I';
            } else {
                if ('playStart' === _0x6cbfx1b2) {
                    _0x6cbfx7 = 'S';
                } else {
                    if ('playing' === _0x6cbfx1b2) {
                        _0x6cbfx7 = 'P';
                    } else {
                        if ('complete' === _0x6cbfx1b2) {
                            _0x6cbfx7 = 'C';
                        } else {
                            if ('error' === _0x6cbfx1b2) {
                                _0x6cbfx7 = 'E';
                            } else {
                                if ('visit' === _0x6cbfx1b2) {
                                    _0x6cbfx7 = 'V';
                                } else {
                                    if ('heartBeat' === _0x6cbfx1b2) {
                                        _0x6cbfx7 = 'H';
                                    } else {
                                        if ('feedback' === _0x6cbfx1b2) {
                                            _0x6cbfx7 = 'F';
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return _0x6cbfx7;
        }
        function _0x6cbfx1b3(_0x6cbfx1b4) {
            try {
                if (_0x6cbfx189) {
                    _0x6cbfx151.acceptBeaconManager(_0x6cbfx150.getFactory().getDataStore(DataStoreFactoryEnum.beaconDataStore));
                    if (_0x6cbfx18a.length === 0) {
                        var _0x6cbfx5c = '';
                        _dataStore.printDataStore();
                        _0x6cbfx5c = _dataStore.generateLineData(_0x6cbfx1b4, _xmlParser);
                        _viewMetrics.updateViewMetrics(_dataStore, _xmlParser);
                        _logger.debug('beacon to be sent = ' + _0x6cbfx5c);
                        var beacon1 = new amaBeacon(_0x6cbfx5c);
                        _beaconManager.sendBeacon(beacon1);
                        _0x6cbfx196++;
                    } else {
                        _0x6cbfx18a.push(_0x6cbfx1b4);
                        var _0x6cbfx10d;
                        for (_0x6cbfx10d = 0; _0x6cbfx10d < _0x6cbfx18a.length; _0x6cbfx10d++) {
                            var _0x6cbfx51 = '';
                            if (_0x6cbfx1b4 === _0x6cbfx1e3.VMetric) {
                                _0x6cbfx51 = _viewMetrics.generateLineData(_xmlParser);
                            } else {
                                _0x6cbfx51 = _dataStore.generateLineData(_0x6cbfx1b4, _xmlParser);
                                _viewMetrics.updateViewMetrics(_dataStore, _xmlParser);
                            }
                            var beacon2 = new amaBeacon(_0x6cbfx51);
                            _beaconManager.sendBeacon(beacon2);
                            _0x6cbfx196++;
                        }
                        while (_0x6cbfx18a.length > 0) {
                            _0x6cbfx18a.pop();
                        }
                    }
                } else {
                    _logger.debug('Adding beacon to array as config is not yet received');
                    _0x6cbfx18a.push(_0x6cbfx1b4);
                }
                _0x6cbfx18e = _timespan.timeInSecond();
                var _0x6cbfx121 = _dataStore.getMetricsData();
                if (_stateMachine) {
                    _stateMachine.resetAllState(_0x6cbfx121);
                }
            } catch (e) {
                _logger.error('sendBeacon : exception occurred ' + e);
            }
        }
        this.iterator = function() {
            return {
                beaconId: _xmlParser.beaconDictionary().beaconId,
                beaconVersion: _xmlParser.beaconDictionary().beaconVersion,
                visitId: _0x6cbfx13d,
                sessionId: _0x6cbfx195,
                attemptId: _0x6cbfx195,
                xViewerId: _0x6cbfx18c,
                sequenceId: _0x6cbfx196.toString(),
                eventCode: _0x6cbfx17d,
                pluginVersion: _playerLoaderInfo,
                isVisitStart: '1',
                logInterval: _0x6cbfx1b7(),
                currentClockTime: _0x6cbfx1b9(),
                currentStreamTime: _0x6cbfx1ba(),
                streamLength: _0x6cbfx1b5(),
                bytesLoaded: _0x6cbfx1bd(),
                droppedFrames: _0x6cbfx1bf(),
                isLiveStream: _0x6cbfx1c1(),
                visitDuration: _0x6cbfx1c3(),
            };
        };
        function _0x6cbfx1b5() {
            var _0x6cbfx1b6;
            if (_typeUtils.isValid(_streamDuration)) {
                _0x6cbfx1b6 = (_streamDuration * 1000).toString();
            }
            return _0x6cbfx1b6;
        }
        function _0x6cbfx1b7() {
            var _0x6cbfx1b8;
            if (_typeUtils.isValid(_timespan)) {
                _0x6cbfx1b8 = (_timespan.timeInSecond() - _0x6cbfx18e).toString();
            }
            return _0x6cbfx1b8;
        }
        function _0x6cbfx1b9() {
            var _0x6cbfx68;
            if (_typeUtils.isValid(_timespan)) {
                _0x6cbfx68 = _timespan.timeInMillisecond().toString();
            }
            return _0x6cbfx68;
        }
        function _0x6cbfx1ba() {
            var _0x6cbfx1bb = _0x6cbfx1bc() * 1000;
            return _0x6cbfx1bb.toString();
        }
        function _0x6cbfx1bc() {
            var _0x6cbfx1bb = 0;
            try {
                if (_typeUtils.isValid(_dictionary) && _typeUtils.isFunction(_dictionary.getValueForKey('streamHeadPosition'))) {
                    _0x6cbfx1bb = _dictionary.getValueForKey('streamHeadPosition')();
                }
            } catch (e) {
                _logger.error('getStreamHeadPosition : exception occurred ' + e);
            }
            return _0x6cbfx1bb;
        }
        function _0x6cbfx1bd() {
            var _0x6cbfx1be = '';
            try {
                if (_typeUtils.isValid(_dictionary) && _typeUtils.isFunction(_dictionary.getValueForKey('bytesLoaded'))) {
                    _0x6cbfx1be = (_dictionary.getValueForKey('bytesLoaded')()).toString();
                }
            } catch (e) {
                _logger.error('getBytesLoaded : exception occurred ' + e);
            }
            return _0x6cbfx1be;
        }
        function _0x6cbfx1bf() {
            var _0x6cbfx1c0 = '';
            try {
                if (_typeUtils.isValid(_dictionary) && _typeUtils.isFunction(_dictionary.getValueForKey('droppedFrames'))) {
                    _0x6cbfx1c0 = (_dictionary.getValueForKey('droppedFrames')()).toString();
                }
            } catch (e) {
                _logger.error('getDroppedFrames : exception occurred ' + e);
            }
            return _0x6cbfx1c0;
        }
        function _0x6cbfx1c1() {
            var _0x6cbfx1c2 = '';
            try {
                if (_typeUtils.isValid(_dictionary) && _typeUtils.isValid(_dictionary.getValueForKey('isLiveStream'))) {
                    _0x6cbfx1c2 = (_dictionary.getValueForKey('isLiveStream')()).toString();
                }
            } catch (e) {
                _logger.error('getIsLiveStream : exception occurred ' + e);
            }
            return _0x6cbfx1c2;
        }
        function _0x6cbfx1c3() {
            var _0x6cbfx1c4 = '';
            try {
                if (_typeUtils.isValid(_timeSpan)) {
                    _0x6cbfx1c4 = _timeSpan.timeInMillisecond().toString();
                }
            } catch (e) {
                _logger.error('getVisitDuration : exception occurred ' + e);
            }
            return _0x6cbfx1c4;
        }
        this.beaconManager = function() {
            this.iterator = function() {
                return {
                    os: os,
                    device: AppleTV,
                    fullOs: ('tvOS-' + _0x6cbfx182.systemVersion()),
                    playerType: AppleTV,
                    loginterval: (_timespan.timeInSecond() - _0x6cbfx18e),
                    currentClockTime: _timespan.timeInMillisecond().toString(),
                    currentStreamTime: (streamHead * 1000).toString(),
                    streamLength: (streamLen * 1000).toString(),
                    bytesLoaded: _dictionary.getValueForKey('bytesLoaded')(),
                    droppedFrames: _dictionary.getValueForKey('droppedFrames')(),
                    isLiveStream: _dictionary.getValueForKey('isLiveStream')(),
                };
            };
        };
        this.setData = function(key, value) {
            try {
                var _0x6cbfx1c5 = {
                    methodName: 'setData',
                };
                _0x6cbfx1c5[name] = value;
                _diagnoser.processLogs({
                    api: 'reportAPI',
                    value: _0x6cbfx1c5,
                });
                if (_typeUtils.isValid(key) && _typeUtils.isValid(value)) {
                    _dataStore.addCustomMetric(key, value);
                }
            } catch (e) {
                _logger.error('setData : exception occurred ' + e);
            }
        };
        this.setViewerId = function(_0x6cbfx14f) {
            try {
                if (_typeUtils.isString(_0x6cbfx14f) && _0x6cbfx14f !== '') {
                    _0x6cbfx183.setViewerId(_0x6cbfx14f);
                }
            } catch (e) {
                _logger.error('setViewerId : exception occurred ' + e);
            }
        };
        this.setViewerDiagnosticsId = function(_0x6cbfx1c6) {
            try {
                if (_typeUtils.isString(_0x6cbfx1c6)) {
                    _0x6cbfx18b = _0x6cbfx1c6;
                    if (_dataStore) {
                        _dataStore.updateMetricData('viewerDiagnosticsId', _0x6cbfx18b);
                    }
                }
            } catch (e) {
                _logger.error('setViewerDiagnosticsId : exception occurred ' + e);
            }
        };
        this.setURLManifestContent = function(_0x6cbfx1c7) {
            _0x6cbfx12a = _0x6cbfx1c7;
            _logger.debug(_0x6cbfx1c7);
        };
        this.setStreamURL = function(streamUrl, shouldSdkFetchManifest) {
            if (_typeUtils.isString(streamUrl) && streamUrl.indexOf('blob:') === -1 && streamUrl.length > 0) {
                _streamUrl = streamUrl;
                _shouldSdkFetchManifest = shouldSdkFetchManifest;
                if (_0x6cbfx189) {
                    _0x6cbfx1c9();
                }
            } else {
                _logger.debug('blob url passed, rejecting the url ' + streamUrl);
            }
        };
        function _0x6cbfx1c9() {
            if (_typeUtils.isString(_streamUrl) && _streamUrl.length > 0) {
                var _0x6cbfx50 = _dataStore.getCustomMetricsData();
                var _0x6cbfx1ca = _0x6cbfx50.getValueForKey('cdn');
                if (!_typeUtils.isString(_0x6cbfx1ca)) {
                    var _0x6cbfx1cb = _xmlParser.matchDictionary();
                    if (_typeUtils.isValid(_0x6cbfx1cb)) {
                        var _0x6cbfx1cc = _0x6cbfx1cb.cdn;
                        if (_typeUtils.isValid(_0x6cbfx1cc)) {
                            for (var _0x6cbfx1cd in _0x6cbfx1cc) {
                                var _0x6cbfx1ce = _0x6cbfx1cc[_0x6cbfx1cd];
                                if (_typeUtils.isValid(_0x6cbfx1ce)) {
                                    var _0x6cbfx1cf = _0x6cbfx1ce.value;
                                    var _0x6cbfx1d0 = _0x6cbfx1cf.split(',');
                                    for (var _0x6cbfx21 = 0; _0x6cbfx21 < _0x6cbfx1d0.length; _0x6cbfx21++) {
                                        if (_streamUrl.indexOf(_0x6cbfx1d0[_0x6cbfx21]) !== -1) {
                                            if ('akamai' === _0x6cbfx1cd.toLowerCase()) {
                                                _0x6cbfx192 = true;
                                            }
                                            _0x6cbfx151.setData('cdn', _0x6cbfx1cd);
                                            return;
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if (_0x6cbfx1ca.length > 0 && 'akamai' === _0x6cbfx1ca.toLowerCase()) {
                        _0x6cbfx192 = true;
                        return;
                    }
                }
            }
            _0x6cbfx192 = false;
        }
        this.setStreamDuration = function(duration) {
            if (_typeUtils.isNumber(duration)) {
                _streamDuration = duration;
            } else {
                _logger.debug('Duration is not valid integer : ' + duration);
            }
        };
        this.handlePlayStart = function() {
            try {
                if (_0x6cbfx186 === false) {
                    return;
                }
                var _0x6cbfx1d1 = {};
                if (_typeUtils.isString(_streamUrl) && '' !== _streamUrl) {
                    _serverIpManager.setStreamUrl(_streamUrl);
                    _0x6cbfx1d1.streamURL = _streamUrl;
                }
                _0x6cbfx1d1.manifest = _0x6cbfx12a;
                _0x6cbfx1d1.shouldMakeManifestRequest = _shouldSdkFetchManifest;
                _0x6cbfx1d1.isFirstTitle = _0x6cbfx122;
                var _0x6cbfx114 = {};
                _stateMachine.moveToState(stateEnum.playStartState, _0x6cbfx114, _0x6cbfx1d1);
                this.handlePlaying();
            } catch (e) {
                _logger.error('handlePlayStart : exception occurred ' + e);
            }
        };
        function _0x6cbfx1d2() {
            try {
                if (_0x6cbfx186 === false) {
                    return;
                }
                if (_typeUtils.isValid(_0x6cbfx188)) {
                    _logger.debug('clear secondary log interval after sending first p-beacon');
                    clearTimeout(_0x6cbfx188);
                }
                var _0x6cbfx119 = _stateMachine.getCurrentState();
                _logger.debug('current state enum = ' + _0x6cbfx119);
                var _0x6cbfxe0 = _0x6cbfx1bc();
                var _0x6cbfx11d = {
                    'streamHeadPosition': _0x6cbfxe0,
                };
                _stateMachine.updateStateData(_0x6cbfx119, _0x6cbfx11d);
                var _0x6cbfx121 = _dataStore.getMetricsData();
                _stateMachine.updateIteratorDataForAllState();
                _stateMachine.accept(_0x6cbfx193);
                _stateMachine.accept(_0x6cbfx194);
                if (_typeUtils.isValid(_0x6cbfx19a)) {
                    _0x6cbfx19a.accept(_0x6cbfx150.getFactory().getDataStore(DataStoreFactoryEnum.networkDataStore));
                }
                _dataStore.printDataStore();
                _0x6cbfx17d = 'P';
                _serverIpManager.accept(_0x6cbfx150.getFactory().getDataStore(DataStoreFactoryEnum.networkDataStore));
                _0x6cbfx1b3(_0x6cbfx1e3.PMetric);
                if (_0x6cbfx192) {
                    _serverIpManager.performServerIPCheck();
                }
            } catch (e) {
                _logger.error('handleTimerEvent : exception occurred ' + e);
            }
        }
        this.handlePlaying = function() {
            try {
                if (_0x6cbfx186 === false) {
                    return;
                }
                if (stateEnum.playStartState === _stateMachine.getCurrentState()) {
                    _logger.debug('handlePlaying inside');
                    var _0x6cbfx121 = _dataStore.getMetricsData();
                    _stateMachine.updateIteratorDataForAllState();
                    _stateMachine.accept(_0x6cbfx193);
                    _stateMachine.accept(_0x6cbfx194);
                    if (_typeUtils.isValid(_0x6cbfx19a)) {
                        _0x6cbfx19a.accept(_0x6cbfx150.getFactory().getDataStore(DataStoreFactoryEnum.networkDataStore));
                    }
                    _dataStore.printDataStore();
                    _0x6cbfx17d = 'S';
                    this.accept(_0x6cbfx194);
                    _0x6cbfx1b3(_0x6cbfx1e3.SMetric);
                    if (_0x6cbfx189) {
                        _0x6cbfx1d3();
                    } else {
                        _logger.debug('config is not yet recieved');
                    }
                }
                _logger.debug('handlePlaying outside');
                var _0x6cbfx114 = {};
                var _0x6cbfxe0 = _0x6cbfx1bc();
                var _0x6cbfx1d1 = {
                    'streamHeadPosition': _0x6cbfxe0,
                };
                _stateMachine.moveToState(stateEnum.playingState, _0x6cbfx114, _0x6cbfx1d1);
            } catch (e) {
                _logger.error('handlePlaying : exception occurred ' + e);
            }
        };
        function _0x6cbfx1d3() {
            try {
                var _0x6cbfx1ae = _xmlParser.logDictionary();
                if (_typeUtils.isValid(_0x6cbfx1ae)) {
                    _logger.debug('secondary log interval = ' + _0x6cbfx1ae.secondaryLogTime + ' logInterval = ' + _0x6cbfx1ae.logInterval);
                    _logger.debug('secondary log interval in ms = ' + _0x6cbfx1ae.secondaryLogTime * 1000 + ' logInterval in ms = ' + _0x6cbfx1ae.logInterval * 1000);
                }
                _0x6cbfx188 = setTimeout(_0x6cbfx1d2, _0x6cbfx1ae.secondaryLogTime * 1000);
                _0x6cbfx187 = setInterval(_0x6cbfx1d2, _0x6cbfx1ae.logInterval * 1000);
                _0x6cbfx19b = _0x6cbfx1ae.rebufferDurationOutlier;
            } catch (exception) {
                _logger.error('startSessionTimers exception occurred ' + exception);
            } finally {
                _logger.debug('startSessionTimers end');
            }
        }
        this.handlePause = function() {
            try {
                if (_0x6cbfx186 === false) {
                    return;
                }
                var _0x6cbfxe0 = _0x6cbfx1bc();
                var _0x6cbfx114 = {
                    'streamHeadPosition': _0x6cbfxe0,
                };
                var _0x6cbfx1d1 = {
                    'streamHeadPosition': _0x6cbfxe0,
                };
                _stateMachine.moveToState(stateEnum.pauseState, _0x6cbfx114, _0x6cbfx1d1);
            } catch (e) {
                _logger.error('handlePause : exception occurred ' + e);
            }
        };
        this.handleSeekStart = function() {
            try {
                if (_0x6cbfx186 === false) {
                    return;
                }
                var _0x6cbfxe0 = _0x6cbfx1bc();
                var _0x6cbfx114 = {
                    'streamHeadPosition': _0x6cbfxe0,
                };
                var _0x6cbfx1d1 = {
                    'streamHeadPosition': _0x6cbfxe0,
                };
                _stateMachine.moveToState(stateEnum.seekState, _0x6cbfx114, _0x6cbfx1d1);
            } catch (e) {
                _logger.error('handleSeekStart : exception occurred ' + e);
            }
        };
        this.handleBufferStart = function() {
            try {
                if (_0x6cbfx186 === false) {
                    return;
                }
                var _0x6cbfxe0 = _0x6cbfx1bc();
                var _0x6cbfx114 = {
                    'streamHeadPosition': _0x6cbfxe0,
                };
                var _0x6cbfx1d4 = _timespan.timeInMillisecond();
                var _0x6cbfx1d1 = {
                    'rebufferStart': _0x6cbfx1d4,
                    'currentLogTime': _0x6cbfx18e * 1000,
                };
                _stateMachine.moveToState(stateEnum.rebufferState, _0x6cbfx114, _0x6cbfx1d1);
                _evtDispatcher.rebufferingStarted(_0x6cbfx19b);
            } catch (e) {
                _logger.error('handleBufferStart : exception occurred ' + e);
            }
        };
        this.handleBufferEnd = function() {
            try {
                if (_0x6cbfx186 === false) {
                    return;
                }
                var _0x6cbfx1d4 = _timespan.timeInMillisecond();
                var _0x6cbfx114 = {
                    'rebufferEnd': _0x6cbfx1d4,
                };
                var _0x6cbfxe0 = _0x6cbfx1bc();
                var _0x6cbfx1d1 = {
                    'streamHeadPosition': _0x6cbfxe0,
                };
                _stateMachine.moveToState(stateEnum.playingState, _0x6cbfx114, _0x6cbfx1d1);
                _evtDispatcher.rebufferingEnded();
            } catch (e) {
                _logger.error('handleBufferEnd : exception occurred ' + e);
            }
        };
        this.handleBitrateChange = function(_0x6cbfx1d5) {
            try {
                if (_0x6cbfx186 === false) {
                    return;
                }
                if (_stateMachine.getCurrentState() === stateEnum.playingState) {
                    var _0x6cbfxe0 = _0x6cbfx1bc();
                    var _0x6cbfx11d = {
                        'bitrate': _0x6cbfx1d5,
                        'streamHeadPosition': _0x6cbfxe0,
                    };
                    _stateMachine.updateStateData(stateEnum.playingState, _0x6cbfx11d);
                }
            } catch (e) {
                _logger.error('handleBitrateChange : exception occurred ' + e);
            }
        };
        this.handlePlayEnd = function(_0x6cbfxfe) {
            try {
                if (_0x6cbfx186 === false) {
                    return;
                }
                if (_0x6cbfxfe !== 'Title.Switched') {
                    _0x6cbfx122 = '1';
                }
                _0x6cbfx1e0(_0x6cbfxfe);
                _0x6cbfx1db();
            } catch (e) {
                _logger.error('handlePlayEnd : exception occurred ' + e);
            }
        };
        this.handleError = function(_0x6cbfxfd) {
            try {
                if (_0x6cbfx186 === false) {
                    return;
                }
                var _0x6cbfxe0 = _0x6cbfx1bc();
                var _0x6cbfx114 = {
                    'streamHeadPosition': _0x6cbfxe0,
                };
                var _0x6cbfx1d1 = {
                    'errorCode': _0x6cbfxfd,
                };
                _stateMachine.moveToState(stateEnum.endState, _0x6cbfx114, _0x6cbfx1d1);
                var _0x6cbfx121 = _dataStore.getMetricsData();
                _stateMachine.updateIteratorDataForAllState();
                _stateMachine.accept(_0x6cbfx193);
                _stateMachine.accept(_0x6cbfx194);
                if (_typeUtils.isValid(_0x6cbfx19a)) {
                    _0x6cbfx19a.accept(_0x6cbfx150.getFactory().getDataStore(DataStoreFactoryEnum.networkDataStore));
                }
                _dataStore.printDataStore();
                _0x6cbfx17d = 'E';
                this.accept(_0x6cbfx194);
                _0x6cbfx1b3(_0x6cbfx1e3.EMetric);
                _0x6cbfx1db();
            } catch (e) {
                _logger.error('handleError : exception occurred ' + e);
            }
        };
        this.disableServerIP = function() {
            try {
                _serverIpManager.enableServerIPRequest(false);
            } catch (e) {
                _logger.error('disableServerIP : exception occurred ' + e);
            }
        };
        this.enableServerIP = function() {
            try {
                _serverIpManager.enableServerIPRequest(true);
            } catch (e) {
                _logger.error('enableServerIP : exception occurred ' + e);
            }
        };
        this.handleStreamSwitch = function() {
            if (_typeUtils.isValid(_dictionary)) {
                var _0x6cbfx1a7 = _dictionary.getDictionary();
                this.handlePlayEnd('Stream.Switched');
                this.handleSessionInit(_0x6cbfx1a7);
                this.handlePlayStart();
            } else {
                _logger.error('Callback Methods were not provided.');
            }
        };
        this.handleTitleSwitch = function(_0x6cbfx1d6) {
            if (_typeUtils.isValid(_dictionary)) {
                _0x6cbfx122 = '0';
                var _0x6cbfx1a7 = _dictionary.getDictionary();
                this.handlePlayEnd('Title.Switched');
                for (var _0x6cbfx1b in _0x6cbfx1d6) {
                    this.setData(_0x6cbfx1b, _0x6cbfx1d6[_0x6cbfx1b]);
                }
                this.handleSessionInit(_0x6cbfx1a7);
                this.handlePlayStart();
            } else {
                _logger.error('Callback Methods were not provided.');
            }
        };
        this.handleAdLoaded = function(_0x6cbfx1d7) {
            var _0x6cbfx1d4 = _timespan.timeInMillisecond();
            var _0x6cbfx1d8 = {
                'currentLogTime': _0x6cbfx18e * 1000,
            };
            _0x6cbfx1d7.startPos = _0x6cbfx1bc();
            _stateMachine.moveToState(stateEnum.adState, _0x6cbfx1d8, _0x6cbfx1d7);
        };
        this.handleAdStarted = function(_0x6cbfx1d9) {
            var _0x6cbfxfa = _stateMachine.getCurrentMediaState();
            if ('ad' === _0x6cbfxfa.getState()) {
                var _0x6cbfx1da = {
                    event: 'adStartup',
                    updateParams: _0x6cbfx1d9,
                };
                _0x6cbfxfa.updateState(_0x6cbfx1da);
            } else {
                _logger.debug('Rejecting handleAdStarted event not in Ad state now');
            }
        };
        this.handleAdFirstQuartile = function() {
            var _0x6cbfxfa = _stateMachine.getCurrentMediaState();
            if ('ad' === _0x6cbfxfa.getState()) {
                var _0x6cbfx1da = {
                    event: 'adFirstQuartile',
                };
                _0x6cbfxfa.updateState(_0x6cbfx1da);
            } else {
                _logger.debug('Rejecting handleAdFirstQuartile event not in Ad state now');
            }
        };
        this.handleAdMidPoint = function() {
            var _0x6cbfxfa = _stateMachine.getCurrentMediaState();
            if ('ad' === _0x6cbfxfa.getState()) {
                var _0x6cbfx1da = {
                    event: 'adMidPoint',
                };
                _0x6cbfxfa.updateState(_0x6cbfx1da);
            } else {
                _logger.debug('Rejecting handleAdMidPoint event not in Ad state now');
            }
        };
        this.handleAdThirdQuartile = function() {
            var _0x6cbfxfa = _stateMachine.getCurrentMediaState();
            if ('ad' === _0x6cbfxfa.getState()) {
                var _0x6cbfx1da = {
                    event: 'adThirdQuartile',
                };
                _0x6cbfxfa.updateState(_0x6cbfx1da);
            } else {
                _logger.debug('Rejecting handleAdThirdQuartile event not in Ad state now');
            }
        };
        this.handleAdComplete = function() {
            var _0x6cbfxfa = _stateMachine.getCurrentMediaState();
            if ('ad' === _0x6cbfxfa.getState()) {
                var _0x6cbfx1da = {
                    event: 'adCompleted',
                };
                _0x6cbfxfa.updateState(_0x6cbfx1da);
            } else {
                _logger.debug('Rejecting handleAdComplete event not in Ad state now');
            }
        };
        this.handleAdSkipped = function() {
            var _0x6cbfxfa = _stateMachine.getCurrentMediaState();
            if ('ad' === _0x6cbfxfa.getState()) {
                var _0x6cbfx1da = {
                    event: 'adStopped',
                };
                _0x6cbfxfa.updateState(_0x6cbfx1da);
            } else {
                _logger.debug('Rejecting handleAdSkipped event not in Ad state now');
            }
        };
        this.handleAdError = function() {
            var _0x6cbfxfa = _stateMachine.getCurrentMediaState();
            if ('ad' === _0x6cbfxfa.getState()) {
                var _0x6cbfx1da = {
                    event: 'adError',
                };
                _0x6cbfxfa.updateState(_0x6cbfx1da);
            } else {
                _logger.debug('Rejecting handleAdError event not in Ad state now');
            }
        };
        function _0x6cbfx1db() {
            try {
                if (_typeUtils.isValid(_stateMachine)) {
                    _stateMachine = null;
                }
                if (_typeUtils.isValid(_dictionary)) {
                    _dictionary = null;
                }
                if (_typeUtils.isValid(_0x6cbfx187)) {
                    clearInterval(_0x6cbfx187);
                }
                if (_typeUtils.isValid(_0x6cbfx188)) {
                    clearInterval(_0x6cbfx188);
                }
                _evtDispatcher.unregisterFromEvent(_0x6cbfx4f.Sleep);
                _evtDispatcher.unregisterFromEvent(_0x6cbfx4f.Rebuffer);
                _evtDispatcher = null;
                if (_typeUtils.isValid(_dataStore)) {
                    var _0x6cbfx1dc = _dataStore.getCustomMetricsData();
                    _0x6cbfx1dc.removeAll();
                }
                _0x6cbfx188 = null;
                _0x6cbfx186 = false;
                _0x6cbfx187 = null;
                _0x6cbfx188 = null;
                _0x6cbfx18b = null;
                _0x6cbfx18c = null;
                _0x6cbfx196 = 0;
                _0x6cbfx18e = null;
                _xmlParser.clearSendOnceInfo();
            } catch (e) {
                _logger.error('cleanupSession : exception occurred ' + e);
            }
        }
        function _0x6cbfx1dd() {
            if (_typeUtils.isValid(_logger)) {
                _logger = null;
            }
        }
        this.handleVisit = function() {
            try {
                _0x6cbfx1de();
            } catch (e) {
                _logger.error('handleVisit : exception occurred ' + e);
            }
        };
        function _0x6cbfx1de() {
            try {
                _viewMetrics.stopVisitSession();
                _0x6cbfx17d = 'V';
                _0x6cbfx151.accept(_0x6cbfx194);
                var _0x6cbfx1df = _0x6cbfx150.getFactory().getDataStore(DataStoreFactoryEnum.beaconDataStore);
                _0x6cbfx1df.visit(_0x6cbfx194);
                _0x6cbfx1b3(_0x6cbfx1e3.VMetric);
                _0x6cbfx13d = null;
                _viewMetrics = null;
            } catch (e) {
                _logger.error('handleVisitCompletion : exception occurred ' + e);
            }
        }
        function _0x6cbfx1e0(_0x6cbfxfe) {
            try {
                var _0x6cbfxe0 = _0x6cbfx1bc();
                var _0x6cbfx114 = {
                    'streamHeadPosition': _0x6cbfxe0,
                };
                var _0x6cbfx1d1 = {
                    'endReasonCode': _0x6cbfxfe,
                };
                _stateMachine.moveToState(stateEnum.endState, _0x6cbfx114, _0x6cbfx1d1);
                var _0x6cbfx121 = _dataStore.getMetricsData();
                _stateMachine.updateIteratorDataForAllState();
                _stateMachine.accept(_0x6cbfx193);
                _stateMachine.accept(_0x6cbfx194);
                if (_typeUtils.isValid(_0x6cbfx19a)) {
                    _0x6cbfx19a.accept(_0x6cbfx150.getFactory().getDataStore(DataStoreFactoryEnum.networkDataStore));
                }
                _dataStore.printDataStore();
                _0x6cbfx17d = 'C';
                _0x6cbfx151.accept(_0x6cbfx194);
                _0x6cbfx1b3(_0x6cbfx1e3.CMetric);
            } catch (e) {
                _logger.error('handlePlayCompletion : exception occurred ' + e);
            }
        }
        this.sdkVersion = function() {
            return _0x6cbfx17a;
        };
        this.handleApplicationExit = function() {
            try {
                if (_0x6cbfx186 === false) {
                    return;
                }
                _0x6cbfx1e0('Application.Close');
                _0x6cbfx1de();
                var _0x6cbfx1c5 = {
                    methodName: 'handleApplicationExit',
                };
                _diagnoser.processLogs({
                    api: 'reportAPI',
                    value: _0x6cbfx1c5,
                });
                _0x6cbfx1db();
                if (_typeUtils.isValid(_dataStore)) {
                    _dataStore = null;
                }
                if (_typeUtils.isValid(_0x6cbfx182)) {
                    _0x6cbfx182 = null;
                }
                if (_typeUtils.isValid(_0x6cbfx183)) {
                    _0x6cbfx183 = null;
                }
                if (_typeUtils.isValid(_xmlParser)) {
                    _xmlParser = null;
                }
                _0x6cbfx189 = false;
                _0x6cbfx1dd();
            } catch (e) {
                _logger.error('handleApplicationExit : exception occurred ' + e);
            }
        };
        this.setDebugLogging = function(enable) {
            if (_typeUtils.isValid(_logger)) {
                _logger.enableDebugLogging(enable);
            }
        };
        this.enableLocation = function() {
            try {
                if (!_0x6cbfx19d) {
                    _0x6cbfx19d = true;
                }
                if (!_typeUtils.isValid(_0x6cbfx199)) {
                    _0x6cbfx199 = new amaEventDispatcher();
                    _0x6cbfx19a = new amaEventHandler();
                    _0x6cbfx199.registerForEvent(_0x6cbfx21e.Location, _0x6cbfx19a.locationStatsChanged.bind(_0x6cbfx19a));
                }
            } catch (e) {
                _logger.error('enableLocation : exception occurred ' + e);
            }
        };
        this.disableLocation = function() {
            try {
                _0x6cbfx19d = false;
                if (_0x6cbfx199) {
                    _0x6cbfx199.unregisterFromEvent(_0x6cbfx21e.Location);
                    _0x6cbfx199 = null;
                    _0x6cbfx19a = null;
                }
            } catch (e) {
                _logger.error('disableLocation : exception occurred ' + e);
            }
        };
        this.logMessage = function(_0x6cbfx1e2, _0x6cbfx7) {
            _logger.log(_0x6cbfx1e2, _0x6cbfx7);
        };
        var _0x6cbfx1e3 = {
            IMetric: 'init',
            SMetric: 'playStart',
            PMetric: 'playing',
            CMetric: 'complete',
            EMetric: 'error',
            VMetric: 'visit',
            HMetric: 'heartBeat',
            FMetric: 'feedback',
            UDMetric: 'uniqueDimensions',
        };
        function amaDataStore() {
            var _0x6cbfx1e4 = 0;
            var _0x6cbfx1e5 = new amaDictionary();
            var _0x6cbfx50 = new amaDictionary();
            this.vist = function(_0x6cbfx17e) {
                if (_typeUtils.isValid(_0x6cbfx17e) && _typeUtils.isInstanceOf(_0x6cbfx17e, Object)) {}
            };
            this.getILineData = function(_0x6cbfx185) {
                var _0x6cbfx1e6 = '';
                if (_typeUtils.isObject(_0x6cbfx185)) {
                    _0x6cbfx1e5.addUpdate('eventCode', 'I');
                    _0x6cbfx1e6 = _0x6cbfx1e7(_0x6cbfx1e3.IMetric, _0x6cbfx185);
                    _logger.debug('Beacon String (Before encoding) : ' + _0x6cbfx1e6);
                    _0x6cbfx1e6 = _xhrHelper.encodeMetricString(_0x6cbfx1e6);
                    _logger.debug('Beacon String (After encoding) : ' + _0x6cbfx1e6);
                }
                return _0x6cbfx1e6;
            };
            this.getSLineData = function(_0x6cbfx185) {
                var _0x6cbfx1e6 = '';
                if (_typeUtils.isObject(_0x6cbfx185)) {
                    _0x6cbfx1e5.addUpdate('eventCode', 'S');
                    _0x6cbfx1e6 = _0x6cbfx1e7(_0x6cbfx1e3.SMetric + ';' + _0x6cbfx1e3.UDMetric, _0x6cbfx185);
                    _logger.debug('Beacon String (Before encoding) : ' + _0x6cbfx1e6);
                    _0x6cbfx1e6 = _xhrHelper.encodeMetricString(_0x6cbfx1e6);
                    _logger.debug('Beacon String (After encoding) : ' + _0x6cbfx1e6);
                }
                return _0x6cbfx1e6;
            };
            this.getPLineData = function(_0x6cbfx185) {
                var _0x6cbfx1e6 = '';
                if (_typeUtils.isObject(_0x6cbfx185)) {
                    _0x6cbfx1e5.addUpdate('eventCode', 'P');
                    _0x6cbfx1e6 = _0x6cbfx1e7(_0x6cbfx1e3.PMetric, _0x6cbfx185);
                    _logger.debug('Beacon String (Before encoding) : ' + _0x6cbfx1e6);
                    _0x6cbfx1e6 = _xhrHelper.encodeMetricString(_0x6cbfx1e6);
                    _logger.debug('Beacon String (After encoding) : ' + _0x6cbfx1e6);
                }
                return _0x6cbfx1e6;
            };
            this.getCLineData = function(_0x6cbfx185) {
                var _0x6cbfx1e6 = '';
                if (_typeUtils.isObject(_0x6cbfx185)) {
                    _0x6cbfx1e5.addUpdate('eventCode', 'C');
                    _0x6cbfx1e6 += _0x6cbfx1e7(_0x6cbfx1e3.CMetric + ';' + _0x6cbfx1e3.PMetric, _0x6cbfx185);
                    _logger.debug('Beacon String (Before encoding) : ' + _0x6cbfx1e6);
                    _0x6cbfx1e6 = _xhrHelper.encodeMetricString(_0x6cbfx1e6);
                    _logger.debug('Beacon String (After encoding) : ' + _0x6cbfx1e6);
                }
                return _0x6cbfx1e6;
            };
            this.getELineData = function(_0x6cbfx185) {
                var _0x6cbfx1e6 = '';
                if (_typeUtils.isObject(_0x6cbfx185)) {
                    _0x6cbfx1e5.addUpdate('eventCode', 'E');
                    _0x6cbfx1e6 = _0x6cbfx1e7(_0x6cbfx1e3.EMetric, _0x6cbfx185);
                    _logger.debug('Beacon String (Before encoding) : ' + _0x6cbfx1e6);
                    _0x6cbfx1e6 = _xhrHelper.encodeMetricString(_0x6cbfx1e6);
                    _logger.debug('Beacon String (After encoding) : ' + _0x6cbfx1e6);
                }
                return _0x6cbfx1e6;
            };
            this.getVLineData = function(_0x6cbfx185) {
                var _0x6cbfx1e6 = '';
                if (_typeUtils.isObject(_0x6cbfx185)) {
                    _0x6cbfx1e5.addUpdate('eventCode', 'V');
                    _0x6cbfx1e6 = _0x6cbfx1e7(_0x6cbfx1e3.VMetric, _0x6cbfx185);
                    _logger.debug('Beacon String (Before encoding) : ' + _0x6cbfx1e6);
                    _0x6cbfx1e6 = _xhrHelper.encodeMetricString(_0x6cbfx1e6);
                    _logger.debug('Beacon String (After encoding) : ' + _0x6cbfx1e6);
                }
                return _0x6cbfx1e6;
            };
            this.generateLineData = function(_0x6cbfx1b2, _0x6cbfx185) {
                _logger.debug('Data store key values while generating line data for ' + _0x6cbfx1b2);
                this.printDataStore();
                var _0x6cbfx1e6 = '';
                if (_typeUtils.isObject(_0x6cbfx185)) {
                    var _0x6cbfx4f = _0x6cbfx1e9(_0x6cbfx1b2);
                    if (_0x6cbfx4f.length !== 0) {
                        _0x6cbfx1e5.addUpdate('eventCode', _0x6cbfx4f);
                        if (_0x6cbfx1e3.EMetric === _0x6cbfx1b2 || _0x6cbfx1e3.CMetric === _0x6cbfx1b2) {
                            _0x6cbfx1b2 = _0x6cbfx1b2 + ';' + _0x6cbfx1e3.PMetric;
                        }
                        _0x6cbfx1e6 = _0x6cbfx1e7(_0x6cbfx1b2, _0x6cbfx185);
                        _logger.debug('Beacon String (Before encoding) : ' + _0x6cbfx1e6);
                        _0x6cbfx1e6 = _xhrHelper.encodeMetricString(_0x6cbfx1e6);
                        _logger.debug('Beacon String (After encoding) : ' + _0x6cbfx1e6);
                    }
                }
                return _0x6cbfx1e6;
            };
            function _0x6cbfx1e7(_0x6cbfx1b2, _0x6cbfx185) {
                var _0x6cbfx51 = '';
                if (_typeUtils.isString(_0x6cbfx1b2) && _typeUtils.isObject(_0x6cbfx185)) {
                    _0x6cbfx1e5.addUpdate('sequenceId', _0x6cbfx1e4.toString());
                    var _0x6cbfx1e8 = _0x6cbfx150.getFactory().getDataStore(DataStoreFactoryEnum.beaconDataStore);
                    _0x6cbfx51 = _0x6cbfx185.getbeaconStringFromMetrics(_0x6cbfx1b2, _0x6cbfx1e8.getDataStore(), _0x6cbfx50);
                    _0x6cbfx1e4++;
                }
                return _0x6cbfx51;
            }
            this.getMetricsData = function() {
                return _0x6cbfx1e5;
            };
            this.getCustomMetricsData = function() {
                return _0x6cbfx50;
            };
            this.addCustomMetric = function(_0x6cbfx1b, _0x6cbfx65) {
                if (_typeUtils.isObject(_0x6cbfx50) && _typeUtils.isString(_0x6cbfx1b) && _typeUtils.isString(_0x6cbfx65)) {
                    _0x6cbfx50.addUpdate(_0x6cbfx1b, _0x6cbfx65);
                    if ('eventName' === _0x6cbfx1b && !_0x6cbfx50.isExist('title')) {
                        _0x6cbfx50.addUpdate('title', _0x6cbfx65);
                    } else {
                        if ('title' === _0x6cbfx1b && !_0x6cbfx50.isExist('eventName')) {
                            _0x6cbfx50.addUpdate('eventName', _0x6cbfx65);
                        }
                    }
                }
            };
            this.updateMetricData = function(_0x6cbfx1b, _0x6cbfx65) {
                if (_typeUtils.isObject(_0x6cbfx1e5) && _typeUtils.isString(_0x6cbfx1b) && _typeUtils.isString(_0x6cbfx65)) {
                    _0x6cbfx1e5.addUpdate(_0x6cbfx1b, _0x6cbfx65);
                }
            };
            this.resetCustomMetricsData = function() {
                _0x6cbfx50.removeAll();
            };
            this.resetAllData = function() {
                _0x6cbfx1e5.removeAll();
                _0x6cbfx50.removeAll();
                _0x6cbfx1e4 = 0;
            };
            function _0x6cbfx1e9(_0x6cbfx1b2) {
                var _0x6cbfx4f = '';
                if (_0x6cbfx1b2 === _0x6cbfx1e3.IMetric) {
                    _0x6cbfx4f = 'I';
                } else {
                    if (_0x6cbfx1b2 === _0x6cbfx1e3.SMetric) {
                        _0x6cbfx4f = 'S';
                    } else {
                        if (_0x6cbfx1b2 === _0x6cbfx1e3.PMetric) {
                            _0x6cbfx4f = 'P';
                        } else {
                            if (_0x6cbfx1b2 === _0x6cbfx1e3.CMetric) {
                                _0x6cbfx4f = 'C';
                            } else {
                                if (_0x6cbfx1b2 === _0x6cbfx1e3.EMetric) {
                                    _0x6cbfx4f = 'E';
                                } else {
                                    if (_0x6cbfx1b2 === _0x6cbfx1e3.VMetric) {
                                        _0x6cbfx4f = 'V';
                                    } else {
                                        if (_0x6cbfx1b2 === _0x6cbfx1e3.HMetric) {
                                            _0x6cbfx4f = 'H';
                                        } else {
                                            if (_0x6cbfx1b2 === _0x6cbfx1e3.FMetric) {
                                                _0x6cbfx4f = 'F';
                                            } else {
                                                _logger.error('Unsupported beaconType : ' + _0x6cbfx1b2);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return _0x6cbfx4f;
            }
            this.printDataStore = function() {
                _logger.debug('Current values in data stores are ... ');
                var _0x6cbfx161 = _0x6cbfx1e5.getDictionary();
                for (var _0x6cbfx10d in _0x6cbfx161) {
                    _logger.debug(_0x6cbfx10d + ':' + _0x6cbfx161[_0x6cbfx10d]);
                }
                _logger.debug('Current values in custom data metrics are ... ');
                var _0x6cbfx1ea = _0x6cbfx50.getDictionary();
                for (var _0x6cbfx10d in _0x6cbfx1ea) {
                    _logger.debug(_0x6cbfx10d + ':' + _0x6cbfx1ea[_0x6cbfx10d]);
                }
            };
        }
        function _typeUtils() {}
        _typeUtils.isNan = function(_0x6cbfx1ec) {
            var _0x6cbfx1ed = false;
            if (typeof _0x6cbfx1ec !== 'undefined' && _0x6cbfx1ec !== null && _typeUtils.isNumber(_0x6cbfx1ec)) {
                if (_0x6cbfx1ec !== _0x6cbfx1ec) {
                    _0x6cbfx1ed = true;
                }
            }
            return _0x6cbfx1ed;
        };
        _typeUtils.isInfinite = function(_0x6cbfx1ec) {
            var _0x6cbfx1ee = false;
            if (typeof _0x6cbfx1ec !== 'undefined' && _0x6cbfx1ec !== null && _typeUtils.isNumber(_0x6cbfx1ec)) {
                if (_0x6cbfx1ec === _0x6cbfx1ec / 0) {
                    _0x6cbfx1ee = true;
                }
            }
            return _0x6cbfx1ee;
        };
        _typeUtils.isNumber = function(_0x6cbfx1ec) {
            var _0x6cbfx1ef = false;
            if (typeof _0x6cbfx1ec !== 'undefined' && _0x6cbfx1ec !== null) {
                if (typeof _0x6cbfx1ec == 'number' || (typeof _0x6cbfx1ec == 'object' && _0x6cbfx1ec.constructor === Number)) {
                    _0x6cbfx1ef = true;
                }
            }
            return _0x6cbfx1ef;
        };
        _typeUtils.isInteger = function(_0x6cbfx1ec) {
            var _0x6cbfx1f0 = false;
            if (typeof _0x6cbfx1ec !== 'undefined' && _0x6cbfx1ec !== null) {
                if (_typeUtils.isNumber(_0x6cbfx1ec) && !_typeUtils.isInfinite(_0x6cbfx1ec) && !_typeUtils.isNan(_0x6cbfx1ec)) {
                    if (_0x6cbfx1ec % 1 === 0) {
                        _0x6cbfx1f0 = true;
                    }
                }
            }
            return _0x6cbfx1f0;
        };
        _typeUtils.isFloat = function(_0x6cbfx1ec) {
            var _0x6cbfx1f0 = false;
            if (typeof _0x6cbfx1ec !== 'undefined' && _0x6cbfx1ec !== null) {
                if (_typeUtils.isNumber(_0x6cbfx1ec) && !_typeUtils.isInfinite(_0x6cbfx1ec) && !_typeUtils.isNan(_0x6cbfx1ec)) {
                    if (_0x6cbfx1ec % 1 !== 0) {
                        _0x6cbfx1f0 = true;
                    }
                }
            }
            return _0x6cbfx1f0;
        };
        _typeUtils.isString = function(_0x6cbfx81) {
            var _0x6cbfx1f1 = false;
            if (typeof _0x6cbfx81 !== 'undefined' && _0x6cbfx81 !== null) {
                if (typeof _0x6cbfx81 == 'string' || (typeof _0x6cbfx81 == 'object' && _0x6cbfx81.constructor === String)) {
                    _0x6cbfx1f1 = true;
                }
            }
            return _0x6cbfx1f1;
        };
        _typeUtils.isArray = function(_0x6cbfx56) {
            var _0x6cbfx1f2 = false;
            if (typeof _0x6cbfx56 !== 'undefined' && _0x6cbfx56 !== null) {
                if (_0x6cbfx56.constructor === Array) {
                    _0x6cbfx1f2 = true;
                }
            }
            return _0x6cbfx1f2;
        };
        _typeUtils.isObject = function(_0x6cbfx72) {
            var _0x6cbfx1f3 = false;
            if (typeof _0x6cbfx72 !== 'undefined' && _0x6cbfx72 !== null) {
                if (typeof _0x6cbfx72 === 'object') {
                    _0x6cbfx1f3 = true;
                }
            }
            return _0x6cbfx1f3;
        };
        _typeUtils.isInstanceOf = function(_0x6cbfx72, _0x6cbfx7) {
            var _0x6cbfx1f4 = false;
            if (typeof _0x6cbfx72 !== 'undefined' && _0x6cbfx72 !== null && typeof _0x6cbfx7 !== 'undefined' && _0x6cbfx7 !== null) {
                if (_0x6cbfx72 instanceof _0x6cbfx7 || _0x6cbfx72.constructor.name === _0x6cbfx7.name) {
                    _0x6cbfx1f4 = true;
                }
            }
            return _0x6cbfx1f4;
        };
        _typeUtils.variableType = function(_0x6cbfx1f5) {
            var _0x6cbfx1f6 = '';
            if (typeof _0x6cbfx1f5 !== 'undefined' && _0x6cbfx1f5 !== null) {
                _0x6cbfx1f6 = _0x6cbfx1f5.constructor.name;
            }
            return _0x6cbfx1f6;
        };
        _typeUtils.isValid = function(input) {
            var _valid = false;
            if (typeof input !== 'undefined' && input !== null) {
                _valid = true;
            }
            return _valid;
        };
        _typeUtils.isFunction = function(_0x6cbfx1f7) {
            if (!_typeUtils.isValid(_0x6cbfx1f7)) {
                return false;
            }
            if (typeof _0x6cbfx1f7 === 'function') {
                return true;
            }
            return false;
        };
        function _0x6cbfx1f8() {
            var _0x6cbfx1f9 = _0x6cbfx1f9 || function(_0x6cbfx1fa, _0x6cbfx59) {
                var _0x6cbfx1fb = {},
                    _0x6cbfx1fc = _0x6cbfx1fb.lib = {},
                    _0x6cbfx1fd = _0x6cbfx1fc.Base = function() {
                        function _0x6cbfx201() {}
                        return {
                            extend: function(_0x6cbfx202) {
                                _0x6cbfx201.prototype = this;
                                var _0x6cbfx16f = new _0x6cbfx201;
                                _0x6cbfx202 && _0x6cbfx16f.mixIn(_0x6cbfx202);
                                _0x6cbfx16f.$super = this;
                                return _0x6cbfx16f;
                            },
                            create: function() {
                                var _0x6cbfx201 = this.extend();
                                _0x6cbfx201.init.apply(_0x6cbfx201, arguments);
                                return _0x6cbfx201;
                            },
                            init: function() {},
                            mixIn: function(_0x6cbfx201) {
                                for (var _0x6cbfx16f in _0x6cbfx201) {
                                    _0x6cbfx201.hasOwnProperty(_0x6cbfx16f) && (this[_0x6cbfx16f] = _0x6cbfx201[_0x6cbfx16f]);
                                }
                                _0x6cbfx201.hasOwnProperty('toString') && (this.toString = _0x6cbfx201.toString);
                            },
                            clone: function() {
                                return this.$super.extend(this);
                            },
                        };
                    }(),
                    _0x6cbfx1fe = _0x6cbfx1fc.WordArray = _0x6cbfx1fd.extend({
                        init: function(_0x6cbfx201, _0x6cbfx202) {
                            _0x6cbfx201 = this.words = _0x6cbfx201 || [];
                            this.sigBytes = _0x6cbfx202 != _0x6cbfx59 ? _0x6cbfx202 : 4 * _0x6cbfx201.length;
                        },
                        toString: function(_0x6cbfx201) {
                            return (_0x6cbfx201 || _0x6cbfx16e).stringify(this);
                        },
                        concat: function(_0x6cbfx201) {
                            var _0x6cbfx202 = this.words,
                                _0x6cbfx16f = _0x6cbfx201.words,
                                _0x6cbfx203 = this.sigBytes,
                                _0x6cbfx201 = _0x6cbfx201.sigBytes;
                            this.clamp();
                            if (_0x6cbfx203 % 4) {
                                for (var _0x6cbfx1fc = 0; _0x6cbfx1fc < _0x6cbfx201; _0x6cbfx1fc++) {
                                    _0x6cbfx202[_0x6cbfx203 + _0x6cbfx1fc >>> 2] |= (_0x6cbfx16f[_0x6cbfx1fc >>> 2] >>> 24 - 8 * (_0x6cbfx1fc % 4) & 255) << 24 - 8 * ((_0x6cbfx203 + _0x6cbfx1fc) % 4);
                                }
                            } else {
                                if (65535 < _0x6cbfx16f.length) {
                                    for (_0x6cbfx1fc = 0; _0x6cbfx1fc < _0x6cbfx201; _0x6cbfx1fc += 4) {
                                        _0x6cbfx202[_0x6cbfx203 + _0x6cbfx1fc >>> 2] = _0x6cbfx16f[_0x6cbfx1fc >>> 2];
                                    }
                                } else {
                                    _0x6cbfx202.push.apply(_0x6cbfx202, _0x6cbfx16f);
                                }
                            }
                            this.sigBytes += _0x6cbfx201;
                            return this;
                        },
                        clamp: function() {
                            var _0x6cbfx201 = this.words,
                                _0x6cbfx202 = this.sigBytes;
                            _0x6cbfx201[_0x6cbfx202 >>> 2] &= 4294967295 << 32 - 8 * (_0x6cbfx202 % 4);
                            _0x6cbfx201.length = _0x6cbfx1fa.ceil(_0x6cbfx202 / 4);
                        },
                        clone: function() {
                            var _0x6cbfx201 = _0x6cbfx1fd.clone.call(this);
                            _0x6cbfx201.words = this.words.slice(0);
                            return _0x6cbfx201;
                        },
                        random: function(_0x6cbfx201) {
                            for (var _0x6cbfx202 = [], _0x6cbfx16f = 0; _0x6cbfx16f < _0x6cbfx201; _0x6cbfx16f += 4) {
                                _0x6cbfx202.push(4294967296 * _0x6cbfx1fa.random() | 0);
                            }
                            return _0x6cbfx1fe.create(_0x6cbfx202, _0x6cbfx201);
                        },
                    }),
                    _0x6cbfx1ff = _0x6cbfx1fb.enc = {},
                    _0x6cbfx16e = _0x6cbfx1ff.Hex = {
                        stringify: function(_0x6cbfx201) {
                            for (var _0x6cbfx202 = _0x6cbfx201.words, _0x6cbfx201 = _0x6cbfx201.sigBytes, _0x6cbfx16f = [], _0x6cbfx1fc = 0; _0x6cbfx1fc < _0x6cbfx201; _0x6cbfx1fc++) {
                                var _0x6cbfx16e = _0x6cbfx202[_0x6cbfx1fc >>> 2] >>> 24 - 8 * (_0x6cbfx1fc % 4) & 255;
                                _0x6cbfx16f.push((_0x6cbfx16e >>> 4).toString(16));
                                _0x6cbfx16f.push((_0x6cbfx16e & 15).toString(16));
                            }
                            return _0x6cbfx16f.join('');
                        },
                        parse: function(_0x6cbfx201) {
                            for (var _0x6cbfx202 = _0x6cbfx201.length, _0x6cbfx16f = [], _0x6cbfx1fc = 0; _0x6cbfx1fc < _0x6cbfx202; _0x6cbfx1fc += 2) {
                                _0x6cbfx16f[_0x6cbfx1fc >>> 3] |= parseInt(_0x6cbfx201.substr(_0x6cbfx1fc, 2), 16) << 24 - 4 * (_0x6cbfx1fc % 8);
                            }
                            return _0x6cbfx1fe.create(_0x6cbfx16f, _0x6cbfx202 / 2);
                        },
                    },
                    _0x6cbfx5a = _0x6cbfx1ff.Latin1 = {
                        stringify: function(_0x6cbfx201) {
                            for (var _0x6cbfx202 = _0x6cbfx201.words, _0x6cbfx201 = _0x6cbfx201.sigBytes, _0x6cbfx1fc = [], _0x6cbfx16e = 0; _0x6cbfx16e < _0x6cbfx201; _0x6cbfx16e++) {
                                _0x6cbfx1fc.push(String.fromCharCode(_0x6cbfx202[_0x6cbfx16e >>> 2] >>> 24 - 8 * (_0x6cbfx16e % 4) & 255));
                            }
                            return _0x6cbfx1fc.join('');
                        },
                        parse: function(_0x6cbfx201) {
                            for (var _0x6cbfx1fc = _0x6cbfx201.length, _0x6cbfx16f = [], _0x6cbfx16e = 0; _0x6cbfx16e < _0x6cbfx1fc; _0x6cbfx16e++) {
                                _0x6cbfx16f[_0x6cbfx16e >>> 2] |= (_0x6cbfx201.charCodeAt(_0x6cbfx16e) & 255) << 24 - 8 * (_0x6cbfx16e % 4);
                            }
                            return _0x6cbfx1fe.create(_0x6cbfx16f, _0x6cbfx1fc);
                        },
                    },
                    _0x6cbfxe7 = _0x6cbfx1ff.Utf8 = {
                        stringify: function(_0x6cbfx201) {
                            try {
                                return decodeURIComponent(escape(_0x6cbfx5a.stringify(_0x6cbfx201)));
                            } catch (_0x6cbfx1fc) {
                                throw Error('Malformed UTF-8 data');
                            }
                        },
                        parse: function(_0x6cbfx201) {
                            return _0x6cbfx5a.parse(unescape(encodeURIComponent(_0x6cbfx201)));
                        },
                    },
                    _0x6cbfx200 = _0x6cbfx1fc.BufferedBlockAlgorithm = _0x6cbfx1fd.extend({
                        reset: function() {
                            this._data = _0x6cbfx1fe.create();
                            this._nDataBytes = 0;
                        },
                        _append: function(_0x6cbfx201) {
                            'string' == typeof _0x6cbfx201 && (_0x6cbfx201 = _0x6cbfxe7.parse(_0x6cbfx201));
                            this._data.concat(_0x6cbfx201);
                            this._nDataBytes += _0x6cbfx201.sigBytes;
                        },
                        _process: function(_0x6cbfx201) {
                            var _0x6cbfx1fc = this._data,
                                _0x6cbfx16f = _0x6cbfx1fc.words,
                                _0x6cbfx16e = _0x6cbfx1fc.sigBytes,
                                _0x6cbfx5a = this.blockSize,
                                _0x6cbfx200 = _0x6cbfx16e / (4 * _0x6cbfx5a),
                                _0x6cbfx200 = _0x6cbfx201 ? _0x6cbfx1fa.ceil(_0x6cbfx200) : _0x6cbfx1fa.max((_0x6cbfx200 | 0) - this._minBufferSize, 0),
                                _0x6cbfx201 = _0x6cbfx200 * _0x6cbfx5a,
                                _0x6cbfx16e = _0x6cbfx1fa.min(4 * _0x6cbfx201, _0x6cbfx16e);
                            if (_0x6cbfx201) {
                                for (var _0x6cbfx1fb = 0; _0x6cbfx1fb < _0x6cbfx201; _0x6cbfx1fb += _0x6cbfx5a) {
                                    this._doProcessBlock(_0x6cbfx16f, _0x6cbfx1fb);
                                }
                                _0x6cbfx1fb = _0x6cbfx16f.splice(0, _0x6cbfx201);
                                _0x6cbfx1fc.sigBytes -= _0x6cbfx16e;
                            }
                            return _0x6cbfx1fe.create(_0x6cbfx1fb, _0x6cbfx16e);
                        },
                        clone: function() {
                            var _0x6cbfx201 = _0x6cbfx1fd.clone.call(this);
                            _0x6cbfx201._data = this._data.clone();
                            return _0x6cbfx201;
                        },
                        _minBufferSize: 0,
                    });
                _0x6cbfx1fc.Hasher = _0x6cbfx200.extend({
                    init: function() {
                        this.reset();
                    },
                    reset: function() {
                        _0x6cbfx200.reset.call(this);
                        this._doReset();
                    },
                    update: function(_0x6cbfx201) {
                        this._append(_0x6cbfx201);
                        this._process();
                        return this;
                    },
                    finalize: function(_0x6cbfx201) {
                        _0x6cbfx201 && this._append(_0x6cbfx201);
                        this._doFinalize();
                        return this._hash;
                    },
                    clone: function() {
                        var _0x6cbfx201 = _0x6cbfx200.clone.call(this);
                        _0x6cbfx201._hash = this._hash.clone();
                        return _0x6cbfx201;
                    },
                    blockSize: 16,
                    _createHelper: function(_0x6cbfx201) {
                        return function(_0x6cbfx1fc, _0x6cbfx16f) {
                            return _0x6cbfx201.create(_0x6cbfx16f).finalize(_0x6cbfx1fc);
                        };
                    },
                    _createHmacHelper: function(_0x6cbfx201) {
                        return function(_0x6cbfx1fc, _0x6cbfx16f) {
                            return _0x6cbfx204.HMAC.create(_0x6cbfx201, _0x6cbfx16f).finalize(_0x6cbfx1fc);
                        };
                    },
                });
                var _0x6cbfx204 = _0x6cbfx1fb.algo = {};
                return _0x6cbfx1fb;
            }(Math);
            (function() {
                var _0x6cbfx1fa = _0x6cbfx1f9,
                    _0x6cbfx59 = _0x6cbfx1fa.lib,
                    _0x6cbfx1fb = _0x6cbfx59.WordArray,
                    _0x6cbfx59 = _0x6cbfx59.Hasher,
                    _0x6cbfx1fc = [],
                    _0x6cbfx1fd = _0x6cbfx1fa.algo.SHA1 = _0x6cbfx59.extend({
                        _doReset: function() {
                            this._hash = _0x6cbfx1fb.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
                        },
                        _doProcessBlock: function(_0x6cbfx1fb, _0x6cbfx1ff) {
                            for (var _0x6cbfx16e = this._hash.words, _0x6cbfx5a = _0x6cbfx16e[0], _0x6cbfxe7 = _0x6cbfx16e[1], _0x6cbfx200 = _0x6cbfx16e[2], _0x6cbfx1fa = _0x6cbfx16e[3], _0x6cbfx201 = _0x6cbfx16e[4], _0x6cbfx202 = 0; 80 > _0x6cbfx202; _0x6cbfx202++) {
                                if (16 > _0x6cbfx202) {
                                    _0x6cbfx1fc[_0x6cbfx202] = _0x6cbfx1fb[_0x6cbfx1ff + _0x6cbfx202] | 0;
                                } else {
                                    var _0x6cbfx16f = _0x6cbfx1fc[_0x6cbfx202 - 3] ^ _0x6cbfx1fc[_0x6cbfx202 - 8] ^ _0x6cbfx1fc[_0x6cbfx202 - 14] ^ _0x6cbfx1fc[_0x6cbfx202 - 16];
                                    _0x6cbfx1fc[_0x6cbfx202] = _0x6cbfx16f << 1 | _0x6cbfx16f >>> 31;
                                }
                                _0x6cbfx16f = (_0x6cbfx5a << 5 | _0x6cbfx5a >>> 27) + _0x6cbfx201 + _0x6cbfx1fc[_0x6cbfx202];
                                _0x6cbfx16f = 20 > _0x6cbfx202 ? _0x6cbfx16f + ((_0x6cbfxe7 & _0x6cbfx200 | ~_0x6cbfxe7 & _0x6cbfx1fa) + 1518500249) : 40 > _0x6cbfx202 ? _0x6cbfx16f + ((_0x6cbfxe7 ^ _0x6cbfx200 ^ _0x6cbfx1fa) + 1859775393) : 60 > _0x6cbfx202 ? _0x6cbfx16f + ((_0x6cbfxe7 & _0x6cbfx200 | _0x6cbfxe7 & _0x6cbfx1fa | _0x6cbfx200 & _0x6cbfx1fa) - 1894007588) : _0x6cbfx16f + ((_0x6cbfxe7 ^ _0x6cbfx200 ^ _0x6cbfx1fa) - 899497514);
                                _0x6cbfx201 = _0x6cbfx1fa;
                                _0x6cbfx1fa = _0x6cbfx200;
                                _0x6cbfx200 = _0x6cbfxe7 << 30 | _0x6cbfxe7 >>> 2;
                                _0x6cbfxe7 = _0x6cbfx5a;
                                _0x6cbfx5a = _0x6cbfx16f;
                            }
                            _0x6cbfx16e[0] = _0x6cbfx16e[0] + _0x6cbfx5a | 0;
                            _0x6cbfx16e[1] = _0x6cbfx16e[1] + _0x6cbfxe7 | 0;
                            _0x6cbfx16e[2] = _0x6cbfx16e[2] + _0x6cbfx200 | 0;
                            _0x6cbfx16e[3] = _0x6cbfx16e[3] + _0x6cbfx1fa | 0;
                            _0x6cbfx16e[4] = _0x6cbfx16e[4] + _0x6cbfx201 | 0;
                        },
                        _doFinalize: function() {
                            var _0x6cbfx1fc = this._data,
                                _0x6cbfx1fb = _0x6cbfx1fc.words,
                                _0x6cbfx16e = 8 * this._nDataBytes,
                                _0x6cbfx5a = 8 * _0x6cbfx1fc.sigBytes;
                            _0x6cbfx1fb[_0x6cbfx5a >>> 5] |= 128 << 24 - _0x6cbfx5a % 32;
                            _0x6cbfx1fb[(_0x6cbfx5a + 64 >>> 9 << 4) + 15] = _0x6cbfx16e;
                            _0x6cbfx1fc.sigBytes = 4 * _0x6cbfx1fb.length;
                            this._process();
                        },
                    });
                _0x6cbfx1fa.SHA1 = _0x6cbfx59._createHelper(_0x6cbfx1fd);
                _0x6cbfx1fa.HmacSHA1 = _0x6cbfx59._createHmacHelper(_0x6cbfx1fd);
            })();
            (function() {
                var _0x6cbfx1fa = _0x6cbfx1f9,
                    _0x6cbfx59 = _0x6cbfx1fa.enc.Utf8;
                _0x6cbfx1fa.algo.HMAC = _0x6cbfx1fa.lib.Base.extend({
                    init: function(_0x6cbfx1fb, _0x6cbfx1fc) {
                        _0x6cbfx1fb = this._hasher = _0x6cbfx1fb.create();
                        'string' == typeof _0x6cbfx1fc && (_0x6cbfx1fc = _0x6cbfx59.parse(_0x6cbfx1fc));
                        var _0x6cbfx1fa = _0x6cbfx1fb.blockSize,
                            _0x6cbfx1fe = 4 * _0x6cbfx1fa;
                        _0x6cbfx1fc.sigBytes > _0x6cbfx1fe && (_0x6cbfx1fc = _0x6cbfx1fb.finalize(_0x6cbfx1fc));
                        for (var _0x6cbfx1ff = this._oKey = _0x6cbfx1fc.clone(), _0x6cbfx16e = this._iKey = _0x6cbfx1fc.clone(), _0x6cbfx5a = _0x6cbfx1ff.words, _0x6cbfxe7 = _0x6cbfx16e.words, _0x6cbfx200 = 0; _0x6cbfx200 < _0x6cbfx1fa; _0x6cbfx200++) {
                            _0x6cbfx5a[_0x6cbfx200] ^= 1549556828, _0x6cbfxe7[_0x6cbfx200] ^= 909522486;
                        }
                        _0x6cbfx1ff.sigBytes = _0x6cbfx16e.sigBytes = _0x6cbfx1fe;
                        this.reset();
                    },
                    reset: function() {
                        var _0x6cbfx1fb = this._hasher;
                        _0x6cbfx1fb.reset();
                        _0x6cbfx1fb.update(this._iKey);
                    },
                    update: function(_0x6cbfx1fb) {
                        this._hasher.update(_0x6cbfx1fb);
                        return this;
                    },
                    finalize: function(_0x6cbfx1fb) {
                        var _0x6cbfx1fc = this._hasher,
                            _0x6cbfx1fb = _0x6cbfx1fc.finalize(_0x6cbfx1fb);
                        _0x6cbfx1fc.reset();
                        return _0x6cbfx1fc.finalize(this._oKey.clone().concat(_0x6cbfx1fb));
                    },
                });
            })();
            (function() {
                var _0x6cbfx1fa = _0x6cbfx1f9,
                    _0x6cbfx59 = _0x6cbfx1fa.lib,
                    _0x6cbfx1fb = _0x6cbfx59.Base,
                    _0x6cbfx1fc = _0x6cbfx59.WordArray,
                    _0x6cbfx59 = _0x6cbfx1fa.algo,
                    _0x6cbfx1fd = _0x6cbfx59.HMAC,
                    _0x6cbfx1fe = _0x6cbfx59.PBKDF2 = _0x6cbfx1fb.extend({
                        cfg: _0x6cbfx1fb.extend({
                            keySize: 4,
                            hasher: _0x6cbfx59.SHA1,
                            iterations: 1,
                        }),
                        init: function(_0x6cbfx1fc) {
                            this.cfg = this.cfg.extend(_0x6cbfx1fc);
                        },
                        compute: function(_0x6cbfx1fb, _0x6cbfx16e) {
                            for (var _0x6cbfx1fa = this.cfg, _0x6cbfxe7 = _0x6cbfx1fd.create(_0x6cbfx1fa.hasher, _0x6cbfx1fb), _0x6cbfx200 = _0x6cbfx1fc.create(), _0x6cbfx59 = _0x6cbfx1fc.create([1]), _0x6cbfx201 = _0x6cbfx200.words, _0x6cbfx202 = _0x6cbfx59.words, _0x6cbfx16f = _0x6cbfx1fa.keySize, _0x6cbfx1fa = _0x6cbfx1fa.iterations; _0x6cbfx201.length < _0x6cbfx16f;) {
                                var _0x6cbfx1fe = _0x6cbfxe7.update(_0x6cbfx16e).finalize(_0x6cbfx59);
                                _0x6cbfxe7.reset();
                                for (var _0x6cbfx205 = _0x6cbfx1fe.words, _0x6cbfx206 = _0x6cbfx205.length, _0x6cbfx170 = _0x6cbfx1fe, _0x6cbfx112 = 1; _0x6cbfx112 < _0x6cbfx1fa; _0x6cbfx112++) {
                                    _0x6cbfx170 = _0x6cbfxe7.finalize(_0x6cbfx170);
                                    _0x6cbfxe7.reset();
                                    for (var _0x6cbfx207 = _0x6cbfx170.words, _0x6cbfx208 = 0; _0x6cbfx208 < _0x6cbfx206; _0x6cbfx208++) {
                                        _0x6cbfx205[_0x6cbfx208] ^= _0x6cbfx207[_0x6cbfx208];
                                    }
                                }
                                _0x6cbfx200.concat(_0x6cbfx1fe);
                                _0x6cbfx202[0]++;
                            }
                            _0x6cbfx200.sigBytes = 4 * _0x6cbfx16f;
                            return _0x6cbfx200;
                        },
                    });
                _0x6cbfx1fa.PBKDF2 = function(_0x6cbfx1fc, _0x6cbfx16e, _0x6cbfx1fb) {
                    return _0x6cbfx1fe.create(_0x6cbfx1fb).compute(_0x6cbfx1fc, _0x6cbfx16e);
                };
            })();
            this.getViewerDiagnosticsId = function(_0x6cbfx185, _0x6cbfx18b, _0x6cbfxa1, _0x6cbfx18c) {
                var _0x6cbfx209 = null;
                if (_typeUtils.isString(_0x6cbfx18b)) {
                    _0x6cbfx209 = _0x6cbfx18b;
                } else {
                    if (_typeUtils.isString(_0x6cbfxa1)) {
                        _0x6cbfx209 = _0x6cbfxa1;
                    }
                }
                if (_typeUtils.isValid(_0x6cbfx18c)) {
                    return _0x6cbfx18c;
                }
                if (!_typeUtils.isString(_0x6cbfx209) || _0x6cbfx209 === '-') {
                    return;
                }
                var _0x6cbfx20a = '';
                var _0x6cbfx4a = 50;
                var _0x6cbfx20b = 16 * 2;
                _0x6cbfx209 = encodeURIComponent(_0x6cbfx209);
                if (_typeUtils.isValid(_0x6cbfx185)) {
                    var _0x6cbfx20c = _0x6cbfx185.securityInfoDictionary();
                    if (_typeUtils.isValid(_0x6cbfx20c)) {
                        if (_typeUtils.isString(_0x6cbfx20c.value)) {
                            _0x6cbfx20a = _0x6cbfx20c.value;
                        }
                        if (_typeUtils.isString(_0x6cbfx20c.iterations)) {
                            _0x6cbfx4a = _0x6cbfx20c.iterations;
                        }
                        if (_typeUtils.isString(_0x6cbfx20c.bytes)) {
                            _0x6cbfx20b = _0x6cbfx20c.bytes;
                        }
                    }
                }
                try {
                    _0x6cbfx1b = _0x6cbfx1f9.PBKDF2(_0x6cbfx209, _0x6cbfx20a, {
                        keySize: _0x6cbfx20b / 8,
                        iterations: _0x6cbfx4a,
                    });
                } catch (e) {
                    _logger.error('Exception from crypto.js. Exception = ' + e);
                }
                _0x6cbfx18c = _0x6cbfx1b.toString();
                return _0x6cbfx18c;
            };
        }
        function amaEvent(_0x6cbfx4b, _0x6cbfx72) {
            var _0x6cbfx1a6 = '';
            var _0x6cbfx20d = null;
            _0x6cbfx20e(_0x6cbfx4b, _0x6cbfx72);
            this.setEventInformation = function(_0x6cbfx4b, _0x6cbfx72) {
                _0x6cbfx20e(_0x6cbfx4b, _0x6cbfx72);
            };
            this.getEventName = function() {
                return _0x6cbfx1a6;
            };
            this.getObject = function() {
                return _0x6cbfx20d;
            };
            function _0x6cbfx20e(_0x6cbfx4b, _0x6cbfx72) {
                if (_typeUtils.isString(_0x6cbfx4b)) {
                    _0x6cbfx1a6 = _0x6cbfx4b;
                }
                if (_typeUtils.isObject(_0x6cbfx72)) {
                    _0x6cbfx20d = _0x6cbfx72;
                }
            }
        }
        function amaServerIPManager() {
            var _0x6cbfx20f = '';
            var serverIpUrl = '';
            var _serverIpAdress = '';
            var _enabled = true;
            var _path = '/serverip';
            this.setStreamUrl = function(_0x6cbfx214) {
                if (_typeUtils.isString(_0x6cbfx214) && _0x6cbfx214.length > 0 && _0x6cbfx214.indexOf('blob:') === -1) {
                    _0x6cbfx20f = _0x6cbfx214;
                    _0x6cbfx216();
                } else {
                    _logger.debug('Stream URL passed in not correct : ' + _0x6cbfx214);
                }
            };
            this.enableServerIPRequest = function(enable) {
                _enabled = enable;
                if (false === _enabled) {
                    _serverIpAdress = '';
                }
            };
            this.isEnabled = function() {
                return _enabled;
            };
            this.performServerIPCheck = function() {
                if (true === _enabled && serverIpUrl.length > 0) {
                    _xhrHelper.getData(serverIpUrl, setServerIpFromResponse);
                } else {
                    _logger.debug('Server IP check is disabled. Not making the query!');
                }
            };
            this.getServerIPAddress = function() {
                return _serverIpAdress;
            };
            this.accept = function(_0x6cbfx9d) {
                if (_typeUtils.isValid(_0x6cbfx9d)) {
                    _0x6cbfx9d.visit(this);
                } else {
                    _logger.debug('Visitor Object is not valied.');
                }
            };
            function _0x6cbfx216() {
                if (_typeUtils.isString(_0x6cbfx20f) && _0x6cbfx20f.length > 0) {
                    var _0x6cbfx6f = _0x6cbfx20f.match(/^(\w+?:)?\/\/([^\/:]+):?([^\/]+)?(\/[^#?]*)#?([^?]+)?\??(.+)?/);
                    if (!_typeUtils.isValid(_0x6cbfx6f[1])) {
                        _0x6cbfx6f[1] = location.protocol;
                    }
                    serverIpUrl = _0x6cbfx6f[1] + '//' + _0x6cbfx6f[2] + _path;
                } else {
                    _logger.debug('Stream url is not set!');
                }
            }
            function setServerIpFromResponse(xhr) {
                if (_typeUtils.isValid(xhr)) {
                    if (xhr.status === 200 || xhr.status === 0) {
                        var text = xhr.responseText;
                        if (_typeUtils.isString(text) && text.trim()) {
                            var matches = text.match(/<serverip>(.*?)<\/serverip>/);
                            if (_typeUtils.isValid(matches) && _typeUtils.isString(matches[1])) {
                                _serverIpAdress = matches[1];
                            }
                        }
                    } else {
                        if (xhr.status >= 400) {
                            _enabled = false;
                            _logger.debug('Disabling server IP Address look up, response wasn\'t good! Status = ' + xhr.status);
                        }
                    }
                }
            }
            this.accept = function(_0x6cbfx21a) {
                _0x6cbfx21a.visit(this);
            };
            this.iterator = function() {
                return {
                    serverIp: _serverIpAdress,
                };
            };
        }
        function amaBeacon(_0x6cbfx5c) {
            var _0x6cbfx51 = _0x6cbfx5c;
            this.asString = function() {
                return _0x6cbfx51;
            };
        }
        function amaBeaconManager() {
            var _beaconMessages = [];
            this.sendBeacon = function(amaBeaconMsg) {
                _beaconMessages.push(amaBeaconMsg);
                if (_beaconMessages.length === 1) {
                    sendBeaconMessage();
                }
            };
            this.pendingBeaconCount = function(_0x6cbfx5c) {
                return _beaconMessages.length;
            };
            function sendBeaconMessage() {
                _diagnoser.sendMessageAndLog({
                    api: 'reportBeaconData',
                    value: _beaconMessages[0].asString(),
                }, _beaconMessages[0].asString(), 'Beacon');
                _xhrHelper.getData(_beaconMessages[0].asString(), afterSendBeaconMessage);
                _beaconMessages.splice(0, 1);
            }
            function afterSendBeaconMessage(xhr) {
                if (_typeUtils.isValid(xhr)) {
                    if (xhr.readyState === 4) {
                        _logger.debug('Beacon dispatched response ' + xhr.status);
                        if (_beaconMessages.length > 0) {
                            sendBeaconMessage();
                        }
                    }
                }
            }
        }
        var _0x6cbfx21e = {
            Page: 'PageEvents',
            Location: 'LocationEvents',
        };
        function amaEventDispatcher() {
            var _0x6cbfx21f = {};
            var _0x6cbfx220 = null;
            this.registerForEvent = function(_0x6cbfx1a5, _0x6cbfx19a) {
                _0x6cbfx21f[_0x6cbfx1a5] = _0x6cbfx19a;
                switch (_0x6cbfx1a5) {
                case _0x6cbfx21e.Page:
                    _0x6cbfx221();
                    break;
                case _0x6cbfx21e.Location:
                    _0x6cbfx223();
                    break;
                }
            };
            this.unregisterFromEvent = function(_0x6cbfx1a5) {
                delete _0x6cbfx21f[_0x6cbfx1a5];
                switch (_0x6cbfx1a5) {
                case _0x6cbfx21e.Page:
                    _0x6cbfx222();
                    break;
                case _0x6cbfx21e.Location:
                    _0x6cbfx227();
                    break;
                }
            };
            function _0x6cbfx221() {
                if (window.addEventListener) {
                    window.addEventListener('pagehide', handlePageHide, false);
                    window.addEventListener('pageshow', _0x6cbfx22f, false);
                    window.addEventListener('beforeunload', handlePageHide, false);
                } else {
                    if (window.attachEvent) {
                        window.attachEvent('onpagehide', handlePageHide);
                        window.attachEvent('onpageshow', _0x6cbfx22f);
                        window.attachEvent('onbeforeunload', handlePageHide);
                    } else {
                        _logger.debug('Unsupported Browser');
                    }
                }
            }
            function _0x6cbfx222() {
                if (window.removeEventListener) {
                    window.removeEventListener('pagehide', handlePageHide);
                    window.removeEventListener('pageshow', _0x6cbfx22f);
                    window.removeEventListener('beforeunload', handlePageHide);
                } else {
                    if (window.detachEvent) {
                        window.detachEvent('onpagehide', handlePageHide);
                        window.detachEvent('onpageshow', _0x6cbfx22f);
                        window.detachEvent('onbeforeunload', handlePageHide);
                    } else {
                        _logger.debug('Unsupported Browser');
                    }
                }
            }
            function _0x6cbfx223() {
                if (_typeUtils.isValid(navigator.geolocation) && _0x6cbfx220 == null) {
                    var _0x6cbfx224 = {
                        enableHighAccuracy: false,
                        timeout: 60000,
                        maximumAge: 0,
                    };
                    navigator.geolocation.getCurrentPosition(_0x6cbfx228, _0x6cbfx22b, _0x6cbfx224);
                    _0x6cbfx220 = navigator.geolocation.watchPosition(_0x6cbfx228, _0x6cbfx22b, _0x6cbfx224);
                    var _0x6cbfx225 = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                    if (_typeUtils.isValid(_0x6cbfx225) && _typeUtils.isValid(_0x6cbfx225.type)) {
                        _0x6cbfx225.addEventListener('typechange', _0x6cbfx22c);
                        var _0x6cbfx226 = {
                            'connectionType': _0x6cbfx225.type,
                        };
                        var _0x6cbfx1a5 = new amaEvent('connectionUpdate', _0x6cbfx226);
                        _0x6cbfx230(_0x6cbfx1a5);
                    }
                }
            }
            function _0x6cbfx227() {
                if (_typeUtils.isValid(navigator.geolocation) && _0x6cbfx220 != null) {
                    navigator.geolocation.clearWatch(_0x6cbfx220);
                    _0x6cbfx220 = null;
                    var _0x6cbfx225 = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                    if (_typeUtils.isValid(_0x6cbfx225) && _typeUtils.isValid(_0x6cbfx225.type)) {
                        _0x6cbfx225.removeEventListener('typechange', _0x6cbfx22c);
                    }
                }
            }
            function _0x6cbfx228(_0x6cbfx229) {
                if (_typeUtils.isObject(_0x6cbfx229) && _typeUtils.isObject(_0x6cbfx229.coords)) {
                    var _0x6cbfx22a = {
                        'latitude': _0x6cbfx229.coords.latitude,
                        'longitude': _0x6cbfx229.coords.longitude,
                    };
                    var _0x6cbfx1a5 = new amaEvent('locationUpdate', _0x6cbfx22a);
                    _0x6cbfx230(_0x6cbfx1a5);
                }
            }
            function _0x6cbfx22b(_0x6cbfx1a1) {
                if (!_typeUtils.isObject(_0x6cbfx1a1) || _typeUtils.isObject(_0x6cbfx1a1.code)) {
                    return;
                }
                var _0x6cbfx168 = '';
                switch (_0x6cbfx1a1.code) {
                case _0x6cbfx1a1.PERMISSION_DENIED:
                    _0x6cbfx168 = 'User denied the request for Geolocation.';
                    break;
                case _0x6cbfx1a1.POSITION_UNAVAILABLE:
                    _0x6cbfx168 = 'Location information is unavailable.';
                    break;
                case _0x6cbfx1a1.TIMEOUT:
                    _0x6cbfx168 = 'The request to get user location timed out.';
                    break;
                case _0x6cbfx1a1.UNKNOWN_ERROR:
                    _0x6cbfx168 = 'An unknown error occurred.';
                    break;
                }
                _logger.debug('Location Error : ', _0x6cbfx168);
            }
            function _0x6cbfx22c() {
                var _0x6cbfx225 = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                if (_typeUtils.isValid(_0x6cbfx225) && _typeUtils.isValid(_0x6cbfx225.type)) {
                    var _0x6cbfx226 = {
                        'connectionType': _0x6cbfx225.type,
                    };
                    var _0x6cbfx1a5 = new amaEvent('connectionUpdate', _0x6cbfx226);
                    _0x6cbfx230(_0x6cbfx1a5);
                }
            }
            function handlePageHide() {
                var _0x6cbfx22e = {
                    'pageHide': true,
                };
                var _0x6cbfx1a5 = new amaEvent('pageEvent', _0x6cbfx22e);
                _0x6cbfx230(_0x6cbfx1a5);
            }
            function _0x6cbfx22f() {
                var _0x6cbfx22e = {
                    'pageShow': false,
                };
                var _0x6cbfx1a5 = new amaEvent('pageEvent', _0x6cbfx22e);
                _0x6cbfx230(_0x6cbfx1a5);
            }
            function _0x6cbfx230(_0x6cbfx1a5) {
                for (var _0x6cbfx231 in _0x6cbfx21f) {
                    if (_typeUtils.isFunction(_0x6cbfx21f[_0x6cbfx231])) {
                        _0x6cbfx21f[_0x6cbfx231](_0x6cbfx1a5);
                    }
                }
            }
        }
        function amaDiagnoser(_0x6cbfx232) {
            var _0x6cbfx233 = 'http://media-analytics.akamaized.net/library/tools/integrationdiagnoser/index.html';
            var _0x6cbfx234 = [];
            var _0x6cbfx235 = false;
            var _0x6cbfx236 = null;
            var debugHost = null;
            var _0x6cbfx238 = 'http://media-analytics.akamaized.net';
            var _0x6cbfx239 = null;
            var _0x6cbfx151 = this;
            var _0x6cbfx23a = ['csma.js', 'akamaihtml5-min.js', 'html5_malibrary.js', 'javascript_malibrary.js'];
            var _playerLoaderInfo = '';
            this.isInitialized = function() {
                return _0x6cbfx236 !== null ? true : false;
            };
            this.initialize = function(beaconUrl, playerLoaderInfo) {
                _playerLoaderInfo = playerLoaderInfo;
                _0x6cbfx248(beaconUrl);
                var _0x6cbfx23d = _0x6cbfx24e();
                if (_typeUtils.isString(_0x6cbfx23d)) {
                    this.processLogs({
                        api: 'reportSetupParams',
                        value: _0x6cbfx23d,
                    });
                }
            };
            function getValueFromQueryString(key, url, defaultValue) {
                if (null === defaultValue) {
                    defaultValue = '';
                }
                try {
                    if ('' === url || null === url) {
                        return;
                    }
                    key = key.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                    var pattern = new RegExp('[\\?&]' + key + '=([^&#]*)');
                    var matches = pattern.exec(url);
                    if (null === matches) {
                        return defaultValue;
                    } else {
                        return matches[1];
                    }
                } catch (e) {
                    console.log('Exception,  getValueFromQueryString :' + e);
                    return defaultValue;
                }
            }
            function _0x6cbfx242() {
                if (window === window.parent) {
                    return true;
                }
                if (!document || !document.URL || !document.referrer) {
                    return false;
                }
                var _0x6cbfx243 = false;
                try {
                    var _0x6cbfx244 = /^(\w+?:)?\/\/([^\/:]+):?([^\/]+)?(\/[^#?]*)#?([^?]+)?\??(.+)?/;
                    var _0x6cbfx245 = /^(\w+?:)?\/\/([^\/:]+):?([^\/]+)?(\/[^#?]*)#?([^?]+)?\??(.+)?/;
                    var _0x6cbfx246 = _0x6cbfx244.exec(document.URL);
                    var _0x6cbfx247 = _0x6cbfx245.exec(document.referrer);
                    if ((_typeUtils.isValid(_0x6cbfx247[1]) ? _0x6cbfx247[1] : location.protocol) === (_typeUtils.isValid(_0x6cbfx246[3]) ? _0x6cbfx246[3] : location.protocol)) {
                        if (_0x6cbfx246[2] === _0x6cbfx247[2]) {
                            if ((_typeUtils.isValid(_0x6cbfx247[3]) ? _0x6cbfx247[3] : '80') === (_typeUtils.isValid(_0x6cbfx246[3]) ? _0x6cbfx246[3] : '80')) {
                                _0x6cbfx243 = true;
                            }
                        }
                    }
                } catch (e) {
                    _logger.error('Exception thrown from checkIFrameAccess. Exception = ' + e);
                }
                return _0x6cbfx243;
            }
            function _0x6cbfx248(_0x6cbfx19e) {
                var debugFlag = 0;
                if (window) {
                    if (_0x6cbfx242()) {
                        debugFlag = parseInt(getValueFromQueryString('AkamaiAnalytics_debug', window.parent.location));
                        debugHost = window.parent.location.protocol + '//' + window.parent.location.host;
                    } else {
                        debugFlag = parseInt(getValueFromQueryString('AkamaiAnalytics_debug', window.location));
                        debugHost = window.location.protocol + '//' + window.location.host;
                    }
                }
                if (1 === debugFlag) {
                    _logger.enableDebugLogging(true);
                    _0x6cbfx236 = window.open(_0x6cbfx233, '', 'status=0,toolbar=0,location=0,menubar=0,directories=0,height=680,width=1200');
                    if (_0x6cbfx236) {
                        var _0x6cbfx24a = window.addEventListener ? 'addEventListener' : 'attachEvent';
                        var _0x6cbfx24b = window[_0x6cbfx24a];
                        var _0x6cbfx24c = _0x6cbfx24a == 'attachEvent' ? 'onmessage' : 'message';
                        var _0x6cbfx24d = '';
                        _0x6cbfx234.push({
                            api: 'setConfigXML',
                            value: _0x6cbfx19e,
                        });
                        _0x6cbfx24b(_0x6cbfx24c, _0x6cbfx151.diagnoserHandshake, false);
                        _0x6cbfx236.postMessage({
                            api: 'originUrl',
                            value: debugHost,
                            key: _0x6cbfx232,
                            libVersion: _playerLoaderInfo,
                        }, _0x6cbfx238);
                        _0x6cbfx239 = setInterval(_0x6cbfx151.sendSyncMessage, 1000);
                    }
                }
            }
            this.sendSyncMessage = function() {
                if (!_0x6cbfx151.getShouldAnalyze()) {
                    if (_0x6cbfx236) {
                        _0x6cbfx236.postMessage({
                            api: 'originUrl',
                            value: debugHost,
                            key: _0x6cbfx232,
                            libVersion: _playerLoaderInfo,
                        }, _0x6cbfx238);
                    }
                }
            };
            function _0x6cbfx24e() {
                var _0x6cbfx23d;
                if (_typeUtils.isValid(document.currentScript)) {
                    _0x6cbfx23d = document.currentScript.src;
                }
                if (!_typeUtils.isString(_0x6cbfx23d)) {
                    var _0x6cbfx24f = document.getElementsByTagName('script');
                    var _0x6cbfx250 = _0x6cbfx24f.length;
                    for (var i = 0; i < _0x6cbfx250; i++) {
                        var _0x6cbfx251 = _0x6cbfx24f[i].src;
                        if (_typeUtils.isString(_0x6cbfx251) && _0x6cbfx252(_0x6cbfx251)) {
                            _0x6cbfx23d = _0x6cbfx251;
                            break;
                        }
                    }
                }
                return _0x6cbfx23d;
            }
            function _0x6cbfx252(_0x6cbfx23d) {
                var _0x6cbfx253 = false;
                var _0x6cbfx254 = _0x6cbfx23a.length;
                for (var _0x6cbfx255 = 0; _0x6cbfx255 < _0x6cbfx254; _0x6cbfx255++) {
                    if (_0x6cbfx23d.indexOf(_0x6cbfx23a[_0x6cbfx255]) != -1) {
                        _0x6cbfx253 = true;
                        break;
                    }
                }
                return _0x6cbfx253;
            }
            this.sendMessageAndLog = function(_0x6cbfx256, _0x6cbfx257, _0x6cbfx88) {
                this.processLogs(_0x6cbfx256);
                _logger.debug(_0x6cbfx257, _0x6cbfx88);
            };
            this.processLogs = function(_0x6cbfx256) {
                if (!_0x6cbfx235 || !_0x6cbfx236) {
                    _0x6cbfx234.push(_0x6cbfx256);
                    return;
                }
                if (_0x6cbfx239) {
                    clearInterval(_0x6cbfx239);
                    _0x6cbfx239 = null;
                }
                var _0x6cbfx258 = _0x6cbfx234.length;
                if (_0x6cbfx258 > 0) {
                    for (i = 0; i < _0x6cbfx258; i++) {
                        _0x6cbfx236.postMessage(_0x6cbfx234[i], _0x6cbfx238);
                    }
                    _0x6cbfx234 = [];
                }
                _0x6cbfx236.postMessage(_0x6cbfx256, _0x6cbfx238);
            };
            this.setShouldAnalyze = function(_0x6cbfx259) {
                _0x6cbfx235 = _0x6cbfx259;
            };
            this.getShouldAnalyze = function() {
                return _0x6cbfx235;
            };
            this.diagnoserHandshake = function(_0x6cbfx202) {
                if ('syn-ack' === _0x6cbfx202.data.message && _0x6cbfx202.data.key === _0x6cbfx232) {
                    _0x6cbfx151.setShouldAnalyze(true);
                    _logger.debug('Received sync + ack');
                }
            };
        }
        function amaEventHandler() {
            var _0x6cbfx226;
            var _0x6cbfx25a;
            var _0x6cbfx25b;
            this.locationStatsChanged = function(_0x6cbfx1a5) {
                if ('connectionUpdate' === _0x6cbfx1a5.getEventName()) {
                    var _0x6cbfx15e = _0x6cbfx1a5.getObject();
                    _0x6cbfx226 = _0x6cbfx15e.connectionType;
                } else {
                    if ('locationUpdate' === _0x6cbfx1a5.getEventName()) {
                        var _0x6cbfx15e = _0x6cbfx1a5.getObject();
                        _0x6cbfx25a = _0x6cbfx15e.latitude.toString();
                        _0x6cbfx25b = _0x6cbfx15e.longitude.toString();
                    }
                }
            };
            this.accept = function(_0x6cbfx9d) {
                _0x6cbfx9d.visit(this);
            };
            this.iterator = function() {
                return {
                    connectionType: _0x6cbfx226,
                    latitude: _0x6cbfx25a,
                    longitude: _0x6cbfx25b,
                };
            };
        }
        var _0x6cbfx4f = {
            Sleep: 'Sleep',
            Rebuffer: 'Rebuffer',
        };
        function amaCommonEventDispatcher() {
            var _0x6cbfx21f = {};
            var _0x6cbfx25c = 0;
            var _0x6cbfx25d = null;
            var _0x6cbfx25e = null;
            var _0x6cbfx25f = null;
            var _0x6cbfx260 = 0;
            this.registerForEvent = function(_0x6cbfx1a5, _0x6cbfx19a) {
                _0x6cbfx21f[_0x6cbfx1a5] = _0x6cbfx19a;
                switch (_0x6cbfx1a5) {
                case _0x6cbfx4f.Sleep: {
                        _0x6cbfx261();
                        break;
                    }
                }
            };
            this.unregisterFromEvent = function(_0x6cbfx1a5) {
                delete _0x6cbfx21f[_0x6cbfx1a5];
                switch (_0x6cbfx1a5) {
                case _0x6cbfx4f.Sleep: {
                        _0x6cbfx262();
                        break;
                    }
                case _0x6cbfx4f.Rebuffer: {
                        _0x6cbfx269();
                        break;
                    }
                }
            };
            function _0x6cbfx261() {
                if (!_typeUtils.isValid(_0x6cbfx25f)) {
                    _0x6cbfx25f = setInterval(_0x6cbfx263, 100);
                }
            }
            function _0x6cbfx262() {
                if (_typeUtils.isValid(_0x6cbfx25f)) {
                    clearTimeout(_0x6cbfx25f);
                }
            }
            function _0x6cbfx263() {
                var _0x6cbfx264 = new Date();
                var _0x6cbfx68 = _0x6cbfx264.getTime();
                if (_0x6cbfx25c > 0 && _0x6cbfx68 > (_0x6cbfx25c + 25000)) {
                    _0x6cbfx262();
                    var _0x6cbfx265 = {
                        'sleepDuration': (_0x6cbfx68 - _0x6cbfx25c),
                    };
                    var _0x6cbfx1a5 = new amaEvent('Sleep', _0x6cbfx265);
                    _0x6cbfx230(_0x6cbfx1a5);
                } else {
                    _0x6cbfx25c = _0x6cbfx68;
                }
            }
            function _0x6cbfx266() {
                if (_0x6cbfx25d.timeInMillisecond() > _0x6cbfx260) {
                    var _0x6cbfx267 = {
                        'rebufferDuration': _0x6cbfx25d.timeInMillisecond(),
                    };
                    _0x6cbfx269();
                    var _0x6cbfx1a5 = new amaEvent(_0x6cbfx4f.Rebuffer, _0x6cbfx267);
                    _0x6cbfx230(_0x6cbfx1a5);
                }
            }
            function _0x6cbfx230(_0x6cbfx1a5) {
                for (var _0x6cbfx231 in _0x6cbfx21f) {
                    if (_0x6cbfx1a5.getEventName() === _0x6cbfx231 && _typeUtils.isFunction(_0x6cbfx21f[_0x6cbfx231])) {
                        _0x6cbfx21f[_0x6cbfx231](_0x6cbfx1a5);
                    }
                }
            }
            this.rebufferingStarted = function(_0x6cbfx268) {
                if (!_typeUtils.isValid(_0x6cbfx25e)) {
                    _0x6cbfx260 = _0x6cbfx268;
                    _0x6cbfx25d = new amaTimeSpan();
                    _0x6cbfx25e = setInterval(_0x6cbfx266, 1000);
                }
            };
            this.rebufferingEnded = function() {
                _0x6cbfx269();
            };
            function _0x6cbfx269() {
                if (_typeUtils.isValid(_0x6cbfx25e)) {
                    _0x6cbfx25d = null;
                    clearTimeout(_0x6cbfx25e);
                }
            }
        }
        function amaViewMetrics() {
            var _0x6cbfx197 = null;
            var _0x6cbfx1c4 = 0;
            var _0x6cbfx1e4 = 0;
            var _0x6cbfx137 = 0;
            var _0x6cbfx138 = 0;
            var _0x6cbfx139 = 0;
            var _0x6cbfx13a = 0;
            var _0x6cbfx26a = 0;
            var _0x6cbfx134 = 0;
            var _0x6cbfx26b = 0;
            var _0x6cbfx136 = 0;
            var _0x6cbfx13e = 0;
            var _0x6cbfx13b = {};
            var _0x6cbfx13c = 8;
            var _0x6cbfx26c = false;
            var _0x6cbfx26d = false;
            var _0x6cbfx181 = new amaDictionary();
            this.generateLineData = function(_0x6cbfx185) {
                _logger.debug('Data store key values while generating line data for ');
                var _0x6cbfx1e6 = '';
                if (_typeUtils.isObject(_0x6cbfx185)) {
                    _0x6cbfx181.addUpdate('eventCode', 'V');
                    _0x6cbfx1e6 = _0x6cbfx1e7(_0x6cbfx185);
                    _logger.debug('Beacon String (Before encoding) : ' + _0x6cbfx1e6);
                    _0x6cbfx1e6 = _xhrHelper.encodeMetricString(_0x6cbfx1e6);
                    _logger.debug('Beacon String (After encoding) : ' + _0x6cbfx1e6);
                }
                return _0x6cbfx1e6;
            };
            function _0x6cbfx1e7(_0x6cbfx185) {
                var _0x6cbfx51 = '';
                if (_typeUtils.isObject(_0x6cbfx185)) {
                    _0x6cbfx272();
                    var _0x6cbfx26e = new amaDictionary();
                    _0x6cbfx51 = _0x6cbfx185.getbeaconStringFromMetrics('visit', _0x6cbfx181, _0x6cbfx26e);
                    printVisitStore();
                    _logger.debug('visitBeacon :' + _0x6cbfx51);
                }
                return _0x6cbfx51;
            }
            this.startVisitSession = function() {
                _0x6cbfx197 = new amaTimeSpan();
            };
            this.stopVisitSession = function() {
                _0x6cbfx1c4 = _0x6cbfx197.timeInMillisecond();
            };
            function printVisitStore() {
                _logger.debug('Current values in data stores are ... ');
                var _0x6cbfx161 = _0x6cbfx181.getDictionary();
                for (var _0x6cbfx10d in _0x6cbfx161) {
                    _logger.debug(_0x6cbfx10d + ':' + _0x6cbfx161[_0x6cbfx10d]);
                }
            }
            this.updateViewMetrics = function(_0x6cbfx17f, _0x6cbfx185) {
                if (_typeUtils.isObject(_0x6cbfx185) && _typeUtils.isObject(_0x6cbfx17f)) {
                    var _0x6cbfx121 = _0x6cbfx17f.getMetricsData();
                    var _0x6cbfx26f = _0x6cbfx121.getDictionary();
                    if (false === _0x6cbfx26d) {
                        _0x6cbfx273(_0x6cbfx26f, _0x6cbfx185);
                        _0x6cbfx26d = true;
                    }
                    var _0x6cbfx65 = _0x6cbfx26f.isView;
                    if (_typeUtils.isString(_0x6cbfx65) && _0x6cbfx65 === '1') {
                        _0x6cbfx139++;
                    }
                    _0x6cbfx65 = _0x6cbfx26f.eventCode;
                    if (_typeUtils.isString(_0x6cbfx65) && _0x6cbfx65 === 'I') {
                        _logger.debug('eventCode : I ' + _0x6cbfx65);
                        _0x6cbfx137++;
                        _0x6cbfx26c = true;
                    } else {
                        if (_typeUtils.isString(_0x6cbfx65) && _0x6cbfx65 === 'S') {
                            _logger.debug('eventCode : S ' + _0x6cbfx65);
                            _0x6cbfx138++;
                        } else {
                            if (_typeUtils.isString(_0x6cbfx65) && _0x6cbfx65 === 'E') {
                                _logger.debug('eventCode : E ' + _0x6cbfx65);
                                _0x6cbfx13a++;
                                if (_0x6cbfx26c) {
                                    _0x6cbfx13e++;
                                    _0x6cbfx26c = false;
                                }
                            } else {
                                _logger.debug('eventCode : default case ' + _0x6cbfx65);
                                _0x6cbfx26c = false;
                            }
                        }
                    }
                    _0x6cbfx65 = _0x6cbfx26f.playClockTime;
                    if (_typeUtils.isString(_0x6cbfx65)) {
                        _logger.debug('totalPlayClockTime : ' + _0x6cbfx65);
                        _0x6cbfx26a += parseInt(_0x6cbfx65);
                    }
                    _0x6cbfx65 = _0x6cbfx26f.playStreamTime;
                    if (_typeUtils.isString(_0x6cbfx65)) {
                        _logger.debug('totalPlayStreamTime : ' + _0x6cbfx65);
                        _0x6cbfx134 += parseInt(_0x6cbfx65);
                    }
                    _0x6cbfx65 = _0x6cbfx26f.rebufferCount;
                    if (_typeUtils.isString(_0x6cbfx65)) {
                        _logger.debug('totalRebufferCount : ' + _0x6cbfx65);
                        _0x6cbfx26b += parseInt(_0x6cbfx65);
                    }
                    _0x6cbfx65 = _0x6cbfx26f.rebufferTime;
                    if (_typeUtils.isString(_0x6cbfx65)) {
                        _logger.debug('totalRebufferTime : ' + _0x6cbfx65);
                        _0x6cbfx136 += parseInt(_0x6cbfx65);
                    }
                    _0x6cbfx65 = _0x6cbfx26f.sequenceId;
                    if (_typeUtils.isString(_0x6cbfx65)) {
                        _0x6cbfx1e4 = parseInt(_0x6cbfx65);
                    }
                    _0x6cbfx65 = _0x6cbfx26f.transitionStreamTimes;
                    if (_typeUtils.isString(_0x6cbfx65)) {
                        _0x6cbfx270(_0x6cbfx65);
                    }
                }
            };
            function _0x6cbfx270(_0x6cbfx271) {
                if (_typeUtils.isString(_0x6cbfx271)) {
                    var _0x6cbfx143 = _0x6cbfx271.split(',');
                    var _0x6cbfx144 = _0x6cbfx143.length;
                    var _0x6cbfx145;
                    for (var _0x6cbfx21 = 0; _0x6cbfx21 < _0x6cbfx144; _0x6cbfx21++) {
                        _0x6cbfx145 = _0x6cbfx143[_0x6cbfx21].split(':');
                        var _0x6cbfx148 = parseInt(_0x6cbfx145[0]);
                        var _0x6cbfx149 = parseInt(_0x6cbfx145[1]);
                        var _0x6cbfx14a = Math.floor(_0x6cbfx148 / 500000);
                        var _0x6cbfxdf = _0x6cbfx14a < _0x6cbfx13c ? _0x6cbfx14a : _0x6cbfx13c - 1;
                        if (_typeUtils.isInteger(_0x6cbfx13b[_0x6cbfxdf])) {
                            _0x6cbfx13b[_0x6cbfx14a] += _0x6cbfx149;
                        } else {
                            _0x6cbfx13b[_0x6cbfx14a] = _0x6cbfx149;
                        }
                    }
                }
            }
            function _0x6cbfx272() {
                _0x6cbfx1e4++;
                _0x6cbfx181.addUpdate('sequenceId', _0x6cbfx1e4.toString());
                _0x6cbfx181.addUpdate('isVisitEnd', '1');
                _0x6cbfx181.addUpdate('visitAttempts', _0x6cbfx137.toString());
                _0x6cbfx181.addUpdate('visitPlays', _0x6cbfx138.toString());
                _0x6cbfx181.addUpdate('visitViews', _0x6cbfx139.toString());
                _0x6cbfx181.addUpdate('visitErrors', _0x6cbfx13a.toString());
                _0x6cbfx181.addUpdate('visitInterval', _0x6cbfx1c4.toString());
                _0x6cbfx181.addUpdate('visitPlayClockTime', _0x6cbfx26a.toString());
                _0x6cbfx181.addUpdate('visitPlayStreamTime', _0x6cbfx134.toString());
                _0x6cbfx181.addUpdate('visitRebufferCount', _0x6cbfx26b.toString());
                _0x6cbfx181.addUpdate('visitRebufferTime', _0x6cbfx136.toString());
                _0x6cbfx181.addUpdate('visitMaxPersistentBitRateBucket', _0x6cbfx277());
                _0x6cbfx181.addUpdate('visitStartupErrors', _0x6cbfx13e.toString());
            }
            function _0x6cbfx273(_0x6cbfx274, _0x6cbfx185) {
                if (_typeUtils.isObject(_0x6cbfx185) && _typeUtils.isObject(_0x6cbfx274)) {
                    var _0x6cbfx275 = _0x6cbfx185.mediaAnalyticsDictionary();
                    if (_typeUtils.isObject(_0x6cbfx275) && _typeUtils.isObject(_0x6cbfx275.common)) {
                        var _0x6cbfx276 = _0x6cbfx275.common.length;
                        var _0x6cbfx64;
                        var _0x6cbfx65;
                        for (var _0x6cbfx59 = 0; _0x6cbfx59 < _0x6cbfx276; _0x6cbfx59++) {
                            _0x6cbfx64 = _0x6cbfx275.common[_0x6cbfx59].name;
                            _0x6cbfx65 = _0x6cbfx274[_0x6cbfx64];
                            if (_typeUtils.isString(_0x6cbfx65) && _0x6cbfx65 !== '') {
                                _0x6cbfx181.addUpdate(_0x6cbfx64, _0x6cbfx65);
                            }
                        }
                    }
                }
            }
            function _0x6cbfx277() {
                var _0x6cbfx146 = 0;
                var _0x6cbfx147 = '0';
                for (var _0x6cbfx59 = 1; _0x6cbfx59 < _0x6cbfx13c; _0x6cbfx59++) {
                    if (_0x6cbfx13b[_0x6cbfx59] > _0x6cbfx13b[_0x6cbfx146]) {
                        _0x6cbfx146 = _0x6cbfx59;
                    }
                }
                _0x6cbfx147 += _0x6cbfx146;
                return _0x6cbfx147;
            }
        }
        function dashStreamInfo(_0x6cbfx278, _0x6cbfx279) {
            this.isParsed = false;
            try {
                this.parse = function(_0x6cbfx278) {
                    if (!_0x6cbfx278) {
                        return streamError.InvalidURL;
                    }
                    this.parseURL();
                    this.format = 'Dash';
                    this.streamType = 'dash';
                    var _0x6cbfx27a = new DOMParser();
                    var _0x6cbfx1f = _0x6cbfx27a.parseFromString(_0x6cbfx278, 'text/xml');
                    if (!_0x6cbfx1f) {
                        return streamError.ParsingFailed;
                    }
                    var _0x6cbfx27b = _0x6cbfx1f.getElementsByTagName('MPD');
                    if (!_0x6cbfx27b || !_0x6cbfx27b[0]) {
                        return streamError.ParsingFailed;
                    }
                    var _0x6cbfx27c = _0x6cbfx27b[0].getAttribute('type');
                    if (_0x6cbfx27c === 'dynamic') {
                        this.deliveryType = 'L';
                        this.length = -1;
                    } else {
                        if (_0x6cbfx27c === 'static') {
                            this.deliveryType = 'O';
                            this.length = 0;
                            var _0x6cbfx27d = _0x6cbfx27b[0].getAttribute('mediaPresentationDuration');
                            if (_0x6cbfx27d.startsWith('P')) {
                                _0x6cbfx27d = _0x6cbfx27d.substring(1);
                                if (_0x6cbfx27d.indexOf('T') !== -1) {
                                    var _0x6cbfx27e = _0x6cbfx27d.split('T');
                                    this.length += _0x6cbfx280(_0x6cbfx27e[0]);
                                    this.length += _0x6cbfx286(_0x6cbfx27e[1]);
                                } else {
                                    this.length += _0x6cbfx286(_0x6cbfx27d);
                                }
                            }
                            _logger.debug('Current stream length = ' + this.length);
                        }
                    }
                    this.getCallback()(this);
                    this.isParsed = true;
                    return streamError.NoError;
                };
            } catch (e) {
                _logger.debug('Exception thrown from dashStreamInfo ' + e);
            }
            var _0x6cbfx27f = this.parse(_0x6cbfx278);
            if (_0x6cbfx27f === streamError.NoError) {
                return this;
            } else {
                if (_0x6cbfx279) {
                    this.format = 'Dash';
                    this.streamType = 'dash';
                    this.deliveryType = '-';
                    this.length = 0;
                    this.parseURL();
                    this.getCallback()(this);
                    return this;
                } else {}
            }
            function _0x6cbfx280(_0x6cbfx27d) {
                var _0x6cbfx1b6 = 0;
                var _0x6cbfx281 = _0x6cbfx27d.indexOf('Y');
                if (_0x6cbfx281 !== -1) {
                    var _0x6cbfx282 = Number(_0x6cbfx27d.substring(0, _0x6cbfx281));
                    _0x6cbfx1b6 += _0x6cbfx282 * 8760 * 60 * 60 * 1000;
                    _0x6cbfx27d = _0x6cbfx27d.substring(_0x6cbfx281 + 1);
                }
                var _0x6cbfx283 = _0x6cbfx27d.indexOf('M');
                if (_0x6cbfx283 !== -1) {
                    var _0x6cbfx284 = Number(_0x6cbfx27d.substring(0, _0x6cbfx283));
                    _0x6cbfx1b6 += _0x6cbfx284 * 730 * 60 * 60 * 1000;
                    _0x6cbfx27d = _0x6cbfx27d.substring(_0x6cbfx283 + 1);
                }
                var _0x6cbfx285 = _0x6cbfx27d.indexOf('D');
                if (_0x6cbfx285 !== -1) {
                    var _0x6cbfx71 = Number(_0x6cbfx27d.substring(0, _0x6cbfx285));
                    _0x6cbfx1b6 += _0x6cbfx71 * 24 * 60 * 60 * 1000;
                }
                return _0x6cbfx1b6;
            }
            function _0x6cbfx286(_0x6cbfx27d) {
                var _0x6cbfx1b6 = 0;
                var _0x6cbfx287 = _0x6cbfx27d.indexOf('H');
                if (_0x6cbfx287 !== -1) {
                    var _0x6cbfx288 = Number(_0x6cbfx27d.substring(0, _0x6cbfx287));
                    _0x6cbfx1b6 += _0x6cbfx288 * 60 * 60 * 1000;
                    _0x6cbfx27d = _0x6cbfx27d.substring(_0x6cbfx287 + 1);
                }
                var _0x6cbfx283 = _0x6cbfx27d.indexOf('M');
                if (_0x6cbfx283 !== -1) {
                    var _0x6cbfx289 = Number(_0x6cbfx27d.substring(0, _0x6cbfx283));
                    _0x6cbfx1b6 += _0x6cbfx289 * 60 * 1000;
                    _0x6cbfx27d = _0x6cbfx27d.substring(_0x6cbfx283 + 1);
                }
                var _0x6cbfx28a = _0x6cbfx27d.indexOf('S');
                if (_0x6cbfx28a !== -1) {
                    var _0x6cbfx28b = Number(_0x6cbfx27d.substring(0, _0x6cbfx28a));
                    _0x6cbfx1b6 += _0x6cbfx28b * 1000;
                }
                return _0x6cbfx1b6;
            }
        }
        function hlsStreamInfo(_0x6cbfx278, _0x6cbfx279) {
            this.recursiveDownload = false;
            this.isParsed = false;
            this.parse = function(_0x6cbfx278) {
                try {
                    if (!_0x6cbfx278) {
                        return streamError.InvalidURL;
                    }
                    if (_0x6cbfx278.search('#EXTM3U') === -1) {
                        return streamError.ParsingFailed;
                    }
                    this.streamType = 'hls';
                    this.format = 'hls';
                    this.parseURL();
                    var _0x6cbfx201 = _0x6cbfx278.split('\n');
                    var _0x6cbfx28c = '';
                    var _0x6cbfx28d = /PROGRAM-ID=(\d+)/;
                    var _0x6cbfx6f, _0x6cbfx59;
                    if (_0x6cbfx201) {
                        for (_0x6cbfx59 = 0; _0x6cbfx59 < _0x6cbfx201.length; _0x6cbfx59++) {
                            if ((_0x6cbfx6f = _0x6cbfx28d.exec(_0x6cbfx201[_0x6cbfx59]))) {
                                if (_0x6cbfx6f[1] == _0x6cbfx28c) {
                                    break;
                                } else {
                                    _0x6cbfx28c = _0x6cbfx6f[1];
                                }
                            }
                        }
                        if (_0x6cbfx59 != _0x6cbfx201.length) {
                            this.format = 'L';
                        }
                    }
                    var _0x6cbfx1c = this.getStreamURL();
                    var _0x6cbfxad, _0x6cbfxae, _0x6cbfxaf, _0x6cbfx54;
                    if (_0x6cbfx1c) {
                        var _0x6cbfxac = /^(\w+?:)?\/\/([^\/:]+):?([^\/]+)?(\/[^#?]*)#?([^?]+)?\??(.+)?/;
                        var _0x6cbfx28e = _0x6cbfxac.exec(_0x6cbfx1c);
                        if (!_typeUtils.isValid(_0x6cbfx28e[1])) {
                            _0x6cbfxad = location.protocol;
                        } else {
                            _0x6cbfxad = _0x6cbfx28e[1];
                        }
                        _0x6cbfxae = _0x6cbfx28e[2];
                        _0x6cbfxaf = _0x6cbfx28e[3] ? _0x6cbfx28e[3] : '80';
                        _0x6cbfx54 = _0x6cbfx28e[4];
                    }
                    _0x6cbfx28d = /^#EXT((INF)|(-X-STREAM-INF))[^\n]*\n([^\n]*)\n/m;
                    _logger.debug('Checking');
                    if ((_0x6cbfx6f = _0x6cbfx28d.exec(_0x6cbfx278))) {
                        _logger.debug('Checking done ' + _0x6cbfx6f[4]);
                        var _0x6cbfx28f = new RegExp('.m3u8');
                        if (_0x6cbfx28f.exec(_0x6cbfx6f[4]) && _0x6cbfxad && _0x6cbfxae) {
                            try {
                                if (this.recursiveDownload) {
                                    var _0x6cbfx290 = new XMLHttpRequest();
                                    var _0x6cbfx291;
                                    if (!amaURLUtility.isURL(_0x6cbfx6f[4])) {
                                        _0x6cbfx291 = _0x6cbfxad + '://' + _0x6cbfxae + _0x6cbfx6f[4];
                                    } else {
                                        _0x6cbfx291 = _0x6cbfx6f[4];
                                    }
                                    _logger.debug('Requesting URL = ' + _0x6cbfx291);
                                    _0x6cbfx290.open('GET', _0x6cbfx291, true);
                                    _0x6cbfx290.onreadystatechange = function(_0x6cbfx151) {
                                        return function() {
                                            _logger.debug('current content type from stream url is = ' + this.getResponseHeader('content-type'));
                                            if (this.readyState === 4) {
                                                if (this.status === 200 && this.responseText) {
                                                    if (/^#EXT-X-ENDLIST/m.exec(this.responseText)) {
                                                        _0x6cbfx151.deliveryType = 'O';
                                                    } else {
                                                        _0x6cbfx151.deliveryType = 'L';
                                                        _0x6cbfx151.length = '-1';
                                                    }
                                                }
                                                if (_typeUtils.isFunction(_0x6cbfx151.getCallback())) {
                                                    _0x6cbfx151.getCallback()(_0x6cbfx151);
                                                }
                                            }
                                        };
                                    }(this);
                                    if (_0x6cbfx290.overrideMimeType) {
                                        _0x6cbfx290.overrideMimeType('text/plain');
                                    }
                                    _0x6cbfx290.send(null);
                                }
                            } catch (e) {
                                _logger.debug('parse, Exception,  parsing play list, ' + e);
                            }
                        } else {
                            if (/^#EXT-X-ENDLIST/m.exec(_0x6cbfx278)) {
                                this.deliveryType = 'O';
                            }
                        }
                    }
                } catch (e) {
                    _logger.debug('Exception,  parse : ' + e);
                }
                this.isParsed = true;
                return streamError.NoError;
            };
            var _0x6cbfx27f = this.parse(_0x6cbfx278);
            if (_0x6cbfx27f === streamError.NoError) {
                if (this.recursiveDownload === false) {
                    this.getCallback()(this);
                }
                this.streamType = 'hls';
                this.deliveryType = '-';
                return this;
            } else {
                if (_0x6cbfx279) {
                    this.streamType = 'hls';
                    this.format = 'L';
                    this.deliveryType = '-';
                    this.length = 0;
                    this.parseURL();
                    this.getCallback()(this);
                    return this;
                } else {}
            }
        }
        function nonAdaptiveStream(_0x6cbfx278, _0x6cbfx279) {
            try {
                this.format = 'P';
                this.deliveryType = 'O';
                this.streamType = 'nonAdaptiveStream';
                this.length = 0;
                this.parseURL();
                this.getCallback()(this);
                return this;
            } catch (e) {
                _logger.debug('Exception thrown from nonAdaptiveStream' + e);
            }
        }
        var _0x6cbfx292 = {};
        _0x6cbfx292.FactoryWithURL = function(_0x6cbfx7, _0x6cbfx1c, _0x6cbfx293) {
            var _0x6cbfx12b;
            try {
                var _0x6cbfx294 = new XMLHttpRequest();
                _0x6cbfx294.open('GET', _0x6cbfx1c, true);
                _0x6cbfx294.onreadystatechange = function() {
                    if (this.readyState === 4 && this.status === 200 && this.responseText) {
                        _0x6cbfx12b = _0x6cbfx292.FactoryWithContent(_0x6cbfx7, _0x6cbfx1c, this.responseText, _0x6cbfx293, false);
                    } else {}
                };
                _0x6cbfx294.send(null);
            } catch (e) {
                _logger.debug('Exception thrown from streamFactory.FactoryWithURL' + e);
            }
        };
        _0x6cbfx292.FactoryWithContent = function(_0x6cbfx7, _0x6cbfx1c, _0x6cbfx278, _0x6cbfx293, _0x6cbfx279) {
            function _0x6cbfx295() {
                _0x6cbfx15a(hlsStreamInfo, streamInfoBase, _0x6cbfx1c, _0x6cbfx293);
                return new hlsStreamInfo(_0x6cbfx278, _0x6cbfx279);
            }
            function _0x6cbfx296() {
                _0x6cbfx15a(dashStreamInfo, streamInfoBase, _0x6cbfx1c, _0x6cbfx293);
                return new dashStreamInfo(_0x6cbfx278, _0x6cbfx279);
            }
            function _0x6cbfx297() {
                _0x6cbfx15a(nonAdaptiveStream, streamInfoBase, _0x6cbfx1c, _0x6cbfx293);
                return new nonAdaptiveStream(_0x6cbfx278, _0x6cbfx279);
            }
            var _0x6cbfx12b;
            try {
                if ('hls' === _0x6cbfx7) {
                    _0x6cbfx12b = _0x6cbfx295();
                } else {
                    if ('dash' === _0x6cbfx7) {
                        _0x6cbfx12b = _0x6cbfx296();
                    } else {
                        _0x6cbfx12b = _0x6cbfx297();
                    }
                }
            } catch (e) {
                _logger.debug('Exception thrown from streamFactory.FactoryWithContent ' + e);
            }
            return _0x6cbfx12b;
        };
        function streamInfoBase(_0x6cbfx298, _0x6cbfx299) {
            this.url = _0x6cbfx298;
            this.name = null;
            this.length = 0;
            this.format = null;
            this.deliveryType = '-';
            this.isValid = false;
            this.streamType = null;
            this.callback = _0x6cbfx299;
        }
        streamInfoBase.prototype.getStreamURL = function() {
            return this.url;
        };
        streamInfoBase.prototype.getStreamName = function() {
            return this.name;
        };
        streamInfoBase.prototype.getStreamLength = function() {
            return this.length;
        };
        streamInfoBase.prototype.getStreamFormat = function() {
            return this.format;
        };
        streamInfoBase.prototype.getDeliveryType = function() {
            return this.deliveryType;
        };
        streamInfoBase.prototype.getStreamType = function() {
            return this.streamType;
        };
        streamInfoBase.prototype.getCallback = function() {
            return this.callback;
        };
        streamInfoBase.prototype.parseURL = function() {
            var _0x6cbfxac = /^(\w+?:)?\/\/([^\/:]+):?([^\/]+)?(\/[^#?]*)#?([^?]+)?\??(.+)?/;
            try {
                var _0x6cbfx6f = _0x6cbfxac.exec(this.url);
                if (typeof _0x6cbfx6f[1] === 'undefined') {
                    this.protocol = location.protocol;
                } else {
                    this.protocol = _0x6cbfx6f[1];
                }
                this.hostName = _0x6cbfx6f[2];
                this.port = _0x6cbfx6f[3] ? _0x6cbfx6f[3] : '80';
                this.path = _0x6cbfx6f[4];
                var _0x6cbfxb6 = this.path.split('/');
                var _0x6cbfxb7 = _0x6cbfxb6.length;
                this.name = _0x6cbfxb6[_0x6cbfxb7 - 1];
                var _0x6cbfxab = this.name.toLowerCase();
                if ((_0x6cbfxab.indexOf('.m3u') != -1) || (_0x6cbfxab.indexOf('manifest') != -1) || (_0x6cbfxab.indexOf('.f4m') != -1) || (_0x6cbfxab.indexOf('.mpd') != -1)) {
                    if (_0x6cbfxb7 >= 3) {
                        this.name = _0x6cbfxb6[_0x6cbfxb7 - 2] + '/' + _0x6cbfxb6[_0x6cbfxb7 - 1];
                    }
                }
                this.hash = _0x6cbfx6f[5] ? _0x6cbfx6f[5] : '';
                this.search = _0x6cbfx6f[6] ? _0x6cbfx6f[6] : '';
                this.host = this.hostName + ':' + this.port;
            } catch (e) {
                _logger.debug('Exception,  parseStreamUrl :' + e);
            }
        };
        var streamError = {
            InvalidURL: 'URL is not valid',
            ParsingFailed: 'Failed to parse stream URL',
            Invalid_Manifest: 'Invalid manifest received',
            Invalid_Stream: 'Stream is not valid',
            NoError: 'success',
        };
        var _0x6cbfx15a = function(_0x6cbfx15b, _0x6cbfx15c, _0x6cbfx1c, _0x6cbfx1a0) {
            try {
                _0x6cbfx15b.prototype = Object.create(_0x6cbfx15c.prototype, {
                    'url': {
                        value: _0x6cbfx1c,
                        enumerable: false,
                    },
                    'callback': {
                        value: _0x6cbfx1a0,
                        enumerable: false,
                    },
                });
            } catch (e) {
                _logger.debug('Exception thrown from InheritObject' + e);
            }
        };
        function StreamTypeDetector(_0x6cbfx1c, _0x6cbfx12a, _0x6cbfx129, _0x6cbfx293) {
            function _0x6cbfx29a(_0x6cbfx1c, _0x6cbfx12a, _0x6cbfx293) {
                _logger.debug(('Mime type method didn\'t work. Lets apply parsers one after another - Brute force'));
                var _0x6cbfx29b = _0x6cbfx292.FactoryWithContent('hls', _0x6cbfx1c, _0x6cbfx12a, _0x6cbfx293, false);
                if (!_0x6cbfx29b.isParsed) {
                    _logger.debug('not a HLS stream');
                    _0x6cbfx29b = _0x6cbfx292.FactoryWithContent('dash', _0x6cbfx1c, _0x6cbfx12a, _0x6cbfx293, false);
                    if (!_0x6cbfx29b.isParsed) {
                        _logger.debug('not Dash either... Assuming Progressive download');
                        _0x6cbfx29b = _0x6cbfx292.FactoryWithContent('nonAdaptive', _0x6cbfx1c, _0x6cbfx12a, _0x6cbfx293, false);
                    }
                }
            }
            try {
                if (!_0x6cbfx1c || _0x6cbfx1c === '') {
                    return streamError.Invalid_Stream;
                }
                var _0x6cbfx29c = RegExp('.m3u8');
                var _0x6cbfx29d = RegExp('.mpd');
                if (_0x6cbfx129) {
                    if (_0x6cbfx29c.exec(_0x6cbfx1c)) {
                        _logger.debug('Found m3u8 as an extension');
                        _0x6cbfx292.FactoryWithURL('hls', _0x6cbfx1c, _0x6cbfx293);
                        return;
                    } else {
                        if (_0x6cbfx29d.exec(_0x6cbfx1c)) {
                            _logger.debug('Found mpd as an extension');
                            _0x6cbfx292.FactoryWithURL('dash', _0x6cbfx1c, _0x6cbfx293);
                            return;
                        } else {
                            _logger.debug('Couldn\'t find either m3u8 or Dash will try mime type');
                            var _0x6cbfx29e = new XMLHttpRequest();
                            _logger.debug('To get mime type trying HEAD request');
                            _0x6cbfx29e.open('HEAD', _0x6cbfx1c, true);
                            if (_0x6cbfx29e.overrideMimeType) {
                                _0x6cbfx29e.overrideMimeType('text/xml');
                            }
                            _0x6cbfx29e.onreadystatechange = function() {
                                if (this.readyState === this.DONE) {
                                    var _0x6cbfx29f = this.getResponseHeader('content-type');
                                    var _0x6cbfx29b = null;
                                    if ('application/x-mpegURL' === _0x6cbfx29f || 'vnd.apple.mpegURL' === _0x6cbfx29f) {
                                        _logger.debug('Rceived mime type is m3u8');
                                        _0x6cbfx29b = _0x6cbfx292.FactoryWithContent('hls', _0x6cbfx1c, this.responseText, _0x6cbfx293);
                                    } else {
                                        if ('application/dash+xml' === _0x6cbfx29f) {
                                            _logger.debug('Rceived mime type is dash');
                                            _0x6cbfx29b = _0x6cbfx292.FactoryWithContent('dash', _0x6cbfx1c, this.responseText, _0x6cbfx293);
                                        } else {
                                            _0x6cbfx29a(_0x6cbfx1c, this.responseText, _0x6cbfx293);
                                        }
                                    }
                                }
                            };
                            _0x6cbfx29e.send(null);
                        }
                    }
                } else {
                    var streamObj;
                    if (_0x6cbfx29c.exec(_0x6cbfx1c)) {
                        _logger.debug('Found m3u8 as an extension');
                        streamObj = _0x6cbfx292.FactoryWithContent('hls', _0x6cbfx1c, _0x6cbfx12a, _0x6cbfx293, true);
                    } else {
                        if (_0x6cbfx29d.exec(_0x6cbfx1c)) {
                            _logger.debug('Found mpd as an extension');
                            streamObj = _0x6cbfx292.FactoryWithContent('dash', _0x6cbfx1c, _0x6cbfx12a, _0x6cbfx293, true);
                        } else {
                            _0x6cbfx29a(_0x6cbfx1c, _0x6cbfx12a, _0x6cbfx293);
                        }
                    }
                }
                return streamError.NoError;
            } catch (e) {
                _logger.debug('Exception thrown from StreamTypeDetector ' + e);
            }
        }
    }
    function AMAInstanceManager() {}
    AMAInstanceManager.instanceDict = {};
    AMAInstanceManager.keyCount = 0;
    AMAInstanceManager.visitDataStore = null;
    AMAInstanceManager.registerInstance = function(_0x6cbfx2a1) {
        var _0x6cbfx1b = 'loaderInstance_' + AMAInstanceManager.keyCount++;
        AMAInstanceManager.instanceDict[_0x6cbfx1b] = _0x6cbfx2a1;
        return _0x6cbfx1b;
    };
    AMAInstanceManager.addPageEventListener = function() {
        if (window.addEventListener) {
            window.addEventListener('pagehide', handlePageHide, false);
            window.addEventListener('beforeunload', handlePageHide, false);
        } else {
            if (window.attachEvent) {
                window.attachEvent('onpagehide', handlePageHide);
                window.attachEvent('onbeforeunload', handlePageHide);
            } else {
                // akamaiLogger.debug('Unsupported Browser');
            }
        }
    };
    AMAInstanceManager.addPageEventListener();
    function handlePageHide() {
        for (var _0x6cbfx1b in AMAInstanceManager.instanceDict) {
            AMAInstanceManager.instanceDict[_0x6cbfx1b].destroy();
        }
    }
    AMAInstanceManager.onDestroy = function(_0x6cbfx2a2) {
        if (_0x6cbfx2a2 !== null && typeof _0x6cbfx2a2 === 'object') {
            if (Object.keys(AMAInstanceManager.instanceDict).length === 1) {
                _0x6cbfx2a2.handleVisit();
            }
            delete AMAInstanceManager.instanceDict[_0x6cbfx2a2.getKey()];
        }
    };
    var JS_AkamaiMediaAnalytics = function(beaconUrl) {
        var _version = '1.3.6';
        var _name = 'JSLoader';
        var _debug = true;
        var _playerLoaderVersion = _name + '-' + _version;
        var _0x6cbfx2a9 = '';
        var _amaInstance = null;
        var _amaCallbacks = null;
        var _beaconUrl = beaconUrl;
        var _0x6cbfx2ad = this;
        var _playerStates = {
            Init: 0,
            Playing: 1,
            Pause: 2,
            Rebuffer: 4,
            Seeking: 8,
            PlayEnded: 16,
        };
        var _runningAd = false;
        var _playerState = -1;
        this.getKey = function() {
            return _0x6cbfx2a9;
        };
        _0x6cbfx2a9 = AMAInstanceManager.registerInstance(this);
        this.setPlayerLoaderVersion = function(_0x6cbfx2b1) {
            if (isValidString(_0x6cbfx2b1)) {
                _playerLoaderVersion = _playerLoaderVersion + ':' + _0x6cbfx2b1;
            }
        };
        this.handleSessionInit = function(akamaiCallbacks) {
            if (_amaInstance && akamaiCallbacks) {
                if (_debug) {
                    this.logMessage('handleSessionInit(' + akamaiCallbacks + ')', 'API');
                }
                _amaCallbacks = akamaiCallbacks;
                if (-1 !== _playerState && _playerStates.PlayEnded !== _playerState) {
                    _amaInstance.handlePlayEnd('Play.End.Detected');
                }
                normalizeCallbacksAndHandleSessionInit();
            }
        };
        this.handlePlaying = function() {
            if (_runningAd) {
                return;
            }
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('handlePlaying()', 'API');
                }
                if (-1 === _playerState || _playerStates.PlayEnded === _playerState) {
                    normalizeCallbacksAndHandleSessionInit();
                }
                if (_playerStates.Rebuffer === _playerState) {
                    _amaInstance.handleBufferEnd();
                } else {
                    if (_playerStates.Init === _playerState) {
                        _amaInstance.handlePlayStart();
                    } else {
                        _amaInstance.handlePlaying();
                    }
                }
                _playerState = _playerStates.Playing;
            }
        };
        this.handlePause = function() {
            if (_runningAd) {
                return;
            }
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('handlePause()', 'API');
                }
                _amaInstance.handlePause();
                _playerState = _playerStates.Pause;
            }
        };
        this.handlePlayEnd = function(_0x6cbfx2b3) {
            if (_runningAd) {
                return;
            }
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('handlePlayEnd(' + _0x6cbfx2b3 + ')', 'API');
                }
                if (_playerStates.PlayEnded !== _playerState) {
                    if (!isValidString(_0x6cbfx2b3)) {
                        _0x6cbfx2b3 = 'Play.End.Detected';
                    }
                    _amaInstance.handlePlayEnd(_0x6cbfx2b3);
                    _playerState = _playerStates.PlayEnded;
                }
            }
        };
        this.handleBitRateSwitch = function(_0x6cbfx2b4) {
            if (_runningAd) {
                return;
            }
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('handleBitRateSwitch(' + _0x6cbfx2b4 + ')', 'API');
                }
                _amaInstance.handleBitrateChange(_0x6cbfx2b4);
            }
        };
        this.handleTitleSwitch = function(_0x6cbfx2b5) {
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('akamaiHandleTitleSwitch(' + _0x6cbfx2b5 + ')', 'API');
                }
                _amaInstance.handleTitleSwitch(_0x6cbfx2b5);
                _playerState = _playerStates.Playing;
            }
        };
        this.handleBufferStart = function() {
            if (_runningAd || _playerStates.Seeking === _playerState) {
                return;
            }
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('handleBufferStart()', 'API');
                }
                if (_playerState === _playerStates.Playing) {
                    _amaInstance.handleBufferStart();
                    _playerState = _playerStates.Rebuffer;
                }
            }
        };
        this.handleBufferEnd = function() {
            if (_runningAd || _playerStates.Seeking === _playerState) {
                return;
            }
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('handleBufferEnd()', 'API');
                }
                _amaInstance.handleBufferEnd();
                _playerState = _playerStates.Playing;
            }
        };
        this.handleError = function(_0x6cbfx2b6) {
            if (_runningAd) {
                return;
            }
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('handleError(' + _0x6cbfx2b6 + ')', 'API');
                }
                if (_playerStates.PlayEnded !== _playerState) {
                    _amaInstance.handleError(_0x6cbfx2b6);
                    _playerState = _playerStates.PlayEnded;
                }
            }
        };
        this.handleSeekStart = function() {
            if (_runningAd) {
                return;
            }
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('handleSeekStart()', 'API');
                }
                if (_playerState >= _playerStates.Playing) {
                    _amaInstance.handleSeekStart();
                    _playerState = _playerStates.Seeking;
                }
            }
        };
        this.handleSeekEnd = function() {
            if (_runningAd) {
                return;
            }
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('handleSeekEnd()', 'API');
                }
            }
        };
        this.handleApplicationExit = function() {
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('handleApplicationExit()', 'API');
                }
                this.destroy();
                _amaInstance = null;
            }
        };
        function createAndInitializeAmaInstance() {
            _amaInstance = new akamaiMediaAnalytics(_0x6cbfx2a9);
            _amaInstance.initialize(_beaconUrl);
        }
        var init = function() {
            if (!_beaconUrl) {
                console.error('Error creating Akamai Analytics: Akamai Analytics Config Path not set.');
                return;
            }
            createAndInitializeAmaInstance();
        };
        function normalizeCallbacksAndHandleSessionInit() {
            if (_amaInstance) {
                _amaInstance.setLoaderInformation(_playerLoaderVersion);
                var callbacks = {};
                if (_amaCallbacks) {
                    if (_amaCallbacks.streamHeadPosition) {
                        callbacks.streamHeadPosition = _amaCallbacks.streamHeadPosition;
                    } else {
                        if (_amaCallbacks.getStreamHeadPosition) {
                            callbacks.streamHeadPosition = _amaCallbacks.getStreamHeadPosition;
                        } else {
                            _amaInstance.logMessage('Callback methods not provided.', 'DEBUG');
                        }
                    }
                }
                _amaInstance.handleSessionInit(callbacks);
                _playerState = _playerStates.Init;
            }
        }
        this.setData = function(key, value) {
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('setData(' + key + ',' + value + ')', 'API');
                }
                _amaInstance.setData(key, value);
            }
        };
        this.setViewerDiagnosticsId = function(_0x6cbfx2bd) {
            if (_amaInstance) {
                if (_debug) {
                    _amaInstance.logMessage('setViewerDiagnosticsId(' + _0x6cbfx2bd + ')');
                }
                _amaInstance.setViewerDiagnosticsId(_0x6cbfx2bd);
            }
        };
        this.setViewerId = function(_0x6cbfx2be) {
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('setViewerId(' + _0x6cbfx2be + ')', 'API');
                }
                _amaInstance.setViewerId(_0x6cbfx2be);
            }
        };
        this.handleStreamSwitch = function() {
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('handleStreamSwitch()', 'API');
                }
                _amaInstance.handleStreamSwitch();
                _playerState = _playerStates.Playing;
            }
        };
        this.handleAdLoaded = function(_0x6cbfx2bf) {
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('handleAdLoaded(' + _0x6cbfx2bf + ')', 'API');
                }
                _runningAd = true;
                if (typeof _0x6cbfx2bf !== 'undefined' && _0x6cbfx2bf !== null) {
                    if (_playerState === _playerStates.Init) {
                        _0x6cbfx2bf.adType = '0';
                    } else {
                        if (_playerState === _playerStates.Playing) {
                            _0x6cbfx2bf.adType = '1';
                        } else {
                            if (_playerState === _playerStates.PlayEnded) {
                                _0x6cbfx2bf.adType = '2';
                            }
                        }
                    }
                    _amaInstance.handleAdLoaded(_0x6cbfx2bf);
                } else {
                    var _0x6cbfx2c0 = {};
                    _amaInstance.handleAdLoaded(_0x6cbfx2c0);
                }
            }
        };
        this.handleAdStarted = function(_0x6cbfx2c1) {
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('handleAdStarted(' + _0x6cbfx2c1 + ')', 'API');
                }
                if (typeof _0x6cbfx2c1 !== 'undefined' && _0x6cbfx2c1 !== null) {
                    _amaInstance.handleAdStarted(_0x6cbfx2c1);
                } else {
                    var _0x6cbfx2c2 = {};
                    _amaInstance.handleAdStarted(_0x6cbfx2c2);
                }
            }
        };
        this.handleAdFirstQuartile = function() {
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('handleAdFirstQuartile()', 'API');
                }
                _amaInstance.handleAdFirstQuartile();
            }
        };
        this.handleAdMidPoint = function() {
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('handleAdMidPoint()', 'API');
                }
                _amaInstance.handleAdMidPoint();
            }
        };
        this.handleAdComplete = function() {
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('handleAdComplete()', 'API');
                }
                _runningAd = false;
                _amaInstance.handleAdComplete();
            }
        };
        this.handleAdSkipped = function() {
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('handleAdSkipped()', 'API');
                }
                _runningAd = false;
                _amaInstance.handleAdSkipped();
            }
        };
        this.handleAdError = function() {
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('handleAdError()', 'API');
                }
                _runningAd = false;
                _amaInstance.handleAdError();
            }
        };
        this.setStreamURL = function(_0x6cbfx2c3, _0x6cbfx2c4) {
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('setStreamURL(' + _0x6cbfx2c3 + ',' + _0x6cbfx2c4 + ')', 'API');
                }
                _amaInstance.setStreamURL(_0x6cbfx2c3, _0x6cbfx2c4);
            }
        };
        this.setStreamDuration = function(_0x6cbfx2c5) {
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('setStreamDuration(' + _0x6cbfx2c5 + ')', 'API');
                }
                _amaInstance.setStreamDuration(_0x6cbfx2c5);
            }
        };
        this.setURLManifestContent = function(_0x6cbfx2c6) {
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('setURLManifestContent()', 'API');
                }
                _amaInstance.setURLManifestContent(_0x6cbfx2c6);
            }
        };
        this.enableLocation = function() {
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('enableLocation()', 'API');
                }
                _amaInstance.enableLocation();
            }
        };
        this.disableLocation = function() {
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('disableLocation()', 'API');
                }
                _amaInstance.disableLocation();
            }
        };
        this.enableServerIPLookUp = function() {
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('enableServerIPLookUp()', 'API');
                }
                _amaInstance.enableServerIP();
            }
        };
        this.disableServerIPLookUp = function() {
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('disableServerIPLookUp()', 'API');
                }
                _amaInstance.disableServerIP();
            }
        };
        this.handleVisit = function() {
            if (_amaInstance) {
                if (_debug) {
                    _amaInstance.logMessage('handleVisit()', 'API');
                }
                _amaInstance.handleVisit();
            }
        };
        this.handleAdThirdQuartile = function() {
            if (_amaInstance) {
                if (_debug) {
                    this.logMessage('handleAdThirdQuartile()', 'API');
                }
                _amaInstance.handleAdThirdQuartile();
            }
        };
        this.destroy = function() {
            if (_amaInstance) {
                if (_playerStates.PlayEnded !== _playerState) {
                    _amaInstance.handlePlayEnd('Browser.Close');
                    _playerState = _playerStates.PlayEnded;
                }
                AMAInstanceManager.onDestroy(this);
            }
        };
        this.logMessage = function(msg, category) {
            if (_amaInstance) {
                _amaInstance.logMessage(msg, category);
            }
        };
        this.setBridgeInformation = function(_0x6cbfx2c9, _0x6cbfx2ca) {
            try {
                if (isValidString(_0x6cbfx2c9) && isValidString(_0x6cbfx2ca)) {
                    _debug = false;
                    _playerLoaderVersion = _playerLoaderVersion + ':' + _0x6cbfx2c9 + '-' + _0x6cbfx2ca;
                }
            } catch (e) {
                console.error(e);
            }
        };
        function isValidString(value) {
            var _0x6cbfx2cd = false;
            if (typeof value !== 'undefined' && value !== null) {
                if (typeof value == 'string' || (typeof value == 'object' && value.constructor === String)) {
                    _0x6cbfx2cd = (value.length > 0) ? true : false;
                }
            }
            return _0x6cbfx2cd;
        }
        init();
    };

    return JS_AkamaiMediaAnalytics;
};
