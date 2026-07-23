document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. REFERENCIAS A ELEMENTOS DEL DOM
    // ----------------------------------------------------
    const openBtn = document.getElementById('openBtn');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const mainContent = document.getElementById('mainContent');
    const bgMusic = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicBtn');
    const musicText = document.getElementById('musicText');

    // ----------------------------------------------------
    // 2. BOTÓN "ABRIR" (Transición segura + Música)
    // ----------------------------------------------------
    if (openBtn) {
        openBtn.addEventListener('click', () => {
            // Intentar reproducir música de forma segura
            if (bgMusic) {
                bgMusic.play().then(() => {
                    if (musicText) musicText.textContent = 'Sonando';
                }).catch(error => {
                    console.log("El navegador bloqueó el audio o la ruta falló:", error);
                    if (musicText) musicText.textContent = 'Pausado';
                });
            }

            // Cambiar de pantalla sí o sí
            if (welcomeScreen) welcomeScreen.classList.add('hidden');
            if (mainContent) mainContent.classList.remove('hidden');
        });
    }

    // ----------------------------------------------------
    // 3. BOTÓN PAUSAR / REPRODUCIR MÚSICA
    // ----------------------------------------------------
    if (musicBtn && bgMusic) {
        musicBtn.addEventListener('click', () => {
            if (bgMusic.paused) {
                bgMusic.play().then(() => {
                    if (musicText) musicText.textContent = 'Sonando';
                }).catch(err => console.log(err));
            } else {
                bgMusic.pause();
                if (musicText) musicText.textContent = 'Pausado';
            }
        });
    }

    // ----------------------------------------------------
    // 4. CONTADOR DE TIEMPO (Juntos)
    // Ajusta la fecha aquí si es necesario (Año, Mes-1, Día)
    // ----------------------------------------------------
    const startDate = new Date(2023, 10, 15); // Ejemplo: 15 de Noviembre de 2023

    function updateCounter() {
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.textContent = days;
        if (hoursEl) hoursEl.textContent = hours;
        if (minutesEl) minutesEl.textContent = minutes;
        if (secondsEl) secondsEl.textContent = seconds;
    }

    setInterval(updateCounter, 1000);
    updateCounter();

    // ----------------------------------------------------
    // 5. LLUVIA DE CORAZONES EN EL FONDO
    // ----------------------------------------------------
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '💗';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heart.style.fontSize = Math.random() * 10 + 15 + 'px';
        
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 400);
});
