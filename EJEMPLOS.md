# 💡 EJEMPLOS DE CÓDIGO FRECUENTES

Aquí encontrarás fragmentos de código comunes para hacer ajustes sin tener que buscar.

## 📝 Índice Rápido

1. [Cambiar Textos Estáticos](#cambiar-textos-estáticos)
2. [Cambiar Colores](#cambiar-colores)
3. [Agregar Campos Nuevos](#agregar-campos-nuevos)
4. [Modificar Validaciones](#modificar-validaciones)
5. [Agregar Métodos a Módulos](#agregar-métodos-a-módulos)
6. [Agregar Nuevos Iconos](#agregar-nuevos-iconos)
7. [Personalizar Mensajes](#personalizar-mensajes)

---

## 1️⃣ Cambiar Textos Estáticos

### Cambiar título del navegador
**Archivo:** `index.html` (línea ~6)

```html
<!-- ANTES -->
<title>Mi Portafolio Profesional</title>

<!-- DESPUÉS -->
<title>Mi Nombre - Desarrollador Web</title>
```

### Cambiar logo del navbar
**Archivo:** `index.html` (línea ~15)

```html
<!-- ANTES -->
<div class="nav-logo">Mi Portafolio</div>

<!-- DESPUÉS -->
<div class="nav-logo">ALEX DEV</div>
```

### Cambiar texto hero
**Archivo:** `index.html` (línea ~50)

```html
<!-- ANTES -->
<h1>¡Bienvenido!</h1>
<p>Ofrezco servicios profesionales de alta calidad</p>

<!-- DESPUÉS -->
<h1>Hola, soy Alex</h1>
<p>Desarrollo web full-stack | Diseño moderno | Soluciones escalables</p>
```

### Cambiar títulos de secciones
**Archivo:** `index.html` (línea ~64, 83, 95, 108)

```html
<!-- ANTES -->
<h2>Mis Servicios</h2>

<!-- DESPUÉS -->
<h2>Qué Ofrezco</h2>
```

### Cambiar footer
**Archivo:** `index.html` (línea ~117)

```html
<!-- ANTES -->
<p>&copy; 2026 Mi Portafolio Profesional. Todos los derechos reservados.</p>

<!-- DESPUÉS -->
<p>&copy; 2026 Alex Dev. Todos los derechos reservados. | contacto@alexdev.com</p>
```

---

## 2️⃣ Cambiar Colores

### Cambiar colores globales
**Archivo:** `css/global.css` (línea ~12-21)

```css
:root {
    --primary-color: #6366f1;      /* Cambiar color primario */
    --secondary-color: #ec4899;    /* Cambiar color secundario */
    --dark-color: #1f2937;         /* Cambiar color oscuro */
    --light-color: #f9fafb;        /* Cambiar color claro */
    --text-color: #374151;         /* Cambiar color de texto */
}
```

**Colores recomendados:**

```css
/* Tema Azul Profesional */
--primary-color: #0066cc;
--secondary-color: #0099ff;

/* Tema Púrpura Moderno */
--primary-color: #7c3aed;
--secondary-color: #d946ef;

/* Tema Verde Ecológico */
--primary-color: #10b981;
--secondary-color: #059669;

/* Tema Rojo Dinámico */
--primary-color: #dc2626;
--secondary-color: #991b1b;

/* Tema Naranja Cálido */
--primary-color: #f97316;
--secondary-color: #ea580c;
```

### Cambiar color de botones específicos
**Archivo:** `css/global.css` (línea ~51)

```css
.btn-primary {
    background-color: white;
    color: var(--primary-color);
}

.btn-primary:hover {
    background-color: var(--primary-color);  /* Cambiar este */
    color: white;
}
```

### Cambiar colores de widgets
**Archivo:** `css/sections.css` (línea ~110)

```css
.widget {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.widget:nth-child(2) {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.widget:nth-child(3) {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}
```

---

## 3️⃣ Agregar Campos Nuevos

### Ejemplo Completo: Agregar campo "Teléfono" a Servicios

**Paso 1:** Actualizar datos iniciales
**Archivo:** `js/config.js` (línea ~36)

```javascript
servicios: [
    {
        nombre: "Diseño Web",
        descripcion: "Creación de sitios web modernos y responsivos",
        icono: "palette",
        telefono: "+34 123 456 789"  // ← NUEVO
    },
]
```

**Paso 2:** Actualizar método agregarServicio
**Archivo:** `js/data.js` (línea ~44)

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
        telefono: servicio.telefono || ''  // ← NUEVO
    });
    return guardar();
};
```

**Paso 3:** Agregar input en HTML
**Archivo:** `index.html` (línea ~126)

```html
<div class="admin-section">
    <h4>Agregar Servicio</h4>
    <input type="text" id="servicio-nombre" placeholder="Nombre del servicio">
    <textarea id="servicio-desc" placeholder="Descripción" rows="3"></textarea>
    <input type="text" id="servicio-icon" placeholder="Icono (ej: star)">
    <input type="tel" id="servicio-telefono" placeholder="Teléfono">  <!-- ← NUEVO -->
    <button onclick="AdminPanel.agregarServicio()">Añadir</button>
</div>
```

**Paso 4:** Actualizar AdminPanel
**Archivo:** `js/admin.js` (línea ~15)

```javascript
const agregarServicio = () => {
    const nombre = document.getElementById('servicio-nombre').value.trim();
    const descripcion = document.getElementById('servicio-desc').value.trim();
    const icono = document.getElementById('servicio-icon').value.trim();
    const telefono = document.getElementById('servicio-telefono').value.trim();  // ← NUEVO

    if (!nombre || !descripcion) {
        alert(CONFIG.MENSAJES.ADVERTENCIA.CAMPOS_INCOMPLETOS);
        return;
    }

    if (DataManager.agregarServicio({ nombre, descripcion, icono, telefono })) {
        Renderer.renderizarServicios();
        document.getElementById('servicio-telefono').value = '';  // ← LIMPIAR
        alert(CONFIG.MENSAJES.EXITO.SERVICIO_AGREGADO);
    }
};
```

**Paso 5:** Actualizar Renderer
**Archivo:** `js/renderer.js` (línea ~35)

```javascript
const crearServicioCard = (servicio, index) => {
    const card = document.createElement('div');
    card.className = CONFIG.CLASSES.SERVICIO_CARD;
    card.innerHTML = `
        <button class="${CONFIG.CLASSES.DELETE_BTN}" ...>×</button>
        <i class="fas fa-${servicio.icono}"></i>
        <h3>${escapeHtml(servicio.nombre)}</h3>
        <p>${escapeHtml(servicio.descripcion)}</p>
        <p style="color: var(--text-color); font-size: 0.9rem; margin-top: 0.5rem;">
            📞 ${escapeHtml(servicio.telefono)}
        </p>
    `;
    return card;
};
```

---

## 4️⃣ Modificar Validaciones

### Agregar validación de email
**Archivo:** `js/ui.js` (línea ~80)

```javascript
const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

// Uso en validaciones
if (!UIManager.validarEmail(email)) {
    alert('⚠ Email inválido');
    return;
}
```

### Agregar validación de número
**Archivo:** `js/admin.js`

```javascript
const esNumero = (valor) => {
    return !isNaN(parseFloat(valor)) && isFinite(valor);
};

// Uso
const agregarServicio = () => {
    const precio = document.getElementById('servicio-precio').value.trim();
    
    if (!esNumero(precio) || parseFloat(precio) < 0) {
        alert('⚠ El precio debe ser un número positivo');
        return;
    }
    // ... resto del código
};
```

### Agregar validación de longitud
**Archivo:** `js/admin.js`

```javascript
const agregarServicio = () => {
    const nombre = document.getElementById('servicio-nombre').value.trim();
    
    if (nombre.length < 3) {
        alert('⚠ El nombre debe tener al menos 3 caracteres');
        return;
    }
    
    if (nombre.length > 50) {
        alert('⚠ El nombre no puede exceder 50 caracteres');
        return;
    }
    // ... resto del código
};
```

---

## 5️⃣ Agregar Métodos a Módulos

### Agregar método a DataManager
**Archivo:** `js/data.js`

```javascript
const DataManager = (() => {
    // ... código existente ...

    /**
     * Obtiene el número total de servicios
     * @returns {number}
     */
    const contarServicios = () => {
        return datosActuales.servicios.length;
    };

    /**
     * Busca servicios por nombre
     * @param {string} termino
     * @returns {Array}
     */
    const buscarServicios = (termino) => {
        return datosActuales.servicios.filter(s =>
            s.nombre.toLowerCase().includes(termino.toLowerCase())
        );
    };

    return {
        // ... métodos existentes ...
        contarServicios,      // ← NUEVO
        buscarServicios       // ← NUEVO
    };
})();
```

### Agregar método a AdminPanel
**Archivo:** `js/admin.js`

```javascript
const AdminPanel = (() => {
    // ... código existente ...

    /**
     * Edita un servicio existente
     * @param {number} index
     * @param {Object} datos
     */
    const editarServicio = (index, datos) => {
        if (DataManager.actualizarServicio(index, datos)) {
            Renderer.renderizarServicios();
            alert('✓ Servicio actualizado exitosamente');
        }
    };

    return {
        // ... métodos existentes ...
        editarServicio  // ← NUEVO
    };
})();
```

---

## 6️⃣ Agregar Nuevos Iconos

### Agregar iconos a la lista de disponibles
**Archivo:** `js/config.js` (línea ~12)

```javascript
ICONS: {
    SERVICIOS: [
        'star', 'code', 'lightbulb', 'palette', 'rocket', 'phone',
        'envelope', 'chart', 'settings', 'database', 'shield', 'users',
        'briefcase', 'award', 'book', 'camera', 'music', 'film',
        'video', 'microphone', 'headphones', 'gamepad',  // ← NUEVOS
        'heartbeat', 'brain', 'flask', 'flask-vial'      // ← NUEVOS
    ],
    REDES: [
        'facebook', 'twitter', 'linkedin', 'github', 'instagram',
        'youtube', 'pinterest', 'whatsapp', 'telegram', 'discord',
        'slack', 'skype', 'zoom', 'figma'                // ← NUEVOS
    ]
}
```

---

## 7️⃣ Personalizar Mensajes

### Cambiar mensajes de éxito
**Archivo:** `js/config.js` (línea ~44)

```javascript
MENSAJES: {
    EXITO: {
        SERVICIO_AGREGADO: '✨ ¡Servicio agregado correctamente!',
        WIDGET_AGREGADO: '🎉 ¡Widget creado exitosamente!',
        ENLACE_AGREGADO: '🔗 ¡Enlace agregado correctamente!',
        DATOS_EXPORTADOS: '📥 ¡Tus datos han sido descargados!',
        DATOS_ELIMINADOS: '🗑️ Todos los datos han sido borrados',
        MENSAJE_ENVIADO: '📧 ¡Mensaje recibido! Me contactaré pronto.'
    },
    ADVERTENCIA: {
        CAMPOS_INCOMPLETOS: '❌ Todos los campos son obligatorios',
        CONFIRMAR_ELIMINAR: '⚠️ ¿Realmente deseas eliminar esto?',
        CONFIRMAR_LIMPIAR: '🚨 ¡CUIDADO! Esto borrará TODO. ¿Confirmas?'
    }
}
```

### Agregar mensajes personalizados
**Archivo:** `js/config.js` (línea ~60)

```javascript
MENSAJES: {
    // ... mensajes existentes ...
    PERSONALIZADOS: {
        ERROR_EMAIL: '❌ Email inválido',
        ERROR_URL: '❌ URL no válida',
        ERROR_GUARDADO: '❌ Error al guardar',
        CONFIRMACION: '✓ ¿Estás seguro?'
    }
}
```

---

## 🎯 Checklist de Cambios Comunes

Cuando hagas cambios, usa este checklist:

- [ ] Actualizar `config.js` (constantes)
- [ ] Actualizar `data.js` (lógica de datos)
- [ ] Actualizar `index.html` (formularios, UI)
- [ ] Actualizar `admin.js` (recolectar datos)
- [ ] Actualizar `renderer.js` (mostrar datos)
- [ ] Actualizar `css/sections.css` o crear nuevo CSS
- [ ] Probar en navegador (F12 → Console)
- [ ] Exportar datos (backup)
- [ ] Documentar cambios

---

## 🔍 Encontrar Código Rápidamente

Use `Ctrl + F` en tu editor:

| Qué buscar | Dónde buscar | Qué encontrarás |
|-----------|-------------|-----------------|
| `DATOS_INICIALES` | config.js | Datos por defecto |
| `agregarServicio` | admin.js | Lógica de agregar |
| `crearServicioCard` | renderer.js | HTML de tarjeta |
| `--primary-color` | global.css | Color principal |
| `id="servicio-` | index.html | Inputs del formulario |
| `DataManager` | data.js | Métodos de datos |

---

**¡Con esta guía puedes hacer cualquier ajuste!** 🚀
