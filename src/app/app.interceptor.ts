import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const userInfo = JSON.parse(sessionStorage.getItem('userInfo') || '');
        if (userInfo) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${userInfo.accessToken}`
                }
            });
        }
        return next.handle(request);
    }
}