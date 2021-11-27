import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  constructor(private http: HttpClient,public config: DynamicDialogConfig, private messageService: MessageService) { }


  editForm = new FormGroup({
    user_name: new FormControl(null),
    password: new FormControl(null),
    first_name: new FormControl(null),
    last_name:new FormControl(null),
    role:new FormControl(null)
  })

  ngOnInit(): void {
  }

  add(){
    //sent playload to edit
    const playload = this.editForm.value
    console.log(playload);
    const token = localStorage.getItem('Token');
    const headerToken = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        Authorization: `Bearer ${token}`
      })
    }

    this.http.post('/user/register',playload,headerToken).subscribe((res:any)=>{
      if(res.status == 200 || res.status == 201){
            this.messageService.add({severity:'success', summary: res.message , detail: res.status});
            window.location.reload();
          } else{
            this.messageService.add({severity:'error', summary: res.message, detail: res.status});
          }
    },err=>{
      this.messageService.add({severity:'error', summary: err.error.message, detail: err.error.status});
    })
  }
}
