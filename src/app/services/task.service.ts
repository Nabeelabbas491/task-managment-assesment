import { Injectable } from '@angular/core';
import { AppConstants, Task } from '../utils/task.util';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: any = [
    { id: 1, title: 'create a portfolio', description: 'loreum ipsum gypsum loreum ipsum gypsum oreum ipsum gypsum ', status: AppConstants.TasksStatusList[0] },
    { id: 2, title: 'develop a todo list', description: 'loreum ipsum gypsum loreum ipsum gypsum oreum ipsum gypsum ', status: AppConstants.TasksStatusList[1] },
    { id: 3, title: 'main a task list', description: 'loreum ipsum gypsum loreum ipsum gypsum oreum ipsum gypsum ', status: AppConstants.TasksStatusList[2] },
  ]

  constructor() { }
}
