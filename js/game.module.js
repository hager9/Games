import DisplayGames from "./display.module.js";
import GameDetails from "./gameDetails.module.js";

export default class Home{
    constructor(){
        this.getGames("Shooter");
        document.querySelectorAll(".nav-link").forEach((link)=>{
            link.addEventListener('click', (e)=>{
                document.querySelector('.nav .active').classList.remove('active');
                e.target.classList.add('active');
                this.getGames(e.target.dataset.category);
            })

        })
        this.display = new DisplayGames;
    }

    async getGames(category){
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
            method: "GET",
            headers: {
               "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
               "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
               Accept: "application/json",
               "Content-Type": "application/json",
            },
         };
   
         const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
         const gamesArr = await api.json();

         this.display.displayGames(gamesArr);
         this.gameEvent();
         loading.classList.add("d-none");
    }

    gameEvent(){
        document.querySelectorAll(".gamesCard").forEach((game)=>{
            game.addEventListener('click', ()=>{
                const id = game.dataset.id;
                this.showDetails(id);
                
            })
        })
    }

    showDetails(id){
        const gameDetails = new GameDetails(id);
        document.getElementById("main").classList.add("d-none"); 
        document.getElementById("details").classList.remove("d-none"); 
    }

}
