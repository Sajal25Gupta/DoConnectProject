import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Question } from '../service/question';
import { QuestionService } from '../service/question.service';


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  selectedFiles!: FileList;
  constructor(
    public dialogRef: MatDialogRef<AnswerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Question,
    private service: QuestionService
  ) {}

  ngOnInit(): void {
  }

  sendAnswer(): void {
    this.service.update(this.data).then((res) => {
      if (res === 'ok') {
        this.dialogRef.close();
      }
    });
  }

  selectFile(event:any)
  {
  
     this.selectedFiles=event.target.files;
     
  }


      


}
