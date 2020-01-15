"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get("/", async (req, res) => {
  const theHtml = `
    <html>
    <head><title>My First SSR</title></head>
    <body>
    <h1>My First Server Side Render</h1>
    <div id="reactele">{{{reactele}}}</div>
    This uses handlebars - not part of this project.
    page is here to verify all is set-up

    <script src="/app.js" charset="utf-8"></script>
    <script src="/vendor.js" charset="utf-8"></script>

    </body>
    </html>
    `;
  res.send(theHtml);
});
var _default = router;
exports.default = _default;