import { Product } from '@app/models';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export interface ShopState extends EntityState<Product> {

}

export const shopAdapter = createEntityAdapter<Product>();
