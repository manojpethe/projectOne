import { Injectable, signal } from '@angular/core';

type Item = {
  id:number;
  title:string;
  done:boolean;
  cdate:string;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  TodoItemList = signal<Item[]>([]);

  updateItem(id:number){
    const index = this.TodoItemList().findIndex(item => item?.id === id);
    let newList = this.TodoItemList();
    newList.splice(index,1);
  }

  addItem(newTitle:string){
    const dt = new Date();
    const today = dt.toLocaleString();
    const newId = (Math.random()*1000);
    let newItem:Item = {id:newId, title: newTitle, done: false, cdate: today};
    let list = this.TodoItemList();
    list.push(newItem);
    this.TodoItemList.set(list)
  }

}
