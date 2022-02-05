import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

import { MenuItem, ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menuItem: MenuItem[] = [
    {
      label: 'สำหรับผู้ดูแลระบบ',
      items: [
        {
          label: 'การจัดการผู้ใช้',
          icon: 'pi pi-users',
          routerLink: ['/admin'],
          // command: () => {
          //   this.update();
          // },
        },
        {
          label: 'อัพโหลดไฟล์ Excel',
          icon: 'pi pi-file-excel',
          routerLink: ['/home/excel-import'],
        },
      ],
    },
    { separator: true },
    {
      label: 'การจัดการบัญชี',
      icon: 'pi pi-users',
      items: [
        // {
        //   label: 'แก้ไขข้อมูลส่วนตัว',
        //   icon: 'pi pi-user-edit',
        //   // routerLink: ['/home/dashbord'],
        // },
        {
          label: 'ออกจากระบบ',
          icon: 'pi pi-sign-out',
          command: () => this.onLogout(),
        },
      ],
    },
  ];

  menuItem2: MenuItem[] = [
    {
      label: 'เมนู',
      icon: 'pi pi-lists',
      items: [
        {
          label: 'หน้าแรก',
          icon: 'pi pi-home',
          routerLink: ['/home/dashbord'],
        },
        {
          label: 'เกี่ยวกับ',
          icon: 'pi pi-info-circle',
          routerLink: ['/home/about'],
        },
        {
          label: 'ช่วยเหลือ',
          icon: 'pi pi-question-circle',
          routerLink: ['/home/help'],
        },
        {
          label: 'ฟอร์มการประเมิน',
          icon: 'pi pi-file',
          routerLink: ['/home/form'],
        },
        {
          label: 'ผู้ดูแลระบบ',
          icon: 'pi pi-users',
          routerLink: ['/admin'],
        },
      ],
    },
    // {
    //   separator: true,
    // },
    // {
    //   label: 'สำหรับผู้ดูแลระบบ',
    //   items: [
    //     {
    //       label: 'การจัดการผู้ใช้',
    //       icon: 'pi pi-users',
    //       routerLink: ['/admin'],
    //       // command: () => {
    //       //   this.update();
    //       // },
    //     },
    //     // {
    //     //   label: 'อัพโหลดไฟล์ Excel',
    //     //   icon: 'pi pi-file-excel',
    //     //   routerLink: ['/home/excel-import'],
    //     // },
    //   ],
    // },
    { separator: true },
    {
      label: 'ส่วนเก็บข้อมูลนักเรียน',
      items: [
        // {
        //   label: 'แบบประเมินสาธารณะ (Public Form)',
        //   icon: 'pi pi-file',
        //   routerLink: ['/publicform'],
        // },
        {
          label: 'ผลลัพธ์แบบประเมินสาธารณะ (Public Prediction Result)',
          icon: 'pi pi-chart-line',
          routerLink: ['/home/studentprediction'],
        },
        // {
        //   label: 'นำเข้าไฟล์ Excel (Excel Import)',
        //   icon: 'pi pi-file-excel',
        //   routerLink: ['/home/excel-import'],
        // },
      ],
    },
    { separator: true },
    {
      label: 'ส่วนเก็บข้อมูลสำหรับอาจารย์',
      items: [
        {
          label: 'แบบประเมินภายใน (Private Form)',
          icon: 'pi pi-file',
          routerLink: ['/home/form'],
        },
        {
          label: 'ผลลัพธ์แบบประเมินภายใน (Private Prediction Result)',
          icon: 'pi pi-chart-line',
          routerLink: ['/home/privateprediction'],
        },
        // {
        //   label: 'ผลลัพธ์นักเรียนที่มีคุณสมบัติผ่านเกณฑ์ (Public Prediction Result)',
        //   icon: 'pi pi-check-square',
        //   routerLink: ['/home/studentprediction'],
        // },
      ],
    },
    { separator: true },
    {
      label: 'การจัดการบัญชี',
      icon: 'pi pi-users',
      items: [
        {
          label: 'แก้ไขข้อมูลส่วนตัว',
          icon: 'pi pi-user-edit',
          // routerLink: ['/home/dashbord'],
        },
        {
          label: 'ออกจากระบบ',
          icon: 'pi pi-sign-out',
          command: () => this.onLogout(),
        },
      ],
    },
  ];
  role: any;
  sidebarToggle: boolean = false;

  constructor(
    private router: Router,
    private auth: AuthService,
    private primeNGConfig: PrimeNGConfig,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

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
      key: 'logoutPopup',
      target: event.target!,
      message: 'ยืนยันการออกจากระบบ?',
      icon: 'pi pi-power-off',
      acceptLabel: 'ออกจากระบบ',
      acceptButtonStyleClass: 'g-bg-primary',
      accept: () => {
        //confirm action
        this.onLogout();
        this.messageService.add({
          severity: 'success',
          detail: 'ออกจากระบบสำเร็จ',
        });
      },
      rejectLabel: 'ยกเลิก',
      reject: () => {
        //reject action
      },
    });
  }
}
