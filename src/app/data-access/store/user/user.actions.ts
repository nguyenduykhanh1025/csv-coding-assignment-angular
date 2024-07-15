import { createAction, props } from "@ngrx/store";
import { User } from "../../services/backend.service";

const source = `[USER]`

export const UsersStartLoading = createAction(
  `${source} Users start loading`
);

export const UsersLoadedSuccess = createAction(
  `${source} Users loaded successfully`,
  props<{ users: User[] }>()
);

export const UsersLoadedFailed = createAction(
  `${source} Users loading failed`,
  props<{ error: Error }>()
);
