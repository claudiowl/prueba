import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NumberTableComponent } from './components/tables/number-table/number-table.component';
import { LetterTableComponent } from './components/tables/letter-table/letter-table.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'question1', component: NumberTableComponent },
  { path: 'question2', component: LetterTableComponent },


 
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
