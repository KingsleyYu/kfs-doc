'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('/Users/kingsley/git/Kingsley/kfs-doc/node_modules/_redbox-react@1.5.0@redbox-react/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('/Users/kingsley/git/Kingsley/kfs-doc/node_modules/_react-transform-catch-errors@1.0.2@react-transform-catch-errors/lib/index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('/Users/kingsley/git/Kingsley/kfs-doc/node_modules/_react-transform-hmr@1.0.4@react-transform-hmr/lib/index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Footer: {
        displayName: 'Footer'
    }
};

var _UsersKingsleyGitKingsleyKfsDocNode_modules_reactTransformHmr104ReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/template/react/components/footer.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersKingsleyGitKingsleyKfsDocNode_modules_reactTransformCatchErrors102ReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/template/react/components/footer.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersKingsleyGitKingsleyKfsDocNode_modules_reactTransformHmr104ReactTransformHmrLibIndexJs2(_UsersKingsleyGitKingsleyKfsDocNode_modules_reactTransformCatchErrors102ReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var Footer = _wrapComponent('Footer')(function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer(props) {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, constructor));
    }

    _createClass(Footer, [{
        key: 'render',
        value: function render() {
            return _react3.default.createElement(
                'div',
                null,
                'this is footer'
            );
        }
    }]);

    return Footer;
}(_react3.default.Component));

exports.default = Footer;