import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EditPasswordFormComponent } from '../edit-password-form/edit-password-form.component';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  constructor(private http: HttpClient,public config: DynamicDialogConfig, private messageService: MessageService ,
    private  dialogService: DialogService) { }

  editForm = new FormGroup({
    user_id: new FormControl(null),
    user_name: new FormControl(null),
    // password: new FormControl(null),
    first_name: new FormControl(null),
    last_name:new FormControl(null),
    role:new FormControl(null)
  })
  ref: DynamicDialogRef | undefined

  ngOnInit(): void {
    var playload = {
      user_id: this.config.data.user_id
    }

    const token = localStorage.getItem('Token');
    const headerToken = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        Authorization: `Bearer ${token}`
      })
    }
    this.http.post('/user/profile-user',playload,headerToken).subscribe((res :any)=>{
        // console.log(res.data.role);
        this.editForm.get('user_id')?.setValue(res.data.user_id)
       this.editForm.get('user_name')?.setValue(res.data.user_name)
      //  this.editForm.get('password')?.setValue(res.data.password)
       this.editForm.get('first_name')?.setValue(res.data.first_name)
       this.editForm.get('last_name')?.setValue(res.data.last_name)
       this.editForm.get('role')?.setValue(res.data.role)
    })
  }

  submit(){
    //sent playload to edit
    const playload = this.editForm.value
    const token = localStorage.getItem('Token');
    const headerToken = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        Authorization: `Bearer ${token}`
      })
    }
    this.http.put('/user/edit-user', playload,headerToken).subscribe((res:any) =>{
      if(res.status == 200){

        this.messageService.add({severity:'success', summary: res.message , detail: res.status});
        window.location.reload();
      } else{
        this.messageService.add({severity:'error', summary: res.message, detail: res.status});
      }

    },err=>{
      console.log(err);
      this.messageService.add({severity:'error', summary: err.error.message, detail: err.error.status});
    })
  }

  changePassword(){
    var userId = this.config.data.user_id
    this.ref = this.dialogService.open(EditPasswordFormComponent, {
      header: 'Edit password',
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000,
      data:{
        user_id: userId
      }
   });

  }


}
