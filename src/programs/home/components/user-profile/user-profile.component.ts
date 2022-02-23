import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

interface userData{
  name?:string,
  fname?:string,
  lname?:string,
  role?:string
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

    userForm = new FormGroup({
      name:new FormControl(null),
      fname:new FormControl(null),
      lname:new FormControl(null),
      role:new FormControl(null),

    })

  //  userProfile!:userData

  constructor(
    private auth:AuthService,

  ) { }

  ngOnInit(): void {
    this.auth.getProfile().subscribe((res:any)=>{
      // console.log(res);
      // this.userProfile = res.data
      this.userForm.get('name')?.setValue(res.data.name)
      this.userForm.get('fname')?.setValue(res.data.fname)
      this.userForm.get('lname')?.setValue(res.data.lname)
      this.userForm.get('role')?.setValue(res.data.role)
      // console.log(this.userForm);

    })
  }

}
