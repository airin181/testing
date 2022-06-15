/*Dado el siguiente array de objetos, pintar en el DOM tarjetas con los detalles de los siguientes libros. Tenéis que buscar URL reales de los libros en internet o descargarlas :cara_ligeramente_sonriente:.

Sólo se pueden usar los métodos vistos en clases para crear nodos en el DOM desde JS. pensadlo para hacerlo en grande. Es decir, necesitaréis un bucle para ello.*/


let libros = [
    {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "https://cdn.wallapop.com/images/10420/8l/o2/__/c10420p520124427/i1508893161.jpg?pictureSize=W640",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "https://kbimages1-a.akamaihd.net/a714aee7-95ef-4a67-941f-68b0e87c8272/353/569/90/False/hans-christian-andersen-12.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "images/the-divine-comedy.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    },
    {
      "author": "Unknown",
      "country": "Sumer and Akkadian Empire",
      "imageLink": "images/the-epic-of-gilgamesh.jpg",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "year": -1700
    },
    {
      "author": "Unknown",
      "country": "Achaemenid Empire",
      "imageLink": "images/the-book-of-job.jpg",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      "pages": 176,
      "title": "The Book Of Job",
      "year": -600
    }]
    

//titulo
let titulo = document.createElement("h1");
let tituloText = document.createTextNode("Mejores libros de la historia");

titulo.appendChild(tituloText);
document.body.appendChild(titulo);




// section
let section1 = document.createElement("section");
document.body.appendChild(section1);

/* let section2 = document.createElement("section");
document.body.appendChild(section2); */



//libros
function myFunction (){
    for (let i = 0; i < libros.length; i++) {

        let article = document.createElement("article");
        section1.appendChild(article);



            let h3 = document.createElement("h3");
            let text1 = document.createTextNode(libros[i].author);
            h3.appendChild(text1);
            article.appendChild(h3);

            let p1 = document.createElement("p");
            let text2 = document.createTextNode(libros[i].country);
            p1.appendChild(text2);
            article.appendChild(p1);

            let p2 = document.createElement("p");
            let text3 = document.createTextNode(libros[i].language);
            p2.appendChild(text3);
            article.appendChild(p2);

            let image = document.createElement("img");
            let atributo = image.setAttribute("src");
            image.createElement(atributo = /* libros[i].imageLink */);
            article.appendChild(image);
            
    }
}
myFunction();


/* // Create a class attribute:

const att = document.createAttribute("class",`divine${i}`);

// Set the value of the class attribute:
att.value = "democlass";

// Add the class attribute to the first h1:
const h1 = document.getElementsByTagName("H1")[0];
h1.setAttributeNode(att);  */