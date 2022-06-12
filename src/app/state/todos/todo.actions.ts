import { createAction, props } from "@ngrx/store";
import { Todo } from "./todo.model";



//====================[All Todo Action]===============================
export const loadTodo = createAction(
    '[Todo Page] Load Todo'
);
//====================[Add Todo Action]===============================
export const addTodo = createAction(
    '[Todo Page] Add Todo',
    props<{ title: string }>()
);
//====================[Remove Todo Action]===============================
export const removeTodo = createAction(
    '[Todo Page] Remove Todo',
    props<{ id: number }>()
);
//====================[Load Todo Action]===============================
export const loadTodosSuccess = createAction(
    '[Todo Page] Todo Load Success',
    props<{ todos: Todo[] }>()
)
//====================[Failed to load Todo Action]=====================
export const loadTodosFailure = createAction(
    '[Todo Page] Todo Load Failure',
    props<{ error: string }>()
)