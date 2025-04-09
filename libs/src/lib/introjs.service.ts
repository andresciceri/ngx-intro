import { Injectable } from '@angular/core';
import * as introJs from 'intro.js';
import { IntroJs } from 'intro.js/src/intro';
import { Options } from 'intro.js/src/option';
import { IntroStep } from 'intro.js/src/core/steps';

@Injectable({
  providedIn: 'root',
})
export class IntrojsService {
  private intro: IntroJs;

  constructor() {
    this.intro = introJs.default();
  }

  startTour(steps: IntroStep[], options?: Options): void {
    this.intro.setOptions({ steps, ...options });
    this.intro.start();
  }

  exitTour(force: boolean): void {
    this.intro.exit(force);
  }

  onComplete(callback: () => void): void {
    this.intro.oncomplete(callback);
  }

  onExit(callback: () => void): void {
    this.intro.onexit(callback);
  }
}
