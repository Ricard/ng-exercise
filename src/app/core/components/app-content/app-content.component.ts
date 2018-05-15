import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'ng-e-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent {
  user: User = {
    firstName: 'Ahsan',
    lastName: 'Ayaz'
  };

  @Input()
  isLoggedIn = false;

  @Output()
  loginNotificator = new EventEmitter();

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  login() {
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
