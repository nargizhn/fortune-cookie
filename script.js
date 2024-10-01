document.addEventListener('DOMContentLoaded', function() {
    const fortuneCookie = document.getElementById('fortune-cookie');
    const fortuneText = document.getElementById('fortune-text');
    const refreshButton = document.getElementById('refresh-btn');

    const quotes = [
        "Believe you can and you're halfway there.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "You miss 100% of the shots you don’t take.",
        "Hardships often prepare ordinary people for an extraordinary destiny.",
        "The best time to plant a tree was 20 years ago. The second best time is now.",
        "The only limit to our realization of tomorrow is our doubts of today."
    ];

    let isCracked = false;

    // Function to crack the cookie and reveal the fortune
    function crackCookie() {
        if (!isCracked) {
            // Change the cookie image
            fortuneCookie.src = 'cookie-cracked.png';
            fortuneCookie.classList.add('cookie-cracked');

            // Pick a random quote
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            fortuneText.textContent = randomQuote;
            fortuneText.style.display = 'block';

            isCracked = true;
        }
    }

    // Function to reset the cookie
    function resetCookie() {
        isCracked = false;
        fortuneCookie.src = 'cookie-closed.png';
        fortuneCookie.classList.remove('cookie-cracked');
        fortuneText.style.display = 'none';
    }

    // Add event listeners
    fortuneCookie.addEventListener('click', crackCookie);
    refreshButton.addEventListener('click', resetCookie);
});
