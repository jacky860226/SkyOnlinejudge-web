import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private modalService: NgbModal,private router: Router) { }
  ngOnInit() {
  }

  modalReference: any;

  isCollapsed = true;
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  openLg(content) {
    this.modalReference =  this.modalService.open(content, { size: 'lg' });
  }
  adminModalOnSubmit(adminForm){
    console.log(adminForm.value);
    if(adminForm.value.passward=="7122"){
      this.router.navigateByUrl('/admin');
      this.modalReference.close();
    }
  }
}
