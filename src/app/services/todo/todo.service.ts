import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/state/todos/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }
  //===============[Http return]========================
  httpCall(): Observable<any> {
    return this.http.get(this.url);
  }
  //===============[Get Todos From Api]=================
  async getTodos(): Promise<Todo[]> {
    return this.httpCall().toPromise();
  }
}
