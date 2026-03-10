import { Component } from '@angular/core';
import { TodoService } from '../../../state/todo-service';


@Component({
  selector: 'task-table',
  imports: [],
  templateUrl: './task-table.html',
  styleUrl: './task-table.css',
})
export class TaskTable {

  constructor(public todoService:TodoService){}

  deleteTask(id:number){
    console.log(id);
    setTimeout(()=>{this.todoService.updateItem(id)},5000);
  }

}
