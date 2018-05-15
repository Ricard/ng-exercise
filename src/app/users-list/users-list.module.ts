import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UsersListRoutingModule } from './users-list-routing.module';
import { ListComponent } from './list/list.component';
import { UsersService } from './users.service';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  imports: [
    CommonModule,
    UsersListRoutingModule,
    HttpClientModule
  ],
  providers: [UsersService],
  declarations: [
    ListComponent,
    UserDetailComponent
  ]
})
export class UsersListModule { }
