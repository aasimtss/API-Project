import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { LoaderService } from '../loader.service';
@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor(
    public loader: LoaderService,
    private spinner: NgxSpinnerService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // this.loader.isLoading.next(true);
    this.spinner.show();
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': '7393ec52a3mshb14fe7279160360p19eab9jsn6bd5685f911b',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      },
      setParams: {
        key: '6b13d7814bed4c19a13334c9c9deb0a1',
      },
    });
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('httperror', error);
        return throwError(error.error);
      }),
      finalize(() => {
        // this.loader.isLoading.next(false);
        this.spinner.hide();
      })
    );
  }
}
