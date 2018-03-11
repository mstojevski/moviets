import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { TrailersComponent } from './components/trailers/trailers.component';
import { TrailerComponent } from './components/trailer/trailer.component';
import { SingleTrailerComponent } from './components/single-trailer/single-trailer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TrailersService } from './services/trailers.service';
import { CreditsComponent } from './credits/credits.component';
import { SafePipe } from './safe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    TrailersComponent,
    TrailerComponent,
    SingleTrailerComponent,
    PageNotFoundComponent,
    CreditsComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TrailersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
