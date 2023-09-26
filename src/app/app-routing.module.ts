import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListComponent } from './list/list.component';
import { GestionComponent } from './gestion/gestion.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path:'', redirectTo: 'AcceuilComponent', pathMatch:'full'},
  { path: 'list', component: ListComponent },
  { path: 'gestion', component: GestionComponent },
  { path: 'acceuil', component: AcceuilComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'not-found', component: NotFoundComponent},
  { path: '**',redirectTo:'/acceuil'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
