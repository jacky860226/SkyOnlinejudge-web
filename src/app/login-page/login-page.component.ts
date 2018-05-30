import { Component, OnInit, Input } from '@angular/core';
import { LoginData } from '../user/datatype';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
@Input() data:LoginData ={
    username:'',
    password:''
  };

  login:boolean =false;
  error=false;
  error_message:string;

  constructor( 
    private userService: UserService,
    private router: Router 
  ) {}

  ngOnInit() {
    this.submit();
    this.error=false;
  }

  submit(): void{
    var res=this.userService.userLogin(this.data);   
    if(res==200)
    {
      console.log("success");
      this.router.navigate(['/']);
    }
    else this.err(res);
  }

  err(code:number): void{
    this.error=true;
    if(code==403)this.error_message="Access denied!";
    else this.error_message="Internal error! Please contact admin!";
  }
}
