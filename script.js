// Function to add score based on user selection
function addScore(value) {
    let score = localStorage.getItem('quizScore') || 0;
    score = parseInt(score) + value;
    localStorage.setItem('quizScore', score);
}

// Function to restart the quiz and clear the score
function restartQuizE() {
    localStorage.removeItem('quizScore'); // Clear the score
    window.location.href = 'question1.html'; // Redirect to the first question
}


function restartQuiz() {
    localStorage.removeItem('quizScore');
    window.location.href = 'vraag1.html'; 
}

function gotostartE() {
    window.location.href = 'english.html'; // Redirect to the start screen
}

function gotostart() {
    window.location.href = 'index.html'; // Redirect to the start screen
}

// Function to display the final score and rating on the end page
document.addEventListener("DOMContentLoaded", function () {
    const score = parseInt(localStorage.getItem('quizScore')) || 0;
    document.getElementById('final-score').textContent = score;

    let rating = '';
    let rang = '';
    let advice = '';
    let advies = '';


    // Check the score and assign a rating
    if (score >= 26) {
        rating = "Excellent";
        rang = 'Zeer goed';
        advice = "Excellent performance! You have a solid understanding of social engineering tactics. Keep educating yourself to stay ahead of potential threats and encourage others to be aware of these risks as well.";
        advies = "Uitstekende prestatie! Je hebt een goed begrip van social engineering-tactieken. Blijf jezelf onderwijzen om mogelijke bedreigingen voor te blijven en moedig anderen aan zich bewust te zijn van deze risico's.";
    } else if (score >= 22) {
        rating = "Good";
        rang = "Goed";
        advice = "Great job! You recognized most of the threats. Keep up the good work by staying vigilant, always double-checking suspicious messages, and keeping your personal information secure.";
        advies = "Goed gedaan! Je hebt de meeste bedreigingen herkend. Blijf goed werk leveren door waakzaam te blijven, altijd verdachte berichten dubbel te controleren en je persoonlijke informatie veilig te houden.";
    } else if (score >= 18) {
        rating = 'Alright';
        rang = 'Ok';
        advice = 'You did okay, but there is room for improvement. Social engineers often exploit small mistakes. Remember to verify requests from unknown sources, whether they are emails, phone calls, or social media messages.';
        advies = 'Je hebt het redelijk goed gedaan, maar er is ruimte voor verbetering. Social engineers maken vaak misbruik van kleine fouten. Vergeet niet om verzoeken van onbekende bronnen te verifiëren, of het nu gaat om e-mails, telefoongesprekken of berichten via sociale media.';
    } else {
        rating = 'Not good';
        rang = 'Niet goed';
        advice = "You did poorly in recognizing the security threats. Social engineering attacks can be very deceptive. Be cautious when sharing information, especially online or over the phone. Always verify the source before providing any sensitive data.";
        advies = "Je hebt slecht gepresteerd in het herkennen van de beveiligingsbedreigingen. Social engineering-aanvallen kunnen erg misleidend zijn. Wees voorzichtig met het delen van informatie, vooral online of via de telefoon. Verifieer altijd de bron voordat je gevoelige gegevens verstrekt.";
    }

    document.getElementById('final-rating').textContent = rating;
    document.getElementById("Rang").textContent = rang;
    document.getElementById('social-engineering-advice').textContent = advice;
    document.getElementById('social-engineering-advies').textContent = advies;
});

// Function to start the quiz from the beginning
function startQuiz() {
    window.location.href = 'vraag1.html'; // Go to the first question
    localStorage.removeItem('quizScore'); // Clear the score
}

function startQuizE() {
    window.location.href = 'question1.html'; // Go to the first question
    localStorage.removeItem('quizScore'); // Clear the score
}


