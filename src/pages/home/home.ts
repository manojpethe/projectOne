import { Component,  ViewChild, ElementRef, AfterViewInit  } from '@angular/core';
import { TaskList } from "../../component/new/task-list/task-list";

@Component({
  selector: 'home',
  imports: [TaskList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit{
  @ViewChild('todoApp') todoAppRef!: ElementRef;
  @ViewChild('todoAppIcon') todoAppIconRef!: ElementRef;

  ngAfterViewInit(){
    const element = this.todoAppRef.nativeElement;
    element.style.position = 'absolute';
  }

  dragData = { startX:0, startY:0, offsetX:0, offsetY:0 };
  todoAppDivX = screen.availWidth * 30 / 100 ;
  todoAppDivY = 80;

  dragStartMethod(event:any){
    this.dragData.offsetX = event.offsetX;
    this.dragData.offsetY = event.offsetY;
  }

  maxWindow(){
    const element = this.todoAppRef.nativeElement;
    element.style.left = `${0}px`;
    element.style.top = `${100}px`;
    element.style = `width: 95%; height: 90%;`;
  }

  minWindow(){
    const element = this.todoAppRef.nativeElement;
    element.style = `display: none;`
    const iconElement = this.todoAppIconRef.nativeElement;
    iconElement.style = `display: block;`
  }

  restoreWindow(){
    const element = this.todoAppRef.nativeElement;
    element.style = `display: block;`
    const iconElement = this.todoAppIconRef.nativeElement;
    iconElement.style = `display: none;`  
  }

  closeWindow(){
    const element = this.todoAppRef.nativeElement;
    element.style = `display: none;`
  }

  dragInProgress(event:any){
    this.todoAppDivX = event.clientX - 22;
    this.todoAppDivY = event.clientY - 22;
    const element = this.todoAppRef.nativeElement;
    element.class = "cursorcursor-grab";
    element.style.left = `${this.todoAppDivX - this.dragData.offsetX}px`;
    element.style.top = `${this.todoAppDivY - this.dragData.offsetY}px`;
  }

  dragoverProc(event:any){
    event.preventDefault();
    event.cursor = "cursor-grab";
    // const element = this.todoAppRef.nativeElement;
    // element.class = "cursorcursor-grab";
  }

}
