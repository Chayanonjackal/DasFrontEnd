import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient, private router: Router, ) { }

  ngOnInit(): void {


    // this.http.get('/user/get-user').subscribe(res=>{
    //   console.log(res);
    // });
  }

  GoAdminPage(){
    this.router.navigate(['admin'])
  }

}
