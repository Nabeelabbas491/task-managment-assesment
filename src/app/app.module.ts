import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './components/task/task.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "tasks",
    pathMatch: "full",

  },
  {
    path: "tasks",
    component: TaskComponent
  },
  {
    path: "create-task",
    component: CreateTaskComponent
  }
  // {
  //   path: "**",
  //   component: ,
  // },
];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    CreateTaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
