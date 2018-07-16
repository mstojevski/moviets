import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditsComponent } from './components/credits/credits.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SingleTrailerComponent } from './components/single-trailer/single-trailer.component';
import { TrailerComponent } from './components/trailer/trailer.component';
import { TrailersComponent } from './components/trailers/trailers.component';
import { SafePipe } from './pipes/safe.pipe';
import { TrailersService } from './services/trailers.service';



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
    MatSelectModule,
    FormsModule
  ],
  providers: [TrailersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
