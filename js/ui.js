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
    };

    /**
     * Inicializa el formulario de contacto
     */
    const inicializarContacto = () => {
        const formulario = document.querySelector(CONFIG.SELECTORS.CONTACTO_FORM);
        if (formulario) {
            formulario.addEventListener('submit', (e) => {
                e.preventDefault();
                alert(CONFIG.MENSAJES.EXITO.MENSAJE_ENVIADO);
                formulario.reset();
            });
        }
    };

    /**
     * Inicializa la navegación
     */
    const inicializarNavegacion = () => {
        // Menú hamburguesa para móvil
        const hamburger = document.querySelector(CONFIG.SELECTORS.HAMBURGER);
        const navMenu = document.querySelector(CONFIG.SELECTORS.NAV_MENU);

        if (hamburger && navMenu) {
            // Toggle del menú con clase CSS
            hamburger.addEventListener('click', (e) => {
                e.stopPropagation();
                navMenu.classList.toggle('active');
            });

            // Cerrar menú al hacer clic en un enlace
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                });
            });

            // Cerrar menú al hacer clic fuera
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.navbar')) {
                    navMenu.classList.remove('active');
                }
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
