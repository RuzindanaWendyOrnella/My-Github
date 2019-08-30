import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Github } from '../github-class/github';
import * as $ from 'jquery';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  github:Github;
  userName:string="";
  response:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    interface ApiResponse{
      login:string;
      id:number;
      avatar_url:string;
      public_repos:number;
      followers:number;
      following:number;
    }
  //   $(document).ready(function(){
  //     alert('I am Called From jQuery');
  //   });
  //   var user="RuzindanaWendyOrnella"
    
  //   this.http.get<ApiResponse>("https://api.github.com/users/"+user+"?access_token=2e1ea0b8e0aad26082cffd6273909cd4877c0624").subscribe(data=>{
  //     // Succesful API request
  //     this.github = new Github(data.login,data.id,data.avatar_url,data.public_repos,data.followers,data.following)
  //   })
   
  }
  
  search(){
    let promise = new Promise((resolve,reject)=>{
    this.http.get("https://api.github.com/users/"+this.userName+"?access_token=2e1ea0b8e0aad26082cffd6273909cd4877c0624").toPromise().then(response=>{
      // Succesful API request
      this.response = response;
      console.log(this.response)
      resolve()
    },
    error=>{
      this.github.login="oups"
      reject(error)
    })
    })
    return promise
  }
  }
  

