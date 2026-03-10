import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  timestamp=signal("HH:MM:ss");
  ngOnInit(){
    this.runClock();
  }

  runClock(){
    setInterval(()=>{
      const dt = new Date();
      this.timestamp.set(dt.toTimeString().slice(0, 8));
    },1000)
  }

}
