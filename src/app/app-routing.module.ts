import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrailersComponent } from './components/trailers/trailers.component';
import { SingleTrailerComponent } from './components/single-trailer/single-trailer.component';
import { CreditsComponent } from './components/credits/credits.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: TrailersComponent },
  { path: 'trailer/:id', component: SingleTrailerComponent },
  { path: 'credits', component: CreditsComponent },
  { path: 'discover', component: DiscoverComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
