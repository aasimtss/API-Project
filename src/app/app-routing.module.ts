import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './compon/auth/auth.component';
import { ContactComponent } from './compon/contact/contact.component';
import { DetailsComponent } from './compon/details/details.component';
import { HomeComponent } from './compon/home/home.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
