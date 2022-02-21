import { EditUserPasswordComponent } from './../edit-user-password/edit-user-password.component';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpHeaders ,HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userId = ''
  editForm = new FormGroup({
      user_id: new FormControl(null),
      user_name: new FormControl(null),
      first_name: new FormControl(null),
      last_name: new FormControl(null),
      role:new FormControl(null)
  })
  ref: DynamicDialogRef | undefined

  constructor(
    private auth:AuthService,
    private http:HttpClient,
    private messageService:MessageService,
    private dialogService:DialogService
  ) { }

  ngOnInit(): void {
    this.auth.getProfile().subscribe((res:any)=>{
      // console.log(res.data.id);
      this.userId = res.data.id
      var payload = {
        user_id: res.data.id
      }
      const token = localStorage.getItem('Token');
      const headerToken = {
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          Authorization: `Bearer ${token}`
        })
      }
      this.http.post('/user/profile-user',payload,headerToken).subscribe((res:any)=>{
          this.editForm.get('user_id')?.setValue(res.data.user_id)
          this.editForm.get('user_name')?.setValue(res.data.user_name)
          this.editForm.get('first_name')?.setValue(res.data.first_name)
          this.editForm.get('last_name')?.setValue(res.data.last_name)
          this.editForm.get('role')?.setValue(res.data.role)
      })

    })
  }

  submit(){
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
        // this.ngOnInit()
      } else{
        this.messageService.add({severity:'error', summary: res.message, detail: res.status});
      }

    },err=>{
      this.messageService.add({severity:'error', summary: err.error.message, detail: err.error.status});
    })
  }

  changePassword(){
    var userId = this.userId
    this.ref = this.dialogService.open(EditUserPasswordComponent, {
      header: 'แก้ไขรหัสผ่าน',
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000,
      data:{
        user_id: userId
      }
   });

  }

}
