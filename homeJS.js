
const buton = document.getElementById("crear");
const buscadorBoton = document.getElementById("botonCreacion")
let datosNombre = document.getElementById("name");
let datosEdad = document.getElementById("edad");
let perfilesCreados = document.createElement("p");
let cartel = document.createElement("div");
let añoInicio = 2023;
let compilado = [];
let amplitud = 0;
let guardarPerfil;
let nuevoPerfil;
let nuevoPerfil2;
let filtrados;
let buscadorDeNombre = document.getElementById("buscador");
let cartelClick = document.getElementById("cartelitoA");
let cartelClickb = document.getElementById("cartelitoB");

//

class DatosBase {
    constructor(nombre, edad,) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
function buscaMayores(){
    filtrados = compilado.filter((item) => item.edad <= 18);
    console.log = (filtrados);
}

function crearPerfil(){ 
    compilado.push(new DatosBase(datosNombre, datosEdad));
    perfilesCreados.innerHTML =`<h1> Ultimo perfil creado</h1><br><h2>NOMBRE: ${compilado[amplitud].nombre} EDAD:${(compilado[amplitud].edad - 1)}</h2>`;
    document.body.append(perfilesCreados);
}


function tarea(){
    for (let i = 1; i <= 40; i++) {
        let resultado = datosEdad++;
        let añoDespues = añoInicio++;
        alert(`usted tendrá ${resultado} en el ${añoDespues}`);
        let preguntaDos = prompt("escriba`siga` o `basta`");
         if(preguntaDos == ("basta")){
            alert(`usted tendrá ${datosEdad-1} años, en el año ${añoDespues}`);
            crearPerfil(datosNombre, resultado); 
           // localStorage.setItem("nombre", datosNombre);
           // localStorage.setItem("edad", datosEdad);
            break;
         }
      }
}

function seleccion(){
    datosNombre = document.getElementById("name").value;
    console.log(datosNombre);
    datosEdad = document.getElementById("edad").value;
    console.log(datosEdad);
    tarea(datosNombre, datosEdad);
}

//interacciones con la pagina

buton.onclick = () => {(seleccion(), amplitud++), añoInicio = 2023};

buscadorBoton.onclick = () =>{
    let buscaNombre = compilado.filter((el) => el.nombre.includes(buscadorDeNombre.value));
    console.log(buscaNombre);
}


//------------------------------------------------------

