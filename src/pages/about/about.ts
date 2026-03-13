import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'about',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
