import { Component, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'ng-e-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  user: User = {
    firstName: 'Ahsan',
    lastName: 'Ayaz'
  };

  @Output()
  loginNotificator = new EventEmitter();

  @Input()
  isLoggedIn = false;

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  login() {
    this.setLogin(true);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  signup() {
    this.setLogin(true);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user out
   */
  logout() {
    this.setLogin(false);
  }

  /**
   * @author Ricard Castelló
   * @desc handle the internal and external status of login
   * @param value status to be set (representing logged or not)
   */
  setLogin(value: boolean) {
    this.isLoggedIn = value;
    this.loginNotificator.emit(value);
  }

}
