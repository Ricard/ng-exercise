import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../users.service';
import { randomuser } from '../../core/models/randomuser.model';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'ng-e-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.usersService.getUser(userId);
  }

  goBack() {
    this.location.back();
  }
}
