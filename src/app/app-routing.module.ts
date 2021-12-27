import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelacadastroComponent } from './Components/telacadastro/telacadastro.component';

const routes: Routes = [
  {path: '',component:TelacadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
