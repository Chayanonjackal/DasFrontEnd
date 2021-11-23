import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  data: any;
  chartOptions: any;
  zones: any[] =[];
  schools: any[] =[];

  constructor() {

  }

  ngOnInit(): void {
    this.data = {
      labels: ['เหนือ', 'กลาง', 'ตะวันออกเฉียงเหนือ', 'ตะวันออก', 'ตะวันตก', 'ใต้'],
      datasets: [
        {
          data: [30, 50, 10, 10, 20, 30],
          backgroundColor: [
            "#42A5F5",
            "#66BB6A",
            "#FFA726",
            "#8c07b8",
            "#b80780",
            "#22b807"
          ],
          hoverBackgroundColor: [
            "#64B5F6",
            "#81C784",
            "#FFB74D",
            "#8c07b8",
            "#b80780",
            "#22b807"
          ]
        }
      ]
    };
    this.zones =[
      {
        name:'เหนือ',
        count: 30
      },
      {
        name:'กลาง',
        count: 50
      },{
        name:'ตะวันออกเฉียงเหนือ',
        count: 10
      },
      {
        name:'ตะวันออก',
        count: 10
      },
      {
        name:'ตะวันตก',
        count: 20
      },{
        name:'ใต้',
        count: 30
      }
    ]
    this.schools = [
      {
        name:"โรงเรียนพระหฤทัยดอนเมือง",
        count:10
      },
      {
        name:"โรงเรียนสีกัน",
        count:20
      }
    ]


  }

}
