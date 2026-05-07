# 🔧 GUÍA DE MANTENIMIENTO Y AJUSTES

Esta guía te ayudará a hacer cambios en el proyecto fácilmente.

## 📋 Índice Rápido

1. [Cambiar Colores](#cambiar-colores)
2. [Cambiar Textos](#cambiar-textos)
3. [Agregar Nuevos Campos](#agregar-nuevos-campos)
4. [Personalizar Iconos](#personalizar-iconos)
5. [Cambiar Tipografía](#cambiar-tipografía)
6. [Hacer Debug](#hacer-debug)

---

## 🎨 Cambiar Colores

### Opción 1: Cambiar Colores Globales (Recomendado)

Abre `css/global.css` y busca:

```css
:root {
    --primary-color: #6366f1;      /* Azul índigo - Color principal */
    --secondary-color: #ec4899;    /* Rosa - Color secundario */
    --dark-color: #1f2937;         /* Gris oscuro */
    --light-color: #f9fafb;        /* Gris claro */
    --text-color: #374151;         /* Gris para texto */
    --border-color: #e5e7eb;       /* Gris para bordes */
    --error-color: #ef4444;        /* Rojo para errores */
    --success-color: #10b981;      /* Verde para éxito */
    --warning-color: #f59e0b;      /* Amarillo para advertencias */
}
```

Cambia los valores hexadecimales por los colores que desees. Por ejemplo:

```css
:root {
    --primary-color: #3b82f6;      /* Azul más brillante */
    --secondary-color: #8b5cf6;    /* Púrpura */
    --dark-color: #111827;         /* Negro más profundo */
    /* ... */
}
```

### Opción 2: Cambiar Colores Específicos

Busca la sección en `css/sections.css`:

```css
.widget:nth-child(2) {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
```

Cambia los códigos de color directamente.

---

## 📝 Cambiar Textos

### Textos Estáticos

Abre `index.html` y busca:

```html
<h1>¡Bienvenido!</h1>
<p>Ofrezco servicios profesionales de alta calidad</p>
```

Reemplaza con tus propios textos.

### Textos de Mensajes

Abre `js/config.js` y busca:

```javascript
MENSAJES: {
    EXITO: {
        SERVICIO_AGREGADO: '✓ Servicio agregado exitosamente',
        WIDGET_AGREGADO: '✓ Widget agregado exitosamente',
        // ...
    },
    ADVERTENCIA: {
        CAMPOS_INCOMPLETOS: '⚠ Por favor completa todos los campos',
        // ...
    }
}
```

Cambia los textos a tu gusto.

---

## ➕ Agregar Nuevos Campos

### Ejemplo: Agregar Campo "Precio" a Servicios

**Paso 1:** Abre `js/config.js` y actualiza DATOS_INICIALES:

```javascript
servicios: [
    {
        nombre: "Diseño Web",
        descripcion: "Creación de sitios web modernos y responsivos",
        icono: "palette",
        precio: "$500"  // ← NUEVO CAMPO
    },
    // ...
]
```

**Paso 2:** Abre `js/data.js` y actualiza `agregarServicio()`:

```javascript
const agregarServicio = (servicio) => {
    if (!servicio.nombre || !servicio.descripcion) {
        console.warn('Datos incompletos para servicio');
        return false;
    }
    datosActuales.servicios.push({
        nombre: servicio.nombre,
        descripcion: servicio.descripcion,
        icono: servicio.icono || 'star',
        precio: servicio.precio || '$0'  // ← NUEVO CAMPO
    });
    return guardar();
};
```

**Paso 3:** Abre `index.html` y agrega input en el formulario admin:

```html
<input type="text" id="servicio-precio" placeholder="Precio (ej: $500)">
```

**Paso 4:** Abre `js/admin.js` y actualiza `agregarServicio()`:

```javascript
const agregarServicio = () => {
    const nombre = document.getElementById('servicio-nombre').value.trim();
    const descripcion = document.getElementById('servicio-desc').value.trim();
    const icono = document.getElementById('servicio-icon').value.trim();
    const precio = document.getElementById('servicio-precio').value.trim(); // ← NUEVO

    if (!nombre || !descripcion) {
        alert(CONFIG.MENSAJES.ADVERTENCIA.CAMPOS_INCOMPLETOS);
        return;
    }

    if (DataManager.agregarServicio({ nombre, descripcion, icono, precio })) {
        Renderer.renderizarServicios();
        document.getElementById('servicio-precio').value = ''; // ← LIMPIAR
        alert(CONFIG.MENSAJES.EXITO.SERVICIO_AGREGADO);
    }
};
```

**Paso 5:** Abre `js/renderer.js` y actualiza `crearServicioCard()`:

```javascript
const crearServicioCard = (servicio, index) => {
    const card = document.createElement('div');
    card.className = CONFIG.CLASSES.SERVICIO_CARD;
    card.innerHTML = `
        <button class="${CONFIG.CLASSES.DELETE_BTN}" ...>×</button>
        <i class="fas fa-${servicio.icono}"></i>
        <h3>${escapeHtml(servicio.nombre)}</h3>
        <p>${escapeHtml(servicio.descripcion)}</p>
        <p style="color: var(--primary-color); font-weight: bold; margin-top: 0.5rem;">
            ${escapeHtml(servicio.precio)}
        </p>
    `;
    return card;
};
```

---

## 🎯 Personalizar Iconos

### Cambiar Icono de un Servicio por Defecto

Abre `js/config.js`:

```javascript
DATOS_INICIALES: {
    servicios: [
        {
            nombre: "Diseño Web",
            descripcion: "Creación de sitios web modernos y responsivos",
            icono: "palette"  // ← Cambia aquí
        },
    ]
}
```

### Disponibles para Servicios

Visita [Font Awesome](https://fontawesome.com/icons) y busca iconos válidos:
- `code`, `palette`, `rocket`, `star`, `lightbulb`, `phone`, `envelope`, `chart`, `settings`, etc.

### Disponibles para Redes Sociales

- `facebook`, `twitter`, `linkedin`, `github`, `instagram`, `youtube`, `pinterest`, `whatsapp`, `telegram`, `discord`

---

## 🔤 Cambiar Tipografía

Abre `css/global.css` y busca:

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

Cambia a tu fuente preferida. Opciones populares:
- `'Helvetica', Arial, sans-serif` - Clásica
- `'Trebuchet MS', sans-serif` - Moderna
- `'Courier New', monospace` - Monoespaciada
- `'Georgia', serif` - Con serifa

O importa Google Fonts en `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

Luego en `css/global.css`:

```css
body {
    font-family: 'Poppins', sans-serif;
}
```

---

## 🐛 Hacer Debug

### Ver Datos Guardados

Abre la consola del navegador (F12) y ejecuta:

```javascript
// Ver todos los datos
console.log(App.obtenerEstado());

// Ver servicios
console.log(DataManager.obtenerServicios());

// Ver widgets
console.log(DataManager.obtenerWidgets());

// Ver enlaces
console.log(DataManager.obtenerEnlaces());
```

### Reiniciar a Datos Iniciales

En la consola:

```javascript
App.reiniciar();
```

### Ver localStorage

En la consola:

```javascript
console.log(JSON.parse(localStorage.getItem('datosPortafolio')));
```

### Limpiar Todo

En la consola:

```javascript
localStorage.removeItem('datosPortafolio');
location.reload();
```

---

## 📏 Cambiar Espaciado

Abre `css/global.css` y busca:

```css
:root {
    /* Espaciados */
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
}
```

Ajusta los valores según necesites. Luego úsalos en CSS:

```css
.elemento {
    padding: var(--spacing-lg);
    margin-bottom: var(--spacing-md);
}
```

---

## 🔲 Cambiar Border Radius (Redondeado)

Abre `css/global.css`:

```css
:root {
    /* Border radius */
    --radius-sm: 5px;      /* Poco redondeado */
    --radius-md: 10px;     /* Medio redondeado */
    --radius-lg: 15px;     /* Muy redondeado */
    --radius-full: 30px;   /* Completamente redondeado */
}
```

Aumenta los valores para más redondeado, disminuye para más cuadrado.

---

## ⏱️ Cambiar Transiciones

Abre `css/global.css`:

```css
:root {
    /* Transiciones */
    --transition-base: all 0.3s ease;
}
```

Puedes cambiar:
- `0.3s` → Duración (aumenta para más lento)
- `ease` → Tipo (`linear`, `ease-in`, `ease-out`, `ease-in-out`)

---

## 📱 Cambiar Breakpoints Responsivos

Busca en los archivos CSS:

```css
@media (max-width: 768px) {
    /* Cambios para tablets */
}

@media (max-width: 600px) {
    /* Cambios para móviles */
}
```

Cambia los valores para ajustar cuándo cambia el diseño:
- `768px` → Tablet
- `600px` → Móvil
- Puedes agregar más: `1200px` para muy grande, `480px` para muy pequeño

---

## 🆘 Problemas Comunes

### Los cambios no se ven
1. Limpia el caché: `Ctrl + Shift + Delete`
2. Recarga la página: `Ctrl + F5`
3. Abre DevTools (`F12`) → Enciende "Disable cache"

### Los datos desaparecieron
1. Abre la consola (`F12`)
2. Ejecuta: `App.reiniciar()`
3. Tus datos volverán a los valores iniciales

### El formulario no valida
1. Verifica en `js/admin.js` las validaciones
2. Revisa que los `id` del HTML coincidan con los del JavaScript
3. Abre la consola para ver errores

### Los iconos no aparecen
1. Verifica que Font Awesome esté cargado (`F12` → Network)
2. Usa nombres de iconos válidos (sin `fa-` al inicio)
3. Abre https://fontawesome.com/icons para ver disponibles

---

## 📚 Recursos Útiles

- [Font Awesome Icons](https://fontawesome.com/icons)
- [CSS Color Names](https://www.w3schools.com/colors/colors_names.asp)
- [CSS Gradients](https://cssgradient.io/)
- [Google Fonts](https://fonts.google.com/)
- [Responsive Design Patterns](https://responsivedesign.is/)

---

**¡Ahora estás listo para hacer cualquier ajuste!** 🚀
