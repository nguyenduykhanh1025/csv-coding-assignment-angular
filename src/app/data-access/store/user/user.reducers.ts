import { ActionReducer, createReducer, on } from "@ngrx/store";
import { User } from "../../services/backend.service";
import { UsersLoadedFailed, UsersLoadedSuccess, UsersStartLoading } from "./user.actions";

export const USER_FEATURE_KEY = 'USER';

export interface UserState {
  users: User[],
  loading: boolean
}

export const initialState: UserState = {
  users: [],
  loading: false
};

export const userReducers: ActionReducer<UserState> = createReducer(
  initialState,
  on(UsersStartLoading, (state: UserState): UserState => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(UsersLoadedSuccess, (state: UserState, action): UserState => {
    return {
      ...state,
      loading: false,
      users: action.users
    };
  }),
  on(UsersLoadedFailed, (state: UserState): UserState => {
    return {
      ...state,
      loading: false,
    };
  }),
);
