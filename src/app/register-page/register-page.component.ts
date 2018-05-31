import { Component, OnInit, Input } from '@angular/core';
import { RegData, ResponseData } from '../user/datatype';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
@Input() data:RegData ={
    username:'',
    password:'',
    email:''
  };
@Input() check:string ='';
  
accept: boolean=false;
error_message: string;
error=false;

  constructor(
    private userService: UserService,
    private router: Router 
  ) {}

  ngOnInit() {
    this.submit();
    this.error=false;
  }

  submit(): void{
    if(this.check!=this.data.password){
      this.err(100);
      this.router.navigate(['/register']);
      return;
    }
    var res=this.userService.userRegister(this.data);
    console.log(res);
    if(res==200)this.router.navigate(['/']);
    else this.err(res);
  }

  err(code:number): void{
    this.error=true;
    if(code==403)this.error_message="Cannot Create User due to Server rule!";
    else if(code==409)this.error_message="Can't use this email or username!";
    else if(code==100)this.error_message="Confirm password does not match the password!";
    else this.error_message="Internal error! Please contact admin!";
  }
}
