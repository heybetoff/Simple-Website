document.addEventListener('DOMContentLoaded', (event) => {
    const submitButton = document.getElementById('submitButton');
    if (submitButton) {
        submitButton.addEventListener('click', () => {
            const phrase = document.getElementById('phrase').value;
            const element = document.getElementById('elementSelect').value;
            sessionStorage.setItem('phrase', phrase);
            sessionStorage.setItem('element', element);
            window.location.href = 'result.html';
        });
    }

    if (window.location.pathname.endsWith('result.html')) {
        const phrase = sessionStorage.getItem('phrase');
        const element = sessionStorage.getItem('element');
        document.getElementById('phraseDisplay').textContent = phrase;
        document.getElementById('elementDisplay').textContent = element;

        document.body.style.backgroundColor = element;

        const images = {
            lightblue: ['images/water1.jpg', 'images/water2.jpg'],
            firebrick: ['images/fire1.jpg', 'images/fire2.jpg'],
            darkolivegreen: ['images/earth1.jpg', 'images/earth2.jpg'],
            gold: ['images/air1.jpg', 'images/air2.jpg']
        };

        const selectedImages = images[element];
        const randomImage = selectedImages[Math.floor(Math.random() * selectedImages.length)];
        document.getElementById('elementImage').src = randomImage;

        const phraseLength = phrase.length;
        const rotationDegrees = phraseLength * 10;
        document.getElementById('cornerImage').style.transform = `rotate(${rotationDegrees}deg)`;
    }
});
