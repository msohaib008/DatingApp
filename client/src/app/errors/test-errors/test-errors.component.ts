import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
  validationError:string[]=[];
  baseUrl = 'https://localhost:5001/api/';
  token = '';


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')!=null)
    {
      let user =JSON.parse(localStorage.getItem('user') || '');
       this.token = "Bearer "+user.token;
      console.log("token : ", this.token);
    }
    
  }

  get404Error(){
    this.http.get(this.baseUrl+'buggy/not-found',{
      headers:{
        "Authorization" : this.token,
      }
    }).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  get400Error(){
    this.http.get(this.baseUrl+'buggy/bad-request',{
      headers:{
        "Authorization" : this.token,
      }
    }).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  get500Error(){
    this.http.get(this.baseUrl+'buggy/server-error',{
      headers:{
        "Authorization" : this.token,
      }
    }).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  get401Error(){
    this.http.get(this.baseUrl+'buggy/auth').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  get400ValidationError(){
    this.http.post(this.baseUrl+'account/register',{
    }).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
      this.validationError=error;
    })
  }

}
