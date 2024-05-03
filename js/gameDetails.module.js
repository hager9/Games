import DisplayGames from "./display.module.js";

export default class GameDetails{
    constructor(id){
        document.getElementById("btnClose").addEventListener("click",()=>{
            document.getElementById("allGames").classList.remove("d-none"); 
        document.getElementById("details").classList.add("d-none");
        })
        this.display = new DisplayGames();
        this.getDetails(id);
    }
    async getDetails(gameId){
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none")
        const options = {
            method: "GET",
            headers: {
               "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
               "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },
         };
   
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options);
        const response = await api.json();
         this.display.displayDetails(response);
         loading.classList.add("d-none");

    }
}