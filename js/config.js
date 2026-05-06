/**
 * Configuración Global
 * Define todas las constantes y configuraciones de la aplicación
 */

const CONFIG = {
    // Claves de almacenamiento
    STORAGE_KEY: 'datosPortafolio',
    STORAGE_VERSION: '1.0',

    // Íconos disponibles
    ICONS: {
        SERVICIOS: [
            'star', 'code', 'lightbulb', 'palette', 'rocket', 'phone',
            'envelope', 'chart', 'settings', 'database', 'shield', 'users',
            'briefcase', 'award', 'book', 'camera', 'music', 'film'
        ],
        REDES: [
            'facebook', 'twitter', 'linkedin', 'github', 'instagram',
            'youtube', 'pinterest', 'whatsapp', 'telegram', 'discord'
        ]
    },

    // Datos por defecto
    DATOS_INICIALES: {
        servicios: [
            {
                nombre: "Diseño Web",
                descripcion: "Creación de sitios web modernos y responsivos",
                icono: "palette"
            },
            {
                nombre: "Desarrollo Web",
                descripcion: "Desarrollo full-stack con tecnologías actuales",
                icono: "code"
            },
            {
                nombre: "Consultoría IT",
                descripcion: "Asesoramiento profesional en soluciones digitales",
                icono: "lightbulb"
            }
        ],
        widgets: [
            {
                titulo: "Estadísticas",
                contenido: "✓ +50 Proyectos Completados"
            },
            {
                titulo: "Experiencia",
                contenido: "✓ 5+ Años en la Industria"
            },
            {
                titulo: "Clientes",
                contenido: "✓ 30+ Clientes Satisfechos"
            }
        ],
        enlaces: [
            {
                titulo: "Facebook",
                url: "https://facebook.com",
                icono: "facebook"
            },
            {
                titulo: "LinkedIn",
                url: "https://www.linkedin.com/in/alexroadiaz/",
                icono: "linkedin"
            },
            {
                titulo: "GitHub",
                url: "https://github.com",
                icono: "github"
            },
            {
                titulo: "Twitter",
                url: "https://twitter.com",
                icono: "twitter"
            }
        ]
    },

    // Mensajes
    MENSAJES: {
        EXITO: {
            SERVICIO_AGREGADO: '✓ Servicio agregado exitosamente',
            WIDGET_AGREGADO: '✓ Widget agregado exitosamente',
            ENLACE_AGREGADO: '✓ Enlace agregado exitosamente',
            DATOS_EXPORTADOS: '✓ Datos exportados correctamente',
            DATOS_ELIMINADOS: '✓ Todos los datos han sido eliminados',
            MENSAJE_ENVIADO: '✓ Mensaje enviado correctamente. ¡Gracias por contactarme!'
        },
        ADVERTENCIA: {
            CAMPOS_INCOMPLETOS: '⚠ Por favor completa todos los campos',
            CONFIRMAR_ELIMINAR: '¿Estás seguro de que deseas eliminar esto?',
            CONFIRMAR_LIMPIAR: '⚠ ¿Estás SEGURO? Esto eliminará TODOS los datos. Esta acción no se puede deshacer.'
        }
    },

    // Selectores DOM
    SELECTORS: {
        SERVICIOS_GRID: '#servicios-grid',
        WIDGETS_CONTAINER: '#widgets-container',
        ENLACES_GRID: '#enlaces-grid',
        ADMIN_CONTENT: '#admin-content',
        ADMIN_PANEL: '#admin-panel',
        CONTACTO_FORM: '#contacto-form',
        NAV_MENU: '.nav-menu',
        HAMBURGER: '.hamburger'
    },

    // CSS Classes
    CLASSES: {
        ADMIN_ACTIVE: 'active',
        SERVICIO_CARD: 'servicio-card',
        WIDGET: 'widget',
        ENLACE_CARD: 'enlace-card',
        DELETE_BTN: 'delete-btn'
    }
};

// Exportar para uso en módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
