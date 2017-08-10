'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _main = require('./layouts/main');

var _main2 = _interopRequireDefault(_main);

var _content = require('./layouts/content');

var _content2 = _interopRequireDefault(_content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import '../../styles/app.less'


var roolEl = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    _react2.default.createElement(
        'route',
        { path: '/', component: _main2.default },
        _react2.default.createElement('route', { path: '/components/:name', component: _content2.default })
    )
), roolEl);