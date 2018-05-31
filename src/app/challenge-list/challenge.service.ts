import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ListService } from '../list/list.service';
@Injectable({
  providedIn: 'root'
})
export class ChallengeService extends ListService{
  constructor(http: HttpClient) {
    super(http);
  }
}