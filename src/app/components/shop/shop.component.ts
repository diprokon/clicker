import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Product } from '@app/models';
import { selectProducts, selectScore, ShopActions } from '@app/store';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopComponent {
  products$ = this.store.select(selectProducts);

  constructor(private store: Store) {
  }

  buyProduct(product: Product) {
    this.store.dispatch(ShopActions.buyProduct({ item: product }));
  }

  canBuy$(product: Product) {
    return this.store.select(selectScore).pipe(
      map(score => score >= product.price)
    );
  }
}
