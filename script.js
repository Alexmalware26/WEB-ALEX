// Datos iniciales
let datosPortafolio = {
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
            url: "https://linkedin.com",
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
};

// Cargar datos del localStorage
function cargarDatos() {
    const datosGuardados = localStorage.getItem('datosPortafolio');
    if (datosGuardados) {
        datosPortafolio = JSON.parse(datosGuardados);
    }
    renderizarTodo();
}

// Guardar datos en localStorage
function guardarDatos() {
    localStorage.setItem('datosPortafolio', JSON.stringify(datosPortafolio));
}

// Renderizar todos los contenidos
function renderizarTodo() {
    renderizarServicios();
    renderizarWidgets();
    renderizarEnlaces();
}

// Renderizar servicios
function renderizarServicios() {
    const grid = document.getElementById('servicios-grid');
    grid.innerHTML = '';

    datosPortafolio.servicios.forEach((servicio, index) => {
        const card = document.createElement('div');
        card.className = 'servicio-card';
        card.innerHTML = `
            <button class="delete-btn" onclick="eliminarServicio(${index})" title="Eliminar">×</button>
            <i class="fas fa-${servicio.icono}"></i>
            <h3>${servicio.nombre}</h3>
            <p>${servicio.descripcion}</p>
        `;
        grid.appendChild(card);
    });
}

// Renderizar widgets
function renderizarWidgets() {
    const container = document.getElementById('widgets-container');
    container.innerHTML = '';

    datosPortafolio.widgets.forEach((widget, index) => {
        const widgetEl = document.createElement('div');
        widgetEl.className = 'widget';
        widgetEl.innerHTML = `
            <button class="delete-btn" onclick="eliminarWidget(${index})" title="Eliminar" style="background: rgba(255,255,255,0.3);">×</button>
            <h3>${widget.titulo}</h3>
            <p>${widget.contenido}</p>
        `;
        container.appendChild(widgetEl);
    });
}

// Renderizar enlaces
function renderizarEnlaces() {
    const grid = document.getElementById('enlaces-grid');
    grid.innerHTML = '';

    datosPortafolio.enlaces.forEach((enlace, index) => {
        const card = document.createElement('div');
        card.className = 'enlace-card';
        card.innerHTML = `
            <button class="delete-btn" onclick="eliminarEnlace(${index})" title="Eliminar">×</button>
            <a href="${enlace.url}" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-${enlace.icono}"></i>
                <h3>${enlace.titulo}</h3>
            </a>
        `;
        grid.appendChild(card);
    });
}

// Agregar servicio
function agregarServicio() {
    const nombre = document.getElementById('servicio-nombre').value;
    const descripcion = document.getElementById('servicio-desc').value;
    const icono = document.getElementById('servicio-icon').value || 'star';

    if (nombre && descripcion) {
        datosPortafolio.servicios.push({
            nombre: nombre,
            descripcion: descripcion,
            icono: icono
        });

        guardarDatos();
        renderizarServicios();

        // Limpiar inputs
        document.getElementById('servicio-nombre').value = '';
        document.getElementById('servicio-desc').value = '';
        document.getElementById('servicio-icon').value = '';

        alert('✓ Servicio agregado exitosamente');
    } else {
        alert('⚠ Por favor completa todos los campos');
    }
}

// Agregar widget
function agregarWidget() {
    const titulo = document.getElementById('widget-titulo').value;
    const contenido = document.getElementById('widget-contenido').value;

    if (titulo && contenido) {
        datosPortafolio.widgets.push({
            titulo: titulo,
            contenido: contenido
        });

        guardarDatos();
        renderizarWidgets();

        // Limpiar inputs
        document.getElementById('widget-titulo').value = '';
        document.getElementById('widget-contenido').value = '';

        alert('✓ Widget agregado exitosamente');
    } else {
        alert('⚠ Por favor completa todos los campos');
    }
}

// Agregar enlace
function agregarEnlace() {
    const titulo = document.getElementById('enlace-titulo').value;
    const url = document.getElementById('enlace-url').value;
    const icono = document.getElementById('enlace-icon').value || 'link';

    if (titulo && url) {
        datosPortafolio.enlaces.push({
            titulo: titulo,
            url: url,
            icono: icono
        });

        guardarDatos();
        renderizarEnlaces();

        // Limpiar inputs
        document.getElementById('enlace-titulo').value = '';
        document.getElementById('enlace-url').value = '';
        document.getElementById('enlace-icon').value = '';

        alert('✓ Enlace agregado exitosamente');
    } else {
        alert('⚠ Por favor completa todos los campos');
    }
}

// Eliminar servicio
function eliminarServicio(index) {
    if (confirm('¿Estás seguro de que deseas eliminar este servicio?')) {
        datosPortafolio.servicios.splice(index, 1);
        guardarDatos();
        renderizarServicios();
    }
}

// Eliminar widget
function eliminarWidget(index) {
    if (confirm('¿Estás seguro de que deseas eliminar este widget?')) {
        datosPortafolio.widgets.splice(index, 1);
        guardarDatos();
        renderizarWidgets();
    }
}

// Eliminar enlace
function eliminarEnlace(index) {
    if (confirm('¿Estás seguro de que deseas eliminar este enlace?')) {
        datosPortafolio.enlaces.splice(index, 1);
        guardarDatos();
        renderizarEnlaces();
    }
}

// Exportar datos
function exportarDatos() {
    const dataStr = JSON.stringify(datosPortafolio, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'portafolio-datos.json';
    link.click();
    alert('✓ Datos exportados correctamente');
}

// Limpiar todos los datos
function limpiarDatos() {
    if (confirm('⚠ ¿Estás SEGURO? Esto eliminará TODOS los datos. Esta acción no se puede deshacer.')) {
        localStorage.removeItem('datosPortafolio');
        datosPortafolio = {
            servicios: [],
            widgets: [],
            enlaces: []
        };
        renderizarTodo();
        alert('✓ Todos los datos han sido eliminados');
    }
}

// Toggle del panel administrativo
function toggleAdmin() {
    const adminContent = document.getElementById('admin-content');
    adminContent.classList.toggle('active');
}

// Cerrar panel administrativo al hacer clic fuera
document.addEventListener('click', function (event) {
    const adminPanel = document.getElementById('admin-panel');
    if (!adminPanel.contains(event.target)) {
        document.getElementById('admin-content').classList.remove('active');
    }
});

// Manejar el formulario de contacto
document.getElementById('contacto-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('✓ Mensaje enviado correctamente. Gracias por contactarme!');
    this.reset();
});

// Menú hamburguesa para móvil
document.querySelector('.hamburger').addEventListener('click', function () {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('.nav-menu').style.display = 'none';
    });
});

// Cargar datos al iniciar la página
document.addEventListener('DOMContentLoaded', cargarDatos);
