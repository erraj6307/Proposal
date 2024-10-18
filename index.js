// Floating hearts creation
function createHearts() {
    let heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000); // Remove hearts after animation
}

setInterval(createHearts, 500); // Create a heart every 0.5 seconds

// Event listeners for transitioning between sections
document.getElementById('start-btn').addEventListener('click', function() {
    document.getElementById('welcome').classList.add('hidden');
    document.getElementById('question1').classList.remove('hidden');
});

let questionButtons = document.querySelectorAll('.option');
questionButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        let nextScreen = event.target.closest('.screen').nextElementSibling;
        event.target.closest('.screen').classList.add('hidden');
        if (nextScreen) {
            nextScreen.classList.remove('hidden');
        }
    });
});

document.getElementById('celebrate-btn').addEventListener('click', function() {
    document.getElementById('big-answer').classList.add('hidden');
    document.getElementById('celebration').classList.remove('hidden');
});
