import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TaskDetailComponent } from './task-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute } from '@angular/router';
import { mockTasks, mockTasksAndAssigneeInfo } from 'src/app/utility/mocks/mock-task';
import { selectTaskDetail, selectTaskDetailLoading } from './task-detail.selector';
import { selectUsers } from 'src/app/data-access/store/user/user.selectors';

describe(TaskDetailComponent.name, () => {
  let component: TaskDetailComponent;
  let fixture: ComponentFixture<TaskDetailComponent>;
  let store: MockStore;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        TaskDetailComponent
      ],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: selectUsers,
              value: []
            },
            {
              selector: selectTaskDetailLoading,
              value: false
            },
            {
              selector: selectTaskDetail,
              value: {}
            }
          ]
        }),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key) => mockTasks()[0].id
              }
            }
          },
        },
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(TaskDetailComponent);
    component = fixture.componentInstance;
  }));

  it('should create the app', (() => {
    expect(component).toBeTruthy();
  }));

  it("should render enough task detail information", (() => {
    store.overrideSelector(selectTaskDetail, {
      ...mockTasksAndAssigneeInfo()[0],
    });
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('app-task-detail-field').length).toBe(4);
  }));

  it("should render 'Data Loading...' in a h5 tag", (() => {
    store.overrideSelector(selectTaskDetailLoading, true);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h5').textContent).toContain('Data Loading...');
  }));

  it("should render 'Task could not be found!!!' in a h5 tag", (() => {
    store.overrideSelector(selectTaskDetail, undefined);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h5').textContent).toContain('Task could not be found!!!');
  }));
});
