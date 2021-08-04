// URL API
const API = "https://swapi.dev/api/people/";

//Obtener los resultados de la API
const getData = (api) => {
    return fetch(api)  
     .then((response)=> response.json())
     .then((json)=> {
        llenarDatos(json.results), paginacion(json);
       console.log(json.results, json.info);
     })
     .catch((error) =>{
         console.log("Error: ", error);
     })
};

// Dibujar caras de personajes
const llenarDatos = (data) => {
    let html = "";
    data.forEach((pj) => {
        html += '<div class="col mt-5">';
        html += '<div class="card" style="width: 10rem;">'
        html += '<div class="card-body">';
        html += `<h5 class="card-title">${pj.name}</h5>`;
        html += `<p class="card-text">Altura: ${pj.height}</p>`;
        html += `<p class="card-text">Peso: ${pj.mass}</p>`;
        html += `<p class="card-text">Año de nacimineto: ${pj.birth_year}</p>`;
        html += `<p class="card-text">Genero: ${pj.gender}</p>`;
        html += "</div>";
        html += "</div>";
        html += "</div>";
    });
    document.getElementById("datosPersonajes").innerHTML = html;
};

// Paginacion
const paginacion = (data) => {
    let prevDisabled = "";
    let nextDisabled = "";

    let html = `<li class="page-item ${
      data.previous == null ? (prevDisabled = "disabled") : (prevDisabled = "")
    }"><a class="page-link" onclick="getData('${
      data.previous
    }')">Previous</a></li> <li class="page-item ${
      data.next == null ? (nextDisabled = "disabled") : (nextDisabled = "")
    }"><a class="page-link" onclick="getData('${data.next}')">Next</a></li>`;
    
    document.getElementById("paginacion").innerHTML=html;

};

//Se ejecuta la API
getData(API);