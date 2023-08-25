import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { AppConstants, Task } from 'src/app/utils/task.util';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  statusList: string[] = AppConstants.TasksStatusList
  tasks: Task[] = []
  input: string = ''
  dropdown: string = 'All'

  constructor(private _taskService: TaskService) {
    this.tasks = this._taskService.tasks
  }

  search() {
    this.tasks = this.input.length ? this._taskService.tasks.filter((m: Task) => m.title.toLowerCase().includes(this.input.toLowerCase())) : this._taskService.tasks
  }

  filterByStatus() {
    this.tasks = this.dropdown == 'All' ? this._taskService.tasks : this._taskService.tasks.filter((m: Task) => m.status == this.dropdown)
  }

}
