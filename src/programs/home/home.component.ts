import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {


    // this.http.get('/user/get-user').subscribe(res=>{
    //   console.log(res);
    // });
  }

}
