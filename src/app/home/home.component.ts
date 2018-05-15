import { Component } from '@angular/core';

@Component({
  selector: 'ng-e-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  logged: Boolean = false;

  /**
   * @author Ricard Castelló
   * @desc handle the status of user
   * @param value status to be set (representing logged or not)
   */
  setLogin (logged) {
    this.logged = logged;
  }

}
