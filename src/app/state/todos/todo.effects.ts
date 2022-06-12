import { Injectable } from "@angular/core";
import { createEffect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { TodoService } from "src/app/services/todo/todo.service";
import { AppState } from "../app.state";

@Injectable()
export class TodoEffect {
    constructor(
        private actions$: Action,
        private store: Store<AppState>,
        private totoService: TodoService
    ) { }
    //===============[Run this code when a loadTodos action is dispatched ]========================
    // loadTodos$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType
    //     )
    //  );

}
