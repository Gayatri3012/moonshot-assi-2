/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/AuthContext.js":
/*!************************************!*\
  !*** ./src/context/AuthContext.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthContext: () => (/* binding */ AuthContext),\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    isAuthenticated: null,\n    userId: null,\n    updateAuthStatus: ()=>{},\n    updateUserId: ()=>{}\n});\nconst authReducer = (state, action)=>{\n    const { type, payload } = action;\n    if (type === \"UPDATE_AUTH_STATUS\") {\n        return {\n            ...state,\n            isAuthenticated: payload\n        };\n    }\n    if (type === \"UPDATE_USER_ID\") {\n        return {\n            ...state,\n            userId: payload\n        };\n    }\n    return state;\n};\nconst AuthProvider = ({ children })=>{\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(authReducer, {\n        isAuthenticated: false,\n        userId: null\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const checkAuthentication = async ()=>{\n            const user = localStorage.getItem(\"userId\");\n            if (user) {\n                console.log(state.isAuthenticated);\n                console.log(state.userId);\n                await handleUpdateUserId(user);\n                await handleUpdateAuthStatus(true);\n            }\n        };\n        checkAuthentication();\n    }, []);\n    const handleUpdateAuthStatus = async (authStatus)=>{\n        console.log(\"updating authentication status\");\n        dispatch({\n            type: \"UPDATE_AUTH_STATUS\",\n            payload: authStatus\n        });\n    };\n    const handleUpdateUserId = async (user_id)=>{\n        console.log(\"updating user id\");\n        dispatch({\n            type: \"UPDATE_USER_ID\",\n            payload: user_id\n        });\n    };\n    const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            isAuthenticated: state.isAuthenticated,\n            userId: state.userId,\n            updateAuthStatus: handleUpdateAuthStatus,\n            updateUserId: handleUpdateUserId\n        }), [\n        state.isAuthenticated\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: contextValue,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\GAYATRI\\\\Programming\\\\moonshot-fullstack\\\\interactive-data-visualization-dashboard\\\\src\\\\context\\\\AuthContext.js\",\n        lineNumber: 77,\n        columnNumber: 10\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9BdXRoQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNFO0FBRy9ELE1BQU1JLDRCQUFjSixvREFBYUEsQ0FBQztJQUNyQ0ssaUJBQWlCO0lBQ2pCQyxRQUFRO0lBQ1JDLGtCQUFrQixLQUFPO0lBQ3pCQyxjQUFjLEtBQU87QUFDekIsR0FBRTtBQUVELE1BQU1DLGNBQWMsQ0FBQ0MsT0FBT0M7SUFDekIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRSxHQUFHRjtJQUUxQixJQUFHQyxTQUFTLHNCQUFxQjtRQUM3QixPQUFPO1lBQ0wsR0FBR0YsS0FBSztZQUNSTCxpQkFBaUJRO1FBQ25CO0lBQ0o7SUFFQSxJQUFHRCxTQUFTLGtCQUFpQjtRQUMzQixPQUFPO1lBQ0wsR0FBR0YsS0FBSztZQUNSSixRQUFRTztRQUNWO0lBQ0Y7SUFFQSxPQUFPSDtBQUNYO0FBR08sTUFBTUksZUFBZSxDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUN2QyxNQUFNLENBQUNMLE9BQU9NLFNBQVMsR0FBR2YsaURBQVVBLENBQUNRLGFBQWE7UUFDaERKLGlCQUFpQjtRQUNqQkMsUUFBUTtJQUNWO0lBRUFILGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWMsc0JBQXNCO1lBQzFCLE1BQU1DLE9BQU9DLGFBQWFDLE9BQU8sQ0FBQztZQUNsQyxJQUFHRixNQUFLO2dCQUNORyxRQUFRQyxHQUFHLENBQUNaLE1BQU1MLGVBQWU7Z0JBQ2pDZ0IsUUFBUUMsR0FBRyxDQUFDWixNQUFNSixNQUFNO2dCQUN4QixNQUFNaUIsbUJBQW1CTDtnQkFDekIsTUFBTU0sdUJBQXVCO1lBQy9CO1FBQ0Y7UUFDQVA7SUFDRixHQUFFLEVBQUU7SUFFSixNQUFNTyx5QkFBeUIsT0FBT0M7UUFFcENKLFFBQVFDLEdBQUcsQ0FBQztRQUNWTixTQUFTO1lBQ0xKLE1BQU07WUFDTkMsU0FBU1k7UUFDYjtJQUNKO0lBRUEsTUFBTUYscUJBQXFCLE9BQU9HO1FBQ2hDTCxRQUFRQyxHQUFHLENBQUM7UUFDWk4sU0FBUztZQUNQSixNQUFNO1lBQ05DLFNBQVNhO1FBQ1g7SUFDRjtJQUlBLE1BQU1DLGVBQWV6Qiw4Q0FBT0EsQ0FBQyxJQUFPO1lBQ2xDRyxpQkFBaUJLLE1BQU1MLGVBQWU7WUFDdENDLFFBQVFJLE1BQU1KLE1BQU07WUFDcEJDLGtCQUFrQmlCO1lBQ2xCaEIsY0FBY2U7UUFDbEIsSUFBSTtRQUFDYixNQUFNTCxlQUFlO0tBQUM7SUFFekIscUJBQU8sOERBQUNELFlBQVl3QixRQUFRO1FBQUNDLE9BQU9GO2tCQUNqQ1o7Ozs7OztBQUVMLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1kYXRhLXZpc3VhbGl6YXRpb24tZGFzaGJvYXJkLy4vc3JjL2NvbnRleHQvQXV0aENvbnRleHQuanM/NGJhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VNZW1vLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcclxuICAgIGlzQXV0aGVudGljYXRlZDogbnVsbCxcclxuICAgIHVzZXJJZDogbnVsbCxcclxuICAgIHVwZGF0ZUF1dGhTdGF0dXM6ICgpID0+IHt9LFxyXG4gICAgdXBkYXRlVXNlcklkOiAoKSA9PiB7fSxcclxufSlcclxuICBcclxuIGNvbnN0IGF1dGhSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xyXG5cclxuICAgIGlmKHR5cGUgPT09ICdVUERBVEVfQVVUSF9TVEFUVVMnKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IHBheWxvYWQsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKHR5cGUgPT09ICdVUERBVEVfVVNFUl9JRCcpe1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXJJZDogcGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG59O1xyXG4gIFxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoYXV0aFJlZHVjZXIsIHsgXHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLCBcclxuICAgIHVzZXJJZDogbnVsbCxcclxuICB9KTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgY2hlY2tBdXRoZW50aWNhdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICAgICAgaWYodXNlcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3RhdGUuaXNBdXRoZW50aWNhdGVkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS51c2VySWQpXHJcbiAgICAgICAgYXdhaXQgaGFuZGxlVXBkYXRlVXNlcklkKHVzZXIpO1xyXG4gICAgICAgIGF3YWl0IGhhbmRsZVVwZGF0ZUF1dGhTdGF0dXModHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNoZWNrQXV0aGVudGljYXRpb24oKVxyXG4gIH0sW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZUF1dGhTdGF0dXMgPSBhc3luYyAoYXV0aFN0YXR1cykgPT4ge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCd1cGRhdGluZyBhdXRoZW50aWNhdGlvbiBzdGF0dXMnKTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogJ1VQREFURV9BVVRIX1NUQVRVUycsXHJcbiAgICAgICAgICBwYXlsb2FkOiBhdXRoU3RhdHVzICxcclxuICAgICAgfSlcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVVcGRhdGVVc2VySWQgPSBhc3luYyAodXNlcl9pZCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3VwZGF0aW5nIHVzZXIgaWQnKVxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnVVBEQVRFX1VTRVJfSUQnLFxyXG4gICAgICBwYXlsb2FkOiB1c2VyX2lkICxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHVzZU1lbW8oKCkgPT4gKHtcclxuICAgIGlzQXV0aGVudGljYXRlZDogc3RhdGUuaXNBdXRoZW50aWNhdGVkLFxyXG4gICAgdXNlcklkOiBzdGF0ZS51c2VySWQsXHJcbiAgICB1cGRhdGVBdXRoU3RhdHVzOiBoYW5kbGVVcGRhdGVBdXRoU3RhdHVzLFxyXG4gICAgdXBkYXRlVXNlcklkOiBoYW5kbGVVcGRhdGVVc2VySWQsXHJcbn0pLCBbc3RhdGUuaXNBdXRoZW50aWNhdGVkXSk7XHJcblxyXG4gIHJldHVybiA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRWYWx1ZX0+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPjtcclxufTsiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJ1c2VNZW1vIiwidXNlRWZmZWN0IiwiQXV0aENvbnRleHQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VySWQiLCJ1cGRhdGVBdXRoU3RhdHVzIiwidXBkYXRlVXNlcklkIiwiYXV0aFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsImNoZWNrQXV0aGVudGljYXRpb24iLCJ1c2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVVcGRhdGVVc2VySWQiLCJoYW5kbGVVcGRhdGVBdXRoU3RhdHVzIiwiYXV0aFN0YXR1cyIsInVzZXJfaWQiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/AuthContext.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/AuthContext */ \"./src/context/AuthContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\GAYATRI\\\\Programming\\\\moonshot-fullstack\\\\interactive-data-visualization-dashboard\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\GAYATRI\\\\Programming\\\\moonshot-fullstack\\\\interactive-data-visualization-dashboard\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXFEO0FBQ3ZCO0FBRWYsU0FBU0MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxxQkFBTyw4REFBQ0gsOERBQVlBO2tCQUNoQiw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUU5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVyYWN0aXZlLWRhdGEtdmlzdWFsaXphdGlvbi1kYXNoYm9hcmQvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvQXV0aENvbnRleHRcIjtcbmltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIDxBdXRoUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gIDwvQXV0aFByb3ZpZGVyPlxufVxuIl0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();