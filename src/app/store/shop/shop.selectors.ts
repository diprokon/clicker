import { calcCursorPower, calcWorkerPower } from '@app/helpers';
import { ProductType } from '@app/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { shopAdapter, ShopState } from './shop.adapter';
import { shopFeatureKey, } from './shop.reducer';

const {
  selectAll
} = shopAdapter.getSelectors();


export const selectShopFeature = createFeatureSelector<ShopState>(
  shopFeatureKey
);

export const selectProducts = createSelector(
  selectShopFeature,
  selectAll
);

export const selectCursorUpgrades = createSelector(
  selectProducts,
  (products) => products.filter(product => product.type === ProductType.cursor)
);

export const selectCursorUpgradesPower = createSelector(
  selectCursorUpgrades,
  (upgrades) => calcCursorPower(upgrades),
);

export const selectWorkerUpgrades = createSelector(
  selectProducts,
  (products) => products.filter(product => product.type === ProductType.worker)
);

export const selectWorkerUpgradesPower = createSelector(
  selectWorkerUpgrades,
  (upgrades) => calcWorkerPower(upgrades),
);
