/**
 * Aplicación Principal
 * Orquesta todos los módulos de la aplicación
 */

const App = (() => {
    /**
     * Inicializa la aplicación
     */
    const migrarLinkedIn = () => {
        const datos = StorageManager.obtenerDatos();
        const enlace = datos.enlaces.find(e => e.icono === 'linkedin');
        if (enlace && enlace.url !== 'https://www.linkedin.com/in/alexroadiaz/') {
            enlace.url = 'https://www.linkedin.com/in/alexroadiaz/';
            StorageManager.guardarDatos(datos);
        }
    };

    const inicializar = () => {
        console.log('🚀 Iniciando aplicación...');

        migrarLinkedIn();

        // Cargar datos desde el almacenamiento
        DataManager.cargar();

        // Renderizar contenido inicial
        Renderer.renderizarTodo();

        // Inicializar eventos de UI
        UIManager.inicializarEventos();

        console.log('✓ Aplicación iniciada correctamente');
    };

    /**
     * Recarga todos los datos
     */
    const recargar = () => {
        console.log('🔄 Recargando datos...');
        DataManager.cargar();
        Renderer.renderizarTodo();
    };

    /**
     * Obtiene el estado actual de la aplicación
     */
    const obtenerEstado = () => {
        return {
            datos: DataManager.obtenerDatos(),
            version: CONFIG.STORAGE_VERSION
        };
    };

    /**
     * Reinicia la aplicación
     */
    const reiniciar = () => {
        if (confirm('¿Deseas reiniciar la aplicación a los valores iniciales?')) {
            DataManager.reiniciarDatos();
            recargar();
            alert('✓ Aplicación reiniciada a los valores iniciales');
        }
    };

    return {
        inicializar,
        recargar,
        obtenerEstado,
        reiniciar
    };
})();

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    App.inicializar();
});
