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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"66a23ad5b886\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2ExMWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI2NmEyM2FkNWI4ODZcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ThemeToggler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThemeToggler */ \"(app-pages-browser)/./components/ThemeToggler.jsx\");\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ \"(app-pages-browser)/./components/Logo.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _LanguageProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LanguageProvider */ \"(app-pages-browser)/./components/LanguageProvider.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// components\n\n\n\n\nconst header = ()=>{\n    _s();\n    const [header, setHeader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    const { language, setLanguage } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_LanguageProvider__WEBPACK_IMPORTED_MODULE_5__.LanguageContext);\n    const handleLanguageChange = (newLanguage)=>{\n        setLanguage(newLanguage);\n        localStorage.setItem(\"currentLang\", newLanguage);\n        setIsDropdownOpen(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const scrollYPos = window.addEventListener(\"scroll\", ()=>{\n            window.scrollY > 50 ? setHeader(true) : setHeader(false);\n        });\n        return ()=>window.removeEventListener(\"scroll\", scrollYPos);\n    });\n    const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const lang = localStorage.getItem(\"currentLang\") || \"no\";\n        setLanguage(lang);\n    }, []);\n    var _language_toUpperCase;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"\".concat(header ? \"py-4 bg-white shadow-lg  dark:bg-accent\" : \"py-6 dark:bg-transparent\", \" sticky top-0 z-30 transition-all \").concat(pathname === \"/\" && \"bg-[#fef9f5]\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/gurjotsinghaulakh/Desktop/Vaisakhi/components/Header.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-x-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ThemeToggler__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/gurjotsinghaulakh/Desktop/Vaisakhi/components/Header.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>setIsDropdownOpen(!isDropdownOpen),\n                                        className: \"flex items-center bg-blue-500 text-white px-4 py-2 rounded-md\",\n                                        children: (_language_toUpperCase = language === null || language === void 0 ? void 0 : language.toUpperCase()) !== null && _language_toUpperCase !== void 0 ? _language_toUpperCase : \"NO\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gurjotsinghaulakh/Desktop/Vaisakhi/components/Header.jsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    isDropdownOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"absolute right-0 w-14 mt-2 bg-white dark:bg-black-500 shadow-lg rounded-md overflow-hidden\",\n                                        children: [\n                                            \"no\",\n                                            \"pu\",\n                                            \"en\"\n                                        ].map((language)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer dark:text-black\",\n                                                onClick: ()=>handleLanguageChange(language),\n                                                children: language.toUpperCase()\n                                            }, language, false, {\n                                                fileName: \"/Users/gurjotsinghaulakh/Desktop/Vaisakhi/components/Header.jsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 23\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gurjotsinghaulakh/Desktop/Vaisakhi/components/Header.jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/gurjotsinghaulakh/Desktop/Vaisakhi/components/Header.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/gurjotsinghaulakh/Desktop/Vaisakhi/components/Header.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gurjotsinghaulakh/Desktop/Vaisakhi/components/Header.jsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/gurjotsinghaulakh/Desktop/Vaisakhi/components/Header.jsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/gurjotsinghaulakh/Desktop/Vaisakhi/components/Header.jsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(header, \"Zg7O5b1JyUxp+Q7iGaz2lOxahAQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (header);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRXdEO0FBQ3hELGFBQWE7QUFDNkI7QUFDaEI7QUFDb0I7QUFDTztBQUVyRCxNQUFNTyxTQUFTOztJQUNiLE1BQU0sQ0FBQ0EsUUFBUUMsVUFBVSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNUyxXQUFXSiw0REFBV0E7SUFFNUIsTUFBTSxFQUFFSyxRQUFRLEVBQUVDLFdBQVcsRUFBRSxHQUFHVCxpREFBVUEsQ0FBQ0ksOERBQWVBO0lBRTVELE1BQU1NLHVCQUF1QixDQUFDQztRQUM1QkYsWUFBWUU7UUFDWkMsYUFBYUMsT0FBTyxDQUFDLGVBQWVGO1FBQ3BDRyxrQkFBa0I7SUFDcEI7SUFFQWYsZ0RBQVNBLENBQUM7UUFDUixNQUFNZ0IsYUFBYUMsT0FBT0MsZ0JBQWdCLENBQUMsVUFBVTtZQUNuREQsT0FBT0UsT0FBTyxHQUFHLEtBQUtaLFVBQVUsUUFBUUEsVUFBVTtRQUNwRDtRQUVBLE9BQU8sSUFBTVUsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7SUFDcEQ7SUFFQSxNQUFNLENBQUNLLGdCQUFnQk4sa0JBQWtCLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUVyREMsZ0RBQVNBLENBQUM7UUFDUixNQUFNc0IsT0FBT1QsYUFBYVUsT0FBTyxDQUFDLGtCQUFrQjtRQUNwRGIsWUFBWVk7SUFDZCxHQUFHLEVBQUU7UUFvQlViO0lBbEJmLHFCQUNFLDhEQUFDSDtRQUNDa0IsV0FBVyxHQUkwQmhCLE9BSG5DRixTQUNJLDRDQUNBLDRCQUNMLHNDQUF1RSxPQUFuQ0UsYUFBYSxPQUFPO2tCQUV6RCw0RUFBQ2lCO1lBQUlELFdBQVU7c0JBQ2IsNEVBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ3JCLDZDQUFJQTs7Ozs7a0NBQ0wsOERBQUNzQjt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUN0QixxREFBWUE7Ozs7OzBDQUNiLDhEQUFDdUI7Z0NBQUlELFdBQVU7O2tEQUNiLDhEQUFDRTt3Q0FDQ0MsU0FBUyxJQUFNWixrQkFBa0IsQ0FBQ007d0NBQ2xDRyxXQUFVO2tEQUVUZixDQUFBQSx3QkFBQUEscUJBQUFBLCtCQUFBQSxTQUFVbUIsV0FBVyxnQkFBckJuQixtQ0FBQUEsd0JBQTJCOzs7Ozs7b0NBRTdCWSxnQ0FDRyw4REFBQ1E7d0NBQUdMLFdBQVU7a0RBQ1g7NENBQUM7NENBQU07NENBQU07eUNBQUssQ0FBQ00sR0FBRyxDQUFDLENBQUNyQix5QkFDdkIsOERBQUNzQjtnREFFQ1AsV0FBVTtnREFDVkcsU0FBUyxJQUFNaEIscUJBQXFCRjswREFFbkNBLFNBQVNtQixXQUFXOytDQUpoQm5COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWU3QjtHQWxFTUg7O1FBRWFGLHdEQUFXQTs7O0FBa0U5QiwrREFBZUUsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qc3g/NTY3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gY29tcG9uZW50c1xuaW1wb3J0IFRoZW1lVG9nZ2xlciBmcm9tIFwiLi9UaGVtZVRvZ2dsZXJcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuL0xvZ29cIjtcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSBcIi4vTGFuZ3VhZ2VQcm92aWRlclwiO1xuXG5jb25zdCBoZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtoZWFkZXIsIHNldEhlYWRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcblxuICBjb25zdCB7IGxhbmd1YWdlLCBzZXRMYW5ndWFnZSB9ID0gdXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpO1xuXG4gIGNvbnN0IGhhbmRsZUxhbmd1YWdlQ2hhbmdlID0gKG5ld0xhbmd1YWdlKSA9PiB7XG4gICAgc2V0TGFuZ3VhZ2UobmV3TGFuZ3VhZ2UpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudExhbmdcIiwgbmV3TGFuZ3VhZ2UpO1xuICAgIHNldElzRHJvcGRvd25PcGVuKGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNjcm9sbFlQb3MgPSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICB3aW5kb3cuc2Nyb2xsWSA+IDUwID8gc2V0SGVhZGVyKHRydWUpIDogc2V0SGVhZGVyKGZhbHNlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxZUG9zKTtcbiAgfSk7XG5cbiAgY29uc3QgW2lzRHJvcGRvd25PcGVuLCBzZXRJc0Ryb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsYW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50TGFuZ1wiKSB8fCBcIm5vXCI7XG4gICAgc2V0TGFuZ3VhZ2UobGFuZyk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXJcbiAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgIGhlYWRlclxuICAgICAgICAgID8gXCJweS00IGJnLXdoaXRlIHNoYWRvdy1sZyAgZGFyazpiZy1hY2NlbnRcIlxuICAgICAgICAgIDogXCJweS02IGRhcms6YmctdHJhbnNwYXJlbnRcIlxuICAgICAgfSBzdGlja3kgdG9wLTAgei0zMCB0cmFuc2l0aW9uLWFsbCAke3BhdGhuYW1lID09PSBcIi9cIiAmJiBcImJnLVsjZmVmOWY1XVwifWB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAteC02XCI+XG4gICAgICAgICAgICA8VGhlbWVUb2dnbGVyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0Ryb3Bkb3duT3BlbighaXNEcm9wZG93bk9wZW4pfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xhbmd1YWdlPy50b1VwcGVyQ2FzZSgpID8/IFwiTk9cIn1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIHtpc0Ryb3Bkb3duT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCB3LTE0IG10LTIgYmctd2hpdGUgZGFyazpiZy1ibGFjay01MDAgc2hhZG93LWxnIHJvdW5kZWQtbWQgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgIHtbXCJub1wiLCBcInB1XCIsIFwiZW5cIl0ubWFwKChsYW5ndWFnZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtsYW5ndWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBob3ZlcjpiZy1ibHVlLTUwMCBob3Zlcjp0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyIGRhcms6dGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMYW5ndWFnZUNoYW5nZShsYW5ndWFnZSl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2xhbmd1YWdlLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiVGhlbWVUb2dnbGVyIiwiTG9nbyIsInVzZVBhdGhuYW1lIiwiTGFuZ3VhZ2VDb250ZXh0IiwiaGVhZGVyIiwic2V0SGVhZGVyIiwicGF0aG5hbWUiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiaGFuZGxlTGFuZ3VhZ2VDaGFuZ2UiLCJuZXdMYW5ndWFnZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzZXRJc0Ryb3Bkb3duT3BlbiIsInNjcm9sbFlQb3MiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsWSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpc0Ryb3Bkb3duT3BlbiIsImxhbmciLCJnZXRJdGVtIiwiY2xhc3NOYW1lIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsInRvVXBwZXJDYXNlIiwidWwiLCJtYXAiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Header.jsx\n"));

/***/ })

});