import { createReducer, on } from "@ngrx/store";
import { Todo } from "./todo.model";
import { addTodo, removeTodo } from "./todo.actions";

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
    on(addTodo, (state, { content }) => ({ ...state, todos: [...state.todos, { id: Date.now().toString(), content: content }] })),
    // Remove the todo from the list
    on(removeTodo, (state, { id }) => ({ ...state, todos: state.todos.filter(todo => todo.id != id) })),
    // Trigger loading the todos
    on(removeTodo, (state) => ({ ...state, status: 'loading' })),
)