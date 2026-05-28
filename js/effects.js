/**
 * Efectos visuales: cursor glow
 */

(() => {
    if (!window.matchMedia('(hover: hover)').matches) return;

    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);

    const half = 225;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    const lerp = (a, b, t) => a + (b - a) * t;

    function animate() {
        currentX = lerp(currentX, targetX, 0.07);
        currentY = lerp(currentY, targetY, 0.07);
        glow.style.transform = `translate(${currentX - half}px, ${currentY - half}px)`;
        requestAnimationFrame(animate);
    }

    animate();
})();
