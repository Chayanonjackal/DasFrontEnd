import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  pagecheck: boolean = false;
  adminCheck: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe((res: any) => {
      if(res.data.role === "A" || res.data.role === "T"){
        this.adminCheck = true
      }
    })
    console.clear();
  }

  refashPage() {
    this.pagecheck = true
    window.location.reload();
  }

  goToPublicPage() {
    this.router.navigate(['publicform'])
  }

  goToDashBordPage() {
    this.router.navigate(['home/dashbord'])
  }

}
