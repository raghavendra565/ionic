import { Injectable } from '@angular/core';

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

  constructor() {
  }
  getDataForLoginFlat = () => {
    let data = {
      "phone": "Phone",
      "password": "Password",
      "register": "Register",
      "login": "Login",
      "logo": "assets/images/logo/50.png"
    };
    return data;
};
}
