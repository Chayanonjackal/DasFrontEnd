import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthService } from 'src/app/shared/services/auth.service';
import { EditUserPasswordComponent } from '../edit-user-password/edit-user-password.component';

@Component({
  selector: 'app-user-confirm-password',
  templateUrl: './user-confirm-password.component.html',
  styleUrls: ['./user-confirm-password.component.css']
})
export class UserConfirmPasswordComponent implements OnInit {

  confirmPasswordForm = new FormGroup({
    password: new FormControl()
  })

  user_id: any
  ref: DynamicDialogRef | undefined
  editformData: any

  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private messageService: MessageService,
    private dialogService: DialogService,
    private config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    this.auth.getProfile().subscribe((res: any) => {
      this.user_id = res.data.id
    })
    this.editformData = this.config.data.editForm

  }

  submit() {
    var payload = {
      user_id: this.user_id,
      password: this.confirmPasswordForm.get('password')?.value
    }
    const token = localStorage.getItem('Token');
    const headerToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    }
    this.http.post('/user/check-password', payload, headerToken).subscribe((res: any) => {
      // console.log(res);
      if (res.status === 200) {
        if (this.config.data.statusClick === 1) {
          console.log("Change profile");

          //if pass edit data
          const playload = this.editformData
          const token = localStorage.getItem('Token');
          const headerToken = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            })
          }
          this.http.put('/user/edit-user', playload, headerToken).subscribe((res: any) => {
            if (res.status === 200) {

              this.messageService.add({ severity: 'success', summary: res.message, detail: res.status });
              window.location.reload();

            } else {
              this.messageService.add({ severity: 'error', summary: res.message, detail: res.status });
            }

          }, err => {
            this.messageService.add({ severity: 'error', summary: err.error.message, detail: err.error.status });
          })
        } else if (this.config.data.statusClick === 2) {
          console.log("Change password");
          var userId = this.user_id
          this.ref = this.dialogService.open(EditUserPasswordComponent, {
            header: 'แก้ไขรหัสผ่าน',
            width: '70%',
            contentStyle: { "max-height": "500px", "overflow": "auto" },
            baseZIndex: 10000,
            data: {
              user_id: userId
            }
          });

        }

      }
      // else{
      //   console.log("error");
      //   this.messageService.add({severity:'error', summary: res.message, detail: res.status});
      // }
    },error =>{
      this.messageService.add({severity:'error', summary: error.error.message, detail: error.status});
      // console.log( error);
    })

  }

}
