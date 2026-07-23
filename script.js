document.addEventListener('DOMContentLoaded', () => {
    
    const openBtn = document.getElementById('openBtn');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const mainContent = document.getElementById('mainContent');
    const bgMusic = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicBtn');
    const musicText = document.getElementById('musicText');

    // 1. Manejo del botón "Abrir"
    if (openBtn) {
        openBtn.addEventListener('click', () => {
            // Transición de pantalla garantizada
            if (welcomeScreen) welcomeScreen.classList.add('hidden');
            if (mainContent) mainContent.classList.remove('hidden');

            // Intento seguro de reproducción de música
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

    // 2. Control manual de Música (Play / Pausa)
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

    // 3. Contador de Tiempo Juntos
    // FECHA CORRECTA: 4 de Julio de 2026 (Año, Mes - 1, Día)
    const startDate = new Date(2026, 6, 4, 0, 0, 0); 

    function updateCounter() {
        const now = new Date();
        const diff = now - startDate;

        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / 1000 / 60) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            if (document.getElementById('days')) document.getElementById('days').textContent =
