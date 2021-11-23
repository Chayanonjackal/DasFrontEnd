import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService,ConfirmationService,DialogService]
})



export class AppComponent {
  title = 'front-endThesis';

  navBarCheck : any = this.router.url === '/'

  constructor(
    private router:Router
  ){
    console.log(this.navBarCheck);

  }
}

