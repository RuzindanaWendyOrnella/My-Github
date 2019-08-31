import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { Github } from '../github-class/github';
import { SelectorMatcher } from '@angular/compiler';
import{ PagesComponent} from '../pages/pages.component'  
@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  // getGoals(){
  //   return Github
  // }

  // getGoal(id){
  //   for (let pages of Github){
  //     if (pages.ids == id){
  //       return pages;
  //     }
  //   }
  
  github:Github;
  userName = 'bazimya';
  response:any;
  constructor(private http:HttpClient) { }

gitRequest(){
  interface ApiResponse{
    login:string;
    id:number;
    avatar_url:string;
    public_repos:number;
    followers:number;
     following:number;
    
    }

// console.log(userName)
//   let promise = new Promise((resolve,reject)=>{
    
//   this.http.get<ApiResponse>("https://api.github.com/users/"+userName+"?access_token=8059df15d4b9babb889d5ed5558e3ceaf30e4712").toPromise().then(response=>{
//     // Succesful API request
//     this.response = response;
//     console.log(this.response)
//     resolve()
//   },
//   error=>{
//     this.github.login="oups"
//     reject(error)
//   })
//   })
//   return promise

}
}

