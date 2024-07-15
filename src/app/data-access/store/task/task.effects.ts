import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TasksLoadedFailed, TasksLoadedSuccess, TaskStartCreating, TasksStartLoading, TaskStartCreatedSuccess, TaskStartCreatedFailed, TaskStartLoading, TaskLoadedSuccess, TaskLoadedFailed, TasksStartAssigning, TasksAssignedSuccess, TasksAssignedFailed, TasksCompletedFailed, TasksStartCompleting, TasksCompletedSuccess } from './task.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { BackendService } from '../../services/backend.service';

@Injectable({
  providedIn: 'root'
})
export class TaskEffects {

  constructor(
    private readonly _actions$: Actions,
    private readonly _backendService: BackendService) {
  }

  loadTask$ = createEffect(
    () => {
      return this._actions$.pipe(
        ofType(TaskStartLoading),
        switchMap(({ taskId }) => {
          return this._backendService.task(taskId).pipe(
            map((task) => {
              return TaskLoadedSuccess({ task })
            }),
            catchError((error: Error) => {
              return of(TaskLoadedFailed({ error }));
            }))
        })
      );
    },
  );

  loadTasks$ = createEffect(
    () => {
      return this._actions$.pipe(
        ofType(TasksStartLoading),
        switchMap(() => {
          return this._backendService.tasks().pipe(
            map((tasks) => {
              return TasksLoadedSuccess({ tasks })
            }),
            catchError((error: Error) => {
              return of(TasksLoadedFailed({ error }));
            }))
        })
      );
    },
  );

  createNewTask$ = createEffect(
    () => {
      return this._actions$.pipe(
        ofType(TaskStartCreating),
        switchMap(({ description }) => {
          return this._backendService.newTask({ description }).pipe(
            map(task => {
              return TaskStartCreatedSuccess({ task })
            }),
            catchError((error: Error) => {
              return of(TasksLoadedFailed({ error }));
            })
          )
        })
      );
    },
  );

  assignTask$ = createEffect(
    () => {
      return this._actions$.pipe(
        ofType(TasksStartAssigning),
        switchMap(({ taskId, userId }) => {
          return this._backendService.assign(taskId, userId).pipe(
            map((task) => {
              return TasksAssignedSuccess({ task })
            }),
            catchError((error: Error) => {
              return of(TasksAssignedFailed({ error }));
            }))
        })
      );
    },
  );

  completeTask$ = createEffect(
    () => {
      return this._actions$.pipe(
        ofType(TasksStartCompleting),
        switchMap(({ taskId, completed }) => {
          return this._backendService.complete(taskId, completed).pipe(
            map((task) => {
              return TasksCompletedSuccess({ task })
            }),
            catchError((error: Error) => {
              return of(TasksCompletedFailed({ error }));
            }))
        })
      );
    },
  );

  taskLoadedFailed$ = createEffect(
    () => this._actions$.pipe(
      ofType(
        TaskLoadedFailed,
        TasksLoadedFailed,
        TaskStartCreatedFailed,
        TasksCompletedFailed
      ),
      tap((error) => {
        // TODO: create a new modal or an alert to show this error
        console.error(error)
        alert('Internal Server Error.')
      })
    ), { dispatch: false }
  );
}
