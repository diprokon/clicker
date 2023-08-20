import { Product } from '@app/models';

export function calcCursorPower(upgrades: Product[]): number {
  return upgrades.reduce((acc, upgrade) => {
    return acc + (upgrade.quantity || 0) * upgrade.power;
  }, 1);
}

export function calcWorkerPower(upgrades: Product[]): number {
  return upgrades.reduce((acc, upgrade) => {
    return acc + (upgrade.quantity || 0) * upgrade.power;
  }, 0);
}
