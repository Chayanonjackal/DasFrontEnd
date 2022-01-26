import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Request } from './../../app/shared/interfaces/request';
import { AuthService } from 'src/app/shared/services/auth.service';
import decode from 'jwt-decode';
import verify from 'jwt-decode';

import { PasswordModule } from 'primeng/password';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  validation: number = 0;

  loginForm = new FormGroup({
    user_name: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    /* 
      ถ้าหากมี Token อยู่แล้ว เมื่อเข้ามาหน้า Login จะ redirect อัตโนมัติ
      เผื่อ login สำเร็จ แล้วย้อนมาเข้า /login อีกครั้ง
    */
    const hasLoggedIn = localStorage.getItem('Token');
    if (!!hasLoggedIn) {
      this.auth.getProfile().subscribe((response: any) => {
        if (response.status === 200) {
          this.router.navigate(['home/dashbord']);
        }
      });
    }
  }

  submit() {
    const playload = this.loginForm.value;
    this.auth.login(playload).subscribe((res: any) => {
      this.messageService.add({
        severity: res.status === 200 ? 'success' : 'warn',
        summary: res.message ?? 'การเชื่อมต่อผิดพลาด',
        detail: res.message ?? 'ไม่สามารถเชืื่อมต่อกับเซิร์ฟเวอร์ได้, โปรดลองใหม่อีกครั้ง'
      });
      // setTimeout(function(){} ,2000) ;
    });
  }

  cancle() {
    this.loginForm.reset();
  }

}
