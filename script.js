/* ==========================================================================
   LÓGICA Y INTERACTIVIDAD - PARA MI NIÑA 💗
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- BASE DE DATOS DE 100 RAZONES ---
    const reasonsList = [
        "Por la forma tan linda en la que sonríes sin darte cuenta.",
        "Por cómo me haces sentir en calma cuando todo alrededor es caótico.",
        "Por la ternura que transmites en cada mensaje.",
        "Por la forma en que me miras y me haces sentir especial.",
        "Por tu paciencia infinita conmigo.",
        "Por cómo iluminas una habitación solo con tu presencia.",
        "Por tus abrazos que reconfortan el alma.",
        "Por tus detalles tan genuinos y sinceros.",
        "Por tu risa, que es mi sonido favorito en el mundo.",
        "Por la dulzura de tu voz al hablarme.",
        "Por cómo cuidas a las personas que quieres.",
        "Por apoyarme en todo momento sin dudarlo.",
        "Por la paz que me da estar a tu lado.",
        "Por tu inteligencia y tu forma de ver la vida.",
        "Por cómo haces que un día común se vuelva memorable.",
        "Por tus miradas cómplices que solo nosotros entendemos.",
        "Por tu capacidad de hacerme reír incluso en los momentos difíciles.",
        "Por tu sensibilidad y gran corazón.",
        "Por cómo me haces querer ser una mejor persona cada día.",
        "Por el respeto y cariño con el que me tratas.",
        "Por tus caricias suaves que me tranquilizan.",
        "Por la forma en que dices mi nombre.",
        "Por compartir tus sueños e ilusiones conmigo.",
        "Por escucharme siempre con tanta atención.",
        "Por tus pequeños gestos de amor diario.",
        "Por ser mi refugio seguro.",
        "Por la complicidad hermosa que hemos construido.",
        "Por tus chistes y ocurrencias.",
        "Por cómo defiendes lo que crees con pasión.",
        "Por la calidez de tus manos al sostener las mías.",
        "Por la confianza que me inspiras.",
        "Por inspirarme a luchar por lo que quiero.",
        "Por tu amabilidad con todo el mundo.",
        "Por tus expresiones adorables cuando te concentras.",
        "Por tu manera única de expresar cariño.",
        "Por hacerme sentir amado e importante.",
        "Por tus mensajes inesperados que alegrar mi día.",
        "Por la manera en que arreglas tu cabello.",
        "Por tu generosidad y bondad sin límites.",
        "Por recordar los pequeños detalles sobre mí.",
        "Por la forma en que caminas a mi lado.",
        "Por hacer que cualquier lugar se sienta como mi hogar.",
        "Por el calor de tu abrazo en un día frío.",
        "Por tu honestidad y transparencia siempre.",
        "Por la forma en que arrugas tu nariz al reír.",
        "Por motivarme cuando siento que no puedo más.",
        "Por celebrar cada uno de mis logros como si fueran tuyos.",
        "Por estar ahí en mis peores días sin juzgarme.",
        "Por la dulzura de tus besos.",
        "Por cómo planeamos momentos juntos.",
        "Por tu buen gusto y elegancia en todo.",
        "Por hacerme sonreír al mirar el teléfono.",
        "Por el amor que le pones a todo lo que haces.",
        "Por tu madurez y tu comprensión.",
        "Por la forma en que me buscas cuando necesitas un abrazo.",
        "Por tus pestañas y la profundidad de tus ojos.",
        "Por hacerme sentir la persona más afortunada.",
        "Por cómo compartes tus alegrías conmigo.",
        "Por la paz que me transmites antes de dormir.",
        "Por respetarme y valorarme tal como soy.",
        "Por ser mi mejor amiga y mi compañera de vida.",
        "Por tu valentía para afrontar los retos.",
        "Por la suavidad de tu piel.",
        "Por cómo haces que el tiempo a tu lado pase volando.",
        "Por los recuerdos hermosos que hemos creado.",
        "Por las aventuras que nos quedan por vivir.",
        "Por tus abrazos apretados antes de despedirnos.",
        "Por el tono cariñoso de tus palabras.",
        "Por cómo me cuidas cuando me siento mal.",
        "Por la belleza de tu alma.",
        "Por el amor y dedicación que pones en nuestra relación.",
        "Por tu sonrisa por las mañanas.",
        "Por tus piropos y frases lindas.",
        "Por la manera en que te emociona lo que te gusta.",
        "Por ser una persona tan auténtica y verdadera.",
        "Por permitirme conocer tu lado más vulnerable.",
        "Por tu humildad y sencillez.",
        "Por cómo abrazas cuando tienes frío.",
        "Por el aroma que dejas cuando te vas.",
        "Por hacerme ver la vida de forma más positiva.",
        "Por tus gestos dulces cuando tienes sueño.",
        "Por cómo encajas perfectamente en mis brazos.",
        "Por la forma en que cantas tus canciones favoritas.",
        "Por tu elegancia al caminar.",
        "Por hacerme sentir orgulloso de tenerte a mi lado.",
        "Por ser la persona más especial que he conocido.",
        "Por tu ternura infinita.",
        "Por respetarme y darme mi espacio.",
        "Por tus consejos siempre acertados.",
        "Por hacerme creer en el amor sincero.",
        "Por la paz que me da saber que estás conmigo.",
        "Por tu dulzura al darme los buenos días.",
        "Por tus ganas de superarte y crecer.",
        "Por ser el regalo más bonito que la vida me dio.",
        "Por cada segundo que pasamos juntos.",
        "Por hacer que todo valga la pena.",
        "Por tu sencillez que te hace brillar aún más.",
        "Por enseñarme lo que realmente es querer con el corazón.",
        "Por hacerme el hombre más feliz del mundo.",
        "Por ser simplemente tú, mi niña hermosa. 💗"
    ];

    let currentReasonIndex = 0;

    // --- ELEMENTOS DEL DOM ---
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');
    const startBtn = document.getElementById('startBtn');
    const progressNav = document.getElementById('progressNav');
    
    // Audio
    const bgAudio = document.getElementById('bgAudio');
    const musicToggleBtn = document.getElementById('musicToggleBtn');
    const musicStatus = document.getElementById('musicStatus');
    const volumeSlider = document.getElementById('volumeSlider');
    const audioFileInput = document.getElementById('audioFileInput');

    // Contador
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    // Typing Bienvenida
    const typingTextEl = document.getElementById('typingText');

    // Carta Lines
    const letterLines = document.querySelectorAll('.letter-line');

    // Razones
    const openGiftBtn = document.getElementById('openGiftBtn');
    const giftBoxContainer = document.getElementById('giftBoxContainer');
    const reasonsContainer = document.getElementById('reasonsContainer');
    const reasonBadge = document.getElementById('reasonBadge');
    const reasonText = document.getElementById('reasonText');
    const reasonIndicator = document.getElementById('reasonIndicator');
    const prevReasonBtn = document.getElementById('prevReasonBtn');
    const nextReasonBtn = document.getElementById('nextReasonBtn');
    const cardFlipper = document.getElementById('cardFlipper');

    // Final Screen
    const discoverBtn = document.getElementById('discoverBtn');
    const whiteScreenOverlay = document.getElementById('whiteScreenOverlay');
    const typeReason101 = document.getElementById('typeReason101');
    const finalScreen = document.getElementById('finalScreen');
    const restartExperienceBtn = document.getElementById('restartExperienceBtn');

    // Easter Eggs & Modal
    const easterEggTitle = document.getElementById('easterEggTitle');
    const hiddenStar = document.getElementById('hiddenStar');
    const imageModal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const modalCaption = document.getElementById('modalCaption');
    const closeModal = document.getElementById('closeModal');

    // --- CANVAS (ESTRELLAS Y PÉTALOS) ---
    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');

    let width, height;
    function resizeCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Partículas (Estrellas)
    const stars = Array.from({ length: 120 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random(),
        speed: Math.random() * 0.01 + 0.005
    }));

    // Petalos / Emojis Cayendo (💗, 💞, 💘)
    const emojiSymbols = ['💗', '💞', '💘'];
    const petals = Array.from({ length: 25 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: Math.random() * 14 + 12,
        speedY: Math.random() * 0.8 + 0.4,
        speedX: Math.sin(Math.random() * Math.PI) * 0.5,
        symbol: emojiSymbols[Math.floor(Math.random() * emojiSymbols.length)],
        opacity: Math.random() * 0.6 + 0.3,
        rotation: Math.random() * 360,
        rotSpeed: Math.random() * 1 - 0.5
    }));

    function animateBg() {
        ctx.clearRect(0, 0, width, height);

        // Render Estrellas
        stars.forEach(star => {
            star.alpha += star.speed;
            if (star.alpha > 1 || star.alpha < 0) star.speed = -star.speed;

            ctx.fillStyle = `rgba(255, 214, 231, ${Math.abs(star.alpha)})`;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fill();
        });

        // Render Pétalos / Emojis
        petals.forEach(p => {
            p.y += p.speedY;
            p.x += Math.sin(p.y * 0.01) * 0.5;
            p.rotation += p.rotSpeed;

            if (p.y > height + 30) {
                p.y = -20;
                p.x = Math.random() * width;
            }

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.globalAlpha = p.opacity;
            ctx.font = `${p.size}px serif`;
            ctx.fillText(p.symbol, 0, 0);
            ctx.restore();
        });

        requestAnimationFrame(animateBg);
    }
    animateBg();

    // --- REPRODUCTOR DE MÚSICA ---
    let isPlaying = false;

    function toggleAudio() {
        if (isPlaying) {
            bgAudio.pause();
            musicStatus.textContent = 'Pausado';
            isPlaying = false;
        } else {
            bgAudio.play().then(() => {
                musicStatus.textContent = 'Sonando 🎵';
                isPlaying = true;
            }).catch(() => {
                musicStatus.textContent = 'Clic para reproducir';
            });
        }
    }

    musicToggleBtn.addEventListener('click', toggleAudio);

    volumeSlider.addEventListener('input', (e) => {
        bgAudio.volume = e.target.value;
    });

    audioFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            bgAudio.src = url;
            bgAudio.play();
            musicStatus.textContent = 'Sonando 🎵';
            isPlaying = true;
        }
    });

    // --- INICIO DE LA EXPERIENCIA ---
    startBtn.addEventListener('click', () => {
        introScreen.style.transition = 'opacity 1s ease, transform 1s ease';
        introScreen.style.opacity = '0';
        introScreen.style.transform = 'scale(0.95)';

        // Intentar reproducir audio
        toggleAudio();

        setTimeout(() => {
            introScreen.classList.add('hidden');
            mainContent.classList.remove('hidden');
            progressNav.style.display = 'flex';
            
            // Iniciar Efecto de Escritura Bienvenida
            startTypingWelcome();
            
            // Scroll a top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1000);
    });

    // --- TYPING EFFECT BIENVENIDA ---
    const welcomeText = "Hola, mi niña...

Si estás viendo esto... es porque quería regalarte algo que no pudiera comprarse.

No soy diseñador. Ni escritor. Pero sí alguien que te ama muchísimo.";
    let typingIndex = 0;

    function startTypingWelcome() {
        if (typingIndex < welcomeText.length) {
            typingTextEl.textContent += welcomeText.charAt(typingIndex);
            typingIndex++;
            setTimeout(startTypingWelcome, 45);
        }
    }

    // --- CONTADOR DE TIEMPO DESDE 04/07/2026 ---
    const startDate = new Date('2026-07-04T00:00:00');

    function updateCounter() {
        const now = new Date();
        const diff = now - startDate;

        if (diff < 0) {
            // Si aún no llega la fecha, muestra cero o cuenta faltante
            daysEl.textContent = '0';
            hoursEl.textContent = '0';
            minutesEl.textContent = '0';
            secondsEl.textContent = '0';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        daysEl.textContent = days;
        hoursEl.textContent = hours < 10 ? '0' + hours : hours;
        minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
        secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
    }
    setInterval(updateCounter, 1000);
    updateCounter();

    // --- INTERSECTION OBSERVER PARA REVELAR SECCIONES Y BARRA DE NAVEGACIÓN ---
    const sections = document.querySelectorAll('.section-container');
    const navItems = document.querySelectorAll('.nav-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Si es la sección de la carta, animar líneas
                if (entry.target.id === 'sec-letter') {
                    letterLines.forEach((line, i) => {
                        setTimeout(() => line.classList.add('show'), i * 800);
                    });
                }

                // Actualizar barra de navegación
                const id = entry.target.id;
                navItems.forEach(item => {
                    item.classList.toggle('active', item.dataset.target === id);
                });
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(sec => observer.observe(sec));

    // Navegación al tocar tabs
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.dataset.target;
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- 100 RAZONES INTERACTIVAS ---
    openGiftBtn.addEventListener('click', () => {
        giftBoxContainer.classList.add('hidden');
        reasonsContainer.classList.remove('hidden');
        displayReason(0);
    });

    function displayReason(index) {
        cardFlipper.classList.add('flip');
        setTimeout(() => {
            reasonBadge.textContent = `Razón #${index + 1}`;
            reasonText.textContent = reasonsList[index];
            reasonIndicator.textContent = `${index + 1} / 100`;
            cardFlipper.classList.remove('flip');
        }, 300);
    }

    nextReasonBtn.addEventListener('click', () => {
        if (currentReasonIndex < reasonsList.length - 1) {
            currentReasonIndex++;
            displayReason(currentReasonIndex);
        } else {
            showToast("¡Has llegado a la razón #100! 💗");
        }
    });

    prevReasonBtn.addEventListener('click', () => {
        if (currentReasonIndex > 0) {
            currentReasonIndex--;
            displayReason(currentReasonIndex);
        }
    });

    // --- TRANSICIÓN FINAL Y RAZÓN 101 ---
    discoverBtn.addEventListener('click', () => {
        whiteScreenOverlay.classList.remove('hidden');
        setTimeout(() => {
            whiteScreenOverlay.classList.add('show');
            startTypingReason101();
        }, 50);
    });

    const text101 = "Porque eres tú.

Y desde que llegaste...
todo se siente un poquito más bonito.";
    let index101 = 0;

    function startTypingReason101() {
        if (index101 < text101.length) {
            typeReason101.textContent += text101.charAt(index101);
            index101++;
            setTimeout(startTypingReason101, 60);
        } else {
            setTimeout(() => {
                whiteScreenOverlay.classList.remove('show');
                setTimeout(() => {
                    whiteScreenOverlay.classList.add('hidden');
                    finalScreen.classList.remove('hidden');
                    setTimeout(() => finalScreen.classList.add('show'), 50);
                }, 1000);
            }, 3000);
        }
    }

    restartExperienceBtn.addEventListener('click', () => {
        finalScreen.classList.remove('show');
        setTimeout(() => {
            finalScreen.classList.add('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 800);
    });

    // --- GALERÍA ZOOM MODAL & LONG PRESS EASTER EGG ---
    const polaroidCards = document.querySelectorAll('.polaroid-card');

    polaroidCards.forEach(card => {
        const img = card.querySelector('.polaroid-img');
        const caption = card.querySelector('.polaroid-caption').textContent;

        card.addEventListener('click', () => {
            modalImg.src = img.src;
            modalCaption.textContent = caption;
            imageModal.classList.remove('hidden');
            setTimeout(() => imageModal.classList.add('show'), 10);
        });

        // Long Press Easter Egg
        let pressTimer;
        card.addEventListener('touchstart', () => {
            pressTimer = setTimeout(() => {
                showToast("Esta sigue siendo una de mis favoritas. 💗");
            }, 800);
        });
        card.addEventListener('touchend', () => clearTimeout(pressTimer));
    });

    closeModal.addEventListener('click', () => {
        imageModal.classList.remove('show');
        setTimeout(() => imageModal.classList.add('hidden'), 400);
    });

    // --- EASTER EGGS ---
    // 1. Tocar título 5 veces
    let titleClicks = 0;
    easterEggTitle.addEventListener('click', () => {
        titleClicks++;
        if (titleClicks === 5) {
            showToast("Sabía que ibas a tocar aquí 🤭");
            titleClicks = 0;
        }
    });

    // 2. Estrella oculta
    hiddenStar.addEventListener('click', () => {
        showToast("Gracias por existir. ✨");
    });

    // TOAST UTILITY
    function showToast(message) {
        const toastContainer = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = 'toast-message';
        toast.textContent = message;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    // EFECTO PARALLAX TILT EN TARJETAS (MÓVIL / DESKTOP)
    window.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        document.querySelectorAll('.glass-card').forEach(card => {
            card.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

});
