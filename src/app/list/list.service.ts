import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ListService {

    private Url = 'api';  // URL to web api

    constructor(
        private http: HttpClient,
	) { }
	
	getList <T>(listname : string , start : number , total : number): Observable<T[]> {
        const url = `${this.Url}/${listname}?start=${start}&total=${total}`;
        return this.http.get<T[]>(url).pipe(
			tap(List => this.log(`fetched ${listname} List start from ${start}`)),
			catchError(this.handleError('Fail to get List'))
		);
	}

	getListDetails <T> (listname : string): Observable<T> {
		const url = `${this.Url}/${listname}`;
		return this.http.get<T>(url).pipe(
			tap(ListDetails => this.log(`fetched ${listname} List Details`)),
			catchError(this.handleError('Fail to get ListDetails'))
		);
	}

	getListQuery <T> (listname : string , filter : any , start : number , total : number ): Observable<T[]> {
		var url = `${this.Url}/${listname}/query?start=${start}&total=${total}`;
		for (var key in filter){
			if(filter.hasOwnProperty(key)){
				url += `&${key}=${filter[key]}`;
			}
		}
		return this.http.get<T[]>(url).pipe(
			tap(ListQuery => this.log(`fetched ${listname} List Query`)),
			catchError(this.handleError('Fail to get ListQuery'))
		);
	}

	getListQueryDetails <T> (listname : string , filter : any ): Observable<T> {
		var url = `${this.Url}/${listname}/query?`;
		var tf = true;
		for (var key in filter){
			if(filter.hasOwnProperty(key)){
				if(tf){
					url += `${key}=${filter[key]}`;
					tf = false;
				}else{
					url += `&${key}=${filter[key]}`;
				}
			}
		}
		return this.http.get<T>(url).pipe(
			tap(ListQuery => this.log(`fetched ${listname} List Query Details`)),
			catchError(this.handleError('Fail to get List Query Details'))
		);
	}

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

	/** Log a Service message with the console.log */
	private log(message: string) {
		console.log(message);
	}
}
