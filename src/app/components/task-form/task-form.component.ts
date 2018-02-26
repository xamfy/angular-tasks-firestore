import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  task: Task = {
    title : '',
    description:''
  }

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.task.title!='' && this.task.description!=''){
      this.taskService.addTask(this.task);
      this.task.title='';
      this.task.description='';
    }
  }

}
