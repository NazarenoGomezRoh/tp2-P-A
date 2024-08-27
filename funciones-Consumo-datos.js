// 1. Consumo de Datos desde una API
async function obtenerUsuarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await response.json();
        console.log(usuarios);
        return usuarios;
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
    }
}

// 2. Procesamiento de Datos de una API
async function imprimirNombresDeUsuarios() {
    const usuarios = await obtenerUsuarios();
    const nombres = usuarios.map(usuario => usuario.name);
    console.log(nombres);
}

// 3. Autenticación Simulada
const usuarioPredefinido = {
    usuario: "admin",
    contraseña: "1234"
};

function autenticarUsuario(credenciales) {
    return credenciales.usuario === usuarioPredefinido.usuario &&
           credenciales.contraseña === usuarioPredefinido.contraseña;
}

// 4. Transformación de Datos
async function mapearUsuarios() {
    const usuarios = await obtenerUsuarios();
    const usuariosMapeados = usuarios.map(usuario => ({
        nombre: usuario.name,
        email: usuario.email
    }));
    console.log(usuariosMapeados);
    return usuariosMapeados;
}

// 5. Validación de Formularios
function validarFormulario(campo) {
    return campo.nombre?.trim() && campo.email?.trim() && campo.password?.trim() 
        ? true 
        : false;
}

// 6. Paginación de Datos
function obtenerPagina(datos, pagina) {
    const elementosPorPagina = 5;
    const inicio = (pagina - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;
    return datos.slice(inicio, fin);
}

// 7. Envío de Datos a una API
async function enviarDatos(data) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const responseData = await response.json();
        console.log(responseData);
    } catch (error) {
        console.error('Error al enviar los datos:', error);
    }
}

// 8. Búsqueda de Usuarios
function buscarUsuarioPorEmail(usuarios, email) {
    return usuarios.find(usuario => usuario.email === email);
}

// 9. Generación de Token de Autenticación
function generarToken(usuario) {
    const header = { alg: "HS256", typ: "JWT" };
    const payload = usuario;
    
    const encodedHeader = btoa(JSON.stringify(header));
    const encodedPayload = btoa(JSON.stringify(payload));

    return `${encodedHeader}.${encodedPayload}`;
}

// 10. Actualización de Información del Usuario
function actualizarUsuario(usuario, cambios) {
    return { ...usuario, ...cambios };
}
