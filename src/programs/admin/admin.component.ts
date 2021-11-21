import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/shared/interfaces/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import {ConfirmationService} from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { AddFormComponent } from './components/add-form/add-form.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: any
  ref: DynamicDialogRef | undefined

  constructor(private http: HttpClient,
    private auth: AuthService,
    private messageService: MessageService,
    private confirmationService:ConfirmationService,
    private  dialogService: DialogService
    // private changeDetectorRefs: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    const token = localStorage.getItem('Token');
    const headerToken = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        Authorization: `Bearer ${token}`
      })
    }
    this.http.get('/user/get-all-user',headerToken).subscribe(res=>{
      console.log(res);
      this.users = res
    })
  }

  deleteUser(userId:any){
    const token = localStorage.getItem('Token');
    const headerToken = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        Authorization: `Bearer ${token}`
      }),
      body: {user_id:userId}
    }
    this.http.delete('/user/delete-user',headerToken).subscribe(res =>{
      this.messageService.add({severity:'success', summary: "res.message", detail: 'Message Content'});
      window.location.reload();
    },err=>{
      this.messageService.add({severity:'error', summary: err, detail: 'Message Content'});
    })

  }

  confirmDelete(userId:any) {
    this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
          this.deleteUser(userId)
        },

    });

  }
  confirmEdit(userId:any){
    this.confirmationService.confirm({
      message: 'Do you want to edit?',
      header: 'Edit confirmation',
      icon: 'pi pi-info-circle',
      accept: ()=> {
        //method Edit    EditFormComponent
        this.ref = this.dialogService.open(EditFormComponent, {
          header: 'Edit profile',
          width: '70%',
          contentStyle: {"max-height": "500px", "overflow": "auto"},
          baseZIndex: 10000,
          data:{
            user_id: userId
          }
      });

      }
    })
  }

  confirmAdd(){
    this.confirmationService.confirm({
      message: 'Do you want to add user?',
      header: 'Add user confirmation',
      icon: 'pi pi-info-circle',
      accept: ()=> {
        //method add    AddFormComponent
        this.ref = this.dialogService.open(AddFormComponent, {
          header: 'Add user profile',
          width: '70%',
          contentStyle: {"max-height": "500px", "overflow": "auto"},
          baseZIndex: 10000
      });

      }
    })

  }

}
