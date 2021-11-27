import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';
// import * as AOS from 'aos';
// const AOS = require('aos');
// import AOS  from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService,ConfirmationService,DialogService]
})



export class AppComponent {
  title = 'front-endThesis';


  constructor(
    private router:Router
  ){

    // AOS.init();
  }
}

