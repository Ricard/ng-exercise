import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { randomuser } from '../../core/models/randomuser.model';


@Component({
  selector: 'ng-e-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  usersList: Array<randomuser.Result>;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.usersService
      .getUsers()
      .subscribe((response: randomuser.Result[]) => {
        this.usersList = response;
      });
  }

  viewDetail(id: number) {
    this.router.navigate(['users-list/' + id]);
  }

  goBack() {
    this.router.navigate(['landing']);
  }
}
