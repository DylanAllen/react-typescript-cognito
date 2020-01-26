webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Link */ "./components/Link.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _utils_theme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/theme.js */ "./utils/theme.js");
var _jsxFileName = "/Users/dylanallen/react/react-typescript-cognito/components/Layout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];






var Layout = function Layout(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'This is the default title' : _ref$title;
  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_3__["Grommet"], {
    theme: _utils_theme_js__WEBPACK_IMPORTED_MODULE_4__["theme"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, title), __jsx("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    path: "/",
    label: "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), ' ', "|", ' ', __jsx(_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    path: "/about",
    label: "About",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), ' ', "|", ' ', __jsx(_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    path: "/users",
    label: "Users List",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }))), children, __jsx("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "I'm here to stay (Footer)")));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./utils/theme.js":
/*!************************!*\
  !*** ./utils/theme.js ***!
  \************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
var theme = {
  "name": "react-typescript-cognito",
  "rounding": 4,
  "spacing": 20,
  "global": {
    "colors": {
      "brand": "#AB1C1B",
      "accent-1": "#FF7C0F",
      "accent-2": "#F5F5F5",
      "accent-3": "#cc5e04",
      "neutral-1": "#9bd7d1",
      "neutral-2": "#cc5e04",
      "focus": "#DADADA",
      "accent-4": "#305C7A"
    },
    "font": {
      "family": "\"Montserrat\"",
      "size": "15px",
      "height": "20px",
      "maxWidth": "300px",
      "face": "/* cyrillic-ext */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Comfortaa';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/comfortaa/v27/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDr4fJh1Zyc61YBlG.woff) format('woff');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Comfortaa';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/comfortaa/v27/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDrcfJh1Zyc61YBlG.woff) format('woff');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek */\n@font-face {\n  font-family: 'Comfortaa';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/comfortaa/v27/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDrAfJh1Zyc61YBlG.woff) format('woff');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Comfortaa';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/comfortaa/v27/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDrwfJh1Zyc61YBlG.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Comfortaa';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/comfortaa/v27/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDr0fJh1Zyc61YBlG.woff) format('woff');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Comfortaa';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/comfortaa/v27/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDrMfJh1Zyc61YA.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"
    },
    "control": {
      "border": {
        "radius": "4px"
      }
    },
    "borderSize": {
      "xsmall": "1px",
      "small": "2px",
      "medium": "3.3333333333333335px",
      "large": "10px",
      "xlarge": "20px"
    },
    "breakpoints": {
      "small": {
        "value": 640,
        "borderSize": {
          "xsmall": "1px",
          "small": "2px",
          "medium": "3.3333333333333335px",
          "large": "5px",
          "xlarge": "10px"
        },
        "edgeSize": {
          "none": "0px",
          "hair": "1px",
          "xxsmall": "2px",
          "xsmall": "2.5px",
          "small": "5px",
          "medium": "10px",
          "large": "20px",
          "xlarge": "40px"
        },
        "size": {
          "xxsmall": "20px",
          "xsmall": "40px",
          "small": "80px",
          "medium": "160px",
          "large": "320px",
          "xlarge": "640px",
          "full": "100%"
        }
      },
      "medium": {
        "value": 1280
      },
      "large": {}
    },
    "edgeSize": {
      "none": "0px",
      "hair": "1px",
      "xxsmall": "2.5px",
      "xsmall": "5px",
      "small": "10px",
      "medium": "20px",
      "large": "40px",
      "xlarge": "80px",
      "responsiveBreakpoint": "small"
    },
    "input": {
      "padding": "10px",
      "weight": 600
    },
    "spacing": "20px",
    "size": {
      "xxsmall": "40px",
      "xsmall": "80px",
      "small": "160px",
      "medium": "320px",
      "large": "640px",
      "xlarge": "960px",
      "xxlarge": "1280px",
      "full": "100%"
    }
  },
  "button": {
    "border": {
      "width": "2px",
      "radius": "15px"
    },
    "padding": {
      "vertical": "3px",
      "horizontal": "18px"
    }
  },
  "checkBox": {
    "check": {
      "radius": "4px"
    },
    "toggle": {
      "radius": "20px",
      "size": "40px"
    },
    "size": "20px"
  },
  "radioButton": {
    "size": "20px"
  },
  "calendar": {
    "small": {
      "fontSize": "11.666666666666666px",
      "lineHeight": 1.375,
      "daySize": "22.857142857142858px"
    },
    "medium": {
      "fontSize": "15px",
      "lineHeight": 1.45,
      "daySize": "45.714285714285715px"
    },
    "large": {
      "fontSize": "25px",
      "lineHeight": 1.11,
      "daySize": "91.42857142857143px"
    }
  },
  "clock": {
    "analog": {
      "hour": {
        "width": "6.666666666666667px",
        "size": "20px"
      },
      "minute": {
        "width": "3.3333333333333335px",
        "size": "10px"
      },
      "second": {
        "width": "2.5px",
        "size": "8px"
      },
      "size": {
        "small": "60px",
        "medium": "80px",
        "large": "120px",
        "xlarge": "180px",
        "huge": "240px"
      }
    },
    "digital": {
      "text": {
        "xsmall": {
          "size": "8.333333333333332px",
          "height": 1.5
        },
        "small": {
          "size": "11.666666666666666px",
          "height": 1.43
        },
        "medium": {
          "size": "15px",
          "height": 1.375
        },
        "large": {
          "size": "18.333333333333332px",
          "height": 1.167
        },
        "xlarge": {
          "size": "21.666666666666668px",
          "height": 1.1875
        },
        "xxlarge": {
          "size": "28.333333333333336px",
          "height": 1.125
        }
      }
    }
  },
  "heading": {
    "level": {
      "1": {
        "small": {
          "size": "28.333333333333336px",
          "height": "33.333333333333336px",
          "maxWidth": "100%"
        },
        "medium": {
          "size": "41.66666666666667px",
          "height": "46.66666666666667px",
          "maxWidth": "100%"
        },
        "large": {
          "size": "68.33333333333334px",
          "height": "73.33333333333334px",
          "maxWidth": "100%"
        },
        "xlarge": {
          "size": "95px",
          "height": "100px",
          "maxWidth": "100%"
        }
      },
      "2": {
        "small": {
          "size": "21.666666666666668px",
          "height": "26.666666666666668px",
          "maxWidth": "100%"
        },
        "medium": {
          "size": "28.333333333333336px",
          "height": "33.333333333333336px",
          "maxWidth": "100%"
        },
        "large": {
          "size": "41.66666666666667px",
          "height": "46.66666666666667px",
          "maxWidth": "100%"
        },
        "xlarge": {
          "size": "55px",
          "height": "60px",
          "maxWidth": "100%"
        }
      },
      "3": {
        "small": {
          "size": "18.333333333333332px",
          "height": "23.333333333333332px",
          "maxWidth": "100%"
        },
        "medium": {
          "size": "21.666666666666668px",
          "height": "26.666666666666668px",
          "maxWidth": "100%"
        },
        "large": {
          "size": "28.333333333333336px",
          "height": "33.333333333333336px",
          "maxWidth": "100%"
        },
        "xlarge": {
          "size": "35px",
          "height": "40px",
          "maxWidth": "100%"
        }
      },
      "4": {
        "small": {
          "size": "15px",
          "height": "20px",
          "maxWidth": "500px"
        },
        "medium": {
          "size": "15px",
          "height": "20px",
          "maxWidth": "600px"
        },
        "large": {
          "size": "15px",
          "height": "20px",
          "maxWidth": "700px"
        },
        "xlarge": {
          "size": "15px",
          "height": "20px",
          "maxWidth": "800px"
        }
      },
      "5": {
        "small": {
          "size": "13.333333333333334px",
          "height": "18.333333333333332px",
          "maxWidth": "266.6666666666667px"
        },
        "medium": {
          "size": "13.333333333333334px",
          "height": "18.333333333333332px",
          "maxWidth": "266.6666666666667px"
        },
        "large": {
          "size": "13.333333333333334px",
          "height": "18.333333333333332px",
          "maxWidth": "266.6666666666667px"
        },
        "xlarge": {
          "size": "13.333333333333334px",
          "height": "18.333333333333332px",
          "maxWidth": "266.6666666666667px"
        }
      },
      "6": {
        "small": {
          "size": "11.666666666666666px",
          "height": "16.666666666666668px",
          "maxWidth": "233.33333333333331px"
        },
        "medium": {
          "size": "11.666666666666666px",
          "height": "16.666666666666668px",
          "maxWidth": "233.33333333333331px"
        },
        "large": {
          "size": "11.666666666666666px",
          "height": "16.666666666666668px",
          "maxWidth": "233.33333333333331px"
        },
        "xlarge": {
          "size": "11.666666666666666px",
          "height": "16.666666666666668px",
          "maxWidth": "233.33333333333331px"
        }
      }
    },
    "font": {
      "family": "\"Comfortaa\""
    }
  },
  "paragraph": {
    "small": {
      "size": "11.666666666666666px",
      "height": "16.666666666666668px",
      "maxWidth": "233.33333333333331px"
    },
    "medium": {
      "size": "15px",
      "height": "20px",
      "maxWidth": "300px"
    },
    "large": {
      "size": "18.333333333333332px",
      "height": "23.333333333333332px",
      "maxWidth": "366.66666666666663px"
    },
    "xlarge": {
      "size": "21.666666666666668px",
      "height": "26.666666666666668px",
      "maxWidth": "433.33333333333337px"
    },
    "xxlarge": {
      "size": "28.333333333333336px",
      "height": "33.333333333333336px",
      "maxWidth": "566.6666666666667px"
    }
  },
  "text": {
    "xsmall": {
      "size": "10px",
      "height": "15px",
      "maxWidth": "200px"
    },
    "small": {
      "size": "11.666666666666666px",
      "height": "16.666666666666668px",
      "maxWidth": "233.33333333333331px"
    },
    "medium": {
      "size": "15px",
      "height": "20px",
      "maxWidth": "300px"
    },
    "large": {
      "size": "18.333333333333332px",
      "height": "23.333333333333332px",
      "maxWidth": "366.66666666666663px"
    },
    "xlarge": {
      "size": "21.666666666666668px",
      "height": "26.666666666666668px",
      "maxWidth": "433.33333333333337px"
    },
    "xxlarge": {
      "size": "28.333333333333336px",
      "height": "33.333333333333336px",
      "maxWidth": "566.6666666666667px"
    }
  }
};

/***/ })

})
//# sourceMappingURL=index.js.7dbc8b2fd9cb9ec20ca5.hot-update.js.map