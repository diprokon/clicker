import { createSelector } from '@ngrx/store';
import { GAME_FEATURE_KEY, GameState } from './game.reducer';

export const selectGameFeature = (state: any) => state[GAME_FEATURE_KEY] as GameState;

export const scoreSelector = createSelector(
  selectGameFeature,
  (state: GameState) => state.score
);
