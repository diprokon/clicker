import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { GameActions, scoreSelector } from '@app/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatRippleModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  score$ = this.store.select(scoreSelector);

  constructor(private store: Store) {
  }

  theClick() {
    this.store.dispatch(GameActions.increaseScore({ amount: 1 }));
  }
}
