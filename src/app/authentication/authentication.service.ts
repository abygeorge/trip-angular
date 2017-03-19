import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  signin(user) {
    return this.http.post('http://localhost:3000/api/v1/users/authenticate.json', user)
               .map((res:Response) => res.json());
  }

  signup(user) {
    return this.http.post('http://localhost:3000/api/v1/users/authenticate.json', user)
                .map((res:Response) => res.json());
  }
}


