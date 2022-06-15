
console.log("Funciona");
/* alert("Funciona!"); */

const style = "background-color: fuchsia";

//ID --> para que me devuelva el elemento con ID "dos"
console.log(document.getElementById("dos").innerHTML);


// TagName
console.log(document.getElementsByTagName("p")[1].innerHTML);

const pLength=document.getElementsByTagName("p").length;

console.log("%c****Imprimir todos los parrafos****", style)

for (let i = 0; i < pLength; i++) {
    console.log(document.getElementsByTagName("p")[i].innerHTML)
    
}

// Class

// Por clase
console.log("%c****Por clase****", style);
console.log(document.getElementsByClassName("claseP")[1].innerHTML);
console.log("%c ****Imprimir todos los párrafos****", style);
const classLength = document.getElementsByClassName("claseP").length;
for (let i = 0; i < classLength; i++) {
    console.log(document.getElementsByClassName("claseP")[i].innerHTML);
}


//EVENT LISTENER
console.log("%c****Event Listener****", style);


document.getElementById("btn1").addEventListener("click", function(){
    document.getElementById("result").innerHTML = "Gracias por el bizcocho"
})

//Vete al documento y coge el elemento con ID btn1 y cuando hagas click me vas a hacer esta función que es: devolver "Gracias por el bizcocho" en el elemento dentro del HTML con ID result.

document.getElementById("btn2").addEventListener('click',function(){
    let lista = document.getElementById("result2");
    if(lista.innerHTML ==""){
        lista.innerHTML = `
        <ul>
            <li>Cerveza</li>
            <li>Vermut</li>
            <li>Pizza</li>
        </ul>`;
    }
    else{
        lista.innerHTML="";
    }
})




// CREAR ELEMENTOS EN EL DOM DESDE JS

let newLi = document.createElement("li");
let txt = document.createTextNode("This is new.");
newLi.className="item";
newLi.appendChild(txt);
//Crea esto: <li>This is new</li> En la 3ª linea el texto lo adjunta a LI

document.getElementById("lista").appendChild(newLi);



// Cambiar estilos
console.log(" %c****Cambiar estilos****" , style);
// Para cambiar los estilos del item
const cambiarEstilosItems = (event)=> {
    console.log(event.type);
    console.log(event.target);
    event.target.style = "color:red";
}
const resetEstilosItems = (event)=> {
    event.target.style = "none";
}
// devuelve todos los  elementos .item
let items = document.getElementsByClassName("item");
// document.querySelectorAll(".item");
// A todos los elemento DOM .item se le asocia un listener del evento "click", y se lanza una función de callback (NO anónima) con la tarea a realizar.

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("mouseout",resetEstilosItems);
    items[i].addEventListener("mouseover",cambiarEstilosItems);
}


// IMPORTANNNTEEE!! función anónima actúa como un callback y nada más. Es decir, va a realizar una tarea después del eventListener para que realice una acción pero no es la típica función para reutilizar, solo para actuar. PEERO, si se define la función-acción fuera del eventListener, hay que llamarla en el paréntesis después del eventListener ("click"). O sea, en vez de items[i].addEventListener("click", function())...  se pondría así: items[i].addEventListener("click", NOMBREDELAFUNCION). Esta sí sería reutilizable.



/* toggle (cambiador-conmutador)
Qué hace? --> Añade y quita la clase definida. EN VEZ DE quitarle el color con mouseOUT.*/ 


// Reemplazar
const parent = document.getElementById("lista"); // padre

let newLi2 = document.createElement("li");
let txt2 = document.createTextNode("Este es el reemplazado");
newLi2.appendChild(txt2); // nuevo elemento

let child = document.querySelectorAll("ul > li")[1]; // hijo a cambiar

parent.replaceChild(newLi2, child);





// VALIDACIÓN FORMULARIOS

//document.querySelector("#form_rock") // si usara el ID
document.querySelector("form[name='form_rock']").addEventListener('submit',function(event){

    // Dr strange
    event.preventDefault(); // Frena el envío de formulario
    console.log(event.target.fname.value);
    console.log(event.target.accept.checked);


    const fname = event.target.fname.value;
    const lname = event.target.lname.value;
    const email = event.target.email.value;
    const checked = event.target.accept.checked;
    
    if(!checked){
        //mensaje checks
        let section3 = document.createElement("section");
        section3.innerHTML = `<p> Tienes que hacer CHECK </p>`;
        document.body.appendChild(section3);

        //class estilo msg check
        section3.classList.add('mensajico-mal');

        // quiero ponerlo donde yo quiero PERO NO SÉ
        let checks = document.getElementsById("")
        document.body.insertBefore(section3, checks)
    }


    else if(fname.trim()!="" && lname.trim()!="" && email!="" && email.endsWith(".com")){

        // mensajico 
        
        let section1 = document.createElement("section");
        section1.innerHTML = `<p> Datos super correctisimos </p>`;
        document.body.appendChild(section1);

        section1.classList.add('mensajicos');
        
    

    }else{
        let section2 = document.createElement("section");
        section2.innerHTML = `<p> datos incorrectos </p>`;
        document.body.appendChild(section2);

        section2.classList.add("mensajico-mal")
    }

});



//Siempre que se toque un formulario HAY QUE USAR--> EVENT.TARGET


// validación de puntitos. 
// poner mensajitos en vez de alerts o con los checks

/* let section1 = document.createElement("section");
        section1.innerHTML = `<p> Datos super correctisimos </p>`;
        document.body.appendChild(section1); */




