import { makeAutoObservable, runInAction } from "mobx";

class Store {
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    runInAction(() => {
      this.isAuth = bool;
    });
  }

  logout() {
    runInAction(() => {
      this.isAuth = false;
      localStorage.removeItem("token");
    });
  }
}

export const authStore = new Store();
