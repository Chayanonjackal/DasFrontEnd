import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-public-form',
  templateUrl: './public-form.component.html',
  styleUrls: ['./public-form.component.css']
})
export class PublicFormComponent implements OnInit {

  predicForm = new FormGroup({
    citizen_id: new FormControl(null, Validators.required),
    first_name_th: new FormControl(null, Validators.required),
    last_name_th: new FormControl(null, Validators.required),
    priority: new FormControl(null, [Validators.required]),   //maining  ,Validators.minLength(1)
    gpax: new FormControl(null, Validators.required),      //maining
    pat1: new FormControl(null, Validators.required),      //maining
    pat2: new FormControl(null, Validators.required),      //maining
    school_name: new FormControl(null, Validators.required),
    school_province_name: new FormControl(null, Validators.required),
    credit_sum: new FormControl(null, Validators.required),  //maining
    onet01: new FormControl(null, Validators.required), //maining
    onet02: new FormControl(null, Validators.required), //maining
    onet03: new FormControl(null, Validators.required), //maining
    onet04: new FormControl(null, Validators.required), //maining
    onet05: new FormControl(null, Validators.required), //maining
    gat1_current: new FormControl(null, Validators.required), //maining
    gat2_current: new FormControl(null, Validators.required), //maining
    predic: new FormControl(null),
    scoredProbabilities: new FormControl(null)
  })

  user_id:any = 0
  hindbutton:boolean = true

  constructor(private http: HttpClient, private fb: FormBuilder,
    private auth: AuthService,
    private messageService : MessageService,
    private router:Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('Token');
    if(token == null || token == undefined){
      this.hindbutton = false ;
    }else{
      this.hindbutton = true ;
    }
  }

  submitLogin() {
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
          "Values": [
            [
              String(this.predicForm.controls['priority'].value),  //priority
              String(this.predicForm.controls['gpax'].value),  //GPAX
              String(this.predicForm.controls['pat1'].value),  //PAT1
              String(this.predicForm.controls['pat2'].value),  //PAT2
              String(this.predicForm.controls['credit_sum'].value),  //credit_sum
              String(this.predicForm.controls['onet01'].value),  //onet01
              String(this.predicForm.controls['onet02'].value),  //onet02
              String(this.predicForm.controls['onet03'].value),  //onet03
              String(this.predicForm.controls['onet04'].value),  //onet04
              String(this.predicForm.controls['onet05'].value),  //onet05
              String(this.predicForm.controls['gat1_current'].value),  //gat1_current
              String(this.predicForm.controls['gat2_current'].value),  //gat2_current
              "value"
            ]
          ]
        }
      },
      "GlobalParameters": {}
    }
    // console.log(playload);
    this.http.post(url, playload, header).subscribe((res: any) => {
      // console.log(res);
      if (res) {
        // console.log(res.Results.output1.value.Values[0][13]);
        this.predicForm.get('predic')?.setValue(res.Results.output1.value.Values[0][13])
        this.predicForm.get('scoredProbabilities')?.setValue(res.Results.output1.value.Values[0][14])
        // console.log(this.predicForm.controls['predic'].value);
        // console.log(this.predicForm);
        // this.predicForm.touched
        const token1 = localStorage.getItem('Token');
        // const headerToken = {
        //   headers: new HttpHeaders({
        //     'Content-Type': 'application/json',
        //     Authorization: `Bearer ${token1}`
        //   })
        // }
        //splitStrong
        var splitString  = this.predicForm.get('citizen_id')?.value
        var pureString = splitString.split("-")
        var alreadyToUse = pureString[0]+pureString[1]+pureString[2]+pureString[3]+pureString[4]
        // need to filter นาย นาง in FirstName and filter school , province school about โรงเรียน , จังหวัด  api จังหวัด
        this.predicForm.get('citizen_id')?.setValue(alreadyToUse)
        //user_id get
        // this.predicForm.get('user_id')?.setValue(this.user_id)
        const playload1:any =this.predicForm.value
        // console.log(playload1);

        this.http.post('/studentprediction/store',playload1).subscribe((resopnse:any)=>{
          // console.log(resopnse);
          if(resopnse){
            this.messageService.add({severity:'success', summary: resopnse.message, detail:resopnse.message});
            // setTimeout(function(){
            //   location.reload();
            // }, 500);
            // window.location.reload();
            this.router.navigate(['finish'])

          }else{
            this.messageService.add({severity:'error', summary: resopnse.message, detail:resopnse.message});
          }

        })

      } else {
        //no res
        console.log('no res');

      }
    })
  }



  reset(){
    this.predicForm.reset()
    this.predicForm.get('user_id')?.setValue(this.user_id)
  }

  GoHomePage(){
    this.router.navigate(['home/dashbord'])
  }

}
