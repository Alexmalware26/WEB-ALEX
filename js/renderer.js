/**
 * Módulo de Renderizado
 * Funciones para renderizar elementos en el DOM
 */

const Renderer = (() => {
    /**
     * Renderiza los servicios en el grid
     */
    const renderizarServicios = () => {
        const grid = document.querySelector(CONFIG.SELECTORS.SERVICIOS_GRID);
        if (!grid) return;

        const servicios = DataManager.obtenerServicios();
        grid.innerHTML = '';

        servicios.forEach((servicio, index) => {
            const card = crearServicioCard(servicio, index);
            grid.appendChild(card);
        });
    };

    /**
     * Crea un elemento de tarjeta de servicio
     * @param {Object} servicio
     * @param {number} index
     * @returns {HTMLElement}
     */
    const crearServicioCard = (servicio, index) => {
        const card = document.createElement('div');
        card.className = CONFIG.CLASSES.SERVICIO_CARD;
        card.innerHTML = `
            <button class="${CONFIG.CLASSES.DELETE_BTN}" onclick="AdminPanel.eliminarServicio(${index})" title="Eliminar">×</button>
            <i class="fas fa-${servicio.icono}"></i>
            <h3>${escapeHtml(servicio.nombre)}</h3>
            <p>${escapeHtml(servicio.descripcion)}</p>
        `;
        return card;
    };

    /**
     * Renderiza los widgets
     */
    const renderizarWidgets = () => {
        const container = document.querySelector(CONFIG.SELECTORS.WIDGETS_CONTAINER);
        if (!container) return;

        const widgets = DataManager.obtenerWidgets();
        container.innerHTML = '';

        widgets.forEach((widget, index) => {
            const widgetEl = crearWidget(widget, index);
            container.appendChild(widgetEl);
        });
    };

    /**
     * Crea un elemento widget
     * @param {Object} widget
     * @param {number} index
     * @returns {HTMLElement}
     */
    const crearWidget = (widget, index) => {
        const widgetEl = document.createElement('div');
        widgetEl.className = CONFIG.CLASSES.WIDGET;
        widgetEl.innerHTML = `
            <button class="${CONFIG.CLASSES.DELETE_BTN}" onclick="AdminPanel.eliminarWidget(${index})" title="Eliminar" style="background: rgba(255,255,255,0.3);">×</button>
            <h3>${escapeHtml(widget.titulo)}</h3>
            <p>${escapeHtml(widget.contenido)}</p>
        `;
        return widgetEl;
    };

    /**
     * Renderiza los enlaces
     */
    const renderizarEnlaces = () => {
        const grid = document.querySelector(CONFIG.SELECTORS.ENLACES_GRID);
        if (!grid) return;

        const enlaces = DataManager.obtenerEnlaces();
        grid.innerHTML = '';

        enlaces.forEach((enlace, index) => {
            const card = crearEnlaceCard(enlace, index);
            grid.appendChild(card);
        });
    };

    /**
     * Crea un elemento de tarjeta de enlace
     * @param {Object} enlace
     * @param {number} index
     * @returns {HTMLElement}
     */
    const crearEnlaceCard = (enlace, index) => {
        const card = document.createElement('div');
        card.className = CONFIG.CLASSES.ENLACE_CARD;
        card.innerHTML = `
            <button class="${CONFIG.CLASSES.DELETE_BTN}" onclick="AdminPanel.eliminarEnlace(${index})" title="Eliminar">×</button>
            <a href="${escapeHtml(enlace.url)}" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-${enlace.icono}"></i>
                <h3>${escapeHtml(enlace.titulo)}</h3>
            </a>
        `;
        return card;
    };

    /**
     * Renderiza todos los elementos
     */
    const renderizarTodo = () => {
        renderizarServicios();
        renderizarWidgets();
        renderizarEnlaces();
    };

    /**
     * Escapa caracteres HTML para evitar inyecciones
     * @param {string} text
     * @returns {string}
     */
    const escapeHtml = (text) => {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    };

    return {
        renderizarServicios,
        renderizarWidgets,
        renderizarEnlaces,
        renderizarTodo,
        escapeHtml
    };
})();
