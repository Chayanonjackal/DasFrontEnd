import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { count } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  // side menu
  allMenu!: MenuItem[];

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
  addYearDropdown: any[] = [];
  filteraddYearDropdown: any[] = []
  dropDownObject:any [] = [];
  selectedYear:any;
  studentDataYear: any;
  schoolProvinceNameYear: any[] = [];
  filterschoolProvinceNameYear: any[] = [];
  purlSchoolProvinceNameYear: any[] = [];
  countSchoolProvinceNameYear: any[] = [];
  dataProvinceYear: any;
  dataSchoolYear: any;
  schoolNameYear: any[] = [];
  filterschoolNameYear: any[]=[];
  purlSchoolNameYear: any[] = [];
  countSchoolNameYear: any[]=[];

  constructor(private router: Router,
    private http: HttpClient,
    private auth: AuthService,
    private confirmationService: ConfirmationService,
    private dialogService: DialogService,
    private messageService: MessageService
  ) {

  }

  ngOnInit(): void {
    // this.onYearSelected({ "year": "2022" })
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

          this.filterschoolProvinceName = this.schoolProvinceName.filter((item, pos) => this.schoolProvinceName.indexOf(item) === pos) //ได้หัวคอลลัมแล้ว




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

                 ///filter add_year
                 for (let index = 0; index < this.studentData.length; index++) {
                  this.addYearDropdown[index] = this.studentData[index].add_year;
                }
                this.filteraddYearDropdown = this.addYearDropdown.filter((item, pos) => this.addYearDropdown.indexOf(item) === pos)
                for (let index = 0; index < this.filteraddYearDropdown.length; index++) {
                  this.dropDownObject.push(
                  {
                    year: this.filteraddYearDropdown[index]
                  }
                   )
                } //year for dropdown
                this.selectedYear = {
                  "originalEvent": {
                      "isTrusted": true
                  },
                  "value": {
                      "year": "2022"
                  }
              }
                // this.startYearChart();
                this.onYearSelected(this.selectedYear);




        })
      } else {
        console.log("user not login");

      }
    })






  }

  onYearSelected(val:any){

    //call api
    const token = localStorage.getItem('Token');
      const headerToken = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        })
      }
      var payload = {
        year : val.value.year
      }
    this.http.post('/studentprediction/get-year-sp',payload,headerToken).subscribe((res:any) => {
      this.dataProvinceYear = {}
      this.filterschoolProvinceNameYear = []
      this.countSchoolProvinceNameYear = []
      this.schoolProvinceNameYear = []
      this.purlSchoolProvinceNameYear = []
      this.countSchoolProvinceNameYear = []
      this.studentDataYear = []
      this.studentDataYear = res


        for (let index = 0; index < this.studentDataYear.length; index++) {
          this.schoolProvinceNameYear[index] = this.studentDataYear[index].school_province_name;
        }

        this.filterschoolProvinceNameYear = this.schoolProvinceNameYear.filter((item, pos) => this.schoolProvinceNameYear.indexOf(item) === pos) //ได้หัวคอลลัมแล้ว


        for (let index = 0; index < this.filterschoolProvinceNameYear.length; index++) {
          this.purlSchoolProvinceNameYear = this.schoolProvinceNameYear.filter(schoolprovincenameyear => schoolprovincenameyear == this.filterschoolProvinceNameYear[index])
          this.countSchoolProvinceNameYear[index] = this.purlSchoolProvinceNameYear.length //ได้ data แล้ว
        }

        this.dataProvinceYear = {
          labels: this.filterschoolProvinceNameYear,
          datasets: [
            {
              data: this.countSchoolProvinceNameYear,
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

        this.dataSchoolYear = {}
        this.filterschoolNameYear = []
        this.countSchoolNameYear = []
        this.schoolNameYear = []
        this.purlSchoolNameYear = []
        this.countSchoolNameYear = []


        for (let index = 0; index < this.studentDataYear.length; index++) {
          this.schoolNameYear[index] = this.studentDataYear[index].school_name;
        }

        this.filterschoolNameYear = this.schoolNameYear.filter((item, pos) => this.schoolNameYear.indexOf(item) === pos) //ได้หัวคอลลัมแล้ว


        for (let index = 0; index < this.filterschoolNameYear.length; index++) {
          this.purlSchoolNameYear = this.schoolNameYear.filter(schoolnameyear => schoolnameyear == this.filterschoolNameYear[index])
          this.countSchoolNameYear[index] = this.purlSchoolNameYear.length //ได้ data แล้ว
        }

        this.dataSchoolYear = {
          labels: this.filterschoolNameYear,
          datasets: [
            {
              data: this.countSchoolNameYear,
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


    })

    // side menu
    this.allMenu = [
      {
        label: 'ส่วนเก็บข้อมูลนักเรียน',
        items: [
          {
            label: 'แบบประเมินสาธารณะ (Public Form)',
            icon: 'pi pi-file',
            routerLink: ['/publicform'],
          },
          {
            label: 'ผลลัพธ์แบบประเมินสาธารณะ (Public Prediction Result)',
            icon: 'pi pi-chart-line',
            routerLink: ['/home/studentprediction'],
          },
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
          {
            label: 'นำเข้าไฟล์ Excel (Excel Import)',
            icon: 'pi pi-file-excel',
            routerLink: ['/home/excel-import'],
          },
        ],
      },
    ];

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
  GoToExcelImport() {
    this.router.navigate(['home/excel-import'])
  }

}
