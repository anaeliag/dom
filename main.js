console.log(document); //documento
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



