import { RouterModule } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { MetasComponent } from './metas.component';
import { AlunoService } from './aluno.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MetasComponent,
    AlunosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'metas',
        component: MetasComponent
      },
      {
        path: 'alunos',
        component: AlunosComponent
      }
    ])
  ],
  providers: [AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
