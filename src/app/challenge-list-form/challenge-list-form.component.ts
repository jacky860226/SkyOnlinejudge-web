import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ResultCode } from '../ResultCode';

@Component({
  selector: 'app-challenge-list-form',
  templateUrl: './challenge-list-form.component.html',
  styleUrls: ['./challenge-list-form.component.css']
})
export class ChallengeListFormComponent implements OnInit {

  @Input() uidNum:number;
  @Input() pidNum:number;
  @Input() resultNum:number;

  @Output() SubmitClick = new EventEmitter<object>(true);


  ResultCodes:ResultCode[];

  constructor() { }

  ngOnInit() {
    this.getResultCodeConstants();
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

  onSubmit(listForm):void{
    //console.log(listForm);
    const that = this;
    let queryParams={
      uid:listForm.value.uid,
      pid:listForm.value.pid,
      result:listForm.value.result
    }
    //console.log(this.resultNum);
    that.SubmitClick.emit(queryParams);
  }
}
