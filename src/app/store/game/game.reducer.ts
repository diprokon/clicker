import { createReducer, on, provideState } from '@ngrx/store';
import * as GameActions from './game.actions';

export const GAME_FEATURE_KEY = 'game';

export interface GameState {
  score: number;

}

export const initialState: GameState = {
  score: 0,
};

export const gameReducer = createReducer(
  initialState,
  on(GameActions.increaseScore, (state, { amount }): GameState => ({
      ...state,
      score: state.score + amount
    })
  ),
);

export const gameStateProvider = provideState(GAME_FEATURE_KEY, gameReducer);
