/*console.log(document); //documento
console.log(document.head); //head
console.log(document.body); //body

//getelementbyid

const itemAccordionHTMLCollection = document.getElementsByClassName("accordion-item");

const itemAccordionNodeList = document.querySelectorAll(".accordion-item");

console.log("itemAccordionHTMLCollection", itemAccordionHTMLCollection);
console.log("itemAccordionNodeList", itemAccordionNodeList);

console.log("HTMLCollection - item", itemAccordionHTMLCollection.item(1));
itemAccordionNodeList.item(1).style.backgroundColor = "red";

// objeto.propiedad = nuevovalor;

console.log("NodeList - item", itemAccordionNodeList.item(1).style);

//seleccionar nodo

const accordionbodiesHTMLCollection = document.getElementsByClassName("accordion-body")

console.log("accordionbodiesHTMLCollection", accordionbodiesHTMLCollection);


const accordionNode = document.querySelector(".accordion");
console.log(accordionNode)
console.log("accordionNode", accordionNode)


//saber si el nodo que seleccione tiene hijos

if (accordionNode.children.length > 0) {
    console.log("si es un nodo padre");
}

//obtener el primer hijo del nodo que seleccione
accordionNode.firstElementChild

//ultimo hijo
accordionNode.lastElementChild

//conocer si el last element child

accordionNode.lastElementChild.children.length

//si el nextsibling del hijo 4 del nodo que seleccione

if (accordionNode.children.length >=4 ) {
    console.log("4 hijo", accordionNode.children[3].nextSibling);
} else {
    console.log("el nodo no tiene tantos hijos");
}

const nuevoArregloFromHTMLCollecion = Array.from(itemAccordionHTMLCollection);
const nueArregloFromNodeList = Array.from(itemAccordionNodeList);

console.log("itemAccordionHTMLCollection", itemAccordionHTMLCollection);
console.log("itemAccordionNodeList", itemAccordionNodeList);

/*for (let i = 0; i < accordionbodiesHTMLCollection.length; i++) {
    accordionbodiesHTMLCollection[i].classList.add("claseJS");
}

console.log("accordionbodiesHTMLCollection", accordionbodiesHTMLCollection)*/

//getelementbyclssname

//getelementsbytagname

// queryselector
// queryselectorall

function construyePerfil(datos) {
    const profile = document.createElement("h1");
    profile.textContent = `Bienvenido: ${datos.nombre}`;
    document.getElementById("perfilUsuario").appendChild(profile);
}


function login(user,pass,bd) {
    //bd.filter((valor, posicion, array) => ({}));
    const busqueda = bd.filter((valor) => valor.usuario === user && valor.contrasena === pass); //regresa arreglo y map tambien
    return busqueda //regresar datos de una ejecicion
}


function hola() {
    alert("hola mundo");
}

const elemento = document.getElementById("accion") //obtengo nodo

//document.getElementById("accion").addEventListener("click", hola); //click es el evento y hola es la definicion de la funcion

elemento.addEventListener("click", (event) => {
    const datos = document.getElementsByTagName("input"); //html
    const usuario = datos[0]; //input usuario, nodo
    const contrasena = datos[1]; //input contraseña
    console.log("usuario", usuario.value)
    console.log("usuario", contrasena.value)
    if (usuario.value === "" || contrasena.value === "") {
        alert("proporciona los datos")
    } else {
        //alert("datos obtenidos")
        const loginUsuario = login(usuario.value, contrasena.value, BD);
        console.log("Usuario logueado", loginUsuario);
        if (loginUsuario.length > 0) {
            alert("usuario logueado");
            construyePerfil(loginUsuario[0])
        } else {
            alert("usuario no encontrado")
        }
    }
 });