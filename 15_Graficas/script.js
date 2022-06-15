/* var data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
      [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
      [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
    ]
  };
  
  var options = {
    seriesBarDistance: 15
  };
  
  var responsiveOptions = [
    ['screen and (min-width: 641px) and (max-width: 1024px)', {
      seriesBarDistance: 10,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value;
        }
      }
    }],
    ['screen and (max-width: 640px)', {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }
    }]
  ];
  
  new Chartist.Bar('.ct-chart', data, options, responsiveOptions); */


/*   Ejercicio
Pediremos las películas de Star Wars y pintaremos una gráfica de líneas en la que podamos ver cada una de las películas.
En el eje X el nombre de la película
En el eje Y año de publicación
API ENDPOINT --> https://swapi.dev/api/films/ */



let arrayOfTitles = [];
let arrayOfYears = [];
let arrayOfCharacters = [];

async function getFilm() {


  try {
    let response = await fetch(`https://swapi.dev/api/films/`);
    let data = await response.json()

    let filmData = data.results;
    // aquí me saca results (6 objetos)

    filmData.map(item => {
      arrayOfTitles.push(item.title) // aqui quiero que me añada cada item (valor de i si fuese bucle for al arrayOfTitles declarado)
    });
    //TODO OK HASTA AQUI

    //YA TENGO LOS NOMBRES DE LAS PELIS EN -> ArrayOfTitles. Aquí saco el año.
    let arrayOfDates = [];
    filmData.map(item => {
      arrayOfYears.push(item["release_date"].substr(0, 4))
    });
    //todo ok

  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
};

getFilm()

  .then(() => {

    const data = {
      labels: arrayOfTitles,
      series: [arrayOfYears]
    }
    
    const options = {
      seriesBarDistance: 15,
      yAxis: {
        allowDecimals: false,
    }}
      
      
   



    const responsiveOptions = [
      ['screen and (min-width: 641px) and (max-width: 1024px)', {
       
        seriesBarDistance: 10,
        
        axisX: {
          labelInterpolationFnc: function (value) {
            return value;
          }
        },
        
      }],
      
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    new Chartist.Line('.ct-chart', data, options, responsiveOptions);
  })

  .catch(error => console.log("hubo un error" + error));


// para que se muestren los datos enteros sin decimales:
