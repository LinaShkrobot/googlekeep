/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Api: () => (/* binding */ Api)\n/* harmony export */ });\nclass Api {\n  constructor() {\n    this.BaseUrl = 'http://localhost:5000/';\n  }\n\n  request(options) {\n    return fetch(`${this.BaseUrl}${options.path}`, {\n      method: options.method,\n      body: options.body,\n      headers: options.headers,\n    }).then((r) => r[options.returnType]());\n  }\n\n  getNotes() {\n    return this.request({\n      path: 'notes',\n      returnType: 'json',\n    });\n  }\n\n  createNote(note) {\n    return this.request({\n      path: 'notes',\n      body: JSON.stringify(note),\n      method: 'POST',\n      returnType: 'json',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    });\n  }\n}\n\n// /notes/id  \"PUT\", body, headers\n\n// /notes/id  \"DELETE\"\n\n\n//# sourceURL=webpack://googlekeep/./src/api/index.js?");

/***/ }),

/***/ "./src/components/noteForm.js":
/*!************************************!*\
  !*** ./src/components/noteForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NoteForm: () => (/* binding */ NoteForm)\n/* harmony export */ });\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observer */ \"./src/observer.js\");\n\n\nclass NoteForm {\n  constructor(node, api) {\n    this.node = node;\n    this.api = api;\n    this.node.addEventListener('submit', (e) => {\n      e.preventDefault();\n      const input = this.node.querySelector('.note-form__entry-field');\n      const text = input.value;\n      this.api.createNote({ text }).then((r) => {\n        _observer__WEBPACK_IMPORTED_MODULE_0__.observer.fire('noteCreated');\n      });\n    });\n  }\n}\n\n\n//# sourceURL=webpack://googlekeep/./src/components/noteForm.js?");

/***/ }),

/***/ "./src/components/notesContainer.js":
/*!******************************************!*\
  !*** ./src/components/notesContainer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NotesContainer: () => (/* binding */ NotesContainer)\n/* harmony export */ });\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observer */ \"./src/observer.js\");\n\n\nclass NotesContainer {\n  constructor(node, api) {\n    this.node = node;\n    this.api = api;\n    _observer__WEBPACK_IMPORTED_MODULE_0__.observer.on('noteCreated', this.updateNotesContainer);\n    this.updateNotesContainer();\n  }\n\n  updateNotesContainer = () => {\n    this.api.getNotes().then((note) => {\n      this.renderNotes(note);\n    });\n  };\n\n  renderNotes = (notes) => {\n    this.node.innerHTML = '';\n    notes.forEach((item) => {\n      const noteContainer = document.createElement('div');\n      noteContainer.classList.add('notes-container__note');\n\n      const dotsContainer = document.createElement('div');\n      dotsContainer.classList.add('note__dots-container');\n\n      for (let i = 0; i < 3; i++) {\n        const dot = document.createElement('div');\n        dot.classList.add('dot');\n        dotsContainer.appendChild(dot);\n      }\n\n      const textContainer = document.createElement('div');\n      textContainer.textContent = item.text;\n      const deleteField = document.createElement('div');\n      deleteField.classList.add('notes-container__dropdown');\n      deleteField.style.display = 'none';\n      deleteField.textContent = 'Удалить';\n\n      noteContainer.appendChild(dotsContainer);\n      noteContainer.appendChild(textContainer);\n      dotsContainer.appendChild(deleteField);\n      this.node.appendChild(noteContainer);\n\n      dotsContainer.addEventListener('click', function() {\n        if ( deleteField.style.display === 'none') {\n          deleteField.style.display = 'flex';\n        } else {\n          deleteField.style.display = 'none';\n        };\n      });\n    });\n  };\n};\n\n//# sourceURL=webpack://googlekeep/./src/components/notesContainer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api/index.js\");\n/* harmony import */ var _components_noteForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/noteForm */ \"./src/components/noteForm.js\");\n/* harmony import */ var _components_notesContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/notesContainer */ \"./src/components/notesContainer.js\");\n\n\n\n\nconst changeNoteModalNode = document.querySelector('.change-note-modal');\nconst noteNode = document.querySelector('.note-form');\nconst notescontainerNode = document.querySelector('.notes-container');\n\nconst api = new _api__WEBPACK_IMPORTED_MODULE_0__.Api();\n// new ChangeNoteModal(changeNoteModalNode, api);\nnew _components_noteForm__WEBPACK_IMPORTED_MODULE_1__.NoteForm(noteNode, api);\nnew _components_notesContainer__WEBPACK_IMPORTED_MODULE_2__.NotesContainer(notescontainerNode, api);\n\n\n//# sourceURL=webpack://googlekeep/./src/index.js?");

/***/ }),

/***/ "./src/observer.js":
/*!*************************!*\
  !*** ./src/observer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   observer: () => (/* binding */ observer)\n/* harmony export */ });\nclass Observer {\n    constructor() {\n      this.callbacks = {};\n    }\n  \n    on(type, cb) {\n      if (!this.callbacks[type]) {\n        this.callbacks[type] = [];\n      }\n      this.callbacks[type].push(cb);\n    }\n  \n    fire(type, data) {\n      const callbacks = this.callbacks[type];\n      if (callbacks) {\n        callbacks.forEach((cb) => cb(data));\n      }\n    }\n  }\n  \n  const observer = new Observer();\n\n//# sourceURL=webpack://googlekeep/./src/observer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;