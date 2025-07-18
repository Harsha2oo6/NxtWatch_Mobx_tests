import { makeAutoObservable } from "mobx"

class HomeStore{
    searchQuery:string='';
    
    homeVideos:unknown[]=[];
    isLoading:boolean=true;
    constructor(){
        makeAutoObservable(this)
    }
    setSearchQuery(inputValue:string){
        this.searchQuery=inputValue
    }
    async fetchVideos(){
        try{
            // const result = await 

        }catch(e){

        }

    }
}
export const homeStore = new HomeStore()