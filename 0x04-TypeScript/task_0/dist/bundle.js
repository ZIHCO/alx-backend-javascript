/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tableStudentList: () => (/* binding */ tableStudentList)
/* harmony export */ });
;
// create two students and append them to an array, studentList
var student1 = {
    firstName: 'John',
    lastName: 'DOE',
    age: 18,
    location: 'LA',
};
var student2 = {
    firstName: 'Foo',
    lastName: 'BAR',
    age: 19,
    location: 'NY',
};
var studentList = [
    student1,
    student2
];
//Stylsheet
var styleSheet = "\n\thtml {\n\t\theight: 100%;\n\t\tmargin: 5px;\n\t}\n\t\n\ttable {\n\t\tborder-collapse: collapse;\n\t}\n\n\ttd {\n\t\tpadding: 10px 20px;\n\t\tborder: 1px solid rgb(190,190,190);\n\t}\n\n\tthead {\n\t\tfont-weight: bold;\n\t}\n\n\ttd {\n\t\tcursor: pointer;\n\t}\n\n\ttd:nth-child(1) {\n\t\ttext-align: center;\n\t}\n";
/**
 * rendering the table with vanilla js
 * @author: ZIHCO
 * @params: studentList
 */
function tableStudentList(students) {
    var table = document.createElement('table');
    // bind table to body element
    document.body.insertAdjacentElement('beforeend', table);
    var tableHead = document.createElement('thead');
    // bind thead to table element
    table.insertAdjacentElement('beforeend', tableHead);
    var tableBody = document.createElement('tbody');
    // bind tbody to table element
    table.insertAdjacentElement('beforeend', tableBody);
    var colHead = document.createElement('tr');
    tableHead.insertAdjacentElement('beforeend', colHead);
    colHead.insertAdjacentHTML('beforeend', '<td>First Name</td>');
    colHead.insertAdjacentHTML('beforeend', '<td>Location</td>');
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var student = students_1[_i];
        var row = document.createElement('tr');
        tableBody.insertAdjacentElement('beforeend', row);
        row.insertAdjacentHTML('beforeend', "<td>" + student.firstName + "</td>");
        row.insertAdjacentHTML('beforeend', "<td>" + student.location + "</td>");
    }
}
;
tableStudentList(studentList);
var styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Creating an interface for a student';

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gU3R1ZGVudCBpbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgU3R1ZGVudCB7XG5cdGZpcnN0TmFtZTogc3RyaW5nO1xuXHRsYXN0TmFtZTogc3RyaW5nO1xuXHRhZ2U6IG51bWJlcjtcblx0bG9jYXRpb246IHN0cmluZztcbn07XG5cbi8vIGNyZWF0ZSB0d28gc3R1ZGVudHMgYW5kIGFwcGVuZCB0aGVtIHRvIGFuIGFycmF5LCBzdHVkZW50TGlzdFxuY29uc3Qgc3R1ZGVudDE6IFN0dWRlbnQgPSB7XG5cdGZpcnN0TmFtZTogJ0pvaG4nLFxuXHRsYXN0TmFtZTogJ0RPRScsXG5cdGFnZTogMTgsXG5cdGxvY2F0aW9uOiAnTEEnLFxufTtcblxuY29uc3Qgc3R1ZGVudDI6IFN0dWRlbnQgPSB7XG5cdGZpcnN0TmFtZTogJ0ZvbycsXG5cdGxhc3ROYW1lOiAnQkFSJyxcblx0YWdlOiAxOSxcblx0bG9jYXRpb246ICdOWScsXG59O1xuXG5jb25zdCBzdHVkZW50TGlzdDogQXJyYXk8U3R1ZGVudD4gPSBbXG5cdHN0dWRlbnQxLFxuXHRzdHVkZW50MlxuXTtcblxuLy9TdHlsc2hlZXRcbmNvbnN0IHN0eWxlU2hlZXQgPSBgXG5cdGh0bWwge1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRtYXJnaW46IDVweDtcblx0fVxuXHRcblx0dGFibGUge1xuXHRcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdH1cblxuXHR0ZCB7XG5cdFx0cGFkZGluZzogMTBweCAyMHB4O1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTAsMTkwLDE5MCk7XG5cdH1cblxuXHR0aGVhZCB7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdH1cblxuXHR0ZCB7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHR9XG5cblx0dGQ6bnRoLWNoaWxkKDEpIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cbmA7XG5cbi8qKlxuICogcmVuZGVyaW5nIHRoZSB0YWJsZSB3aXRoIHZhbmlsbGEganNcbiAqIEBhdXRob3I6IFpJSENPXG4gKiBAcGFyYW1zOiBzdHVkZW50TGlzdFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0YWJsZVN0dWRlbnRMaXN0KHN0dWRlbnRzOiBBcnJheTxTdHVkZW50Pik6IHZvaWQge1xuXHRjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG5cdC8vIGJpbmQgdGFibGUgdG8gYm9keSBlbGVtZW50XG5cdGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCB0YWJsZSk7XG5cblxuXHRjb25zdCB0YWJsZUhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xuXHQvLyBiaW5kIHRoZWFkIHRvIHRhYmxlIGVsZW1lbnRcblx0dGFibGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCB0YWJsZUhlYWQpO1xuXG5cdGNvbnN0IHRhYmxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG5cdC8vIGJpbmQgdGJvZHkgdG8gdGFibGUgZWxlbWVudFxuXHR0YWJsZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIHRhYmxlQm9keSk7XG5cblx0Y29uc3QgY29sSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJylcblx0dGFibGVIZWFkLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgY29sSGVhZCk7XG5cdGNvbEhlYWQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCAnPHRkPkZpcnN0IE5hbWU8L3RkPicpO1xuXHRjb2xIZWFkLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgJzx0ZD5Mb2NhdGlvbjwvdGQ+Jyk7XG5cblx0Zm9yIChjb25zdCBzdHVkZW50IG9mIHN0dWRlbnRzKSB7XG5cdFx0Y29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcblx0XHR0YWJsZUJvZHkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCByb3cpO1xuXHRcdHJvdy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8dGQ+JHtzdHVkZW50LmZpcnN0TmFtZX08L3RkPmApO1xuXHRcdHJvdy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8dGQ+JHtzdHVkZW50LmxvY2F0aW9ufTwvdGQ+YCk7XG5cdH1cbn07XG5cbnRhYmxlU3R1ZGVudExpc3Qoc3R1ZGVudExpc3QpO1xuY29uc3Qgc3R5bGVTaGVldEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuc3R5bGVTaGVldEVsZW1lbnQuaW5uZXJIVE1MID0gc3R5bGVTaGVldDtcbmRvY3VtZW50LmhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBzdHlsZVNoZWV0RWxlbWVudCk7XG5kb2N1bWVudC50aXRsZSA9ICdDcmVhdGluZyBhbiBpbnRlcmZhY2UgZm9yIGEgc3R1ZGVudCc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=