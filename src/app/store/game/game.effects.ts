import { inject } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectCursorUpgradesPower, selectWorkerUpgradesPower, ShopActions } from '../shop';
import { GameActions } from './game.actions';

export const click = createEffect(
  (actions$ = inject(Actions), store = inject(Store)) => {
    return actions$.pipe(
      ofType(GameActions.THEClick),
      concatLatestFrom(() => store.select(selectCursorUpgradesPower)),
      map(([_, amount]) => {
        return GameActions.increaseScore({ amount });
      })
    );
  },
  { functional: true }
);

export const workers = createEffect(
  (store = inject(Store)) => {
    return interval(1000).pipe(
      concatLatestFrom(() => store.select(selectWorkerUpgradesPower)),
      map(([_, amount]) => {
        return GameActions.increaseScore({ amount });
      }),
    );
  },
  { functional: true }
);

export const buyProduct = createEffect(
  (actions$ = inject(Actions), store = inject(Store)) => {
    return actions$.pipe(
      ofType(ShopActions.buyProduct),
      map(({ item }) => {
        return GameActions.increaseScore({ amount: -Math.ceil(item.price) });
      })
    );
  },
  { functional: true }
);
