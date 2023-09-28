import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './component/acceuil/acceuil.component';
import { ListComponent } from './component/list/list.component';
import { GestionComponent } from './component/gestion/gestion.component';
import { ContactComponent } from './component/contact/contact.component';


const routes: Routes = [
  { path:'', redirectTo: 'AcceuilComponent', pathMatch:'full'},
  { path: 'list', component: ListComponent },
  { path: 'gestion', component: GestionComponent },
  { path: 'acceuil', component: AcceuilComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**',redirectTo:'/acceuil'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
