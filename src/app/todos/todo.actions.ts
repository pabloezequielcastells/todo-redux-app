import { createAction, props } from '@ngrx/store';


export const create = createAction('[TODO] Crear Todo', props<{  text: string }>());        
export const toogle = createAction('[TODO] Toogle Todo', props<{  id: number }>());        
export const edit = createAction('[TODO] Edit Todo', props<{  id: number, text: string }>());        
export const deleteTodo = createAction('[TODO] Delete Todo', props<{  id: number  }>());        
export const toogleAll = createAction('[TODO] Toogle all Todo', props<{  completed: boolean  }>());        
export const clearCompleted = createAction('[TODO] Clear all complete Todo');        