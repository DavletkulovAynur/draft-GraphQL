
import { makeAutoObservable, runInAction } from "mobx"


class Store {
  isAuth = false

  constructor() {
    makeAutoObservable(this)
  }

  setAuth(bool: boolean) {
    runInAction(() => {
      this.isAuth = bool
    })
   
  }
}

export const authStore = new Store()