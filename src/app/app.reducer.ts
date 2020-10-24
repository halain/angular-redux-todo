import { ActionReducerMap } from '@ngrx/store';

import { filtrosValidos } from './filtro/filtro.actions';
import { Todo } from './todos/models/todo.model';
import { filtroReducer } from './filtro/filtro.reducer';
import { todoReducer } from './todos/todos.reducer';


export interface AppState {
    todos: Todo[],
    filtro: filtrosValidos
    // usuario: {},
}


export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
}