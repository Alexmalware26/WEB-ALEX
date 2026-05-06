/**
 * Módulo de Panel Administrativo
 * Gestiona todas las operaciones del panel de control
 */

const AdminPanel = (() => {
    /**
     * Agrega un nuevo servicio
     */
    const agregarServicio = () => {
        const nombre = document.getElementById('servicio-nombre').value.trim();
        const descripcion = document.getElementById('servicio-desc').value.trim();
        const icono = document.getElementById('servicio-icon').value.trim();

        if (!nombre || !descripcion) {
            alert(CONFIG.MENSAJES.ADVERTENCIA.CAMPOS_INCOMPLETOS);
            return;
        }

        if (DataManager.agregarServicio({ nombre, descripcion, icono })) {
            Renderer.renderizarServicios();
            limpiarFormularioServicio();
            alert(CONFIG.MENSAJES.EXITO.SERVICIO_AGREGADO);
        }
    };

    /**
     * Elimina un servicio
     * @param {number} index
     */
    const eliminarServicio = (index) => {
        if (confirm(CONFIG.MENSAJES.ADVERTENCIA.CONFIRMAR_ELIMINAR)) {
            if (DataManager.eliminarServicio(index)) {
                Renderer.renderizarServicios();
            }
        }
    };

    /**
     * Agrega un nuevo widget
     */
    const agregarWidget = () => {
        const titulo = document.getElementById('widget-titulo').value.trim();
        const contenido = document.getElementById('widget-contenido').value.trim();

        if (!titulo || !contenido) {
            alert(CONFIG.MENSAJES.ADVERTENCIA.CAMPOS_INCOMPLETOS);
            return;
        }

        if (DataManager.agregarWidget({ titulo, contenido })) {
            Renderer.renderizarWidgets();
            limpiarFormularioWidget();
            alert(CONFIG.MENSAJES.EXITO.WIDGET_AGREGADO);
        }
    };

    /**
     * Elimina un widget
     * @param {number} index
     */
    const eliminarWidget = (index) => {
        if (confirm(CONFIG.MENSAJES.ADVERTENCIA.CONFIRMAR_ELIMINAR)) {
            if (DataManager.eliminarWidget(index)) {
                Renderer.renderizarWidgets();
            }
        }
    };

    /**
     * Agrega un nuevo enlace
     */
    const agregarEnlace = () => {
        const titulo = document.getElementById('enlace-titulo').value.trim();
        const url = document.getElementById('enlace-url').value.trim();
        const icono = document.getElementById('enlace-icon').value.trim();

        if (!titulo || !url) {
            alert(CONFIG.MENSAJES.ADVERTENCIA.CAMPOS_INCOMPLETOS);
            return;
        }

        // Validar URL
        if (!esUrlValida(url)) {
            alert('⚠ Por favor ingresa una URL válida (ej: https://ejemplo.com)');
            return;
        }

        if (DataManager.agregarEnlace({ titulo, url, icono })) {
            Renderer.renderizarEnlaces();
            limpiarFormularioEnlace();
            alert(CONFIG.MENSAJES.EXITO.ENLACE_AGREGADO);
        }
    };

    /**
     * Elimina un enlace
     * @param {number} index
     */
    const eliminarEnlace = (index) => {
        if (confirm(CONFIG.MENSAJES.ADVERTENCIA.CONFIRMAR_ELIMINAR)) {
            if (DataManager.eliminarEnlace(index)) {
                Renderer.renderizarEnlaces();
            }
        }
    };

    /**
     * Exporta los datos a un archivo JSON
     */
    const exportarDatos = () => {
        if (StorageManager.exportarDatos(DataManager.obtenerDatos())) {
            alert(CONFIG.MENSAJES.EXITO.DATOS_EXPORTADOS);
        }
    };

    /**
     * Limpia todos los datos
     */
    const limpiarTodo = () => {
        if (confirm(CONFIG.MENSAJES.ADVERTENCIA.CONFIRMAR_LIMPIAR)) {
            if (DataManager.limpiarTodo()) {
                Renderer.renderizarTodo();
                alert(CONFIG.MENSAJES.EXITO.DATOS_ELIMINADOS);
            }
        }
    };

    /**
     * Limpia el formulario de servicio
     */
    const limpiarFormularioServicio = () => {
        document.getElementById('servicio-nombre').value = '';
        document.getElementById('servicio-desc').value = '';
        document.getElementById('servicio-icon').value = '';
    };

    /**
     * Limpia el formulario de widget
     */
    const limpiarFormularioWidget = () => {
        document.getElementById('widget-titulo').value = '';
        document.getElementById('widget-contenido').value = '';
    };

    /**
     * Limpia el formulario de enlace
     */
    const limpiarFormularioEnlace = () => {
        document.getElementById('enlace-titulo').value = '';
        document.getElementById('enlace-url').value = '';
        document.getElementById('enlace-icon').value = '';
    };

    /**
     * Valida si una URL es válida
     * @param {string} url
     * @returns {boolean}
     */
    const esUrlValida = (url) => {
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    };

    return {
        agregarServicio,
        eliminarServicio,
        agregarWidget,
        eliminarWidget,
        agregarEnlace,
        eliminarEnlace,
        exportarDatos,
        limpiarTodo
    };
})();
