import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import * as introJs from 'intro.js';
import { IntroJs } from 'intro.js/src/intro';
import { Options } from 'intro.js/src/option';
import { IntroStep } from 'intro.js/src/core/steps';

@Injectable({
  providedIn: 'root',
})
export class IntrojsService {
  private intro: IntroJs;
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.intro = introJs.default();
  }

  setOptions(options: Partial<Options>): void {
    this.intro.setOptions(options);
  }

  startTour(steps: IntroStep[], options?: Partial<Options>): void {
    // Updated to Partial<Options>
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

  applyTheme(themeUrl: string): void {
    const linkElement = document.getElementById(
      'introjs-theme'
    ) as HTMLLinkElement;

    if (linkElement) {
      linkElement.href = themeUrl;
    } else {
      const newLinkElement = this.renderer.createElement('link');
      this.renderer.setAttribute(newLinkElement, 'rel', 'stylesheet');
      this.renderer.setAttribute(newLinkElement, 'id', 'introjs-theme');
      this.renderer.setAttribute(newLinkElement, 'href', themeUrl);
      document.head.appendChild(newLinkElement);
    }
  }
}
