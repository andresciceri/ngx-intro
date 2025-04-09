# ngx-intro

An Angular library that provides a simple integration of [Intro.js](https://introjs.com/) to create interactive guides and step-by-step tutorials in Angular applications.

[![npm version](https://badge.fury.io/js/%40andresciceri%2Fngx-intro.svg)](https://badge.fury.io/js/%40andresciceri%2Fngx-intro)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- Complete integration of Intro.js with Angular
- Injectable service to start, control, and customize interactive guides
- Support for multiple visual themes
- Simple and easy-to-use API
- Fully typed with TypeScript

## Installation

```bash
npm i @andresciceri/ngx-intro --save
```

### CSS Styles Setup

To include the Intro.js styles in your Angular application, add the following import to your `styles.css` or `styles.scss` file:

```css
@import '../../../node_modules/@andresciceri/ngx-intro/assets/introjs.css';
```

If you want to use a specific theme from Intro.js, also add the corresponding import:

```css
@import '../../../node_modules/@andresciceri/ngx-intro/assets/introjs-modern.css';
```

## Basic Usage

1. Import the module in your Angular application:

```typescript
import { IntrojsService } from '@andresciceri/ngx-intro';
```

2. Inject the service into your component:

```typescript
constructor(private introService: IntrojsService) { }
```

3. Define your steps and start the tour:

```typescript
ngOnInit() {
  const steps = [
    {
      element: '#step1',
      intro: 'This is the first step',
      step: 0,
      title: 'First Step',
      position: 'floating',
      scrollTo: 'element',
    },
    {
      element: '#step2',
      intro: 'This is the second step',
      step: 1,
      title: 'Second Step',
      position: 'floating',
      scrollTo: 'element',
    }
  ];
  
  this.introService.startTour(steps);
}
```

## API

### IntrojsService

- `startTour(steps: IntroStep[], options?: Options): void` - Starts a tour with the defined steps and options
- `exitTour(force: boolean): void` - Exits the current tour
- `onComplete(callback: () => void): void` - Sets a callback for when the tour is completed
- `onExit(callback: () => void): void` - Sets a callback for when the tour is exited
- `applyTheme(themeUrl: string): void` - Applies a custom theme to change the appearance of the tour

## Available Themes

The library includes the following themes that can be applied with `applyTheme()`:

- `introjs.css` - Standard theme
- `introjs-dark.css` - Dark theme
- `introjs-flattener.css` - Flat theme
- `introjs-modern.css` - Modern theme
- `introjs-nassim.css` - Nassim theme
- `introjs-nazanin.css` - Nazanin theme
- `introjs-royal.css` - Royal theme

## Examples

```typescript
import { Component, OnInit } from '@angular/core';
import { IntrojsService } from '@andresciceri/ngx-intro';

@Component({
  selector: 'app-demo',
  template: `
    <div id="step1">First element</div>
    <div id="step2">Second element</div>
    <button (click)="startDemo()">Start Demo</button>
  `
})
export class DemoComponent implements OnInit {
  
  constructor(private introService: IntrojsService) {}
  
  ngOnInit() {
    // Apply a theme
    this.introService.applyTheme('assets/introjs-dark.css');
    
    // Configure callbacks
    this.introService.onComplete(() => {
      console.log('Tour completed');
    });
    
    this.introService.onExit(() => {
      console.log('Tour cancelled');
    });
  }
  
  startDemo() {
    const steps = [
      {
        element: '#step1',
        intro: 'First step of the tour',
        title: 'Step 1',
        position: 'bottom'
      },
      {
        element: '#step2',
        intro: 'Second step of the tour',
        title: 'Step 2',
        position: 'right'
      }
    ];
    
    // Additional options
    const options = {
      showStepNumbers: true,
      exitOnOverlayClick: false,
      showBullets: true
    };
    
    this.introService.startTour(steps, options);
  }
}
```

## Development

This library was generated with [Nx](https://nx.dev).

### Running unit tests

```bash
nx test ngx-intro-js
```

## License

MIT
