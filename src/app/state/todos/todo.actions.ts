import { createAction, props } from "@ngrx/store";



//====================[All Todo Action]===============================
export const loadTodo = createAction(
    '[Todo Page] Load Todo'
);
//====================[Add Todo Action]===============================
export const addTodo = createAction(
    '[Todo Page] Add Todo',
    props<{ content: string }>()
);
//====================[Remove Todo Action]===============================
export const removeTodo = createAction(
    '[Todo Page] Remove Todo',
    props<{ id: string }>()
);