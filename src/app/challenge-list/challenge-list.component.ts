import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ImageBarComponent } from '../image-bar/image-bar.component';
import { ResultCode } from '../ResultCode';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent implements OnInit {
  
  ResultCodes:ResultCode[];

  page:number;
  getParam:any;

  uidString:string;
  pidString:string;
  resultString:string;
  
  constructor( private router:Router ,private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.getParam = params;
    });
    
  }

  ngOnInit() {
    this.getResultCodeConstants();
    const id = +this.route.snapshot.paramMap.get('id');
    if(id==NaN) this.page = 1;
    else this.page = id;
    //console.log(this.getParam);
    this.uidString=this.getParam['uid'];
    this.pidString=this.getParam['pid'];
    this.resultString=this.getParam['result'];
  }
  getResultCodeConstants(): void {
    //this.ResultCodeService.getResultCodes().subscribe(ResultCodes =>{ this.ResultCodes = ResultCodes});
    const ResultCodes:ResultCode[] = [ //這裡應該要跟後端要資料
      {val:0,key:"WAIT"},
      {val:10,key:"JUDGING"},
      {val:20,key:"AC"},
      {val:25,key:"PE"},
      {val:30,key:"WA"},
      {val:35,key:"OLE"},
      {val:40,key:"RE"},
      {val:50,key:"TLE"},
      {val:60,key:"MLE"},
      {val:65,key:"RF"},
      {val:70,key:"CE"},
      {val:80,key:"JE"}
    ];

    this.ResultCodes = ResultCodes;
  }

  SubmitClick(){
    this.loadPage(1);
  }
  loadPage(page: number) {
    var httpGetString = '';
    var first=true;

    for(let key in this.getParam) {
      if(this.getParam[key]!=''){
        //console.log(this.getParam[key]);
        if(first){
          httpGetString += '?';
          first = false;
        }else httpGetString += '&';
        httpGetString += (key+'='+this.getParam[key]);
      }
    }
    this.router.navigateByUrl('chal/'+page+httpGetString);
  }
}
