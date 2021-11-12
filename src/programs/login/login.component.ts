import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Request } from './../../app/shared/interfaces/request';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import decode from 'jwt-decode';
import { AuthService } from 'src/app/shared/services/auth.service';
import verify from 'jwt-decode';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validation: number = 0;


  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private messageService : MessageService
    ) { }

  userForm = new FormGroup({
    user_name: new FormControl(null),
    password: new FormControl(null)
  })

  ngOnInit(): void {
    // const playload = {
    //   "user_id" : "1"
    // }
    // const httpHeaders = new HttpHeaders({
    //   'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX25hbWUiOiJhb20iLCJwYXNzd29yZCI6ImFvbSIsImZpcnN0X25hbWUiOiJDaGEiLCJsYXN0X25hbWUiOiJQciIsInJvbGUiOiJBIiwiaWF0IjoxNjM1NTAwMDE4fQ._o4nwQSEZwFq0430rBmzodza3kKFYq5dyDsXXZXQsLI'
    // })
    // this.http.post('/user/get-user-data' , playload , { headers: httpHeaders}).subscribe(res=>{
    //   console.log(res);
    // })
  }

  submit() {
    const playload = this.userForm.value
   this.auth.login(playload).subscribe((res :any) =>{
    this.messageService.add({severity:'info', summary: res.message, detail:res.message});
    // setTimeout(function(){} ,2000) ;
   })
  }

}


