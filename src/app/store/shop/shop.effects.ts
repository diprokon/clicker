import { productList } from '@app/models';
import { createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { ShopActions } from './shop.actions';


export const init = createEffect(
  () => {
    return of(ShopActions.addProducts({ items: productList }));
  },
  { functional: true }
);
