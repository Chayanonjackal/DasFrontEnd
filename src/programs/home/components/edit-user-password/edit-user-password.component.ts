import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-edit-user-password',
  templateUrl: './edit-user-password.component.html',
  styleUrls: ['./edit-user-password.component.css']
})
export class EditUserPasswordComponent implements OnInit {

  editForm = new FormGroup({
    user_id: new FormControl(null),
    password: new FormControl(null)
  })

  constructor(
    private http: HttpClient,
    public config: DynamicDialogConfig,
     private messageService: MessageService ,
    private  dialogService: DialogService
  ) { }

  ngOnInit(): void {

  }

  submit(){
    this.editForm.get('user_id')?.setValue(this.config.data.user_id);
    const payload = this.editForm.value
    const token = localStorage.getItem('Token');
    const headerToken = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        Authorization: `Bearer ${token}`
      })
    }
    this.http.put('/user/edit-password', payload,headerToken).subscribe((res:any) =>{
      if(res.status === 200){

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
