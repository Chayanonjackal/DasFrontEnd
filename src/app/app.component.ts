import { Component } from '@angular/core';
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
}
