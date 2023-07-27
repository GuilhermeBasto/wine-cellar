import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, shareReplay } from 'rxjs';

@Injectable()
export class BaseHttpService {
  protected readonly error = new BehaviorSubject<string | null>(null);
  error$ = this.error.asObservable().pipe(shareReplay(1));

  constructor() {}

  protected handleError<T>(
    msg: string
  ): (source$: Observable<T>) => Observable<T> {
    return (source$) =>
      source$.pipe(
        catchError(() => {
          console.error(msg);
          this.error.next(msg);
          return of();
        })
      );
  }
}
