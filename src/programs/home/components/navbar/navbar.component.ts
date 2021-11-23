import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,private primeNGConfig:PrimeNGConfig,private auth: AuthService) { }

  role :any;

  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
    this.auth.getProfile().subscribe((res :any)=>{
      this.role = res.data.role
    })
  }

  GoHomePage(){
    this.router.navigate(['home/dashbord'])
  }

  GotoAdmin(){
    if(this.role == 'A'){
      this.router.navigate(['admin'])
      // console.log(this.router.url);
    }else{
      //do nothing
    }
  }

}
