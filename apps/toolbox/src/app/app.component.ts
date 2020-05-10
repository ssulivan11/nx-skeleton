import { Component } from '@angular/core';
import { canUseDOM } from '@nx-skeleton/shared/utils';

@Component({
  selector: 'nx-skeleton-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Toolbox';
  canIUseDom = canUseDOM;
}
