import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/models/todo.mode';
import { todoReducer } from './todos/todo.reducer';
import { validFilter } from './filter/filter.actions';
import { filterReduce } from './filter/filter.reduce';

export interface AppState {
    todos: Todo[];
    filter: string;
}


export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReduce    
}