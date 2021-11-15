import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }

    signup(body: any): Observable<any> {
        body.UserId = body.EmailId;
        body.Username = body.EmailId;
        return this.http.post(`${environment.baseApiUrl}/auth/sign_up`, body);
    }

    signin(body: any): Observable<any> {
        return this.http.post(`${environment.baseApiUrl}/auth/sign_in`, body);
    }
}