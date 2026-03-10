import { Component,input,signal } from '@angular/core';
import { TodoTable } from "../todo-table/todo-table";

type Item = {
  id:number;
  title:string;
  done:boolean;
  cdate:string;
}

@Component({
  selector: 'todo-list',
  imports: [TodoTable],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  signalTodoItemList = signal<Item[]>([]);
  taskTitle = "";
  

  updateItem(id:number){
    const index = this.signalTodoItemList().findIndex(item => item?.id === id);
    let newList = this.signalTodoItemList();
    newList.splice(index,1);
    this.signalTodoItemList.set(newList);
  }

  addItem(newTitle:string){
    const dt = new Date();
    const today = dt.toLocaleString();
    const newId = Math.random()*1000;
    let newItem:Item = {id:newId, title: newTitle, done: false, cdate: today};
    let list = this.signalTodoItemList();
    list.push(newItem);
    this.signalTodoItemList.set(list)
    this.taskTitle = "";
  }

}
