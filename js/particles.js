(function () {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const mouse = { x: null, y: null };
    const particles = [];
    const COUNT = 65;
    const MAX_DIST = 130;

    const COLORS_DARK = [
        [225, 29, 72],    // rojo carmesí
        [255, 45, 85],    // rojo brillante
        [240, 240, 240],  // blanco suave
        [180, 20, 50],    // rojo oscuro
    ];

    const COLORS_LIGHT = [
        [180, 20, 50],    // rojo oscuro
        [225, 29, 72],    // rojo carmesí
        [100, 10, 30],    // rojo muy oscuro
        [90, 90, 110],    // gris azulado
    ];

    function getColors() {
        return document.documentElement.classList.contains('light') ? COLORS_LIGHT : COLORS_DARK;
    }

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.init();
        }

        init() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.6;
            this.vy = (Math.random() - 0.5) * 0.6;
            this.radius = Math.random() * 1.8 + 0.8;
            this.alpha = Math.random() * 0.5 + 0.25;
            const c = getColors()[Math.floor(Math.random() * getColors().length)];
            this.r = c[0];
            this.g = c[1];
            this.b = c[2];
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (mouse.x !== null) {
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    const force = (120 - dist) / 120;
                    this.x += (dx / dist) * force * 1.5;
                    this.y += (dy / dist) * force * 1.5;
                }
            }

            if (this.x < -10) this.x = canvas.width + 10;
            if (this.x > canvas.width + 10) this.x = -10;
            if (this.y < -10) this.y = canvas.height + 10;
            if (this.y > canvas.height + 10) this.y = -10;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.alpha})`;
            ctx.fill();
        }
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const a = particles[i];
                const b = particles[j];
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < MAX_DIST) {
                    const alpha = (1 - dist / MAX_DIST) * 0.25;
                    const r = Math.round((a.r + b.r) / 2);
                    const g = Math.round((a.g + b.g) / 2);
                    const bl = Math.round((a.b + b.b) / 2);
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.strokeStyle = `rgba(${r}, ${g}, ${bl}, ${alpha})`;
                    ctx.lineWidth = 0.7;
                    ctx.stroke();
                }
            }
        }
    }

    function init() {
        resize();
        particles.length = 0;
        for (let i = 0; i < COUNT; i++) {
            particles.push(new Particle());
        }
    }

    let animId;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawConnections();
        particles.forEach(p => { p.update(); p.draw(); });
        animId = requestAnimationFrame(animate);
    }

    document.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    document.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            cancelAnimationFrame(animId);
            init();
            animate();
        }, 150);
    });

    init();
    animate();

    window.addEventListener('themechange', () => {
        cancelAnimationFrame(animId);
        init();
        animate();
    });
})();
