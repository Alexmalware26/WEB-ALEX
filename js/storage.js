/**
 * Módulo de Almacenamiento
 * Gestiona la persistencia de datos en localStorage
 */

const StorageManager = (() => {
    /**
     * Obtiene los datos guardados o retorna los datos iniciales
     * @returns {Object} Datos del portafolio
     */
    const obtenerDatos = () => {
        try {
            const datosGuardados = localStorage.getItem(CONFIG.STORAGE_KEY);
            if (datosGuardados) {
                return JSON.parse(datosGuardados);
            }
            return JSON.parse(JSON.stringify(CONFIG.DATOS_INICIALES));
        } catch (error) {
            console.error('Error al obtener datos del localStorage:', error);
            return JSON.parse(JSON.stringify(CONFIG.DATOS_INICIALES));
        }
    };

    /**
     * Guarda los datos en localStorage
     * @param {Object} datos - Datos a guardar
     */
    const guardarDatos = (datos) => {
        try {
            localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(datos));
            return true;
        } catch (error) {
            console.error('Error al guardar datos en localStorage:', error);
            return false;
        }
    };

    /**
     * Limpia todos los datos guardados
     */
    const limpiarDatos = () => {
        try {
            localStorage.removeItem(CONFIG.STORAGE_KEY);
            return true;
        } catch (error) {
            console.error('Error al limpiar localStorage:', error);
            return false;
        }
    };

    /**
     * Exporta los datos a un archivo JSON
     * @param {Object} datos - Datos a exportar
     */
    const exportarDatos = (datos) => {
        try {
            const dataStr = JSON.stringify(datos, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `portafolio-datos-${new Date().getTime()}.json`;
            link.click();
            URL.revokeObjectURL(url);
            return true;
        } catch (error) {
            console.error('Error al exportar datos:', error);
            return false;
        }
    };

    /**
     * Valida la estructura de datos
     * @param {Object} datos - Datos a validar
     * @returns {boolean}
     */
    const validarDatos = (datos) => {
        return datos &&
            Array.isArray(datos.servicios) &&
            Array.isArray(datos.widgets) &&
            Array.isArray(datos.enlaces);
    };

    return {
        obtenerDatos,
        guardarDatos,
        limpiarDatos,
        exportarDatos,
        validarDatos
    };
})();
