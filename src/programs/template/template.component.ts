import { getTestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , Router} from '@angular/router' ;

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor(private route: ActivatedRoute , private router: Router , private http: HttpClientModule) { }

  ngOnInit(): void {

  }

  showHome(){
    this.router.navigate(['home'], {relativeTo: this.route} );

  }

}
