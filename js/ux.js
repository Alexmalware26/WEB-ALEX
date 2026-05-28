(function () {

    /* ── 1. SPLASH SCREEN ── */
    window.addEventListener('load', () => {
        const splash = document.getElementById('splash');
        if (!splash) return;
        setTimeout(() => splash.classList.add('splash-hidden'), 1400);
        splash.addEventListener('transitionend', () => splash.remove());
    });


    /* ── 2. ANIMACIONES AL HACER SCROLL ── */
    const animados = [
        '.servicio-card',
        '.widget',
        '.proceso-step',
        '.proyecto-card',
        '.precio-card',
        '.acordeon-item',
        '.contacto-info',
        '.contacto-form-wrapper',
        '.contacto-item',
        'section h2',
        '.section-subtitle',
        '.cta-banner h2',
        '.cta-banner p',
    ];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    animados.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, i) => {
            el.classList.add('fade-in');
            el.style.transitionDelay = (i * 0.08) + 's';
            observer.observe(el);
        });
    });


    /* ── 3. NAV LINK ACTIVO AL HACER SCROLL ── */
    const sections   = document.querySelectorAll('section[id]');
    const navLinks   = document.querySelectorAll('.nav-link');

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(l => l.classList.remove('active'));
                const link = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (link) link.classList.add('active');
            }
        });
    }, { threshold: 0.4 });

    sections.forEach(s => navObserver.observe(s));


    /* ── 4. BOTÓN VOLVER ARRIBA ── */
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        btn.classList.toggle('btt-visible', window.scrollY > 450);
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

})();
