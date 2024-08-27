const sumar = (a, b) => a + b;
// console.log(sumar(30, 4));

const multiplicar = (a, b) => a * b;
// console.log(multiplicar(3, 4));

function saludar(nombre = "Invitado") {
    return `Hola, ${nombre}`;
}
// console.log(saludar("Carlos"));
// console.log(saludar());

const crearPersona = (nombre, edad) => ({ nombre, edad });
const persona = crearPersona('Carlos', 20);
// console.log(persona);

function actualizarEdad(obj, nuevaEdad) {
    obj.edad = nuevaEdad;
}
actualizarEdad(persona, 26);
// console.log(persona);

function calcularFactorial(num) {
    return num <= 1 ? 1 : num * calcularFactorial(num - 1);
}
// console.log(calcularFactorial(5));

function despedir() {
    const adios = () => "adios";
    return adios();
}
// console.log(despedir());

function procesarArray(arr, fn) {
    return arr.map(fn);
}

function multiplicarPorDos(num) {
    return num * 2;
}
const numeros = [1, 2, 3, 4, 5];
const resultado = procesarArray(numeros, multiplicarPorDos);
// console.log(resultado);

function crearMultiplicador(factor) {
    return (num) => num * factor;
}
const por3 = crearMultiplicador(3);
const por5 = crearMultiplicador(5);
// console.log(por3(4));
// console.log(por5(6));

const sumarAnonimo = function(x, y) {
    return x + y;
};
const resultado1 = sumarAnonimo(3, 7);
// console.log(resultado1);

function obtenerUsuarios() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            if (!res.ok) throw new Error('Error en la petición');
            return res.json();
        })
        .catch(err => console.error('Error:', err));
}

function imprimirNombresDeUsuarios() {
    obtenerUsuarios()
        .then(users => {
            if (users) {
                const nombres = users.map(user => user.name);
                console.log(nombres);
            }
        })
        .catch(err => console.error('Error al procesar los usuarios:', err));
}

// imprimirNombresDeUsuarios();

const credencialesPredeterminadas = { usuario: "admin", contraseña: "1234" };

function autenticarUsuario(creds) {
    return (
        creds.usuario === credencialesPredeterminadas.usuario &&
        creds.contraseña === credencialesPredeterminadas.contraseña
    );
}

const credencialesCorrectas = { usuario: "admin", contraseña: "1234" };
const credencialesIncorrectas = { usuario: "user", contraseña: "password" };
// console.log(autenticarUsuario(credencialesCorrectas)); 
// console.log(autenticarUsuario(credencialesIncorrectas)); 

function mapearUsuarios(users) {
    return users.map(({ name, email }) => ({ nombre: name, email }));
}

const usuarios = [
    { name: "Carlos", email: "carlos@example.com", phone: "1234567890" },
    { name: "Ana", email: "ana@example.com", phone: "0987654321" },
    { name: "Luis", email: "luis@example.com", phone: "1122334455" }
];

const usuariosMapeados = mapearUsuarios(usuarios);
// console.log(usuariosMapeados);

function validarFormulario({ nombre, email, password }) {
    return nombre.trim() && email.trim() && password.trim() ? true : false;
}

const formularioValido = { nombre: "Carlos", email: "carlos@example.com", password: "secreta" };
const formularioInvalido = { nombre: "", email: "ana@example.com", password: "1234" };
// console.log(validarFormulario(formularioValido));  
// console.log(validarFormulario(formularioInvalido)); 

function obtenerPagina(datos, pagina) {
    const elementosPorPagina = 5;
    const inicio = (pagina - 1) * elementosPorPagina;
    return datos.slice(inicio, inicio + elementosPorPagina);
}

const datos = [
    "Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4", "Elemento 5",
    "Elemento 6", "Elemento 7", "Elemento 8", "Elemento 9", "Elemento 10",
    "Elemento 11", "Elemento 12", "Elemento 13", "Elemento 14", "Elemento 15"
];

// console.log(obtenerPagina(datos, 1)); 
// console.log(obtenerPagina(datos, 2)); 
// console.log(obtenerPagina(datos, 3)); 
// console.log(obtenerPagina(datos, 4)); 

function enviarDatos(data) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(res => {
        if (!res.ok) throw new Error('Error en la petición');
        return res.json();
    })
    .then(dataRes => console.log(dataRes))
    .catch(err => console.error('Error:', err));
}

const datos1 = { title: 'foo', body: 'bar', userId: 1 };
// enviarDatos(datos1);

function buscarUsuarioPorEmail(users, email) {
    return users.find(user => user.email === email);
}

const usuarios1 = [
    { nombre: "Carlos", email: "carlos@example.com", edad: 30 },
    { nombre: "Ana", email: "ana@example.com", edad: 25 },
    { nombre: "Luis", email: "luis@example.com", edad: 28 }
];

const emailABuscar = "ana@example.com";
const usuarioEncontrado = buscarUsuarioPorEmail(usuarios1, emailABuscar);
// console.log(usuarioEncontrado);

function generarToken(user) {
    const header = { alg: "HS256", typ: "JWT" };
    const encodedHeader = btoa(JSON.stringify(header));
    const encodedPayload = btoa(JSON.stringify(user));

    return `${encodedHeader}.${encodedPayload}`;
}

const usuario = { id: 1, nombre: "Carlos", email: "carlos@example.com" };
const token = generarToken(usuario);
// console.log(token);

function actualizarUsuario(user, cambios) {
    return { ...user, ...cambios };
}

const usuario2 = { nombre: "Carlos", email: "carlos@example.com", edad: 30 };
const cambios = { email: "carlos.nuevo@example.com", edad: 31 };

const usuarioActualizado = actualizarUsuario(usuario2, cambios);
console.log(usuarioActualizado);
