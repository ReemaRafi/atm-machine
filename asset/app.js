var currentBalance = 5000; // Starting balance for demo
var correctPin = "1234";   // Correct PIN for the ATM
var isLoggedIn = false;

function verifyPin() {
    var pin = document.getElementById('pin').value;
    if (pin === correctPin) {
        isLoggedIn = true;
        document.getElementById('message').textContent = 'Welcome! Choose an option below:';
        document.getElementById('atm-options').style.display = 'block';
        document.getElementById('atm-card').style.display = 'none';
    } else {
        document.getElementById('message').textContent = 'Incorrect PIN. Try again.';
    }
}

function checkBalance() {
    if (isLoggedIn) {
        document.getElementById('message').textContent = `Your balance is $${currentBalance}.`;
    }
}

function withdraw() {
    if (isLoggedIn) {
        document.getElementById('atm-options').style.display = 'none';
        document.getElementById('withdrawal-section').style.display = 'block';
    }
}

function processWithdrawal() {
    var amount = parseInt(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0 || amount > currentBalance) {
        document.getElementById('message').textContent = 'Invalid amount. Please try again.';
        return;
    }

    currentBalance -= amount;
    document.getElementById('message').textContent = `You have withdrawn $${amount}. Your new balance is $${currentBalance}.`;
    document.getElementById('withdrawal-section').style.display = 'none';
    document.getElementById('atm-options').style.display = 'block';
}

function cancelWithdrawal() {
    document.getElementById('withdrawal-section').style.display = 'none';
    document.getElementById('atm-options').style.display = 'block';
}

function logout() {
    isLoggedIn = false;
    document.getElementById('message').textContent = 'You have logged out. Please enter your PIN to log in.';
    document.getElementById('atm-card').style.display = 'block';
    document.getElementById('atm-options').style.display = 'none';
    document.getElementById('withdrawal-section').style.display = 'none';
    document.getElementById('pin').value = '';
}