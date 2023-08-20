import { createAction, props } from '@ngrx/store';

export const increaseScore = createAction(
  '[Game] Increase Score',
  props<{ amount: number }>()
);
