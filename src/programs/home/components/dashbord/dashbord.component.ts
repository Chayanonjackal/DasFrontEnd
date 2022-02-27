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
  dataProvince: any;
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
  dropDownObject: any[] = [];
  selectedYear: any;
  studentDataYear: any;
  schoolProvinceNameYear: any[] = [];
  filterschoolProvinceNameYear: any[] = [];
  purlSchoolProvinceNameYear: any[] = [];
  countSchoolProvinceNameYear: any[] = [];
  dataProvinceYear: any;
  dataSchoolYear: any;
  schoolNameYear: any[] = [];
  filterschoolNameYear: any[] = [];
  purlSchoolNameYear: any[] = [];
  countSchoolNameYear: any[] = [];
  arrColor: any[] = [];

  //bar chart
  basicData: any;
  basicOptions: any;
  barDataSets: any[] = [];
  arrSchoolname: any[] = [];
  arrSelectedYear: any[] = [];
  schoolNameYearData: any
  schoolNameYearOptions: any
  ProvinceYearData: any
  ProvinceYearOptions: any

  //testChart




  constructor(private router: Router,
    private http: HttpClient,
    private auth: AuthService,
    private confirmationService: ConfirmationService,
    private dialogService: DialogService,
    private messageService: MessageService
  ) {

  }

  ngOnInit(): void {
    //random color
    // for (let index = 0; index < 100; index++) {
    //   var randomColor = Math.floor(Math.random()*16777215).toString(16);
    //    this.arrColor[index] = "#"+randomColor
    // }
    this.arrColor = [
      "#850538",
      "#bc66aa",
      "#e488b1",
      "#b58d67",
      "#a8a178",
      "#93a16e",
      "#618227",
      "#83732f",
      "#a76551",
      "#9a65c1",
      "#a75197",
      "#a9415f",
      "#a93ebc",
      "#ff7b86",
      "#e8f2c8",
      "#8cf6e1",
      "#00f8ce",
      "#6ae400",
      "#af6046",
      "#79645a",
      "#899d8c",
      "#9fcd5d",
      "#afe137",
      "#64e075",
      "#3db67e",
      "#00a1a6",
      "#a49edb",
      "#5bbcec",
      "#64d4be",
      "#9cedb8",
      "#e29b51",
      "#bd3494",
      "#a220a5",
      "#d247a0",
      "#fb8f96",
      "#b0985d",
      "#8cba73",
      "#6af4a1",
      "#ff7343",
      "#ff2c81",
      "#ee5549",
      "#e7008c",
      "#7674f7",
      "#83d3f3",
      "#8484d9",
      "#c11b92",
      "#ea4ce9",
      "#2577da",
      "#296a90",
      "#9685cb",
      "#d7a7de",
      "#e7b8e0",
      "#975592",
      "#932a7f",
      "#b70a86",
      "#b7038a",
      "#aa0a78",
      "#911a59",
      "#b95051",
      "#b4954b",
      "#5dd7bc",
      "#b9b473",
      "#d29866",
      "#b9a537",
      "#d80058",
      "#8000a4",
      "#d50040",
      "#b51518",
      "#a52b1d",
      "#de8375",
      "#de9576",
      "#ca905b",
      "#df936e",
      "#c56e78",
      "#834d74",
      "#dfb895",
      "#a4af82",
      "#233d10",
    ]


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
                backgroundColor: this.arrColor
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
                backgroundColor: this.arrColor
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
          }
          // console.log(this.dropDownObject);

          //year for dropdown
          this.selectedYear = {
            "originalEvent": {
              "isTrusted": true
            },
            "value": {
              "year": (!!this.dropDownObject[0]) ? this.dropDownObject[0].year : 2021
            }
          }
          // this.startYearChart();
          this.onYearSelected(this.selectedYear);




        })
      } else {
        // console.log("user not login");

      }
    })

    this.updateChartOption()






  }

  updateChartOption() {
    this.chartOptions = this.chartTheme()

  }

  chartTheme() {
    return {
      // plugins: {
      //   legend: {
      //     display: false,
      //   }
      // }
      legend:{
        display: false
      }
    }
  }

  onYearSelected(val: any) {

    //call api
    const token = localStorage.getItem('Token');
    const headerToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    }
    var payload = {
      year: val.value.year
    }
    this.http.post('/studentprediction/get-year-sp', payload, headerToken).subscribe((res: any) => {
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
            backgroundColor: this.arrColor
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
            backgroundColor: this.arrColor
          }
        ]
      };

      //barchart 2
      this.schoolNameYearData = {
        labels: this.filterschoolNameYear,
        datasets: [{
          type: 'bar',
          label: 'ชุดข้อมูลชื่อโรงเรียน',
          backgroundColor: this.arrColor,
          data: this.countSchoolNameYear
        }]
      };

      this.schoolNameYearOptions = {

        legend:{
          display: false
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        // responsive: true,
        scales: {
          xAxes: [{
            stacked: true,
            display: false
            // maxTicksLimit:  this.filterschoolNameYear.length
          }],
          yAxes: [{
            stacked: true
          }]
        }
      };

      //barchart 1
      this.ProvinceYearData = {
        labels: this.filterschoolProvinceNameYear,
        datasets: [{
          type: 'bar',
          label: 'ชุดข้อมูลจังหวัด',
          backgroundColor: this.arrColor,
          data: this.countSchoolProvinceNameYear
        }]
      };

      this.ProvinceYearOptions = {
        legend:{
          display: false
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        responsive: true,
        scales: {
          xAxes: [{
            stacked: true,
            display: false
          }],
          yAxes: [{
            stacked: true
          }]
        }
      };



    })



    // side menu
    this.allMenu = [
      {
        label: 'ส่วนเก็บข้อมูลนักเรียน',
        items: [
          {
            label: 'แบบประเมิน (Public Form)',
            icon: 'pi pi-file',
            routerLink: ['/publicform'],
            // label: 'แบบประเมินสาธารณะ (Public Form)',
            // icon: 'pi pi-file',
            // routerLink: ['/publicform'],
          },
          {
            label: 'ผลลัพธ์แบบประเมิน (Public Prediction Result)',
            icon: 'pi pi-chart-line',
            routerLink: ['/home/studentprediction'],
          },
          {
            label: 'นำเข้าไฟล์ Excel (Excel Import)',
            icon: 'pi pi-file-excel',
            routerLink: ['/home/excel-import'],
          },
        ],
      },
      { separator: true },
      {
        label: 'ส่วนเก็บข้อมูลสำหรับอาจารย์',
        items: [
          {
            label: 'แบบประเมินส่วนตัว (Private Form)',
            icon: 'pi pi-file',
            routerLink: ['/home/form'],
          },
          {
            label: 'ผลลัพธ์แบบประเมินส่วนตัว (Private Prediction Result)',
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
