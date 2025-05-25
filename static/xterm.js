// ...existing code...
let inputBuffer = '';

term.onData(function(data) {
    if (data === '\r') { // ENTER key
        term.write('\r\n'); // Echo newline
        socket.emit('app_input', { input: inputBuffer });
        inputBuffer = '';
    } else if (data === '\u007F') { // Backspace
        if (inputBuffer.length > 0) {
            term.write('\b \b');
            inputBuffer = inputBuffer.slice(0, -1);
        }
    } else {
        term.write(data); // Echo typed character
        inputBuffer += data;
    }
});
// ...existing code...