import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class PlanService {

    constructor(private http: HttpClient) { }

    newPlan(body: any): Observable<any> {
        return this.http.post(`${environment.baseApiUrl}/incentive/plan/createPlan`, body);
    }

}