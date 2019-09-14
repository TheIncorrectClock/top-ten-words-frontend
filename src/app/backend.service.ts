import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) {
  }

  findTopTenWords(twoLetters: string): Observable<{count: number, value: string}[]> {
    return this.http.get(`http://localhost:8443/top10wordsB/${twoLetters}`) as Observable<{count: number, value: string}[]>;
  }
}
