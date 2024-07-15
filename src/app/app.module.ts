import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BackendService } from './data-access/services/backend.service';
import { StoreModule } from '@ngrx/store';
import { TASK_FEATURE_KEY, taskReducers } from './data-access/store/task/task.reducers';
import { EffectsModule } from '@ngrx/effects';
import { TaskEffects } from './data-access/store/task/task.effects';
import { TaskModule } from './feature/tasks/task.module';
import { USER_FEATURE_KEY, userReducers } from './data-access/store/user/user.reducers';
import { UserEffects } from './data-access/store/user/user.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskModule,
    StoreModule.forRoot(
      {
        [TASK_FEATURE_KEY]: taskReducers,
        [USER_FEATURE_KEY]: userReducers
      }
    ),
    EffectsModule.forRoot([
      TaskEffects,
      UserEffects
    ]),
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
