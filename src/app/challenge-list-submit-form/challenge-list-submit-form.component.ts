import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ResultCode } from '../ResultCode';

@Component({
  selector: 'app-challenge-list-submit-form',
  templateUrl: './challenge-list-submit-form.component.html',
  styleUrls: ['./challenge-list-submit-form.component.css']
})
export class ChallengeListSubmitFormComponent implements OnInit {

  @Input() uidString:string;
  @Input() pidString:string;
  @Input() resultString:string;

  @Output() SubmitClick = new EventEmitter<number>(true);

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

  onSubmit():void{
    this.SubmitClick.emit();
  }
}
