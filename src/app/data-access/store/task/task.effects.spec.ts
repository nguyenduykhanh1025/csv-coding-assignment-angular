import { TestBed } from "@angular/core/testing";
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { TaskEffects } from "./task.effects";
import { Observable, of, throwError } from "rxjs";
import { BackendService } from "../../services/backend.service";
import { selectTasks } from "./task.selectors";
import { TasksLoadedFailed, TasksLoadedSuccess, TasksStartLoading } from "./task.actions";

describe(TaskEffects.name, () => {
  let effects: TaskEffects;
  let actions$: Observable<unknown> = of(undefined);
  const backendService = jasmine.createSpyObj('backendService', ['tasks']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TaskEffects,
        provideMockActions(() => actions$),
        {
          provide: BackendService,
          useValue: backendService
        },
        provideMockStore({
          selectors: [
            {
              selector: selectTasks,
              value: [],
            },
          ],
        }),
      ]
    })

    effects = TestBed.inject(TaskEffects);
  })

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadTasks$', () => {
    it('should load tasks successfully', async (done) => {
      backendService.tasks.and.returnValue(of([]));

      actions$ = of(TasksStartLoading);

      effects.loadTasks$.subscribe((actual) => {
        expect(backendService.tasks).toHaveBeenCalled();
        expect(actual.type).toEqual(TasksLoadedSuccess.type);

        done();
      })
    });

    it('should load tasks failed', async (done) => {
      backendService.tasks.and.returnValue(throwError('some error'));

      actions$ = of(TasksStartLoading);

      effects.loadTasks$.subscribe((actual) => {
        expect(backendService.tasks).toHaveBeenCalled();
        expect(actual.type).toEqual(TasksLoadedFailed.type);

        done();
      })
    });
  })

  describe('taskLoadedFailed$', () => {
    it('should show an error alert', () => {
      spyOn(window, 'alert');

      actions$ = of(TasksLoadedFailed);

      effects.taskLoadedFailed$.subscribe((actual) => {
        expect(window.alert).toHaveBeenCalledWith('Internal Server Error.');
      })
    });
  })
})