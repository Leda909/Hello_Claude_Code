function sayHello() {
    const name = document.getElementById('nameInput').value;
    const output = document.getElementById('output');
    
    if (name.trim() === '') {
        output.textContent = 'Hello World! 🌍';
    } else {
        output.textContent = `Hello, ${name}! Welcome to the world of programming! 🚀`;
    }
}

// Allow Enter key to trigger the button
document.getElementById('nameInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sayHello();
    }
});

// Show default message on load
window.onload = function() {
    document.getElementById('output').textContent = 'Hello World! 🌍';
};