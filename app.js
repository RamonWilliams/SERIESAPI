

const URL = "http://localhost:8080/api/serie";
const URL2 ="http://localhost:8080/api/season";
const URL3 ="http://localhost:8080/api/chapter";
const URL4 = "http://localhost:8080/api/actor";

window.onload = () =>{
    init ()
}

const init = async () =>{
    const Serie =  await getSerie();
    mappedSerie(Serie)

    const Season = await getSeason();
    mappedSeason(Season)

    const Chapter = await getChapter();
    mappedChapter(Chapter)

    const Actor = await getActor();
    mappedActor(Actor)
}
/*------------------------------------------ */
const getSerie = async () =>{
    const Api = await fetch(URL);
    const apiJson = Api.json()
    return apiJson
}
const getSeason = async () =>{
    const Api2 = await fetch(URL2);
    const api2Json = Api2.json();
    return api2Json
} 

const getChapter = async () =>{
     const Api3 = await fetch(URL3);
     const api3ToJson = Api3.json();
     return api3ToJson
}
const getActor = async () =>{
    const Api4 = await fetch(URL4);
    const Api4ToJson = Api4.json();
    return Api4ToJson
}
/*------------------------------------------------------------- */
const mappedSerie = (serie) =>{
     serie.data.series.map((serie)=>{
         return printSerie({
             nombre:serie.name,
             fecha: serie.date,             
         })
     })
}

const mappedSeason = (season) =>{
    season.data.seasons.map((season)=>{
        return printSeason ({
            nombre: season.name,
            fecha: season.date,
            descripcion: season.description,
            imagen: season.images

        })
    })
}

const mappedChapter = (chapter) =>{
   chapter.data.chapters.map((chapter)=>{
       return printChapter ({
           nombre: chapter.name,
           fecha: chapter.date,
           descripcion:chapter.seasons.description
       })
   })
}

const mappedActor = (actor) => {
    actor.data.actors.map((actor)=>{
        return printActor({
            nombre: actor.name,
            edad: actor.age,
            descripcion: actor.description,
            imagen: actor.images,
            
        })
    })
}

/*---------------------------------------------------------------- */
const  printSerie = (serie) =>{
    const serieContainer = document.querySelector("#serieContainer");
     return serieContainer.innerHTML += `  

      <h2 class="serieTitle">${serie.nombre} </h2>
       <p> <b>Fecha de Estreno:</b> ${serie.fecha} </p>
        
     `
}

const printSeason  = (season) =>{
      const seasonContainer = document.querySelector("#seasonContainer");
      return seasonContainer.innerHTML += `            
     
      <img src=${season.imagen} alt=${season.nombre}/>    

        <h3> ${season.nombre} </h3>
        <p><b>Fecha de Estreno: </b>${season.fecha}</p>
        <p>${season.descripcion}</p>
      
         
      
      `
}
const printChapter = (chapter) =>{
    const chapterContainer = document.querySelector("#chapterContainer")
    return chapterContainer.innerHTML += `
       <div class="chapterInfo">     

         <h3>${chapter.nombre} </h3>
         <p><b>Fecha de Estreno: </b>${chapter.fecha} </p>
         <p> ${chapter.descripcion}</p>

       </div>
    `
}
const printActor = (actor) =>{
    const actorContainer = document.querySelector("#actorContainer");
    return actorContainer.innerHTML += `
        
        <div class="actor">
        <div class="actorImage">
        <img src= ${actor.imagen} alt = ${actor.nombre}/> 
        </div>
        <div class="actorInfo">   
        <h2>${actor.nombre} </h2>
        <p><b>Edad:</b> ${actor.edad}</p>
        <p><b>Descripción: </b>${actor.descripcion}</p>       
        </div>
        </div>
    
    `
}