import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

import { MessageService, PrimeNGConfig } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private auth: AuthService,
    private primeNGConfig: PrimeNGConfig,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  role: any;

  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
    this.auth.getProfile().subscribe((res: any) => {
      if (res) {
        this.role = res.data.role;
      } else {
        console.log('user no role');
      }
    });
  }

  GoHomePage() {
    this.router.navigate(['home/dashbord']);
  }

  GotoAdmin() {
    if (this.role == 'A') {
      this.router.navigate(['admin']);
      // console.log(this.router.url);
    } else {
      //do nothing
    }
  }

  GotoHelp() {
    this.router.navigate(['home/help']);
  }

  GoAboutPage() {
    this.router.navigate(['home/about']);
  }
  GotoForm() {
    this.router.navigate(['home/form']);
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  onConfirm(event: Event) {
    // console.log(event);
    this.confirmationService.confirm({
      target: event.target!,
      message: 'ยืนยันการออกจากระบบ?',
      icon: 'pi pi-power-off',
      acceptLabel: "ออกจากระบบ",
      accept: () => {
        //confirm action
        this.onLogout();
        this.messageService.add({
          severity: 'success',
          detail: 'ออกจากระบบสำเร็จ',
        });
      },
      rejectLabel: "ยกเลิก",
      reject: () => {
        //reject action
      },
    });
  }
}
