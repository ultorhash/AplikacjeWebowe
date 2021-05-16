/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/client.ts ***!
  \***********************/
var socket = new WebSocket('ws://localhost:8080');
socket.onopen = function () {
    socket.send('Hello!');
};
socket.onmessage = function (e) {
    var msg = document.getElementById('messages');
    var item = document.createElement('li');
    item.textContent = e.data;
    msg === null || msg === void 0 ? void 0 : msg.appendChild(item);
};
document.getElementById('send').addEventListener('click', function () {
    socket.send(document.getElementById('msg').value);
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYWI4Ly4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc29ja2V0ID0gbmV3IFdlYlNvY2tldCgnd3M6Ly9sb2NhbGhvc3Q6ODA4MCcpO1xyXG5zb2NrZXQub25vcGVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgc29ja2V0LnNlbmQoJ0hlbGxvIScpO1xyXG59O1xyXG5zb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBtc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZXMnKTtcclxuICAgIHZhciBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGl0ZW0udGV4dENvbnRlbnQgPSBlLmRhdGE7XHJcbiAgICBtc2cgPT09IG51bGwgfHwgbXNnID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtc2cuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbn07XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZW5kJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBzb2NrZXQuc2VuZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXNnJykudmFsdWUpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==