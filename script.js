let apologyCount = 0;

const apologyButton = document.getElementById('apologyButton');
const mainTitle = document.getElementById('mainTitle');
const mainText = document.getElementById('mainText');
const reaction = document.getElementById('reaction');
const emotionalText = document.getElementById('emotionalText');

apologyButton.addEventListener('click', function() {
    apologyCount++;
    
    if (apologyCount === 1) {
        mainText.innerText = "Please, please forgive me!";
        reaction.innerText = "😥";
        reaction.classList.remove('hidden');
    } else if (apologyCount === 2) {
        mainText.innerText = "I can't imagine my life without you! 💔";
        reaction.innerText = "😭";
    } else if (apologyCount === 3) {
        mainTitle.innerText = "I'm Begging Now!";
        mainText.innerText = "I'll do anything to make it right!";
        reaction.innerText = "😩";
    } else if (apologyCount === 4) {
        mainTitle.innerText = "Forgive Me, Pretty Please? 🥺";
        mainText.innerText = "I'll buy you your favorite treat!";
        reaction.innerText = "🥺";
        emotionalText.classList.remove('hidden');
        setTimeout(() => {
            emotionalText.style.opacity = 1;
        }, 100);
    } else if (apologyCount === 5) {
        mainTitle.innerText = "You Can't Resist This Smile 😊";
        mainText.innerText = "I promise to be better! Can we start fresh?";
        reaction.innerText = "😊";
        apologyButton.innerText = "Okay, I Forgive You!";
        emotionalText.innerText = "Yay! Let's be happy again! 😄";
        apologyButton.addEventListener('click', function() {
            window.alert("Thank you for forgiving me! You're the best!");
        });
    }
});
