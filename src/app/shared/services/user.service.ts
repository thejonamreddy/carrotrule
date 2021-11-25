import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    getUserList(body: any): Observable<any> {
        return this.http.post(`${environment.baseApiUrl}/user/getUserList`, body);
    }

    addUser(body: any): Observable<any> {
        return this.http.post(`${environment.baseApiUrl}/user/addUser`, body);
    }

    deleteUser(body: any): Observable<any> {
        return this.http.post(`${environment.baseApiUrl}/user/deleteUser`, body);
    }

    updateUser(body: any): Observable<any> {
        return this.http.post(`${environment.baseApiUrl}/user/updateUser`, body);
    }

}