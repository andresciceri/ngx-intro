import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import * as introJs from 'intro.js';
import { IntroJs } from 'intro.js/src/intro';
import { Options } from 'intro.js/src/option';
import { IntroStep } from 'intro.js/src/core/steps';

@Injectable({
  providedIn: 'root',
})
export class IntrojsService {
  private intro: IntroJs | null = null;
  private renderer: Renderer2;
  private isActive = false;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  private createInstance(): IntroJs {
    if (this.intro) {
      this.destroyTour();
    }
    this.intro = introJs.default();
    return this.intro;
  }

  private destroyTour(): void {
    if (this.intro) {
      try {
        this.intro.exit(true);
      } catch (_) {
        // Ignore errors during cleanup
      }
      this.intro = null;
      this.isActive = false;
    }
  }

  setOptions(options: Partial<Options>): void {
    if (!this.intro) {
      this.intro = this.createInstance();
    }
    this.intro.setOptions(options);
  }

  startTour(steps: IntroStep[], options?: Partial<Options>): void {
    const intro = this.createInstance();
    this.isActive = true;

    intro.setOptions({
      steps,
      keyboardNavigation: true,
      ...options,
    });

    // Automatically clean up when tour completes or exits
    intro.oncomplete(() => {
      this.isActive = false;
      this.intro = null;
    });

    intro.onexit(() => {
      this.isActive = false;
      this.intro = null;
    });

    intro.start();
  }

  exitTour(force = true): void {
    if (this.intro && this.isActive) {
      this.intro.exit(force);
    }
    this.isActive = false;
    this.intro = null;
  }

  onComplete(callback: () => void): void {
    const intro = this.intro || this.createInstance();
    intro.oncomplete(() => {
      callback();
      this.isActive = false;
      this.intro = null;
    });
  }

  onExit(callback: () => void): void {
    const intro = this.intro || this.createInstance();
    intro.onexit(() => {
      callback();
      this.isActive = false;
      this.intro = null;
    });
  }

  isRunning(): boolean {
    return this.isActive;
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
