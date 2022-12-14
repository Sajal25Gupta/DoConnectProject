import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() links = new Array<string>();
  @Input() inHome:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
