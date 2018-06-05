import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ConstantPool } from '@angular/compiler/src/constant_pool';
import { empty } from 'rxjs';


@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent implements OnInit {
  
  page:number;
  getParam:any;

  uid:number;
  pid:number;
  result:number;
  
  constructor( private router:Router ,private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.route.url.subscribe(url =>{
      const id = this.route.snapshot.paramMap.get('id');
      if(id==null) this.page = 1;
      else this.page = +id;
      this.route.queryParams.subscribe(params => {
        this.getParam = params;
        this.uid=(this.getParam['uid']==undefined?'':this.getParam['uid']);
        this.pid=(this.getParam['pid']==undefined?'':this.getParam['pid']);
        this.result=(this.getParam['result']==undefined?'':this.getParam['result']);
      });
    });
  }

  SubmitClick(query:object){
    this.loadPageWithQuery(1,query);
  }
  loadPageWithQuery(page: number,query:object) {
    //console.log(query);
    this.page=page;
    this.router.navigate(['/chal/list/'+page], { queryParams: query });
  }
  loadPage(page: number) {
    this.loadPageWithQuery(page,this.getParam);
  }
}
