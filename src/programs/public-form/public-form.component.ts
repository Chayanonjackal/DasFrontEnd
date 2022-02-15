import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';

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
    scoredProbabilities: new FormControl(null),
    add_year: new FormControl(null)
  })

  user_id:any = 0
  hindbutton:boolean = true
  provinces: any[] = [];
  selectedProvince: any;


  constructor(private http: HttpClient, private fb: FormBuilder,
    private auth: AuthService,
    private messageService : MessageService,
    private router:Router) {



    }

  ngOnInit(): void {
    const url = environment.thaiProvince
    this.http.get(url).subscribe((res:any) => {
      if(res){
        // console.log(res.data);
        this.provinces = res.data
        this.selectedProvince = { province: 'กรุงเทพมหานคร' };
      }
    })

    const token = localStorage.getItem('Token');
    if(token == null || token == undefined){
      this.hindbutton = false ;
    }else{
      this.hindbutton = true ;
    }
  }

  submitForm() {
    const token = environment.azureApiKey;
    const header = {
      headers: new HttpHeaders({
        // 'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    }
    const url = environment.azureURLshort
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
    this.http.post(url, playload, header).subscribe((res: any) => {
      if (res) {
        this.predicForm.get('predic')?.setValue(res.Results.output1.value.Values[0][13])
        this.predicForm.get('scoredProbabilities')?.setValue(res.Results.output1.value.Values[0][14])
        const token1 = localStorage.getItem('Token');
        //splitStrong
        var splitString  = this.predicForm.get('citizen_id')?.value
        var pureString = splitString.split("-")
        var alreadyToUse = pureString[0]+pureString[1]+pureString[2]+pureString[3]+pureString[4]

        this.predicForm.get('citizen_id')?.setValue(alreadyToUse)
        //user_id get

        const storeProvince =this.predicForm.get('school_province_name')?.value.province
        this.predicForm.get('school_province_name')?.setValue(storeProvince)
        //Cut string "โรงเรียน"
        var str = this.predicForm.get('school_name')?.value
        var strReplace = str.replace("โรงเรียน","")
        this.predicForm.get('school_name')?.setValue(strReplace)
        //timestamp
        this.predicForm.get('add_year')?.setValue(new Date().getFullYear())

        const playload1:any =this.predicForm.value
        // console.log(playload1);
        this.http.post('/studentprediction/store',playload1).subscribe((resopnse:any)=>{
          if(resopnse){
            this.messageService.add({severity:'success', summary: resopnse.message, detail:resopnse.message});
            this.router.navigate(['finish'])

          }else{
            this.messageService.add({severity:'error', summary: resopnse.message, detail:resopnse.message});
          }

        })

      } else {
        //no res
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
