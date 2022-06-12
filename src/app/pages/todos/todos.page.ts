import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo, loadTodo, removeTodo } from 'src/app/state/todos/todo.actions';
import { Todo } from 'src/app/state/todos/todo.model';
import { selectAllTodos } from 'src/app/state/todos/todo.selectors';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {
  public allTodos$ = this.store.select(selectAllTodos)
  public todo: string = '';
  constructor(private store: Store) { }

  ngOnInit() {
    //=========[Load Todo]============
    this.store.dispatch(loadTodo())
  }

  //===========[Add Todo]===================
  public addTodo() {
    this.store.dispatch(addTodo({ title: this.todo }));
    this.todo = '';
  }
  //===========[Remove Todo]===================
  public removeTodo(todo: Todo) {
    this.store.dispatch(removeTodo({ id: todo.id }));
  }
}
