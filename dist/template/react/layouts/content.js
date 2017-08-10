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

var _docConfig = require('../../utils/docConfig');

var _docConfig2 = _interopRequireDefault(_docConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    ContentLayout: {
        displayName: 'ContentLayout'
    }
};

var _UsersKingsleyGitKingsleyKfsDocNode_modules_reactTransformHmr104ReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/template/react/layouts/content.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersKingsleyGitKingsleyKfsDocNode_modules_reactTransformCatchErrors102ReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/template/react/layouts/content.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersKingsleyGitKingsleyKfsDocNode_modules_reactTransformHmr104ReactTransformHmrLibIndexJs2(_UsersKingsleyGitKingsleyKfsDocNode_modules_reactTransformCatchErrors102ReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

// import '../../../styles/content.less'

var ContentLayout = _wrapComponent('ContentLayout')(function (_React$Component) {
    _inherits(ContentLayout, _React$Component);

    function ContentLayout(props) {
        _classCallCheck(this, ContentLayout);

        var _this = _possibleConstructorReturn(this, (ContentLayout.__proto__ || Object.getPrototypeOf(ContentLayout)).call(this, props));

        _this.state = {
            name: '',
            description: ''
        };

        _this.getClassData = _this.getClassData.bind(_this);
        return _this;
    }

    _createClass(ContentLayout, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'getClassData',
        value: function getClassData(routeParams) {
            var className = routeParams.name;
            var classData = _docConfig2.default.getDataByClass(className);

            if (classData) {
                this.setState({
                    name: classData.name,
                    description: classData.description
                });
            } else {
                this.setState({
                    name: '',
                    description: ''
                });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.routeParams.name != this.props.routeParams.name) {
                this.getClassData(nextProps.routeParams);
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return true;
        }
    }, {
        key: 'render',
        value: function render() {
            var classData = _docConfig2.default.getDataByClass(this.props.routeParams.name);
            if (classData) {
                var Demo = require('component/' + classData.submodule + '/' + this.props.routeParams.name + '.md').default;
                return _react3.default.createElement(
                    'div',
                    { className: 'stdoc-content' },
                    _react3.default.createElement(
                        'div',
                        { className: 'class-container' },
                        _react3.default.createElement(
                            'section',
                            { className: 'header' },
                            _react3.default.createElement(
                                'h2',
                                null,
                                classData.name
                            ),
                            _react3.default.createElement(
                                'p',
                                null,
                                classData.description
                            )
                        ),
                        _react3.default.createElement(Demo, null)
                    )
                );
            } else {
                var menuInfo = _docConfig2.default.getMeunByKey(this.props.routeParams.name);
                var Page = require('component/' + menuInfo.url).default;
                return _react3.default.createElement(
                    'div',
                    { className: 'stdoc-content' },
                    _react3.default.createElement(Page, null)
                );
            }
        }
    }]);

    return ContentLayout;
}(_react3.default.Component));

exports.default = ContentLayout;