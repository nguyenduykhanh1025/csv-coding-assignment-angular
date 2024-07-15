import { TestBed, waitForAsync } from '@angular/core/testing';
import { PageNotFoundComponent } from './page-not-found.component';

describe(PageNotFoundComponent.name, () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageNotFoundComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', (() => {
    const fixture = TestBed.createComponent(PageNotFoundComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
