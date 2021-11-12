import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from "../interfaces/request";
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient , private router:Router) { }

  //ตัวถามว่า loggedin อยู่รึป่าว
  loggedIn(){
    return !!localStorage.getItem('token');
  }

  //Keep token in localStorage
  setToken(token: string){
    localStorage.setItem('token',token) ;
  }

  //get token from local storage
  getToken(){
    return localStorage.getItem('token');
  }

  //get user data from Data base
  getUserData(playload : object){
    let token
   this.http.post('/user/user-login', playload).subscribe((res) => {
     if(res == 'Invalid user'){
        console.log('Invalid user');
     }else{
      this.setToken(res.toString());
      this.router.navigate(['home']);
     }

    },err =>{
      console.log(err);
      return err
    })
 }

 setLocalStorage(request:Request){
   return request.hasOwnProperty('token')&&localStorage.setItem('Token',request.token) ;
 }

 //login api
 login(playload : any){
   return this.http.post<Request>('/user/login',playload).pipe(

     tap((res)=>{
      //  console.log(res);
      this.setLocalStorage(res)
      this.router.navigate(['home'])
     }),
     catchError(err =>{
       const {error} = err
       return new Observable(res=>{
         let reqData = {}

         if(err.status === 401){
           reqData = {
                      message: error.message ,
                      status: error.status ,
                      token: error.token
                    }
         }else{
            reqData = {
                        message: error.statusText ,
                        status: error.status ,
                        token: ''
                      }
         }
         res.next(reqData)
       })
     })
   );
 }

 //  //register api
  registerUser(playload : any){
    return this.http.post<Request>('/user/register',playload).pipe(
      catchError(err =>{
        const {error} = err
        return new Observable(res=>{
          let reqData = {}

          if(err.status === 401){
            reqData = {
                       message: error.message ,
                       status: error.status ,
                       token: error.token
                     }
          }else{
             reqData = {
                         message: error.statusText ,
                         status: error.status ,
                         token: ''
                       }
          }
          res.next(reqData)
        })
      })
    );
  }

  //get profile

  getProfile(){
    const token = localStorage.getItem('Token');
        return this.http.get('/user/profile',{
          headers:new HttpHeaders({
            'Content-Type':'application/json',
            Authorization: `Bearer ${token}`
          })
        }).pipe(
          catchError(error=>{
            return new Observable(res =>{
              const reqData = {
                message:error.statusText,
                status: error.status
              }

              res.next(reqData)
            })
          })
        )
  }



//  //login api
//  login(playload : any){
//    return this.http.post<Request>('/user/login',playload).subscribe(res=>{
//     this.setLocalStorage(res)
//     this.router.navigate(['home'])

//    },err =>{
//      let errorData = {}
//       // console.log(err);
//       if(err.status === 401){
//         errorData = {
//           message: err.error.message ,
//           status: err.error.status ,
//           token: err.error.token
//         }
//       }else{
//         errorData = {
//           message: err.statusText ,
//           status: err.status ,
//           token: ''
//         }
//       }
//       return errorData
//    })
//  }


//  //register api
//   registerUser(playload : any){
//     return this.http.post('/user/register',playload).subscribe(res => {

//     },err =>{
//       let errorData = {}
//        console.log(err);
//        if(err.status === 401){
//          errorData = {
//            message: err.error.message ,
//            status: err.error.status ,
//            token: err.error.token
//          }
//        }else{
//          errorData = {
//            message: err.statusText ,
//            status: err.status ,
//            token: ''
//          }
//        }
//        err.next(errorData)
//     })
//   }

//   //get profile
//   getprofile(){
//     const token = localStorage.getItem('Token');
//     return this.http.get('/user/profile',{
//       headers:new HttpHeaders({
//         'Content-Type':'application/json',
//         Authorization: `Bearer ${token}`
//       })
//     })
//       .subscribe(res=>{
//         // return res
//     },err => {
//       const errorData = {
//         message: err.statusText,
//         status: err.status
//       }

//       err.next(errorData)
//     })
//   }
}
