import { makeAutoObservable } from 'mobx';

class AppStore {
  step = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.step += 1;
  }

  resetStep() {
    this.step = 0;
  }
}

export const appStore = new AppStore();
