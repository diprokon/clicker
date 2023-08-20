import { provideEffects } from '@ngrx/effects';
import { gameEffects, gameStateProvider } from './game';
import { shopEffects, shopStateProvider } from './shop';

export * from './game';
export * from './shop';


export const reducers = [
  gameStateProvider,
  shopStateProvider,
];

export const effects = provideEffects(
  gameEffects,
  shopEffects,
);
