"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var DarkModeReducer = function DarkModeReducer(state, action) {
  switch (action.type) {
    case "LIGHT":
      {
        return {
          darkMode: false
        };
      }

    case "DARK":
      {
        return {
          darkMode: true
        };
      }

    case "TOGGLE":
      {
        return {
          darkMode: !state.darkMode
        };
      }

    default:
      return state;
  }
};

var _default = DarkModeReducer;
exports.default = _default;
//# sourceMappingURL=darkModeReducer.dev.js.map
