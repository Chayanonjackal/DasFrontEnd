import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  pagecheck:boolean = false ;

  constructor(private router:Router) { }

  ngOnInit(): void {
    // window.location.reload();
    // window.onload = function() {
    //   if(!window.location.hash) {
    //     !window.location  = window.location + '#loaded';
    //     window.location.reload();
    //   }
    // }
    // if(this.pagecheck == false){
    //   this.refashPage()
    // }
    console.clear();
  }

  refashPage(){
    this.pagecheck = true
    window.location.reload();
  }

  goToPublicPage(){
    this.router.navigate(['publicform'])
  }

}
