import { ErrorHandlerInterceptor } from './ErrorHandlerInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GithubAPIInterceptor } from './GithubAPIInterceptor';

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: GithubAPIInterceptor, multi: true },
  {provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true }
];
