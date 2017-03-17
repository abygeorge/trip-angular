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
    this.authenticationService.authenticate(user).subscribe(data => {
                let j = data.json();
               console.log('here is the json!', j);
            },
            error => {
                alert('oh no');
            });

  }
}
// this.http.host('localhost:3000/api/v1/users/authenticate')
//                     .map(this.extractData)
//                     .catch(this.handleError);
