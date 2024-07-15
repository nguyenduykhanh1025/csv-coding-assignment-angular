import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BackendService } from "../../services/backend.service";
import { UsersLoadedFailed, UsersLoadedSuccess, UsersStartLoading } from "./user.actions";
import { catchError, map, switchMap, tap, withLatestFrom } from "rxjs/operators";
import { of } from "rxjs";
import { Store } from "@ngrx/store";
import { selectUsers } from "./user.selectors";

@Injectable({
  providedIn: 'root'
})
export class UserEffects {
  private readonly _selectedUsers$ = this._store.select(selectUsers);

  constructor(
    private readonly _actions$: Actions,
    private readonly _backendService: BackendService,
    private readonly _store: Store) {
  }

  loadTasks$ = createEffect(
    () => {
      return this._actions$.pipe(
        ofType(UsersStartLoading),
        withLatestFrom(this._selectedUsers$),
        switchMap(([, existedUsers]) => {
          // BEWARE: the list of user will be cached
          if (existedUsers.length) {
            return of(UsersLoadedSuccess({ users: existedUsers }))
          }

          return this._backendService.users().pipe(
            map(users => UsersLoadedSuccess({ users })),
            catchError((error: Error) => {
              return of(UsersLoadedFailed({ error }));
            })
          )
        })
      )
    }
  )

  usersLoadedFailed$ = createEffect(
    () => this._actions$.pipe(
      ofType(
        UsersLoadedFailed
      ),
      tap((error) => {
        console.error(error)
        alert('Users loaded failed.')
      })
    ), { dispatch: false }
  );
}