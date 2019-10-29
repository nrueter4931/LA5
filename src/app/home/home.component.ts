import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
condX = false;
condY = false;
condXR2 = false;
condYR2 = true;
condXR3 = true;
condYR3 = false;
condXR4 = true;
condYR4 = true;
  constructor() { }

  ngOnInit() {
  }

}
