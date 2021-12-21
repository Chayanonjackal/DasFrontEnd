import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-ppinfo',
  templateUrl: './ppinfo.component.html',
  styleUrls: ['./ppinfo.component.css']
})
export class PpinfoComponent implements OnInit {

  studentData:any

  constructor(public config: DynamicDialogConfig, private messageService: MessageService) { }

  ngOnInit(): void {
    // console.log(this.config.data.pp);
    this.studentData = this.config.data.pp
  }

}
