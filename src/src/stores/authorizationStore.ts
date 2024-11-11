import { makeAutoObservable } from 'mobx';
import { AuthorizationResolveConstant } from '../constants/constants';

class AuthorizationStore {
  step = 0;
  login = '';
  password = '';

  authorizationError = '';

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.step += 1;
    if (this.step === AuthorizationResolveConstant) {
      this.loadUser();
    }
  }

  resetStep() {
    this.step = 0;
  }

  setLogin(login: string) {
    this.login = login;
  }

  setPassword(password: string) {
    this.password = password;
  }

  resetStore() {
    this.login = '';
    this.password = '';
    this.authorizationError = '';
  }

  loadUser() {
    const userKey = `${this.login}_${this.password}`;
    const storedData = localStorage.getItem(userKey);

    console.log(storedData, userKey);
    if (storedData) {
      const userData = JSON.parse(storedData);

      this.login = userData.login;
    } else {
      this.authorizationError =
        'Ошибка аутентификационного процесса: для успешной инициализации субъекта необходимо задать правильный криптографический вектор соответствующий унифицированному маркеру инициации в системе';
      this.step = 0;
    }
  }
}

export const authorizationStore = new AuthorizationStore();
