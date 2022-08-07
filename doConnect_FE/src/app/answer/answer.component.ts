import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  selectedFiles!: FileList;

  constructor() { }

  ngOnInit(): void {
  }

  selectFile(event:any)
  {
  
     this.selectedFiles=event.target.files;
     
  }

}
