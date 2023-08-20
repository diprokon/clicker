import { provideEffects } from '@ngrx/effects';
import { gameStateProvider, gameEffects } from './game';

export * from './game';

export const reducers = [
  gameStateProvider,
];

export const effects = [
  gameEffects
].map(effect => provideEffects(effect));
