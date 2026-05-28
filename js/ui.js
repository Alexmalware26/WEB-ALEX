/**
 * Módulo de UI
 * Gestiona las interacciones del usuario en la interfaz
 */

const UIManager = (() => {
    /**
     * Inicializa todos los eventos
     */
    const inicializarEventos = () => {
        inicializarContacto();
        inicializarNavegacion();
        inicializarAdminPanel();
        inicializarComparador();
    };

    /**
     * Toggle del comparador de planes
     */
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

    /**
     * Inicializa el formulario de contacto
     */
    const inicializarContacto = () => {
        const formulario = document.querySelector(CONFIG.SELECTORS.CONTACTO_FORM);
        if (!formulario) return;

        // FORMSPREE: reemplaza esta URL con la tuya de formspree.io/f/XXXXXXXX
        const FORMSPREE_URL = 'https://formspree.io/f/mdajeqvq';

        formulario.addEventListener('submit', async (e) => {
            e.preventDefault();

            const btn = formulario.querySelector('button[type="submit"]');
            const textoOriginal = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = 'Enviando... <i class="fas fa-spinner fa-spin"></i>';

            try {
                const datos = new FormData(formulario);
                const respuesta = await fetch(FORMSPREE_URL, {
                    method: 'POST',
                    body: datos,
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

    /**
     * Inicializa la navegación
     */
    const inicializarNavegacion = () => {
        // Menú hamburguesa para móvil
        const hamburger = document.querySelector(CONFIG.SELECTORS.HAMBURGER);
        const navMenu = document.querySelector(CONFIG.SELECTORS.NAV_MENU);

        if (hamburger && navMenu) {
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
                    document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
                }
            });
        }

        // Dropdown de servicios — clic en móvil, hover en desktop
        const dropdown = document.querySelector('.nav-dropdown');
        if (dropdown) {
            const toggle = dropdown.querySelector('.nav-dropdown-toggle');
            toggle.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown.classList.toggle('open');
            });

            // Cerrar dropdown al hacer clic en un enlace interior
            dropdown.querySelectorAll('.nav-dropdown-menu a').forEach(link => {
                link.addEventListener('click', () => {
                    dropdown.classList.remove('open');
                    if (navMenu) {
                        navMenu.classList.remove('active');
                        if (hamburger) hamburger.classList.remove('active');
                    }
                });
            });
        }
    };

    /**
     * Inicializa el panel administrativo
     */
    const inicializarAdminPanel = () => {
        const adminPanel = document.querySelector(CONFIG.SELECTORS.ADMIN_PANEL);
        const adminContent = document.querySelector(CONFIG.SELECTORS.ADMIN_CONTENT);
        const toggleButton = document.querySelector('.toggle-admin');

        if (toggleButton && adminContent) {
            // Toggle del panel
            toggleButton.addEventListener('click', (e) => {
                e.stopPropagation();
                adminContent.classList.toggle(CONFIG.CLASSES.ADMIN_ACTIVE);
            });

            // Cerrar panel al hacer clic fuera
            document.addEventListener('click', (e) => {
                if (adminPanel && !adminPanel.contains(e.target)) {
                    adminContent.classList.remove(CONFIG.CLASSES.ADMIN_ACTIVE);
                }
            });

            // Evitar cerrar el panel al hacer clic dentro
            adminContent.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
    };

    /**
     * Muestra una notificación
     * @param {string} mensaje
     * @param {string} tipo - 'exito', 'error', 'advertencia'
     */
    const mostrarNotificacion = (mensaje, tipo = 'exito') => {
        // Implementar con toast o notificación personalizada en el futuro
        console.log(`[${tipo.toUpperCase()}] ${mensaje}`);
    };

    /**
     * Desactiva un botón
     * @param {HTMLElement} btn
     * @param {number} tiempo
     */
    const desactivarBoton = (btn, tiempo = 1000) => {
        btn.disabled = true;
        setTimeout(() => {
            btn.disabled = false;
        }, tiempo);
    };

    /**
     * Valida un email
     * @param {string} email
     * @returns {boolean}
     */
    const validarEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return {
        inicializarEventos,
        mostrarNotificacion,
        desactivarBoton,
        validarEmail
    };
})();
