import { TestBed } from '@angular/core/testing';
import { IntroStep } from 'intro.js/src/core/steps';
import { Options } from 'intro.js/src/option';
import { IntrojsService } from './introjs.service';

describe('IntrojsService', () => {
  let service: IntrojsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntrojsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start a tour with steps and options', () => {
    const steps: IntroStep[] = [
      {
        element: '#step1',
        intro: 'Step 1',
        step: 0,
        title: '',
        position: 'floating',
        scrollTo: 'element',
      },
      {
        element: '#step2',
        intro: 'Step 2',
        step: 0,
        title: '',
        position: 'floating',
        scrollTo: 'element',
      },
    ];
    const options: Options = {
      showStepNumbers: false,
      steps: [],
      hints: [],
      isActive: false,
      nextLabel: '',
      prevLabel: '',
      skipLabel: '',
      doneLabel: '',
      hidePrev: false,
      hideNext: false,
      nextToDone: false,
      tooltipPosition: '',
      tooltipClass: '',
      group: '',
      highlightClass: '',
      exitOnEsc: false,
      exitOnOverlayClick: false,
      stepNumbersOfLabel: '',
      keyboardNavigation: false,
      showButtons: false,
      showBullets: false,
      showProgress: false,
      scrollToElement: false,
      scrollTo: 'element',
      scrollPadding: 0,
      overlayOpacity: 0,
      autoPosition: false,
      positionPrecedence: [],
      disableInteraction: false,
      dontShowAgain: false,
      dontShowAgainLabel: '',
      dontShowAgainCookie: '',
      dontShowAgainCookieDays: 0,
      helperElementPadding: 0,
      hintPosition: 'top-left',
      hintButtonLabel: '',
      hintShowButton: false,
      hintAutoRefreshInterval: 0,
      hintAnimation: false,
      buttonClass: '',
      progressBarAdditionalClass: false,
    };

    spyOn(service, 'startTour').and.callThrough();

    service.startTour(steps, options);

    expect(service.startTour).toHaveBeenCalledWith(steps, options);
  });

  it('should exit the tour', () => {
    spyOn(service, 'exitTour').and.callThrough();

    service.exitTour(true);

    expect(service.exitTour).toHaveBeenCalledWith(true);
  });

  it('should call onComplete callback', () => {
    const callback = jasmine.createSpy('onCompleteCallback');

    service.onComplete(callback);

    expect(callback).not.toHaveBeenCalled();
  });

  it('should call onExit callback', () => {
    const callback = jasmine.createSpy('onExitCallback');

    service.onExit(callback);

    expect(callback).not.toHaveBeenCalled();
  });
});
