# 🌐 Mi Portafolio Web Personal

Una página web profesional y moderna para presentar tus servicios, widgets informativos y enlaces a tus redes sociales.

## ✨ Características

- **Diseño Responsivo**: Se adapta perfectamente a dispositivos móviles, tablets y computadoras
- **Panel de Administración**: Herramienta integrada para agregar/eliminar contenido sin editar código
- **Servicios Personalizables**: Muestra tus servicios profesionales con iconos
- **Widgets Dinámicos**: Añade estadísticas, logros o información importante
- **Enlaces Sociales**: Incluye accesos rápidos a tus redes sociales
- **Almacenamiento Local**: Los datos se guardan automáticamente en el navegador
- **Exportación de Datos**: Descarga tus datos en formato JSON
- **Interfaz Moderna**: Gradientes, animaciones suaves y diseño atractivo
- **Arquitectura Modular**: Código bien organizado y fácil de mantener

## 📁 Estructura del Proyecto

```
WEB ALEX/
├── index.html              # Estructura HTML principal
├── css/                    # Estilos organizados por componentes
│   ├── global.css         # Estilos globales y variables CSS
│   ├── navbar.css         # Estilos de la barra de navegación
│   ├── hero.css           # Estilos de la sección hero
│   ├── sections.css       # Estilos de secciones principales
│   └── admin.css          # Estilos del panel administrativo
├── js/                     # Módulos JavaScript
│   ├── config.js          # Configuración global y constantes
│   ├── storage.js         # Gestión de localStorage
│   ├── data.js            # Lógica de datos (CRUD)
│   ├── renderer.js        # Funciones para renderizar elementos
│   ├── admin.js           # Funcionalidades del panel admin
│   ├── ui.js              # Interacciones de usuario
│   └── app.js             # Módulo principal que orquesta todo
├── data/                   # Archivos de datos (para futuro uso)
├── assets/                 # Recursos (imágenes, etc.)
│   └── images/           # Carpeta para imágenes
├── README.md              # Este archivo
└── datos-ejemplo.json     # Archivo de ejemplo de datos
```

## 🚀 Cómo Usar

### Abrir la página web
1. Abre el archivo `index.html` en tu navegador web
2. ¡Listo! La página estará lista para usar

### Panel de Administración

Verás un botón de engranaje (⚙️) en la esquina inferior derecha. Haz clic para abrir el panel donde puedes:

#### 1. **Agregar Servicios**
   - Escribe el nombre del servicio
   - Describe qué incluye
   - Elige un icono (ej: star, code, lightbulb, palette, etc.)
   - Haz clic en "Añadir"

#### 2. **Agregar Widgets**
   - Escribe el título del widget
   - Agrega el contenido (estadísticas, logros, etc.)
   - Haz clic en "Añadir"

#### 3. **Agregar Enlaces**
   - Escribe el título del enlace
   - Pega la URL completa (ej: https://facebook.com/tu-perfil)
   - Especifica el icono (ej: facebook, linkedin, github, twitter, instagram, etc.)
   - Haz clic en "Añadir"

### Eliminar Contenido
- En cada tarjeta de servicio, widget o enlace, encontrarás un botón "×" en la esquina superior derecha
- Haz clic para eliminar (se pedirá confirmación)

### Exportar Datos
- En el panel de administración, haz clic en "Exportar Datos"
- Se descargará un archivo JSON con todo tu contenido
- Puedes hacer backup de tus datos

### Limpiar Todo
- Para eliminar todos los datos de una vez (¡cuidado!), usa el botón "Limpiar Todo"

## 🎨 Iconos Disponibles

### Para Servicios
- star, code, lightbulb, palette, rocket, phone, envelope, chart, settings, database, shield, users, briefcase, award, book, camera, music, film, game, football, coffee, cutlery, heart, thumbs-up, check, bell, clock, calendar, map, location, compass, search, eye, lock, unlock, file, folder, download, upload, trash, edit, copy, paste, undo, redo

### Para Enlaces (Redes Sociales)
- facebook, twitter, linkedin, github, instagram, youtube, pinterest, tiktok, whatsapp, telegram, discord, reddit, stackoverflow, medium, dev, dribbble, behance, codepen, deviantart, flickr, foursquare, lastfm, quora, snapchat, spotify, tumblr, vimeo, weibo, xamarin, xing, yelp, 500px, apple, google, amazon, microsoft, html5, css3, js (javascript)

## 💾 Almacenamiento de Datos

Los datos se guardan automáticamente en el **localStorage del navegador**. Esto significa:
- ✓ Los cambios se guardan instantáneamente
- ✓ Los datos persisten incluso si cierras el navegador
- ✓ No requiere servidor ni base de datos
- ⚠ Si limpias el caché del navegador, los datos se perderán
- 💡 Por eso es importante exportar tus datos regularmente

## 🌐 Secciones de la Página

1. **Navbar**: Navegación principal con acceso a todas las secciones
2. **Hero Section**: Bienvenida destacada con llamada a la acción
3. **Mis Servicios**: Tarjetas con los servicios que ofreces
4. **Widgets**: Estadísticas y logros resaltados
5. **Mis Enlaces**: Acceso rápido a tus redes sociales
6. **Contacto**: Formulario para que las personas te contacten
7. **Footer**: Pie de página con información de copyright

## 🔧 Personalización

### Cambiar el Título
Abre `index.html` y busca la línea:
```html
<title>Mi Portafolio Profesional</title>
```
Cambia "Mi Portafolio Profesional" por tu nombre o título

### Agregar tu foto de perfil

Para agregar una foto en la sección hero:
1. Abre `index.html`
2. Busca la sección `<section id="inicio" class="hero">`
3. Agrega una imagen:
```html
<img src="assets/images/tu-foto.jpg" alt="Tu nombre" style="width: 150px; border-radius: 50%; margin-bottom: 20px;">
```

### Personalizar colores

Los colores principales están definidos en `css/global.css` en las variables CSS:

```css
:root {
    --primary-color: #6366f1;      /* Color primario (azul índigo) */
    --secondary-color: #ec4899;    /* Color secundario (rosa) */
    --dark-color: #1f2937;         /* Color oscuro */
    --light-color: #f9fafb;        /* Color claro */
    --text-color: #374151;         /* Color de texto */
}
```

Cambia estos valores para personalizar tu paleta de colores.

## 📖 Guía de Arquitectura

### Módulos JavaScript

#### `config.js`
- Define todas las constantes y configuraciones
- Contiene íconos disponibles, mensajes y selectores DOM
- Punto único de configuración

#### `storage.js`
- Gestiona persistencia de datos en localStorage
- Exporta datos a JSON
- Valida la estructura de datos

#### `data.js`
- CRUD completo (Create, Read, Update, Delete)
- Gestiona servicios, widgets y enlaces
- Estado centralizado de datos

#### `renderer.js`
- Renderiza elementos en el DOM
- Crea tarjetas y componentes
- Previene inyecciones HTML con escape

#### `admin.js`
- Funcionalidades del panel de administración
- Valida URLs y campos
- Limpieza de formularios

#### `ui.js`
- Maneja eventos del usuario
- Inicializa navegación y panel admin
- Validaciones de interfaz

#### `app.js`
- Módulo principal (orquestador)
- Inicializa la aplicación
- Coordina todos los módulos

## 📱 Responsividad

La página se adapta automáticamente a:
- Computadoras (1024px en adelante)
- Tablets (768px - 1023px)
- Móviles (menos de 768px)

Puntos de quiebre:
- `@media (max-width: 768px)` - Tablets
- `@media (max-width: 600px)` - Móviles

## 🎯 Tips de Uso

1. **Primero exporta los datos de ejemplo** antes de limpiar todo
2. **Usa URLs completas** para los enlaces (incluye https://)
3. **Elige iconos relevantes** que representen bien tu contenido
4. **Los widgets son perfectos** para mostrar logros y estadísticas
5. **Mantén las descripciones cortas** pero informativas
6. **Hace copias de seguridad** exportando tus datos regularmente

## ⚠️ Notas Importantes

- Esta versión almacena datos solo en el navegador local
- Para un sitio en producción, considera usar un servidor/base de datos
- Asegúrate de usar URLs válidas en los enlaces
- Los datos se eliminan si limpias el caché del navegador

## 🚀 Futuras Mejoras

Estas son algunas ideas para expandir tu sitio:
- Agregar sección de galería/portafolio
- Integrar sistema de comentarios
- Agregar blog o artículos
- Implementar carrito de compras
- Agregar notificaciones por email
- Conectar a una base de datos real
- Autenticación de usuario
- Sistema de búsqueda

## 🔨 Desarrollo y Mantenimiento

### Agregar una nueva funcionalidad

1. **Si es un nuevo dato/entidad**:
   - Agrega campos en `config.js` (DATOS_INICIALES)
   - Agrega métodos CRUD en `data.js`

2. **Si es una interacción UI**:
   - Agrega el evento en `ui.js`
   - Crea la función en el módulo correspondiente

3. **Si es una sección visual**:
   - Agrega HTML en `index.html`
   - Crea estilos en `css/nuevaSeccion.css`
   - Agrega renderizado en `renderer.js`

### Estructura de módulos

Cada módulo sigue el patrón IIFE (Immediately Invoked Function Expression):
```javascript
const ModuleName = (() => {
    // Variables privadas
    let privateVar = 0;
    
    // Funciones privadas
    const privateFunc = () => {};
    
    // API pública
    return {
        publicFunc: publicFunc
    };
})();
```

## 📧 Soporte

¿Necesitas ayuda? Revisa el código en los módulos JavaScript para entender cómo funciona todo. Cada módulo está bien documentado con comentarios.

---

**Hecho con ❤️ para tu portafolio profesional**
