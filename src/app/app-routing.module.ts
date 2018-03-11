import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrailersComponent } from './components/trailers/trailers.component';
import { SingleTrailerComponent } from './components/single-trailer/single-trailer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreditsComponent } from './credits/credits.component';

const routes: Routes = [
  { path: '', component: TrailersComponent },
  { path: 'trailer/:id', component: SingleTrailerComponent },
  { path: 'credits', component: CreditsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
