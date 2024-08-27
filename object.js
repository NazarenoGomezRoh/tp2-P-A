const libro = {
    titulo: "El camino de reyes",
    autor: "Brandon Sanderson",
    _publicacion: 2010,  

    get publicacion() {
        return this._publicacion;
    },
    set publicacion(nuevoValor) {
        if (typeof nuevoValor === 'number' && nuevoValor > 0) {
            this._publicacion = nuevoValor;
        } else {
            console.log("Por favor, introduce un año válido.");
        }
    }
};

libro.publicacion = 1982;

console.log(libro.publicacion);

const direccion = {
    calle: 'Posadas',
    ciudad: 'Concepcion del Uruguay',
    pais: 'Argentina'
};

const alumno = {
    nombre: 'Mauro',
    edad: 19,
    direccion: 'Concepcion del Uruguay'
};

const mostrarDescripcion = (libro) => {
    console.log(`Mostrando datos del libro: Título: ${libro.titulo}, Autor: ${libro.autor}, Año de Publicación: ${libro.publicacion}`);
};

// mostrarDescripcion(libro);

const item = {
    nombre: 'Lapiz',
    precio: '250',
    disponible: true
};

item.precio = 120400;

const verificarPropiedad = (objeto, propiedad) => {
    return propiedad in objeto;
};

// console.log(verificarPropiedad(item, 'precio'));

delete item.disponible;

// for (let key in item) {
//     console.log(`${key}: ${item[key]}`);
// }

const personaA = {
    nombre: 'Kevin',
    edad: 20,
    codigoPostal: 3260
};

const personaB = {
    nombre: 'Agustin',
    edad: 21,
    profesion: 'Administración de Empresas'
};

const combinacion = Object.assign(personaA, personaB);

// console.log(combinacion);

const copiaAlumno = JSON.parse(JSON.stringify(alumno));

copiaAlumno.nombre = 'Hugo';
copiaAlumno.edad = 40;
copiaAlumno.direccion = 'Concepcion del Uruguay';

// for (let key in alumno) {
//     console.log(`${key}: ${alumno[key]}`);
// }

// for (let key in copiaAlumno) {
//     console.log(`${key}: ${copiaAlumno[key]}`);
// }
