import { createAction, props } from '@ngrx/store';
 

export type validFilter = "all" | "completed" | "pending";


export const setFilter = createAction('[FILTER] Set filter', props<{  filters: string }>());