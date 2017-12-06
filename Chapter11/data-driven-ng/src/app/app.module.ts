import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import {TodosService} from './todos.service';

import { RouterModule } from '@angular/router';

const ROUTES = [
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
    HttpModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
