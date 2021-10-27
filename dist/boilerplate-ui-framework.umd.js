"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (e, t) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && typeof module != "undefined" ? t(exports) : typeof define == "function" && define.amd ? define(["exports"], t) : (e = typeof globalThis != "undefined" ? globalThis : e || self, t(e["boilerplate-ui-framework"] = {}));
})(void 0, function (e) {
  "use strict";

  var t = "";

  (function () {
    console.log("run in global");
  })();

  function o(i, a) {
    i.addEventListener("click", function (d) {
      var n = d.target;
      n.classList.add("text-gray-200"), n.tagName.toLocaleLowerCase() === "button" && alert(n.innerHTML);
    });
  }

  e.handleCard = o, Object.defineProperty(e, "__esModule", {
    value: !0
  }), e[Symbol.toStringTag] = "Module";
});