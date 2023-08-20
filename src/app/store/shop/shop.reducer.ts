import { createReducer, on, provideState } from '@ngrx/store';
import { ShopActions } from './shop.actions';
import { shopAdapter, ShopState } from './shop.adapter';

export const shopFeatureKey = 'shop';

export const initialState: ShopState = shopAdapter.getInitialState({});

export const reducer = createReducer(
  initialState,

  on(ShopActions.addProducts, (state, { items }): ShopState => {
    return shopAdapter.addMany(items, state);
  }),

  on(ShopActions.buyProduct, (state, { item }): ShopState => {
    return shopAdapter.updateOne({
      id: item.id,
      changes: {
        quantity: (item.quantity || 0) + 1,
        price: item.price * item.priceMultiplayer,
      }
    }, state);
  }),
);

export const shopStateProvider = provideState(
  shopFeatureKey,
  reducer,
);

