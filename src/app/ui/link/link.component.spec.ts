import { TestBed, waitForAsync } from '@angular/core/testing';
import { LinkComponent } from './link.component';

describe(LinkComponent.name, () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        LinkComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', (() => {
    const fixture = TestBed.createComponent(LinkComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
