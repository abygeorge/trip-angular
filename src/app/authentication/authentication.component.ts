import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: 'authentication.component.html',
  styleUrls: ['authentication.component.css'],
  providers: [ AuthenticationService ]
})

export class AuthenticationComponent implements OnInit {

  isSignin = true;
  user = { email: '', password: '', password_confiramtion: ''};

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {}

  submitAuthForm() {
    if (this.isSignin) {
      this.signin();
    }
    else
    {
      this.signup();
    }
  }

  signup() {
    
    this.authenticationService.signup(this.user).subscribe(resp => {
      console.log(resp.message);
    });
  }

  signin() {
    this.authenticationService.signin(this.user).subscribe(resp => {
      console.log(resp.message);
    });
  }

  toggleSignin() {
    this.isSignin = !this.isSignin;
  }
}