import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [ AuthenticationService ]
})

export class AuthenticationComponent implements OnInit {
  user = { email: '', password: ''};

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {}

  login(event, user) {
    event.preventDefault();
    this.authenticationService.authenticate(user).subscribe(resp => {
      console.log(resp.message);
      // let authResponse = user;
      // if (authResponse.success) {
      //   console.log(authResponse.message);
      // }
      // else {
      //   console.log(authResponse.message);
      // }

    });
  }
}
// this.http.host('localhost:3000/api/v1/users/authenticate')
//                     .map(this.extractData)
//                     .catch(this.handleError);
