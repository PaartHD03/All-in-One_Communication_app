// script.js
function simulateCall() {
    const outputDiv = document.getElementById('demo-output');
    outputDiv.innerHTML = '📞 Incoming Call from +1 123 456 7890... <button onclick="answerCall()">Answer</button> <button onclick="rejectCall()">Reject</button>';
}

function simulateMessage() {
    const outputDiv = document.getElementById('demo-output');
    outputDiv.innerHTML = '💬 New Message: "Hello! This is a test message." <button onclick="viewMessage()">View</button>';
}

function answerCall() {
    const outputDiv = document.getElementById('demo-output');
    outputDiv.innerHTML = '📞 You answered the call.';
}

function rejectCall() {
    const outputDiv = document.getElementById('demo-output');
    outputDiv.innerHTML = '📞 Call rejected.';
}

function viewMessage() {
    const outputDiv = document.getElementById('demo-output');
    outputDiv.innerHTML = '💬 Message: "Hello! This is a test message. Let\'s connect soon!"';
}
