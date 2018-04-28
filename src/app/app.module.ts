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
import { DiscoverComponent } from './discover/discover.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';

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
    SafePipe,
    DiscoverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [TrailersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
