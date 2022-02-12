import { createReducer, on } from '@ngrx/store';  
import { setFilter, validFilter } from './filter.actions';
 
export const initialState = 'all';
 
const _filterReduce = createReducer(
  initialState,
  on( setFilter , (state, { filters }) =>  filters), 
   
);
 
export function filterReduce(state: any, action: any) {
  return _filterReduce(state, action);
}