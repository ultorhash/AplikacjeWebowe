const socket = new WebSocket('ws://localhost:8080');

socket.onopen = function() {
    socket.send('Hello!');
}

socket.onmessage = function(e) {
    const msg = document.getElementById('messages');
    const item = document.createElement('li');
    item.textContent = e.data;
    msg?.appendChild(item);
}

document.getElementById('send').addEventListener('click', () => {
    socket.send((<HTMLInputElement>document.getElementById('msg')).value);
});