import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from './shared/util/loading.service';
import { catchError, map } from 'rxjs/operators'

@Injectable()
export class AppInterceptor implements HttpInterceptor {

    constructor(private _loading: LoadingService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const userInfo = JSON.parse(sessionStorage.getItem('userInfo') || 'false');
        if (userInfo) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${userInfo.accessToken}`
                }
            });
        }

        this._loading.setLoading(true, request.url);
        return next.handle(request)
            .pipe(catchError((err) => {
                this._loading.setLoading(false, request.url);
                return err;
            }))
            .pipe(map((evt: any) => {
                if (evt instanceof HttpResponse) {
                    this._loading.setLoading(false, request.url);
                }
                return evt;
            }));
    }
}