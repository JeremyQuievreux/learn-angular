import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class CapitalizedInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Vérifier si l'URL contient "/users"
    if (req.url.includes('/users')) {
      return next.handle(req).pipe(
        map(event => {
          if (event instanceof HttpResponse) {
            console.log("DATA BEFORE CAPITALIZED");
            console.table(event.body);
            const modifiedBody = event.body.map((user: any) => ({
              ...user,
              name: user.name.toUpperCase() // Transformer les noms en majuscules
            }));
            console.log("DATA AFTER CAPITALIZED");
            console.table(modifiedBody);
            return event.clone({ body: modifiedBody });
          }
          return event;
        })
      );
    }

    // Si ce n'est pas une requête "/users", ne pas modifier la réponse
    return next.handle(req);
  }
}
