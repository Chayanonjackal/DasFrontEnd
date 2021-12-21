import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthService } from 'src/app/shared/services/auth.service';
import * as FileSaver from 'file-saver';
import { ngxCsv } from 'ngx-csv';
import { Table } from 'primeng/table'
import { ViewChild } from '@angular/core';
import { PpinfoComponent } from '../ppinfo/ppinfo.component';

@Component({
  selector: 'app-studentprediction',
  templateUrl: './studentprediction.component.html',
  styleUrls: ['./studentprediction.component.css']
})
export class StudentpredictionComponent implements OnInit {

  ref: DynamicDialogRef | undefined
  recordCount: number = 0;
  sps: any
  playload: any = {
    "user_id": ""
  }
  @ViewChild('dt') dt: Table | undefined;

  constructor(private http: HttpClient,
    private auth: AuthService,
    private confirmationService: ConfirmationService,
    private dialogService: DialogService,
    private messageService: MessageService) { }

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
        // console.log(this.playload);
        this.http.get('/studentprediction/get-all-sp', headerToken).subscribe((res: any) => {
          console.log(res);
          this.sps = res
        })
      } else {
        console.log("user not login");

      }
    })
  }

  applyFilterGlobal($event:any, stringVal:any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }



  infoDetail(sp: any) {

        this.ref = this.dialogService.open(PpinfoComponent, {
          header: 'ข้อมูลนักเรียน',
          width: '70%',
          contentStyle: {"max-height": "500px", "overflow": "auto"},
          baseZIndex: 10000,
          data:{
            pp: sp
          }
      });
  }

  deleteDataPp(sp_id: any) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.deletePP(sp_id)
      },

  });

  }

  deletePP(sp_id:any){
    const token = localStorage.getItem('Token');
    const headerToken = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        Authorization: `Bearer ${token}`
      }),
      body: {sp_id:sp_id}
    }
    this.http.delete('/studentprediction/delete-datasp',headerToken).subscribe((res:any) =>{
      this.messageService.add({severity:'success', summary: res.message, detail: 'Delete success!'});
      window.location.reload();
    },err=>{
      this.messageService.add({severity:'error', summary: err, detail: 'Can not Delete'});
    })
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
}

  exportExcel(){
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.sps);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "studentData");
  });

  }

  exportCsv(){
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: false,
      title: 'studentData',
      useBom: true,
      noDownload: false,
      headers: ["pp_id", "citizen_id","first_name_th","last_name_th","priority","gpax","pat1",
    "pat2","school_name","school_province_name","credit_sum","onet01","onet02","onet03","onet04","onet05","gat1_current"
  ,"gat2_current","predic","scoredProbabilities"]
    };

    new ngxCsv(this.sps, "StudentData",options);

  }

}
