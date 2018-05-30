import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ResultCode } from '../ResultCode';

@Component({
  selector: 'app-challenge-list-form',
  templateUrl: './challenge-list-form.component.html',
  styleUrls: ['./challenge-list-form.component.css']
})
export class ChallengeListFormComponent implements OnInit {

  @Input() uidString:number;
  @Input() pidString:number;
  @Input() resultString:number;

  @Output() SubmitClick = new EventEmitter<object>(true);

  uid:number;
  pid:number;

  ResultCodes:ResultCode[];

  listForm:FormGroup

  constructor() { }

  ngOnInit() {
    this.getResultCodeConstants();
    this.listForm = new FormGroup({
      'uid': new FormControl(this.uidString),
      'pid': new FormControl(this.pidString),
      'result': new FormControl(this.resultString)
    });
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

  onSubmit():void{
    const that = this;
    let queryParams={
      uid:''+(this.uidString==undefined?'':this.uidString),
      pid:''+(this.pidString==undefined?'':this.pidString),
      result:''+(this.resultString==undefined?'':this.resultString)
    }
    console.log(this.resultString);
    that.SubmitClick.emit(queryParams);
  }
}
