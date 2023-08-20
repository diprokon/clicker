import { createAction, props } from '@ngrx/store';

export const GameActions = {
  THEClick: createAction('[Game] THE Click'),
  increaseScore: createAction('[Game] Increase Score', props<{ amount: number }>()),
};
