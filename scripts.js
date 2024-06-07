// Timer for step 1
document.addEventListener('DOMContentLoaded', (event) => {
    let countdownElement = document.getElementById('tp-time');
    let continueButton = document.getElementById('continueButton');
    let timer = 15; // 15 seconds

    let countdownInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            countdownElement.textContent = timer;
        } else {
            clearInterval(countdownInterval);
            continueButton.disabled = false;
        }
    }, 1000);
});

// Clickable Button to show step 2
function showStep2() {
    document.getElementById('ad-step-1').style.display = 'none';
    document.getElementById('ad-step-2').style.display = 'block';
    startStep2Timer();
}

// Timer for step 2
function startStep2Timer() {
    let countdownElementStep2 = document.getElementById('tp-time-step-2');
    let downloadButton = document.getElementById('downloadButton');
    let timerStep2 = 10; // 15 seconds

    let countdownIntervalStep2 = setInterval(() => {
        if (timerStep2 > 0) {
            timerStep2--;
            countdownElementStep2.textContent = timerStep2;
        } else {
            clearInterval(countdownIntervalStep2);
            downloadButton.disabled = false;
        }
    }, 1000);
}
