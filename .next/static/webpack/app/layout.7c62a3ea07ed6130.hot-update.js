"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"bcb215256db1\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzY5ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJiY2IyMTUyNTZkYjFcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Hero.jsx":
/*!*****************************!*\
  !*** ./components/Hero.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nvar _s = $RefreshSig$();\nconst Hero = (param)=>{\n    let { currentLanguage, setCurrentLanguage } = param;\n    _s();\n    const { language, setLanguage } = useContext(LanguageContext);\n    const handleLanguageChange = (newLanguage)=>{\n        setLanguage(newLanguage);\n    };\n    const currentTranslation = translations.find((t)=>t.language === currentLanguage);\n    console.log(\"currentLanguage:\", currentLanguage);\n    console.log(\"currentTranslation:\", currentTranslation);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto\",\n            children: currentTranslation ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-4xl mx-auto text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold\",\n                        children: currentTranslation.tittel\n                    }, void 0, false, {\n                        fileName: \"/Users/gurjotsinghaulakh/Downloads/personal-postfolio-master/components/Hero.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl mt-2\",\n                        children: currentTranslation.undertittel\n                    }, void 0, false, {\n                        fileName: \"/Users/gurjotsinghaulakh/Downloads/personal-postfolio-master/components/Hero.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mt-4\",\n                        children: currentTranslation.tekst\n                    }, void 0, false, {\n                        fileName: \"/Users/gurjotsinghaulakh/Downloads/personal-postfolio-master/components/Hero.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gurjotsinghaulakh/Downloads/personal-postfolio-master/components/Hero.jsx\",\n                lineNumber: 21,\n                columnNumber: 11\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/gurjotsinghaulakh/Downloads/personal-postfolio-master/components/Hero.jsx\",\n                lineNumber: 27,\n                columnNumber: 11\n            }, undefined) // or any fallback UI\n        }, void 0, false, {\n            fileName: \"/Users/gurjotsinghaulakh/Downloads/personal-postfolio-master/components/Hero.jsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/gurjotsinghaulakh/Downloads/personal-postfolio-master/components/Hero.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Hero, \"Ez1eajGo3iKhuS+3mgcjuHJ6C2w=\");\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSGVyby5qc3giLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE1BQU1BLE9BQU87UUFBQyxFQUFFQyxlQUFlLEVBQUVDLGtCQUFrQixFQUFFOztJQUVuRCxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFLEdBQUdDLFdBQVdDO0lBRTNDLE1BQU1DLHVCQUF1QixDQUFDQztRQUMxQkosWUFBWUk7SUFDaEI7SUFJRixNQUFNQyxxQkFBcUJDLGFBQWFDLElBQUksQ0FBQ0MsQ0FBQUEsSUFBS0EsRUFBRVQsUUFBUSxLQUFLRjtJQUVqRVksUUFBUUMsR0FBRyxDQUFDLG9CQUFvQmI7SUFDaENZLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJMO0lBRW5DLHFCQUNFLDhEQUFDTTtRQUFRQyxXQUFVO2tCQUNqQiw0RUFBQ0M7WUFBSUQsV0FBVTtzQkFDWlAsbUNBQ0MsOERBQUNRO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQUdGLFdBQVU7a0NBQXNCUCxtQkFBbUJVLE1BQU07Ozs7OztrQ0FDN0QsOERBQUNDO3dCQUFFSixXQUFVO2tDQUFnQlAsbUJBQW1CWSxXQUFXOzs7Ozs7a0NBQzNELDhEQUFDRDt3QkFBRUosV0FBVTtrQ0FBUVAsbUJBQW1CYSxLQUFLOzs7Ozs7Ozs7OzswQ0FHL0MsOERBQUNMOzBCQUFJOzs7OzswQkFBaUIscUJBQXFCOzs7Ozs7Ozs7OztBQUtyRDtHQTlCTWpCO0tBQUFBO0FBZ0NOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVyby5qc3g/MjhhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IEhlcm8gPSAoeyBjdXJyZW50TGFuZ3VhZ2UsIHNldEN1cnJlbnRMYW5ndWFnZSB9KSA9PiB7XG5cbiAgY29uc3QgeyBsYW5ndWFnZSwgc2V0TGFuZ3VhZ2UgfSA9IHVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KTtcblxuICAgIGNvbnN0IGhhbmRsZUxhbmd1YWdlQ2hhbmdlID0gKG5ld0xhbmd1YWdlKSA9PiB7XG4gICAgICAgIHNldExhbmd1YWdlKG5ld0xhbmd1YWdlKTtcbiAgICB9O1xuXG5cblxuICBjb25zdCBjdXJyZW50VHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvbnMuZmluZCh0ID0+IHQubGFuZ3VhZ2UgPT09IGN1cnJlbnRMYW5ndWFnZSk7XG5cbiAgY29uc29sZS5sb2coJ2N1cnJlbnRMYW5ndWFnZTonLCBjdXJyZW50TGFuZ3VhZ2UpO1xuICBjb25zb2xlLmxvZygnY3VycmVudFRyYW5zbGF0aW9uOicsIGN1cnJlbnRUcmFuc2xhdGlvbik7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xMiB4bDpweS0yNCBoLVs4NHZoXSB4bDpwdC0yOCBiZy1oZXJvIGJnLW5vLXJlcGVhdCBiZy1ib3R0b20gYmctY292ZXIgZGFyazpiZy1ub25lXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICAgIHtjdXJyZW50VHJhbnNsYXRpb24gPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZFwiPntjdXJyZW50VHJhbnNsYXRpb24udGl0dGVsfTwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIG10LTJcIj57Y3VycmVudFRyYW5zbGF0aW9uLnVuZGVydGl0dGVsfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTRcIj57Y3VycmVudFRyYW5zbGF0aW9uLnRla3N0fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj4gLy8gb3IgYW55IGZhbGxiYWNrIFVJXG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xuIl0sIm5hbWVzIjpbIkhlcm8iLCJjdXJyZW50TGFuZ3VhZ2UiLCJzZXRDdXJyZW50TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwidXNlQ29udGV4dCIsIkxhbmd1YWdlQ29udGV4dCIsImhhbmRsZUxhbmd1YWdlQ2hhbmdlIiwibmV3TGFuZ3VhZ2UiLCJjdXJyZW50VHJhbnNsYXRpb24iLCJ0cmFuc2xhdGlvbnMiLCJmaW5kIiwidCIsImNvbnNvbGUiLCJsb2ciLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJ0aXR0ZWwiLCJwIiwidW5kZXJ0aXR0ZWwiLCJ0ZWtzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Hero.jsx\n"));

/***/ })

});