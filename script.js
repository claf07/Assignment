function countdown(elementName, minutes, seconds) {
    var element = document.getElementById(elementName);
    if (!element) return; // Ensure the element exists

    var endTime = new Date().getTime() + 1000 * (60 * minutes + seconds);

    function twoDigits(n) {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer() {
        var msLeft = endTime - new Date().getTime();

        if (msLeft < 1000) {
            element.innerHTML = "Time is up!";
        } else {
            var time = new Date(msLeft);
            var hours = time.getUTCHours();
            var mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
            setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
        }
    }

    updateTimer();
}

document.addEventListener('DOMContentLoaded', function() {
    countdown("countdownDisplay", 10, 0);
    setTimeout(openForm, 15000);
});

function openForm() {
    var formContainer = document.querySelector('.form-container'); // Change to '.form-container'
    if (formContainer) {
        formContainer.classList.add('active');
    }
}

function closeForm() {
    var formContainer = document.querySelector('.form-container'); // Change to '.form-container'
    if (formContainer) {
        formContainer.classList.remove('active');
    }
}
