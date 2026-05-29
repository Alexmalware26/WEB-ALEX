/**
 * Efectos visuales: contador de precios al hacer scroll
 */
(() => {
    const lerp = (a, b, t) => a + (b - a) * t;

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
})();
