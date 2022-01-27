import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { dataObj } from 'src/app/shared/interfaces/dataObj';
import * as xlsx from 'xlsx';

@Component({
  selector: 'app-excel-import',
  templateUrl: './excel-import.component.html',
  styleUrls: ['./excel-import.component.css']
})
export class ExcelImportComponent implements OnInit {

  uploadedFiles: any[] = [];
  data!: any[][];
  azureArr: any[][] = [];
  // dataObj: any = {
  //   citizen_id : '' ,
  //   first_name_th : '',
  //   last_name_th : '' ,
  //   priority : '' ,
  //   gpax : '' ,
  //   pat1 : '' ,
  //   pat2 : '' ,
  //   school_name : '',
  //   school_province_name : '',
  //   credit_sum : '' ,
  //   onet01 : '' ,
  //   onet02 : '',
  //   onet03 : '',
  //   onet04 : '' ,
  //   onet05 : '' ,
  //   gat1_current : '',
  //   gat2_current : '',
  //   predic : '' ,
  //   scoredprobabilities : '' ,
  //   add_year : ''
  // }
  reaPredicData: any [][]=[];
  dataArr: any[] = [] ;
  // test:any [][] =[];
  // payloadDataDB:any [][] =[];


  dataForm = new FormGroup({
    citizen_id: new FormControl(null),
    first_name_th: new FormControl(null),
    last_name_th: new FormControl(null),
    priority: new FormControl(null),   //maining
    gpax: new FormControl(null),      //maining
    pat1: new FormControl(null),      //maining
    pat2: new FormControl(null),      //maining
    school_name: new FormControl(null),
    school_province_name: new FormControl(null),
    credit_sum: new FormControl(null),  //maining
    onet01: new FormControl(null), //maining
    onet02: new FormControl(null), //maining
    onet03: new FormControl(null), //maining
    onet04: new FormControl(null), //maining
    onet05: new FormControl(null), //maining
    gat1_current: new FormControl(null), //maining
    gat2_current: new FormControl(null), //maining
    predic: new FormControl(null),
    scoredProbabilities: new FormControl(null),
    add_year: new FormControl(null)
  })

  constructor(private messageService: MessageService ,private http: HttpClient) { }

  ngOnInit(): void {
  }

  onBasicUploadAuto(event: any) {
    console.log(event);

    const target: DataTransfer = <DataTransfer>(event.target);
    // if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();
    // console.log(reader);

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;

      const wb: xlsx.WorkBook = xlsx.read(bstr, { type: 'binary' });

      const wsname: string = wb.SheetNames[0];

      const ws: xlsx.WorkSheet = wb.Sheets[wsname];

      // console.log(ws);

      this.data = (xlsx.utils.sheet_to_json(ws, { header: 1 }));  // all data when input   arr[0] mean collum name
      // citizen_id
      // first_name_th
      // last_name_th
      // priority	        minimg
      // gpax	            minimg
      // pat1	            minimg
      // pat2	            minimg
      // school_name
      // school_province_name
      // credit_sum	      minimg
      // onet01	          minimg
      // onet02	          minimg
      // onet03	          minimg
      // onet04	          minimg
      // onet05	          minimg
      // gat1_current	    minimg
      // gat2_current     minimg

      // console.log(this.data);

      // "priority",
      // "GPAX",
      // "PAT1",
      // "PAT2",
      // "credit_sum",
      // "onet01",
      // "onet02",
      // "onet03",
      // "onet04",
      // "onet05",
      // "gat1_current",
      // "gat2_current",
      // "label" -> "value"


      // must be String all in arr

      //filter arr for API azure service
      for (let index = 1; index < this.data.length; index++) {
        const rowData = this.data[index];
        this.azureArr[index-1] = [];
        //  console.log("head"+rowData);
        for (let j = 0; j < rowData.length; j++) {
          // console.log("===>"+rowData[j]);
          if (j == 3) {
            this.azureArr[index-1][0] = rowData[j]
          }
          if (j == 4) {
            this.azureArr[index-1][1] = rowData[j]
          }
          if (j == 5) {
            this.azureArr[index-1][2] = rowData[j]
          }
          if (j == 6) {
            this.azureArr[index-1][3] = rowData[j]
          }
          if (j == 9) {
            this.azureArr[index-1][4] = rowData[j]
          }
          if (j == 10) {
            this.azureArr[index-1][5] = rowData[j]
          }
          if (j == 11) {
            this.azureArr[index-1][6] = rowData[j]
          }
          if (j == 12) {
            this.azureArr[index-1][7] = rowData[j]
          }
          if (j == 13) {
            this.azureArr[index-1][8] = rowData[j]
          }
          if (j == 14) {
            this.azureArr[index-1][9] = rowData[j]
          }
          if (j == 15) {
            this.azureArr[index-1][10] = rowData[j]
          }
          if (j == 16) {
            this.azureArr[index-1][11] = rowData[j]
          }
          this.azureArr[index-1][12] = "value"

        }
      }
      // console.log(this.azureArr);

      //API service azure
      const token = "MbYkztaXnl+DazJZVZDBQEwPPpSRTK3qv9WF2tdIAE0xhFtbneqBGV6+gx0XLhpqjngjh3cVG6tnfqkflEta9A==";
      const header = {
        headers: new HttpHeaders({
          // 'Access-Control-Allow-Origin':'*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        })
      }
      const url = '/workspaces/546b05c5f7df46fc9eed1b8ef5831567/services/3c2a6537dc12444fbcca7e26c62e8742/execute?api-version=2.0&details=true'
      const playload = {
        "Inputs": {
          "input1": {
            "ColumnNames": [
              "priority",
              "GPAX",
              "PAT1",
              "PAT2",
              "credit_sum",
              "onet01",
              "onet02",
              "onet03",
              "onet04",
              "onet05",
              "gat1_current",
              "gat2_current",
              "label"
            ],
            "Values":  this.azureArr
          }
        },
        "GlobalParameters": {}
      }
      //api shoot
      this.http.post(url, playload, header).subscribe((res: any) => {
        if (res) {
        //  console.log(res);
        // console.log("azureRes");
        // console.log(res.Results.output1.value.Values);
        this.reaPredicData = res.Results.output1.value.Values  //ถูกต้อง

        //loop for change arr to obj
         for (let index = 1; index < this.data.length; index++) {
           const row = this.data[index];
          //  console.log(row);
           for (let j = 0; j < row.length; j++) {
             const col = row[j];
              // console.log(col);
              if (j == 0) {
                this.dataForm.get('citizen_id')?.setValue(col)
                this.dataForm.get('add_year')?.setValue(new Date().getFullYear())
                this.dataForm.get('predic')?.setValue(this.reaPredicData[index-1][13])
                this.dataForm.get('scoredProbabilities')?.setValue(this.reaPredicData[index-1][14])
              }
              if(j == 1){
                this.dataForm.get('first_name_th')?.setValue(col)
              }
              if(j == 2){
                this.dataForm.get('last_name_th')?.setValue(col)
              }
              if(j == 3){
                this.dataForm.get('priority')?.setValue(col)
              }
              if(j == 4){
                this.dataForm.get('gpax')?.setValue(col)
              }
              if(j == 5){
                this.dataForm.get('pat1')?.setValue(col)
              }
              if(j == 6){
                this.dataForm.get('pat2')?.setValue(col)
              }
              if(j == 7){
                this.dataForm.get('school_name')?.setValue(col)
              }
              if(j == 8){
                this.dataForm.get('school_province_name')?.setValue(col)
              }
              if(j == 9){
                this.dataForm.get('credit_sum')?.setValue(col)
              }
              if(j == 10){
                this.dataForm.get('onet01')?.setValue(col)
              }
              if(j == 11){
                this.dataForm.get('onet02')?.setValue(col)
              }
              if(j == 12){
                this.dataForm.get('onet03')?.setValue(col)
              }
              if(j == 13){
                this.dataForm.get('onet04')?.setValue(col)
              }
              if(j == 14){
                this.dataForm.get('onet05')?.setValue(col)
              }
              if(j == 15){
                this.dataForm.get('gat1_current')?.setValue(col)
              }
              if(j == 16){
                this.dataForm.get('gat2_current')?.setValue(col)
              }


            }
            // console.log(this.dataForm.value);
            this.dataArr.push(this.dataForm.value)
         }
          // console.log(this.dataArr);
          const token = localStorage.getItem('Token');
          const headerToken = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            })
          }
          this.http.post("/studentprediction/post-excel-data", this.dataArr, headerToken).subscribe((res: any) => {
            // console.log(res);
            if(res){
              this.messageService.add({severity:'success', summary: res.message, detail:res.message});
              // this.router.navigate(['finish'])

            }else{
              this.messageService.add({severity:'error', summary: res.message, detail:res.message});
            }
          })


        } else {
          //no res
        }

      })




    };

    reader.readAsBinaryString(target.files[0]);


    // for(let file of event.files) {
    //     this.uploadedFiles.push(file);
    // }

    // this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  downloadFileSample(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', './../../../../assets/fileSample/SampleXlsx.xlsx');
    link.setAttribute('download', `SampleXlsx.xlsx`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
