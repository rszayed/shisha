import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  constructor() { 
    console.log('constructor')
  }

  ngOnInit(): void {
    console.log('OnInit')
  }

}
