import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  apiUrl:string = "http://localhost:8081/"

  saveQuestion(data: any): Promise<any> {
    return fetch(this.apiUrl + 'savequestion', {method: 'POST', body: JSON.stringify(data),headers: {'Content-type': 'application/json',},})
    .then((res) => res.text());
  }

  
  update(data: any): Promise<any> {
    return fetch(this.apiUrl + 'question/update', {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.text());
  }

  getAllQuestions(): Promise<any> {
    return fetch(this.apiUrl + 'questions', {
      method: 'GET',
    }).then((res) => res.json());
  }

  getUniqueQuestions(): Promise<any> {
    return fetch(this.apiUrl + 'questions/distinct').then((res) => res.json());
  }

  getQuestionsByTopic(topic: string): Promise<any> {
    return fetch(this.apiUrl + `questionsbytopic/${topic}`).then((res) =>
      res.json()
    );
  }

}
