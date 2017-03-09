import { Component } from '@angular/core';


import { Artist } from '../shared/artist.type';
import { SpotifyService } from "../shared/spotify.service";


@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: './search.component.html'

})

export class SearchComponent {

   //La cadena de bÃºsqueda
    public searchStr:string;
    
    //Los artistas resultado de la bÃºsqueda
    public searchResults:Artist[] = [];
    
    constructor(private _spotify:SpotifyService){}
    
    searchMusic(){
        this._spotify.searchMusic(this.searchStr)
          .subscribe(res => {
              this.searchResults = res.artists.items;
          })
    }
    
    ngOnInit(){
        console.log('SearchComponent onInit');
    }


}