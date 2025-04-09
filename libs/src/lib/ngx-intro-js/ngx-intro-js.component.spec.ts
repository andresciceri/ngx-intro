import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxIntroJsComponent } from './ngx-intro-js.component';

describe('NgxIntroJsComponent', () => {
  let component: NgxIntroJsComponent;
  let fixture: ComponentFixture<NgxIntroJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxIntroJsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxIntroJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
