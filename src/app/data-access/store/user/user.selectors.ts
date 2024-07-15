import { createFeatureSelector, createSelector } from "@ngrx/store";
import { USER_FEATURE_KEY, UserState } from "./user.reducers";
import { User } from "../../services/backend.service";

export const selectUserState = createFeatureSelector<UserState>(USER_FEATURE_KEY);

export const selectUsers = createSelector(
  selectUserState,
  (UserState): User[] => UserState.users
);

export const selectUsersLoading = createSelector(
  selectUserState,
  (UserState): boolean => UserState.loading
);
