import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { NgClass } from '@angular/common';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import {TodosService} from './todos.service';

const ROUTES =[
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    component: TodosComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
