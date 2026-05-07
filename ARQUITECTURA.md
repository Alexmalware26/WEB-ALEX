/**
 * ESTRUCTURA GENERAL DEL PROYECTO
 * ===============================
 * 
 * Este documento describe la arquitectura y organización del proyecto.
 */

/*
 * FLUJO DE DATOS
 * ==============
 * 
 * Usuario Interactúa → UIManager → AdminPanel → DataManager → StorageManager → localStorage
 *                                                  ↓
 *                                            Renderer ← muestra cambios
 */

/*
 * MÓDULOS Y RESPONSABILIDADES
 * ============================
 */

// 1. CONFIG.JS
// ────────────
// • Configuración global de la aplicación
// • Constantes de la aplicación
// • Selectores DOM
// • Clases CSS
// • Mensajes de usuario
// Uso: Importa valores en otros módulos

// 2. STORAGE.JS
// ─────────────
// • Gestiona localStorage del navegador
// • Exporta datos a JSON
// • Valida datos
// Funciones principales:
//   - obtenerDatos()
//   - guardarDatos(datos)
//   - limpiarDatos()
//   - exportarDatos(datos)
//   - validarDatos(datos)

// 3. DATA.JS
// ──────────
// • CRUD de datos (Create, Read, Update, Delete)
// • Gestión de servicios, widgets y enlaces
// • Lógica de negocio de datos
// Funciones principales:
//   - obtenerServicios/Widgets/Enlaces()
//   - agregarServicio/Widget/Enlace()
//   - eliminarServicio/Widget/Enlace()
//   - actualizarServicio/Widget/Enlace()
//   - limpiarTodo()
//   - guardar()

// 4. RENDERER.JS
// ──────────────
// • Renderiza elementos en el DOM
// • Crea tarjetas y componentes
// • Previene inyecciones HTML
// Funciones principales:
//   - renderizarServicios/Widgets/Enlaces()
//   - renderizarTodo()
//   - escapeHtml(text)

// 5. ADMIN.JS
// ───────────
// • Funcionalidades del panel administrativo
// • Validación de formularios
// • Gestión de eliminaciones
// Funciones principales:
//   - agregarServicio/Widget/Enlace()
//   - eliminarServicio/Widget/Enlace()
//   - exportarDatos()
//   - limpiarTodo()

// 6. UI.JS
// ────────
// • Interacciones con el usuario
// • Inicialización de eventos
// • Validaciones de UI
// Funciones principales:
//   - inicializarEventos()
//   - inicializarContacto()
//   - inicializarNavegacion()
//   - inicializarAdminPanel()

// 7. APP.JS
// ─────────
// • Módulo principal (orquestador)
// • Inicializa la aplicación
// • Coordina todos los módulos
// Funciones principales:
//   - inicializar()
//   - recargar()
//   - obtenerEstado()

/*
 * ESTRUCTURA HTML
 * ===============
 */

/*
 * <body>
 *   <nav class="navbar">          → Navegación (navbar.css)
 *   <section id="inicio">         → Hero (hero.css)
 *   <section id="servicios">      → Servicios (sections.css)
 *   <section id="widgets">        → Widgets (sections.css)
 *   <section id="enlaces">        → Enlaces (sections.css)
 *   <section id="contacto">       → Contacto (sections.css)
 *   <footer>                      → Footer (sections.css)
 *   <div id="admin-panel">        → Panel Admin (admin.css)
 *   <script src="js/*">           → Módulos JavaScript
 * </body>
 */

/*
 * ESTRUCTURA CSS
 * ==============
 */

// global.css
// • Variables CSS (:root)
// • Reset de estilos (*)
// • Estilos globales (body, html, container)
// • Estilos de botones globales
// • Estilos de inputs y formularios

// navbar.css
// • Barra de navegación
// • Menú de navegación
// • Menú hamburguesa (móvil)

// hero.css
// • Sección hero
// • Animaciones fadeIn

// sections.css
// • Estilos generales de secciones
// • Cards de servicios
// • Widgets
// • Cards de enlaces
// • Formulario de contacto
// • Footer

// admin.css
// • Panel administrativo
// • Botón toggle
// • Formularios del admin
// • Responsive del admin

/*
 * FLUJO DE EVENTOS
 * ================
 */

// 1. CARGA INICIAL
// ────────────────
// DOMContentLoaded
//   ↓
// App.inicializar()
//   ↓ Carga datos
// DataManager.cargar()
//   ↓ Renderiza
// Renderer.renderizarTodo()
//   ↓ Inicia eventos
// UIManager.inicializarEventos()

// 2. AGREGAR SERVICIO
// ───────────────────
// Click en botón "Añadir"
//   ↓
// AdminPanel.agregarServicio()
//   ↓ Valida
// if (campos válidos)
//   ↓ Agrega
// DataManager.agregarServicio(datos)
//   ↓ Guarda
// StorageManager.guardarDatos()
//   ↓ Renderiza
// Renderer.renderizarServicios()

// 3. ELIMINAR ITEM
// ────────────────
// Click en botón "×"
//   ↓
// AdminPanel.eliminarServicio(index)
//   ↓ Confirma
// confirm()
//   ↓ Elimina
// DataManager.eliminarServicio(index)
//   ↓ Renderiza
// Renderer.renderizarServicios()

// 4. EXPORTAR DATOS
// ─────────────────
// Click en "Exportar Datos"
//   ↓
// AdminPanel.exportarDatos()
//   ↓
// StorageManager.exportarDatos()
//   ↓
// Descarga JSON

/*
 * CÓMO AGREGAR UNA NUEVA FUNCIONALIDAD
 * =====================================
 */

// Ejemplo: Agregar campo "email" a servicios

// Paso 1: Actualizar config.js
// ─────────────────────────────
// En CONFIG.DATOS_INICIALES.servicios[0]:
// {
//     nombre: "...",
//     descripcion: "...",
//     icono: "...",
//     email: "email@ejemplo.com"  // NUEVO CAMPO
// }

// Paso 2: Actualizar data.js
// ──────────────────────────
// En agregarServicio():
// const agregarServicio = (servicio) => {
//     datosActuales.servicios.push({
//         nombre: servicio.nombre,
//         descripcion: servicio.descripcion,
//         icono: servicio.icono || 'star',
//         email: servicio.email  // NUEVO CAMPO
//     });
//     return guardar();
// };

// Paso 3: Actualizar HTML (index.html)
// ────────────────────────────────────
// En formulario admin:
// <input type="email" id="servicio-email" placeholder="Email">

// Paso 4: Actualizar admin.js
// ───────────────────────────
// En agregarServicio():
// const email = document.getElementById('servicio-email').value.trim();
// if (!nombre || !descripcion || !email) { ... }
// DataManager.agregarServicio({ nombre, descripcion, icono, email })

// Paso 5: Actualizar renderer.js
// ──────────────────────────────
// En crearServicioCard():
// <p>Email: ${escapeHtml(servicio.email)}</p>

/*
 * PATRONES UTILIZADOS
 * ====================
 */

// 1. MODULE PATTERN (IIFE)
// ────────────────────────
// const ModuleName = (() => {
//     let privateVar;
//     const privateFunc = () => {};
//     return { publicFunc };
// })();

// 2. CLOSURE
// ──────────
// Las funciones privadas tienen acceso a variables privadas

// 3. SINGLE RESPONSIBILITY
// ────────────────────────
// Cada módulo tiene una única responsabilidad

// 4. DEPENDENCY INJECTION
// ──────────────────────
// Los módulos usan CONFIG para configuración global

// 5. STATE MANAGEMENT
// ───────────────────
// DataManager es la fuente única de verdad (state)

/*
 * VARIABLES CSS PERSONALIZABLES
 * ===============================
 */

// En css/global.css (sección :root):
// --primary-color: #6366f1         // Color primario
// --secondary-color: #ec4899       // Color secundario
// --dark-color: #1f2937            // Color oscuro
// --light-color: #f9fafb           // Color claro
// --text-color: #374151            // Color de texto
// --border-color: #e5e7eb          // Color de borde
// --error-color: #ef4444           // Color de error
// --success-color: #10b981         // Color de éxito
// --warning-color: #f59e0b         // Color de advertencia

/*
 * BREAKPOINTS RESPONSIVE
 * =======================
 */

// Tablets: @media (max-width: 768px)
// Móviles: @media (max-width: 600px)

/*
 * ALMACENAMIENTO DE DATOS
 * =======================
 */

// localStorage.datosPortafolio = JSON.stringify({
//     servicios: [...],
//     widgets: [...],
//     enlaces: [...]
// })

/*
 * VALIDACIONES
 * =============
 */

// • Email: UIManager.validarEmail()
// • URL: AdminPanel.esUrlValida()
// • Campos requeridos: checks en AdminPanel
// • HTML escaping: Renderer.escapeHtml()
