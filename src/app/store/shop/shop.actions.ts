import { Product } from '@app/models';
import { createAction, props } from '@ngrx/store';

export const ShopActions = {
  addProducts: createAction('[Shop] Add Products', props<{ items: Product[] }>()),
  buyProduct: createAction('[Shop] Buy Product', props<{ item: Product }>())
};
