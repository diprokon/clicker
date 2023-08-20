import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { GameActions, selectCursorUpgradesPower, selectScore, selectWorkerUpgradesPower } from '@app/store';
import { Store } from '@ngrx/store';
import { ShopComponent } from './components/shop/shop.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatRippleModule, ShopComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  score$ = this.store.select(selectScore);
  cursorPower$ = this.store.select(selectCursorUpgradesPower);
  workerPower$ = this.store.select(selectWorkerUpgradesPower);

  constructor(private store: Store) {
  }

  theClick() {
    this.store.dispatch(GameActions.THEClick());
  }
}
