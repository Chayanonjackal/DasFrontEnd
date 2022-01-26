import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import * as xlsx from 'xlsx' ;

@Component({
  selector: 'app-excel-import',
  templateUrl: './excel-import.component.html',
  styleUrls: ['./excel-import.component.css']
})
export class ExcelImportComponent implements OnInit {

  uploadedFiles: any[] = [];
  data!: any[][];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onBasicUploadAuto(event:any) {
    console.log(event);

      const target : DataTransfer = <DataTransfer>(event.target);
      // if (target.files.length !== 1) throw new Error('Cannot use multiple files');

      const reader: FileReader = new FileReader();

      reader.onload = (e: any) => {
          const bstr :string =e.target.result;

          const wb: xlsx.WorkBook = xlsx.read(bstr, {type: 'binary'});

          const wsname :string = wb.SheetNames[0] ;

          const ws: xlsx.WorkSheet = wb.Sheets[wsname];

          console.log(ws);

          this.data = (xlsx.utils.sheet_to_json(ws, {header: 1})) ;

          console.log(this.data);


      };

      reader.readAsBinaryString(target.files[0]);


    // for(let file of event.files) {
    //     this.uploadedFiles.push(file);
    // }

    // this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}

}
