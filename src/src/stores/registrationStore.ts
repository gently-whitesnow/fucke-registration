import { makeAutoObservable } from 'mobx';
import {
  ValidateEmail,
  ValidateLogin,
  ValidatePassword,
  ValidatePhone,
  ValidateRace,
} from '../services/registrationService';
import { RegistrationResolveConstant } from '../constants/constants';

class RegistrationStore {
  step = 0;

  login = '';
  email = '';
  password1 = '';
  password2 = '';
  password3 = '';
  phone = '';
  race = '';

  loginError = '';
  emailError = '';
  passwordError = '';
  phoneError = '';
  raceError = '';

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.step += 1;
    if (this.step === RegistrationResolveConstant) {
      this.validate();
    }
  }

  resetStep() {
    this.step = 0;
  }

  resetStore() {
    this.login = '';
    this.password1 = '';
    this.password2 = '';
    this.password3 = '';
    this.email = '';
    this.phone = '';
    this.race = '';
  }

  setLogin(login: string) {
    this.login = login;
  }

  setEmail(email: string) {
    this.email = email;
  }

  setPassword1(password1: string) {
    this.password1 = password1;
  }

  setPassword2(password2: string) {
    this.password2 = password2;
  }

  setPassword3(password3: string) {
    this.password3 = password3;
  }

  setPhone(phone: string) {
    this.phone = phone;
  }

  setRace(race: string) {
    this.race = race;
  }

  validate() {
    this.loginError = ValidateLogin(this.login);
    this.emailError = ValidateEmail(this.email);
    this.passwordError = ValidatePassword(
      this.password1,
      this.password2,
      this.password3,
    );
    this.phoneError = ValidatePhone(this.phone);
    this.raceError = ValidateRace(this.race);
    if (
      this.loginError ||
      this.emailError ||
      this.passwordError ||
      this.phoneError ||
      this.raceError
    ) {
      this.step = 0;
      return;
    }

    // Unique user key
    const userKey = `${this.login}_${this.password1}`;

    // User data to save
    const userData = {
      login: this.login,
      email: this.email,
      password1: this.password1,
      phone: this.phone,
      race: this.race,
    };

    // Save user data in LocalStorage
    localStorage.setItem(userKey, JSON.stringify(userData));
  }
}

export const registrationStore = new RegistrationStore();
