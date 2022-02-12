import { createReducer, on } from '@ngrx/store'; 
import { create, toogle, edit, deleteTodo, toogleAll, clearCompleted } from './todo.actions';
import { Todo } from './models/todo.mode';
 
export const initialState: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar traje de Iroman'),
    new Todo('Robar el traje de Capitan America'),
];
 
const _todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo( text ) ]), 
  on(toogle, (state, { id }) =>  {
    return state.map(todo => {
      if (todo.id == id) {
        return  {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo;
      }
      
    });
  }), 
  on(edit, (state, { id, text }) =>  {
    return state.map(todo => {
      if (todo.id == id) {
        return  {
          ...todo,
          text: text
        }
      } else {
        return todo;
      } 
    });
  }), 
  on(deleteTodo, (state, { id }) =>  {
    return state.filter(f => f.id !== id);
  }), 
  on(toogleAll, (state, { completed }) =>  {
     return state.map(todo => { 
        return  {
          ...todo,
          completed: completed
        } 
    });
  }),
  on(clearCompleted, (state) =>  {
    return  state.filter(t => !t.completed)
 }),
);
 
export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}