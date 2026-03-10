import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../state/todo-service';

type Item = {
  id:number;
  title:string;
  done:boolean;
  cdate:string;
}

@Component({
  selector: 'todo-table',
  imports: [],
  templateUrl: './todo-table.html',
  styleUrl: './todo-table.css',
})
export class TodoTable {
  @Input() todoItemList!:Item[];
  @Output() updateItem = new EventEmitter<number>();

  triggerUpdateItem(id:number){
    setTimeout(()=>{
      this.updateItem.emit(id);
    },5000)
  }

}
