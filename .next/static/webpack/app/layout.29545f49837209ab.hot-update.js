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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"c93bd37f5a76\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzY5ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJjOTNiZDM3ZjVhNzZcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ThemeToggler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThemeToggler */ \"(app-pages-browser)/./components/ThemeToggler.jsx\");\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ \"(app-pages-browser)/./components/Logo.jsx\");\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Nav */ \"(app-pages-browser)/./components/Nav.jsx\");\n/* harmony import */ var _MobileNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MobileNav */ \"(app-pages-browser)/./components/MobileNav.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _LanguageContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LanguageContext */ \"(app-pages-browser)/./components/LanguageContext.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// components\n\n\n\n\n\n\nconst header = ()=>{\n    _s();\n    const [header, setHeader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname)();\n    const { language, setLanguage } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_LanguageContext__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n    const handleLanguageChange = (newLanguage)=>{\n        setLanguage(newLanguage);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const scrollYPos = window.addEventListener(\"scroll\", ()=>{\n            window.scrollY > 50 ? setHeader(true) : setHeader(false);\n        });\n        // remove event\n        return ()=>window.removeEventListener(\"scroll\", scrollYPos);\n    });\n    const [currentLanguage, setCurrentLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(language);\n    const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const lang = localStorage.getItem(\"currentLang\") || \"no\";\n        console.log(lang);\n        setCurrentLanguage(lang);\n    }, []);\n    const changeLanguage = (language)=>{\n        setCurrentLanguage(language);\n        localStorage.setItem(\"currentLang\", language);\n        setIsDropdownOpen(false);\n    };\n    var _currentLanguage_toUpperCase;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"\".concat(header ? \"py-4 bg-white shadow-lg  dark:bg-accent\" : \"py-6 dark:bg-transparent\", \" sticky top-0 z-30 transition-all \").concat(pathname === \"/\" && \"bg-[#fef9f5]\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/gurjotsinghaulakh/Downloads/personal-postfolio-master/components/Header.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-x-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ThemeToggler__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/gurjotsinghaulakh/Downloads/personal-postfolio-master/components/Header.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>setIsDropdownOpen(!isDropdownOpen),\n                                        className: \"flex items-center bg-blue-500 text-white px-4 py-2 rounded-md\",\n                                        children: (_currentLanguage_toUpperCase = currentLanguage === null || currentLanguage === void 0 ? void 0 : currentLanguage.toUpperCase()) !== null && _currentLanguage_toUpperCase !== void 0 ? _currentLanguage_toUpperCase : \"NO\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gurjotsinghaulakh/Downloads/personal-postfolio-master/components/Header.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    isDropdownOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"absolute right-0 w-14 mt-2 bg-white shadow-lg rounded-md overflow-hidden\",\n                                        children: [\n                                            \"no\",\n                                            \"pu\",\n                                            \"en\"\n                                        ].map((language)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer\",\n                                                onClick: ()=>handleLanguageChange(language),\n                                                children: language.toUpperCase()\n                                            }, language, false, {\n                                                fileName: \"/Users/gurjotsinghaulakh/Downloads/personal-postfolio-master/components/Header.jsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 21\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gurjotsinghaulakh/Downloads/personal-postfolio-master/components/Header.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/gurjotsinghaulakh/Downloads/personal-postfolio-master/components/Header.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/gurjotsinghaulakh/Downloads/personal-postfolio-master/components/Header.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gurjotsinghaulakh/Downloads/personal-postfolio-master/components/Header.jsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/gurjotsinghaulakh/Downloads/personal-postfolio-master/components/Header.jsx\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/gurjotsinghaulakh/Downloads/personal-postfolio-master/components/Header.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(header, \"G9R0AS4w0NBIe0uC6MlNqJckGYI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (header);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFd0Q7QUFDeEQsYUFBYTtBQUM2QjtBQUNoQjtBQUNGO0FBQ1k7QUFDVTtBQUNFO0FBRWhELE1BQU1TLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQSxRQUFRQyxVQUFVLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU1XLFdBQVdKLDREQUFXQTtJQUU1QixNQUFNLEVBQUVLLFFBQVEsRUFBRUMsV0FBVyxFQUFFLEdBQUdYLGlEQUFVQSxDQUFDTSx3REFBZUE7SUFFNUQsTUFBTU0sdUJBQXVCLENBQUNDO1FBQzVCRixZQUFZRTtJQUNkO0lBRUFkLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWUsYUFBYUMsT0FBT0MsZ0JBQWdCLENBQUMsVUFBVTtZQUNuREQsT0FBT0UsT0FBTyxHQUFHLEtBQUtULFVBQVUsUUFBUUEsVUFBVTtRQUNwRDtRQUVBLGVBQWU7UUFDZixPQUFPLElBQU1PLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVKO0lBQ3BEO0lBRUEsTUFBTSxDQUFDSyxpQkFBaUJDLG1CQUFtQixHQUFHdEIsK0NBQVFBLENBQUNZO0lBQ3ZELE1BQU0sQ0FBQ1csZ0JBQWdCQyxrQkFBa0IsR0FBR3hCLCtDQUFRQSxDQUFDO0lBRXJEQyxnREFBU0EsQ0FBQztRQUNSLE1BQU13QixPQUFPQyxhQUFhQyxPQUFPLENBQUMsa0JBQWtCO1FBQ3BEQyxRQUFRQyxHQUFHLENBQUNKO1FBQ1pILG1CQUFtQkc7SUFDckIsR0FBRyxFQUFFO0lBRUwsTUFBTUssaUJBQWlCLENBQUNsQjtRQUN0QlUsbUJBQW1CVjtRQUNuQmMsYUFBYUssT0FBTyxDQUFDLGVBQWVuQjtRQUNwQ1ksa0JBQWtCO0lBQ3BCO1FBaUJhSDtJQWZiLHFCQUNFLDhEQUFDWjtRQUNDdUIsV0FBVyxHQUkwQnJCLE9BSG5DRixTQUNHLDRDQUNBLDRCQUNKLHNDQUF1RSxPQUFuQ0UsYUFBYSxPQUFPO2tCQUV6RCw0RUFBQ3NCO1lBQUlELFdBQVU7c0JBQ2IsNEVBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQzVCLDZDQUFJQTs7Ozs7a0NBQ0wsOERBQUM2Qjt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUM3QixxREFBWUE7Ozs7OzBDQUNiLDhEQUFDOEI7Z0NBQUlELFdBQVU7O2tEQUNiLDhEQUFDRTt3Q0FBT0MsU0FBUyxJQUFNWCxrQkFBa0IsQ0FBQ0Q7d0NBQWlCUyxXQUFVO2tEQUNwRVgsQ0FBQUEsK0JBQUFBLDRCQUFBQSxzQ0FBQUEsZ0JBQWlCZSxXQUFXLGdCQUE1QmYsMENBQUFBLCtCQUFrQzs7Ozs7O29DQUVsQ0UsZ0NBQ0MsOERBQUNjO3dDQUFHTCxXQUFVO2tEQUNYOzRDQUFDOzRDQUFNOzRDQUFNO3lDQUFLLENBQUNNLEdBQUcsQ0FBQyxDQUFDMUIseUJBQ3ZCLDhEQUFDMkI7Z0RBQWtCUCxXQUFVO2dEQUE4REcsU0FBUyxJQUFNckIscUJBQXFCRjswREFDNUhBLFNBQVN3QixXQUFXOytDQURkeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWTdCO0dBbEVNSDs7UUFFYUYsd0RBQVdBOzs7QUFrRTlCLCtEQUFlRSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzeD81NjdkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG4vLyBjb21wb25lbnRzXG5pbXBvcnQgVGhlbWVUb2dnbGVyIGZyb20gXCIuL1RoZW1lVG9nZ2xlclwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4vTG9nb1wiO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi9OYXZcIjtcbmltcG9ydCBNb2JpbGVOYXYgZnJvbSBcIi4vTW9iaWxlTmF2XCI7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBMYW5ndWFnZUNvbnRleHQgZnJvbSBcIi4vTGFuZ3VhZ2VDb250ZXh0XCI7XG5cbmNvbnN0IGhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuXG4gIGNvbnN0IHsgbGFuZ3VhZ2UsIHNldExhbmd1YWdlIH0gPSB1c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dCk7XG5cbiAgY29uc3QgaGFuZGxlTGFuZ3VhZ2VDaGFuZ2UgPSAobmV3TGFuZ3VhZ2UpID0+IHtcbiAgICBzZXRMYW5ndWFnZShuZXdMYW5ndWFnZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzY3JvbGxZUG9zID0gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgd2luZG93LnNjcm9sbFkgPiA1MCA/IHNldEhlYWRlcih0cnVlKSA6IHNldEhlYWRlcihmYWxzZSk7XG4gICAgfSk7XG5cbiAgICAvLyByZW1vdmUgZXZlbnRcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsWVBvcyk7XG4gIH0pO1xuXG4gIGNvbnN0IFtjdXJyZW50TGFuZ3VhZ2UsIHNldEN1cnJlbnRMYW5ndWFnZV0gPSB1c2VTdGF0ZShsYW5ndWFnZSk7XG4gIGNvbnN0IFtpc0Ryb3Bkb3duT3Blbiwgc2V0SXNEcm9wZG93bk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbGFuZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50TGFuZycpIHx8ICdubyc7XG4gICAgY29uc29sZS5sb2cobGFuZylcbiAgICBzZXRDdXJyZW50TGFuZ3VhZ2UobGFuZyk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjaGFuZ2VMYW5ndWFnZSA9IChsYW5ndWFnZSkgPT4ge1xuICAgIHNldEN1cnJlbnRMYW5ndWFnZShsYW5ndWFnZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRMYW5nJywgbGFuZ3VhZ2UpO1xuICAgIHNldElzRHJvcGRvd25PcGVuKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXJcbiAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgIGhlYWRlclxuICAgICAgICAgPyBcInB5LTQgYmctd2hpdGUgc2hhZG93LWxnICBkYXJrOmJnLWFjY2VudFwiIFxuICAgICAgICAgOiBcInB5LTYgZGFyazpiZy10cmFuc3BhcmVudFwiXG4gICAgICB9IHN0aWNreSB0b3AtMCB6LTMwIHRyYW5zaXRpb24tYWxsICR7cGF0aG5hbWUgPT09ICcvJyAmJiAnYmctWyNmZWY5ZjVdJ31gfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLXgtNlwiPlxuICAgICAgICAgICAgPFRoZW1lVG9nZ2xlciAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzRHJvcGRvd25PcGVuKCFpc0Ryb3Bkb3duT3Blbil9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgICAge2N1cnJlbnRMYW5ndWFnZT8udG9VcHBlckNhc2UoKSA/PyBcIk5PXCJ9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICB7aXNEcm9wZG93bk9wZW4gJiYgKFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIHctMTQgbXQtMiBiZy13aGl0ZSBzaGFkb3ctbGcgcm91bmRlZC1tZCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgIHtbXCJub1wiLCBcInB1XCIsIFwiZW5cIl0ubWFwKChsYW5ndWFnZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtsYW5ndWFnZX0gY2xhc3NOYW1lPVwicHgtNCBweS0yIGhvdmVyOmJnLWJsdWUtNTAwIGhvdmVyOnRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMYW5ndWFnZUNoYW5nZShsYW5ndWFnZSl9PlxuICAgICAgICAgICAgICAgICAgICAgIHtsYW5ndWFnZS50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIlRoZW1lVG9nZ2xlciIsIkxvZ28iLCJOYXYiLCJNb2JpbGVOYXYiLCJ1c2VQYXRobmFtZSIsIkxhbmd1YWdlQ29udGV4dCIsImhlYWRlciIsInNldEhlYWRlciIsInBhdGhuYW1lIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImhhbmRsZUxhbmd1YWdlQ2hhbmdlIiwibmV3TGFuZ3VhZ2UiLCJzY3JvbGxZUG9zIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3VycmVudExhbmd1YWdlIiwic2V0Q3VycmVudExhbmd1YWdlIiwiaXNEcm9wZG93bk9wZW4iLCJzZXRJc0Ryb3Bkb3duT3BlbiIsImxhbmciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsImNoYW5nZUxhbmd1YWdlIiwic2V0SXRlbSIsImNsYXNzTmFtZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0b1VwcGVyQ2FzZSIsInVsIiwibWFwIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Header.jsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/LanguageContext.jsx":
/*!****************************************!*\
  !*** ./components/LanguageContext.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst LanguageContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createContext();\n/* harmony default export */ __webpack_exports__[\"default\"] = (LanguageContext);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTGFuZ3VhZ2VDb250ZXh0LmpzeCIsIm1hcHBpbmdzIjoiOzs7QUFBMEI7QUFFMUIsTUFBTUMsZ0NBQWtCRCwwREFBbUI7QUFFM0MsK0RBQWVDLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYW5ndWFnZUNvbnRleHQuanN4PzkwYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTGFuZ3VhZ2VDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZUNvbnRleHQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTGFuZ3VhZ2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/LanguageContext.jsx\n"));

/***/ })

});