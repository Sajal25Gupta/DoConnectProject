import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  url = 'http://localhost:8081/';

  approve(id: Number): Promise<any> {
    return fetch(this.url + 'setApproved/' + id, {
      method: 'PATCH',
    }).then((res) => res.text());
  }

  delete(id: Number): Promise<string> {
    return fetch(this.url + 'delete/' + id, {
      method: 'DELETE',
    }).then((res) => res.text());
  }

  getQuestions(): Promise<Body> {
    return fetch(this.url + 'questions/notapproved', {
      method: 'GET',
    }).then((res) => res.json());
  }

  getCount(): Promise<string> {
    return fetch(this.url + 'questionCount', {
      method: 'GET',
    }).then((res) => res.text());
  }

  getUsers(): Promise<Body> {
    return fetch(this.url + 'getallusers', {
      method: 'GET',
    }).then((res) => res.json());
  }

  deleteUser(data:any):Promise<any>{
    return fetch(this.url+ 'deleteuser', {method: 'DELETE',body: JSON.stringify(data),headers: {'Content-type': 'application/json',},})
    .then((res) => res.text());
  }

}
