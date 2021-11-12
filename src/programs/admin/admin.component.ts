import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/shared/interfaces/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: any

  constructor(private http: HttpClient,
    private auth: AuthService,
    private messageService: MessageService,
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
      // this.changeDetectorRefs.detectChanges();
      window.location.reload();
    },err=>{
      this.messageService.add({severity:'error', summary: err, detail: 'Message Content'});
    })

  }

}
