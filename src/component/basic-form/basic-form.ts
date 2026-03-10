import { Component,effect,signal } from '@angular/core';

@Component({
  selector: 'app-basic-form',
  imports: [],
  templateUrl: './basic-form.html',
  styleUrl: './basic-form.css',
})
export class BasicForm {

  constructor(){
    effect(()=>{
      console.info(this.name());
    })
  }
  
  name = signal('');

}
