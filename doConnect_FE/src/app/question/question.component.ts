import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  selectedFiles!: FileList;
   filetoupload!: File;

  constructor() { }

  ngOnInit(): void {
  }

  selectFile(event:any)
  {
  
     this.selectedFiles=event.target.files;
  }

}
