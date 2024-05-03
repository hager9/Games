export default class DisplayGames{
    displayGames(data){
        let games = "";
        for(let i = 0 ; i<data.length ; i++){
            games += `<div class="col-lg-3 col-md-4">
            <div class="gamesCard h-100" data-id="${data[i].id}">
             <div class="image overflow-hidden">
               <img src="${data[i].thumbnail}" alt="${data[i].title}" class="w-100">
             </div>
             <div class="content">
               <h3 class="title fs-6 py-2 px-2">${data[i].title}</h3>
               <h6 class="description px-2 text-secondary">${data[i].short_description}</h6>
               <div class="item-footer mb-3 px-2 d-flex justify-content-between align-items-center">

                 <h4 class="game-category fs-6 px-2">${data[i].genre}</h4>
                 <p class="platform px-2">${data[i].platform}</p>
               </div>
             </div>
            </div>
           </div>`
        }
        document.getElementById('gameData').innerHTML = games;
    }

    displayDetails(data) {
        const content = `
        <div class="col-md-4">
        <img src="${data.thumbnail}" class="w-100" alt="${data.title}" />
     </div>
     <div class="col-md-8">
        <h3>Title: ${data.title}</h3>
        <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
        <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
        <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
        <p class="small">${data.description}</p>
        <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>

     </div>
        
        `;
  
        document.getElementById("detailsContent").innerHTML = content;
     }
}

