import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'predictPipe'
})
export class PredictPipePipe implements PipeTransform {

  transform(value: unknown, predic:string):any {
    if (predic === 'Yes') {
      return "รับเข้าศึกษา" ;
    }
    if (predic === 'No') {
      return "ไม่รับเข้าศึกษา"
    }
  }

}
