import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { AppConstants, Task } from 'src/app/utils/task.util';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  statusList: string[] = AppConstants.TasksStatusList
  form: FormGroup | any;
  id: null | number = null;

  constructor(private _formBuilder: FormBuilder,
    private _taskService: TaskService,
    private _router: Router,
    private _route: ActivatedRoute) {
    this.initializeForm()
  }

  ngOnInit(): void {
    this._route.queryParams.subscribe((res: any) => {
      console.log(res)
      if (Object.keys(res).length) {
        const task = this._taskService.tasks.find((m: Task) => m.id == res.id)
        this.id = res.id
        this.form.patchValue(task)
      }
    })
  }

  initializeForm() {
    this.form = this._formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      status: ['', Validators.required],
    });
  }

  createTask() {
    if (this.id) {
      const idx = this._taskService.tasks.findIndex((m: Task) => m.id == this.id)
      this._taskService.tasks[idx] = { ...this.form.value, id: this.id }
    } else {
      const id = this._taskService.tasks[this._taskService.tasks.length - 1].id + 1
      let task = { ...this.form.value, id: id }
      this._taskService.tasks.push(task)
    }
    this._router.navigate(['/tasks'])
  }

}
