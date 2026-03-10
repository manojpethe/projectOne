import { Component, signal } from '@angular/core';
import { TodoService } from '../../state/todo-service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dynamic-route',
  imports: [RouterLink],
  templateUrl: './dynamic-route.html',
  styleUrl: './dynamic-route.css',
})
export class DynamicRoute {
  constructor(public todoService:TodoService, public route:ActivatedRoute){
  }

  id = signal(0);
  title = signal('');

  ngOnInit(){
    console.log("show params");
    this.route.params.subscribe((params:any)=>{
    console.log(params?.id);
    const result = this.todoService.TodoItemList().find((row)=> row.id == parseFloat(params?.id));
    console.log(result);
    this.id.set(result?.id||0);
    this.title.set(result?.title||'');
    })
  }

}
