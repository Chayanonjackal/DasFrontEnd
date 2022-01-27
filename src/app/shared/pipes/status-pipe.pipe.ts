import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusPipe'
})
export class StatusPipePipe implements PipeTransform {

  transform(value: unknown, status: string): any {
    if(status === "T"){
      return "Teacher";
    }
    if(status === "A"){
      return "Admin"
    }


  }

}
