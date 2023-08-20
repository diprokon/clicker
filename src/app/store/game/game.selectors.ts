import { createFeatureSelector, createSelector } from '@ngrx/store';
import { gameFeatureKey, GameState } from './game.reducer';

export const selectGameFeature = createFeatureSelector<GameState>(
  gameFeatureKey
);

export const selectScore = createSelector(
  selectGameFeature,
  (state: GameState) => state.score
);
