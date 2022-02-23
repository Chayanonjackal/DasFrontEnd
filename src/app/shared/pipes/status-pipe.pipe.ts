import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusPipe'
})
export class StatusPipePipe implements PipeTransform {

  transform(value: unknown, status: string): any {
    if(status === "T"){
      return "อาจารย์";
    }
    if(status === "A"){
      return "ผู้ดูแลระบบ"
    }


  }

}
