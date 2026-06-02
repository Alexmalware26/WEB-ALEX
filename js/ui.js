/**
 * UI — formulario de contacto, menú móvil y comparador
 */
(() => {
    const FORMSPREE_URL = 'https://formspree.io/f/mdajeqvq';

    const inicializarContacto = () => {
        const formulario = document.querySelector('.contacto-form');
        if (!formulario) return;

        formulario.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = formulario.querySelector('button[type="submit"]');
            const textoOriginal = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = 'Enviando... <i class="fas fa-spinner fa-spin"></i>';

            try {
                const respuesta = await fetch(FORMSPREE_URL, {
                    method: 'POST',
                    body: new FormData(formulario),
                    headers: { 'Accept': 'application/json' }
                });

                if (respuesta.ok) {
                    btn.innerHTML = '¡Mensaje enviado! <i class="fas fa-check"></i>';
                    btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
                    formulario.reset();
                    setTimeout(() => {
                        btn.innerHTML = textoOriginal;
                        btn.style.background = '';
                        btn.disabled = false;
                    }, 4000);
                } else {
                    throw new Error('Error al enviar');
                }
            } catch {
                btn.innerHTML = 'Error al enviar. Inténtalo de nuevo.';
                btn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
                setTimeout(() => {
                    btn.innerHTML = textoOriginal;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 3000);
            }
        });
    };

    const inicializarNavegacion = () => {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (!hamburger || !navMenu) return;

        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    };

    const inicializarComparador = () => {
        const toggle = document.querySelector('.comparador-toggle');
        const panel = document.querySelector('.comparador-panel');
        if (!toggle || !panel) return;

        toggle.addEventListener('click', () => {
            const open = toggle.classList.toggle('open');
            panel.classList.toggle('open', open);
            toggle.setAttribute('aria-expanded', open);
        });
    };

    document.addEventListener('DOMContentLoaded', () => {
        inicializarContacto();
        inicializarNavegacion();
        inicializarComparador();
    });
})();
