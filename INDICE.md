# 📚 ÍNDICE Y GUÍA DE NAVEGACIÓN

Bienvenido al portafolio web profesional. Este archivo es tu **punto de partida** para entender todo.

## 🎯 ¿Por dónde empiezo?

### Si acabas de descargar el proyecto
1. **[README.md](README.md)** - Lee primero (5 min)
   - Qué es este proyecto
   - Cómo usarlo
   - Características principales

### Si quieres entender cómo funciona
2. **[ARQUITECTURA.md](ARQUITECTURA.md)** - Documentación técnica (10 min)
   - Flujo de datos
   - Responsabilidades de cada módulo
   - Cómo agregar nuevas funcionalidades

### Si necesitas hacer cambios
3. **[MANTENIMIENTO.md](MANTENIMIENTO.md)** - Guía práctica (15 min)
   - Cambiar colores
   - Cambiar textos
   - Agregar nuevos campos
   - Solucionar problemas comunes

### Si buscas ejemplos de código
4. **[EJEMPLOS.md](EJEMPLOS.md)** - Snippets de código (10 min)
   - Código listo para copiar/pegar
   - Ejemplos de cada componente
   - Casos de uso frecuentes

### Si quieres explorar la estructura
5. **[ESTRUCTURA.md](ESTRUCTURA.md)** - Organización del proyecto (5 min)
   - Árbol de carpetas
   - Líneas de código por archivo
   - Patrones de diseño

### Si tienes archivos antiguos
6. **[DEPRECADOS.md](DEPRECADOS.md)** - Migración de código (3 min)
   - Qué cambió
   - Archivos que ya no se usan
   - Qué hacer con ellos

---

## 🗂️ Estructura de Carpetas

```
📦 WEB ALEX
├── 📄 index.html              ← Archivo principal
├── 📄 README.md               ← EMPIEZA AQUÍ
├── 📄 ARQUITECTURA.md         ← Entender la arquitectura
├── 📄 MANTENIMIENTO.md        ← Cómo hacer cambios
├── 📄 EJEMPLOS.md             ← Código de ejemplo
├── 📄 ESTRUCTURA.md           ← Detalles de carpetas
├── 📄 DEPRECADOS.md           ← Archivos antiguos
│
├── 📁 css/
│   ├── global.css             ← Variables CSS y estilos base
│   ├── navbar.css             ← Barra de navegación
│   ├── hero.css               ← Sección inicial
│   ├── sections.css           ← Todas las secciones
│   └── admin.css              ← Panel de administración
│
├── 📁 js/
│   ├── config.js              ← Configuración global
│   ├── storage.js             ← Guardado de datos
│   ├── data.js                ← Lógica de datos (CRUD)
│   ├── renderer.js            ← Mostrar en pantalla
│   ├── admin.js               ← Panel administrativo
│   ├── ui.js                  ← Interacciones
│   └── app.js                 ← Iniciar aplicación
│
├── 📁 data/                   (para futuro uso)
├── 📁 assets/
│   └── 📁 images/             ← Tus imágenes aquí
│
└── 📄 datos-ejemplo.json      ← Ejemplo de datos
```

---

## 📖 Guía por Rol

### 👤 Soy usuario final
Lee en este orden:
1. [README.md](README.md) - Instrucciones de uso
2. [MANTENIMIENTO.md](MANTENIMIENTO.md) - Tips de personalización

### 👨‍💻 Soy desarrollador
Lee en este orden:
1. [ARQUITECTURA.md](ARQUITECTURA.md) - Entender la estructura
2. [ESTRUCTURA.md](ESTRUCTURA.md) - Detalles del código
3. [EJEMPLOS.md](EJEMPLOS.md) - Ver ejemplos reales

### 🔧 Necesito hacer cambios rápidos
Lee directamente:
1. [MANTENIMIENTO.md](MANTENIMIENTO.md) - Guía paso a paso
2. [EJEMPLOS.md](EJEMPLOS.md) - Copiar/pegar código

### 🚀 Quiero extender el proyecto
Lee en profundidad:
1. [ARQUITECTURA.md](ARQUITECTURA.md) - Entender patrones
2. [ESTRUCTURA.md](ESTRUCTURA.md) - Dónde va el código nuevo
3. Explorar los archivos `js/*.js`

---

## 🎯 Tareas Rápidas

| Tarea | Documentación | Ubicación |
|-------|-------------|-----------|
| Cambiar colores | MANTENIMIENTO.md | Sección "Cambiar Colores" |
| Cambiar textos | MANTENIMIENTO.md | Sección "Cambiar Textos" |
| Agregar campo nuevo | EJEMPLOS.md | Sección "Agregar Campos Nuevos" |
| Agregar icono nuevo | MANTENIMIENTO.md | Sección "Personalizar Iconos" |
| Cambiar tipografía | MANTENIMIENTO.md | Sección "Cambiar Tipografía" |
| Hacer debug | MANTENIMIENTO.md | Sección "Hacer Debug" |
| Entender módulos | ARQUITECTURA.md | Sección "Módulos" |
| Entender HTML | ESTRUCTURA.md | Sección "Archivos Detallados" |
| Ver ejemplos código | EJEMPLOS.md | Todas las secciones |

---

## 💡 Conceptos Clave

### Módulos JavaScript
El código está dividido en 7 módulos independientes:
- **config.js**: Configuración
- **storage.js**: Base de datos (localStorage)
- **data.js**: Lógica de negocio
- **renderer.js**: Mostrar en pantalla
- **admin.js**: Panel administrativo
- **ui.js**: Interacciones del usuario
- **app.js**: Inicialización

### Organización CSS
Los estilos están separados por componentes:
- **global.css**: Variables y estilos base
- **navbar.css**: Navegación
- **hero.css**: Sección inicial
- **sections.css**: Contenido principal
- **admin.css**: Panel administrativo

### Flujo de Datos
```
Usuario → UI → AdminPanel → DataManager → StorageManager → localStorage
                                    ↓
                              Renderer → Pantalla
```

---

## ❓ Preguntas Frecuentes

### ¿Por dónde empiezo?
→ Lee [README.md](README.md) primero

### ¿Cómo agrego un nuevo campo?
→ Sigue [EJEMPLOS.md](EJEMPLOS.md) - Sección "Agregar Campos Nuevos"

### ¿Cómo cambio los colores?
→ Lee [MANTENIMIENTO.md](MANTENIMIENTO.md) - Sección "Cambiar Colores"

### ¿Dónde edito el CSS?
→ Carpeta `css/` - Lee [ESTRUCTURA.md](ESTRUCTURA.md)

### ¿Dónde está la lógica JavaScript?
→ Carpeta `js/` - Lee [ARQUITECTURA.md](ARQUITECTURA.md)

### ¿Cómo elimino los archivos antiguos?
→ Lee [DEPRECADOS.md](DEPRECADOS.md)

### ¿Dónde guardo las imágenes?
→ Carpeta `assets/images/` - Lee [ESTRUCTURA.md](ESTRUCTURA.md)

---

## 🔍 Encontrar Información Rápidamente

Use `Ctrl + F` para buscar en los documentos:

| Búsqueda | Documento |
|----------|-----------|
| "cambiar colores" | MANTENIMIENTO.md |
| "agregar campo" | EJEMPLOS.md |
| "módulos" | ARQUITECTURA.md |
| "estructura" | ESTRUCTURA.md |
| "archivos" | ESTRUCTURA.md |
| "cambiar" | MANTENIMIENTO.md |

---

## 📊 Estadísticas del Proyecto

- **Archivos HTML**: 1 (index.html)
- **Archivos CSS**: 5 (organizados por componentes)
- **Módulos JavaScript**: 7 (código modular)
- **Líneas de código HTML**: ~450
- **Líneas de código CSS**: ~550
- **Líneas de código JavaScript**: ~900
- **Documentación**: 6 archivos (.md)
- **Total**: ~2000 líneas de código + documentación

---

## ✨ Características Principales

✅ Responsive (funciona en móvil, tablet, PC)
✅ Modular (fácil de mantener)
✅ Sin dependencias (solo HTML/CSS/JS puro)
✅ Almacenamiento local (sin servidor)
✅ Panel administrativo integrado
✅ Exportar/importar datos
✅ Validaciones de entrada
✅ Seguridad básica (escape HTML)

---

## 🚀 Próximos Pasos Recomendados

1. **Lee** [README.md](README.md) (5 min)
2. **Explora** la carpeta del proyecto
3. **Abre** `index.html` en tu navegador
4. **Prueba** agregar servicios, widgets y enlaces
5. **Lee** [MANTENIMIENTO.md](MANTENIMIENTO.md) para personalizarlo
6. **Experimenta** con cambios pequeños
7. **Aprende** la arquitectura en [ARQUITECTURA.md](ARQUITECTURA.md)

---

## 📞 Ayuda Rápida

### No funciona algo
1. Abre DevTools (F12)
2. Revisa la pestaña "Console" por errores
3. Lee [MANTENIMIENTO.md](MANTENIMIENTO.md) - Sección "Hacer Debug"

### Quiero cambiar algo específico
1. Busca en [MANTENIMIENTO.md](MANTENIMIENTO.md)
2. Si no lo encuentras, busca en [EJEMPLOS.md](EJEMPLOS.md)
3. Si aún no lo encuentras, revisa [ARQUITECTURA.md](ARQUITECTURA.md)

### Necesito entender el código
1. Lee [ARQUITECTURA.md](ARQUITECTURA.md)
2. Explora los archivos en `js/` (están muy comentados)
3. Usa `Ctrl + F` para buscar funciones específicas

---

## 🎓 Recursos Educativos

### Para aprender JavaScript modular
- Lee los archivos en `js/` (están documentados)
- Patrón IIFE (Immediately Invoked Function Expression)
- Patrón Module Pattern

### Para aprender CSS moderno
- Variables CSS en `css/global.css`
- Grid layout en `css/sections.css`
- Media queries (responsive)

### Para aprender la arquitectura
- MVC (Model-View-Controller) en `js/`
- Separación de responsabilidades
- Pattern IIFE para encapsulación

---

**Bienvenido a tu proyecto. ¡Estás listo para crear!** 🚀

*Última actualización: Mayo 2026*
