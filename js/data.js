/**
 * Módulo de Gestión de Datos
 * Maneja todas las operaciones CRUD de datos
 */

const DataManager = (() => {
    // Estado interno de la aplicación
    let datosActuales = StorageManager.obtenerDatos();

    /**
     * Obtiene todos los datos actuales
     * @returns {Object}
     */
    const obtenerDatos = () => datosActuales;

    /**
     * Obtiene servicios
     * @returns {Array}
     */
    const obtenerServicios = () => datosActuales.servicios;

    /**
     * Obtiene widgets
     * @returns {Array}
     */
    const obtenerWidgets = () => datosActuales.widgets;

    /**
     * Obtiene enlaces
     * @returns {Array}
     */
    const obtenerEnlaces = () => datosActuales.enlaces;

    /**
     * Agrega un nuevo servicio
     * @param {Object} servicio - {nombre, descripcion, icono}
     * @returns {boolean}
     */
    const agregarServicio = (servicio) => {
        if (!servicio.nombre || !servicio.descripcion) {
            console.warn('Datos incompletos para servicio');
            return false;
        }
        datosActuales.servicios.push({
            nombre: servicio.nombre,
            descripcion: servicio.descripcion,
            icono: servicio.icono || 'star'
        });
        return guardar();
    };

    /**
     * Elimina un servicio por índice
     * @param {number} index
     * @returns {boolean}
     */
    const eliminarServicio = (index) => {
        if (index >= 0 && index < datosActuales.servicios.length) {
            datosActuales.servicios.splice(index, 1);
            return guardar();
        }
        return false;
    };

    /**
     * Actualiza un servicio por índice
     * @param {number} index
     * @param {Object} servicio
     * @returns {boolean}
     */
    const actualizarServicio = (index, servicio) => {
        if (index >= 0 && index < datosActuales.servicios.length) {
            datosActuales.servicios[index] = {
                nombre: servicio.nombre || datosActuales.servicios[index].nombre,
                descripcion: servicio.descripcion || datosActuales.servicios[index].descripcion,
                icono: servicio.icono || datosActuales.servicios[index].icono
            };
            return guardar();
        }
        return false;
    };

    /**
     * Agrega un nuevo widget
     * @param {Object} widget - {titulo, contenido}
     * @returns {boolean}
     */
    const agregarWidget = (widget) => {
        if (!widget.titulo || !widget.contenido) {
            console.warn('Datos incompletos para widget');
            return false;
        }
        datosActuales.widgets.push({
            titulo: widget.titulo,
            contenido: widget.contenido
        });
        return guardar();
    };

    /**
     * Elimina un widget por índice
     * @param {number} index
     * @returns {boolean}
     */
    const eliminarWidget = (index) => {
        if (index >= 0 && index < datosActuales.widgets.length) {
            datosActuales.widgets.splice(index, 1);
            return guardar();
        }
        return false;
    };

    /**
     * Actualiza un widget por índice
     * @param {number} index
     * @param {Object} widget
     * @returns {boolean}
     */
    const actualizarWidget = (index, widget) => {
        if (index >= 0 && index < datosActuales.widgets.length) {
            datosActuales.widgets[index] = {
                titulo: widget.titulo || datosActuales.widgets[index].titulo,
                contenido: widget.contenido || datosActuales.widgets[index].contenido
            };
            return guardar();
        }
        return false;
    };

    /**
     * Agrega un nuevo enlace
     * @param {Object} enlace - {titulo, url, icono}
     * @returns {boolean}
     */
    const agregarEnlace = (enlace) => {
        if (!enlace.titulo || !enlace.url) {
            console.warn('Datos incompletos para enlace');
            return false;
        }
        datosActuales.enlaces.push({
            titulo: enlace.titulo,
            url: enlace.url,
            icono: enlace.icono || 'link'
        });
        return guardar();
    };

    /**
     * Elimina un enlace por índice
     * @param {number} index
     * @returns {boolean}
     */
    const eliminarEnlace = (index) => {
        if (index >= 0 && index < datosActuales.enlaces.length) {
            datosActuales.enlaces.splice(index, 1);
            return guardar();
        }
        return false;
    };

    /**
     * Actualiza un enlace por índice
     * @param {number} index
     * @param {Object} enlace
     * @returns {boolean}
     */
    const actualizarEnlace = (index, enlace) => {
        if (index >= 0 && index < datosActuales.enlaces.length) {
            datosActuales.enlaces[index] = {
                titulo: enlace.titulo || datosActuales.enlaces[index].titulo,
                url: enlace.url || datosActuales.enlaces[index].url,
                icono: enlace.icono || datosActuales.enlaces[index].icono
            };
            return guardar();
        }
        return false;
    };

    /**
     * Reinicia los datos a los valores iniciales
     * @returns {boolean}
     */
    const reiniciarDatos = () => {
        datosActuales = JSON.parse(JSON.stringify(CONFIG.DATOS_INICIALES));
        return guardar();
    };

    /**
     * Limpia completamente los datos
     * @returns {boolean}
     */
    const limpiarTodo = () => {
        datosActuales = {
            servicios: [],
            widgets: [],
            enlaces: []
        };
        return guardar();
    };

    /**
     * Guarda los cambios
     * @returns {boolean}
     */
    const guardar = () => {
        return StorageManager.guardarDatos(datosActuales);
    };

    /**
     * Carga datos desde localStorage
     * @returns {boolean}
     */
    const cargar = () => {
        datosActuales = StorageManager.obtenerDatos();
        return true;
    };

    return {
        obtenerDatos,
        obtenerServicios,
        obtenerWidgets,
        obtenerEnlaces,
        agregarServicio,
        eliminarServicio,
        actualizarServicio,
        agregarWidget,
        eliminarWidget,
        actualizarWidget,
        agregarEnlace,
        eliminarEnlace,
        actualizarEnlace,
        reiniciarDatos,
        limpiarTodo,
        guardar,
        cargar
    };
})();
