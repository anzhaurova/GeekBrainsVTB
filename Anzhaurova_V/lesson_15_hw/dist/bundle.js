/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/AppRouting.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/AppRouting.jsx":
/*!****************************!*\
  !*** ./src/AppRouting.jsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/src/AppRouting.jsx: Support for the experimental syntax 'classProperties' isn't currently enabled (11:10):\\n\\n\\u001b[0m \\u001b[90m  9 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m\\u001b[36mclass\\u001b[39m \\u001b[33mAppRouting\\u001b[39m \\u001b[36mextends\\u001b[39m \\u001b[33mComponent\\u001b[39m {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 11 | \\u001b[39m    state\\u001b[33m=\\u001b[39m{\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m         \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m        route\\u001b[33m:\\u001b[39m \\u001b[36mnull\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m    }\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 14 | \\u001b[39m    render(){\\u001b[0m\\n\\nAdd @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.\\n    at Parser._raise (/Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/node_modules/@babel/parser/lib/index.js:723:17)\\n    at Parser.raiseWithData (/Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/node_modules/@babel/parser/lib/index.js:716:17)\\n    at Parser.expectPlugin (/Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/node_modules/@babel/parser/lib/index.js:8615:18)\\n    at Parser.parseClassProperty (/Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/node_modules/@babel/parser/lib/index.js:11925:12)\\n    at Parser.pushClassProperty (/Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/node_modules/@babel/parser/lib/index.js:11885:30)\\n    at Parser.parseClassMemberWithIsStatic (/Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/node_modules/@babel/parser/lib/index.js:11818:14)\\n    at Parser.parseClassMember (/Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/node_modules/@babel/parser/lib/index.js:11755:10)\\n    at /Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/node_modules/@babel/parser/lib/index.js:11710:14\\n    at Parser.withTopicForbiddingContext (/Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/node_modules/@babel/parser/lib/index.js:10791:14)\\n    at Parser.parseClassBody (/Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/node_modules/@babel/parser/lib/index.js:11687:10)\\n    at Parser.parseClass (/Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/node_modules/@babel/parser/lib/index.js:11661:22)\\n    at Parser.parseStatementContent (/Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/node_modules/@babel/parser/lib/index.js:10958:21)\\n    at Parser.parseStatement (/Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/node_modules/@babel/parser/lib/index.js:10916:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/node_modules/@babel/parser/lib/index.js:11490:25)\\n    at Parser.parseBlockBody (/Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/node_modules/@babel/parser/lib/index.js:11477:10)\\n    at Parser.parseTopLevel (/Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/node_modules/@babel/parser/lib/index.js:10847:10)\\n    at Parser.parse (/Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/node_modules/@babel/parser/lib/index.js:12452:10)\\n    at parse (/Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/node_modules/@babel/parser/lib/index.js:12503:38)\\n    at parser (/Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/node_modules/@babel/core/lib/transformation/index.js:31:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (/Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/node_modules/@babel/core/lib/transform.js:27:41)\\n    at transform.next (<anonymous>)\\n    at step (/Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/node_modules/gensync/index.js:254:32)\\n    at /Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/node_modules/gensync/index.js:266:13\\n    at async.call.result.err.err (/Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/node_modules/gensync/index.js:216:11)\\n    at /Users/victoria/projects/VTB/GeekBrainsVTB/Anzhaurova_V/lesson_15_hw/node_modules/gensync/index.js:184:28\");\n\n//# sourceURL=webpack:///./src/AppRouting.jsx?");

/***/ })

/******/ });