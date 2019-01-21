var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var MyApp = function (_React$Component) {
	_inherits(MyApp, _React$Component);

	function MyApp(props) {
		_classCallCheck(this, MyApp);

		var _this = _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).call(this, props));

		_this.state = { name: '', hey: '' };

		_this.handleChange = _this.handleChange.bind(_this);
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		return _this;
	}

	_createClass(MyApp, [{
		key: 'handleChange',
		value: function handleChange(event) {
			this.setState({ name: event.target.value });
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit(event) {
			event.preventDefault();
			this.setState({ hey: 'Hello ' + this.state.name });
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'form',
					{ onSubmit: this.handleSubmit },
					React.createElement(
						'label',
						null,
						'Hello world, what\u2019s your name:',
						React.createElement('input', { id: 'name', value: this.state.value, onChange: this.handleChange })
					),
					React.createElement('input', { type: 'submit', value: 'Go' })
				),
				React.createElement(
					'label',
					null,
					this.state.hey
				)
			);
		}
	}]);

	return MyApp;
}(React.Component);

var domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(MyApp), domContainer);