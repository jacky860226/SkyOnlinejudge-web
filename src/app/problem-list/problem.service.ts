import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Problem } from './problem';
// import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ProblemService {

    private problemsUrl = 'api/problems';  // URL to web api

    constructor(
        private http: HttpClient,
    ) { }

  /** GET Problems from the server */
  getProblems (): Observable<Problem[]> {
    const url = `${this.problemsUrl}`;
    return this.http.get<Problem[]>(url).pipe(
        tap(problems => this.log(`fetched problems`)),
        catchError(this.handleError('getProblems', []))
    );
  }
//   getProblems (index : number): Observable<Problem[]> {
//     const url = `${this.problemsUrl}/${index}"`;
//     return this.http.get<Problem[]>(url).pipe(
//         tap(problems => this.log(`fetched problems index=${index}`)),
//         catchError(this.handleError('getProblems', []))
//     );
//   }

//   getMaxpages (): Observable<number> {
//     const url = `${this.problemsUrl}/maxpages`;
//     return this.http.get<number>(url).pipe(
//         tap(maxpages => this.log(`fetched maxpages`)),
//         catchError(this.handleError('getMaxpages'))
//     );
//   }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
