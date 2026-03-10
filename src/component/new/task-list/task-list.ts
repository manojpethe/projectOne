import { Component } from '@angular/core';
import { TaskTable } from "../task-table/task-table";
import { TodoService } from '../../../state/todo-service';

@Component({
  selector: 'task-list',
  imports: [TaskTable],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  taskTitle = "";
    constructor(public todoService:TodoService){}

}
