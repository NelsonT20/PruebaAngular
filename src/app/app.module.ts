import { BrowserModule }     from '@angular/platform-browser';
import { NgModule }          from '@angular/core';
import { FormsModule }       from '@angular/forms';
import { HttpModule }        from '@angular/http';

import { AppComponent }      from './app.component';
import { NavbarComponent }   from './navbar/navbar.component';
import { AboutComponent }    from './about/about.component';
import { SearchComponent }   from './search/search.component';
import { AppRoutesModule }   from './app.routes';
import { SpotifyService }    from './shared/spotify.service';
import { ArtistComponent }   from './artist/artist.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, AboutComponent, SearchComponent, ArtistComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutesModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
