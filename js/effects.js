/**
 * Efectos visuales: cursor glow + 3D card tilt con reflejo
 */
(() => {
    const hasHover = window.matchMedia('(hover: hover)').matches;
    const lerp = (a, b, t) => a + (b - a) * t;

    // ── Cursor Glow ──
    if (hasHover) {
        const glow = document.createElement('div');
        glow.className = 'cursor-glow';
        document.body.appendChild(glow);

        const half = 225;
        let tx = window.innerWidth / 2, ty = window.innerHeight / 2;
        let cx = tx, cy = ty;

        document.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });

        (function animGlow() {
            cx = lerp(cx, tx, 0.07);
            cy = lerp(cy, ty, 0.07);
            glow.style.transform = `translate(${cx - half}px, ${cy - half}px)`;
            requestAnimationFrame(animGlow);
        })();
    }

    // ── 3D Card Tilt + Shine ──
    if (!hasHover) return;

    const tiltItems = [];

    document.querySelectorAll('.precio-card, .proyecto-card').forEach(card => {
        card.classList.add('tilt-ready');

        const shine = document.createElement('div');
        shine.className = 'card-shine';
        card.appendChild(shine);

        const s = { rX: 0, rY: 0, trX: 0, trY: 0, active: false };
        tiltItems.push({ card, shine, s });

        card.addEventListener('mouseenter', () => { s.active = true; });

        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            const x = e.clientX - r.left;
            const y = e.clientY - r.top;
            s.trX = ((y - r.height / 2) / r.height) * -12;
            s.trY = ((x - r.width / 2) / r.width) * 12;
            const px = (x / r.width) * 100;
            const py = (y / r.height) * 100;
            shine.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.14) 0%, transparent 55%)`;
            shine.style.opacity = '1';
        });

        card.addEventListener('mouseleave', () => {
            s.active = false;
            s.trX = 0;
            s.trY = 0;
            shine.style.opacity = '0';
        });
    });

    // ── Price Counter ──
    function countUp(el, target, delay, prefix) {
        setTimeout(() => {
            const duration = 1600;
            const start = performance.now();
            const easeOut = t => 1 - Math.pow(1 - t, 3);
            (function step(now) {
                const p = Math.min((now - start) / duration, 1);
                el.textContent = (prefix || '') + Math.round(easeOut(p) * target) + '€';
                if (p < 1) requestAnimationFrame(step);
                else el.classList.add('price-done');
            })(start);
        }, delay);
    }

    const priceObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const card = entry.target;
            const cantidad = card.querySelector('.cantidad');
            const hasta = card.querySelector('.hasta');
            if (cantidad) {
                const n = parseInt(cantidad.textContent);
                if (!isNaN(n)) { cantidad.textContent = '0€'; countUp(cantidad, n, 300); }
            }
            if (hasta) {
                const n = parseInt(hasta.textContent.replace(/\D/g, ''));
                if (!isNaN(n)) { hasta.textContent = '— 0€'; countUp(hasta, n, 500, '— '); }
            }
            priceObs.unobserve(card);
        });
    }, { threshold: 0.35 });

    document.querySelectorAll('.precio-card').forEach(c => priceObs.observe(c));

    (function tiltLoop() {
        tiltItems.forEach(({ card, s }) => {
            s.rX = lerp(s.rX, s.trX, 0.1);
            s.rY = lerp(s.rY, s.trY, 0.1);
            const still = Math.abs(s.rX) < 0.02 && Math.abs(s.rY) < 0.02;
            if (!still || s.active) {
                const sc = s.active ? 1.03 : 1;
                card.style.transform = `perspective(900px) rotateX(${s.rX}deg) rotateY(${s.rY}deg) scale3d(${sc},${sc},${sc})`;
            } else {
                card.style.transform = '';
            }
        });
        requestAnimationFrame(tiltLoop);
    })();
})();
