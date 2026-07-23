document.addEventListener('DOMContentLoaded', () => {
    
    const openBtn = document.getElementById('openBtn');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const mainContent = document.getElementById('mainContent');
    const bgMusic = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicBtn');
    const musicText = document.getElementById('musicText');

    // 1. Botón Abrir (Cambio de pantalla + Intento de música)
    if (openBtn) {
        openBtn.addEventListener('click', () => {
            // Cambio visual INMEDIATO sin esperar el audio
            if (welcomeScreen) welcomeScreen.classList.add('hidden');
            if (mainContent) mainContent.classList.remove('hidden');

            // Intento seguro de reproducción
            if (bgMusic) {
                bgMusic.play().then(() => {
                    if (musicText) musicText.textContent = '🎶 Sonando';
                }).catch(err => {
                    console.log("Audio bloqueado por el navegador:", err);
                    if (musicText) musicText.textContent = '💘 Pausado';
                });
            }
        });
    }

    // 2. Control de Música Manual
    if (musicBtn && bgMusic) {
        musicBtn.addEventListener('click', () => {
            if (bgMusic.paused) {
                bgMusic.play().then(() => {
                    if (musicText) musicText.textContent = '🎶 Sonando';
                }).catch(err => console.log(err));
            } else {
                bgMusic.pause();
                if (musicText) musicText.textContent = '💘 Pausado';
            }
        });
    }

    // 3. Contador de Tiempo
    const startDate = new Date(2023, 10, 15); // Ajusta tu fecha: (Año, Mes-1, Día)

    function updateCounter() {
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        if (document.getElementById('days')) document.getElementById('days').textContent = days;
        if (document.getElementById('hours')) document.getElementById('hours').textContent = hours;
        if (document.getElementById('minutes')) document.getElementById('minutes').textContent = minutes;
        if (document.getElementById('seconds')) document.getElementById('seconds').textContent = seconds;
    }

    setInterval(updateCounter, 1000);
    updateCounter();

    // 4. Corazones Cayendo
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '💗';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heart.style.opacity = Math.random();
        
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 400);
});
