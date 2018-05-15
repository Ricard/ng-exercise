import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { randomuser } from '../core/models/randomuser.model';

@Injectable()
export class UsersService {

  usersList;
  NRESULTS: Number = 20;
  ENDPOINT = {
    baseUrl: 'https://randomuser.me',
    relativeUrl: '/api',
    queryParams: {
      results: String(this.NRESULTS)
    }
  };

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.usersList
      ? of(this.usersList)
      : this.http
          .get(
            this.ENDPOINT.baseUrl + this.ENDPOINT.relativeUrl,
            { params: this.ENDPOINT.queryParams }
          )
          .map((result: randomuser.RootObject) => {
            this.usersList = result.results;
            console.log('Service stored users list: ', this.usersList);
            return this.usersList;
          });
  }

  getUser(id: number = 0) {
    if (this.usersList) {
      return (id >= 0 && id < this.NRESULTS)
        ? of(this.usersList[id])
        : of(null);
    } else {
      return this.getUsers().map(() => this.usersList[id]);
    }
  }
}
