import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodosService {
 isDone: false;
ss
 constructor(private http: Http) {}

 getTodos() {
   return this.http
     .get('http://localhost:3000/api/todos')
     .map(res => res.json());
 }

 addTodos(todo) {
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this.http
     .post('http://localhost:3000/api/todo', JSON.stringify(todo), { headers })
     .map(res => res.json());
 }

 deleteTodo(id) {
   return this.http
     .delete(`http://localhost:3000/api/todo/${id}`)
     .map(res => res.json());
 }

 updateStatus(todo) {
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this.http
     .put('http://localhost:3000/api/todo/' + todo._id, JSON.stringify(todo), {
       headers: headers
     })
     .map(res => res.json());
 }
}
