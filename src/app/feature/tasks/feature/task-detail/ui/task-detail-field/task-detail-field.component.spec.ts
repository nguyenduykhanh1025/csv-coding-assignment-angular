import { TestBed, waitForAsync } from '@angular/core/testing';
import { TaskDetailFieldComponent } from './task-detail-field.component';

describe(TaskDetailFieldComponent.name, () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        TaskDetailFieldComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', (() => {
    const fixture = TestBed.createComponent(TaskDetailFieldComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it("should render 'key' in a dt tag", (() => {
    const fixture = TestBed.createComponent(TaskDetailFieldComponent);
    fixture.componentInstance.key = 'key'
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('dt').textContent).toContain('key');
  }));
});
