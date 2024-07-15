import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectTaskAndAssigneeInfo, selectTaskListLoading } from './task-list.selectors';
import { selectSearchedValue } from 'src/app/data-access/store/task/task.selectors';

describe(TaskListComponent.name, () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let store: MockStore;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        TaskListComponent
      ],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: selectTaskListLoading,
              value: false
            },
            {
              selector: selectTaskAndAssigneeInfo,
              value: []
            },
            {
              selector: selectSearchedValue,
              value: ''
            }
          ],
        }),
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
  }));

  it('should create', (() => {
    expect(component).toBeTruthy();
  }));

  it("should render 'Data Loading...' in a h5 tag", (() => {
    store.overrideSelector(selectTaskListLoading, true);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h5').textContent).toContain('Data Loading...');
  }));

  it("should render 'No Data...' in a h5 tag", (() => {
    store.overrideSelector(selectTaskAndAssigneeInfo, []);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h5').textContent).toContain('No Data...');
  }));
});
