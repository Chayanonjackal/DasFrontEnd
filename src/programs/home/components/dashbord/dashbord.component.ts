import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { count } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  data: any;
  dataProvince:any ;
  chartOptions: any;
  zones: any[] = [];
  schools: any[] = [];
  schoolProvinces: any[] = [];
  studentData: any
  filterSchoolName: any[] = []
  filterschoolProvinceName: any[] = []
  schoolname: any[] = [];
  purlSchoolName: any[] = [];
  countSchool: any[] = [];
  schoolProvinceName: any[] = [];
  purlSchoolProvinceName: any[] = [];
  countSchoolProvinceName: any[] = [];

  constructor(private router: Router,
    private http: HttpClient,
    private auth: AuthService,
    private confirmationService: ConfirmationService,
    private dialogService: DialogService,
    private messageService: MessageService) {

  }

  ngOnInit(): void {
    const token = localStorage.getItem('Token');
    const headerToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    }
    this.auth.getProfile().subscribe((res: any) => {
      if (res) {
        // this.playload.user_id = res.data.id
        this.http.get('/studentprediction/get-all-sp', headerToken).subscribe((res: any) => {
          this.studentData = res

          //pie chart
          for (let index = 0; index < this.studentData.length; index++) {
            this.schoolname[index] = this.studentData[index].school_name;
          }
          this.filterSchoolName = this.schoolname.filter((item, pos) => this.schoolname.indexOf(item) === pos) //ได้หัวคอลลัมแล้ว

          for (let index = 0; index < this.filterSchoolName.length; index++) {
            this.purlSchoolName = this.schoolname.filter(schoolname => schoolname == this.filterSchoolName[index])
            this.countSchool[index] = this.purlSchoolName.length //ได้ data แล้ว
          }
          this.data = {
            labels: this.filterSchoolName,
            datasets: [
              {
                data: this.countSchool,
                backgroundColor: [
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726",
                  "#8c07b8",
                  "#b80780",
                  "#22b807",
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726",
                  "#8c07b8",
                  "#b80780",
                  "#22b807",
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726",
                  "#8c07b8",
                  "#b80780",
                  "#22b807",
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726",
                  "#8c07b8",
                  "#b80780",
                  "#22b807",
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726",
                  "#8c07b8",
                  "#b80780",
                  "#22b807",

                ]
              }
            ]
          };

          for (let index = 0; index < this.filterSchoolName.length; index++) {
            this.schools[index] = {
              name: this.filterSchoolName[index],
              count: this.countSchool[index]
            }

          }

          //circle chart
          for (let index = 0; index < this.studentData.length; index++) {
            this.schoolProvinceName[index] = this.studentData[index].school_province_name;
          }
          this.filterschoolProvinceName = this.schoolProvinceName.filter((item, pos) => this.schoolname.indexOf(item) === pos) //ได้หัวคอลลัมแล้ว

          for (let index = 0; index < this.filterschoolProvinceName.length; index++) {
            this.purlSchoolProvinceName = this.schoolProvinceName.filter(schoolprovincename => schoolprovincename == this.filterschoolProvinceName[index])
            this.countSchoolProvinceName[index] = this.purlSchoolProvinceName.length //ได้ data แล้ว
          }
          this.dataProvince = {
            labels: this.filterschoolProvinceName,
            datasets: [
              {
                data: this.countSchoolProvinceName,
                backgroundColor: [
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726",
                  "#8c07b8",
                  "#b80780",
                  "#22b807",
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726",
                  "#8c07b8",
                  "#b80780",
                  "#22b807",
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726",
                  "#8c07b8",
                  "#b80780",
                  "#22b807",
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726",
                  "#8c07b8",
                  "#b80780",
                  "#22b807",
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726",
                  "#8c07b8",
                  "#b80780",
                  "#22b807",

                ]
              }
            ]
          };

          for (let index = 0; index < this.filterschoolProvinceName.length; index++) {
            this.schoolProvinces[index] = {
              name: this.filterschoolProvinceName[index],
              count: this.countSchoolProvinceName[index]
            }

          }




        })
      } else {
        console.log("user not login");

      }
    })






  }

  GoPublicForm() {
    this.router.navigate(['publicform'])
  }

  GoHelpPage() {
    this.router.navigate(['home/help'])
  }
  GoFormPage() {
    this.router.navigate(['home/form'])
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['login'])
  }
  GoToPp() {
    this.router.navigate(['home/privateprediction'])
  }
  GoToSp() {
    this.router.navigate(['home/studentprediction'])
  }

}
