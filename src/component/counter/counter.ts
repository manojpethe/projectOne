import { Component, signal } from '@angular/core';

@Component({
  selector: 'counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  protected readonly signalCounter = signal(0);


  handlePlus(){
    this.signalCounter.update( val => val + 1);
  }

  handleMinus(){
    this.signalCounter.update( val => val - 1);

  }

}
