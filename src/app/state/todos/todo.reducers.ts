import { createReducer, on } from "@ngrx/store";
import { Todo } from "./todo.model";
import { addTodo, loadTodo, loadTodosFailure, loadTodosSuccess, removeTodo } from "./todo.actions";

//===============[Define state]==================
export interface TodoState {
    todos: Todo[];
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}
//===============[Initial State]=================
export const initState: TodoState = {
    todos: [],
    error: null,
    status: 'pending'
}
//===============[Create reducer]================
export const todoReducer = createReducer(
    // Supply the initial State
    initState,
    // Add the new todo to the list
    on(addTodo, (state, { title }) => ({ ...state, todos: [...state.todos, { id: new Date().getMilliseconds(), title: title }] })),
    // Remove the todo from the list 
    on(removeTodo, (state, { id }) => ({ ...state, todos: state.todos.filter(todo => todo.id != id) })),
    // Trigger loading the todos
    on(loadTodo, (state) => ({ ...state, status: 'loading' })),
    // Load todos success
    on(loadTodosSuccess, (state, { todos }) => ({ ...state, todos: todos, error: null, status: 'success' })),
    // Load todos Failure
    on(loadTodosFailure, (state, { error }) => ({ ...state, error: error, status: 'error' })),
)