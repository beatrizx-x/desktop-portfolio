import { Component, signal } from '@angular/core';

import { Desktop } from './feats/desktop/desktop';

@Component({
  selector: 'app-root',
  imports: [ Desktop],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('desktop');
}
