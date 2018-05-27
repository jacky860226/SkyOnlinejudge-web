import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ImageBarComponent } from '../image-bar/image-bar.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { ChallengeListSubmitFormComponent } from '../challenge-list-submit-form/challenge-list-submit-form.component';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent implements OnInit {
  
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
    const id = this.route.snapshot.paramMap.get('id');
    if(id==null) this.page = 1;
    else this.page = +id;
    this.uidString=this.getParam['uid'];
    this.pidString=this.getParam['pid'];
    this.resultString=this.getParam['result'];
  }

  SubmitClick(){
    this.loadPage(1);
  }
  loadPage(page: number) {
    var httpGetString = '';
    var first=true;
    console.log(page);
    for(let key in this.getParam) {
      if(this.getParam[key]!=''){
        console.log(this.getParam[key]);
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
