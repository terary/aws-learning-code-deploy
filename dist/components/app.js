"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class App extends _react.default.Component {
  constructor() {
    super();

    _defineProperty(this, "handleButtonClick", e => {
      const nameLen = this.state.name.length;

      if (nameLen > 0) {
        this.setState({
          msg: `You name has ${nameLen} characters including space`
        });
      }
    });

    _defineProperty(this, "handleTextChange", e => {
      this.setState({
        name: e.target.value
      });
    });

    _defineProperty(this, "handleReset", () => {
      this.setState({
        name: "",
        msg: ""
      });
    });

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      name: "",
      msg: ""
    };
  } //Handlers


  //End Handlers
  render() {
    let msg;

    if (this.state.msg !== "") {
      msg = _react.default.createElement("p", null, this.state.msg);
    } else {
      msg = "";
    }

    return (//do something here where there is a button that will replace the text
      _react.default.createElement("div", null, _react.default.createElement("label", null, "Your name "), _react.default.createElement("input", {
        type: "text",
        id: "txtName",
        name: "txtName",
        value: this.state.name,
        onChange: this.handleTextChange
      }), _react.default.createElement("button", {
        id: "btnSubmit",
        onClick: this.handleButtonClick
      }, "Calculate Name Length"), _react.default.createElement("button", {
        id: "btnReset",
        onClick: this.handleReset
      }, "Reset All"), _react.default.createElement("hr", null), msg)
    );
  }

}

var _default = App;
exports.default = _default;