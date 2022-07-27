import { observer } from "mobx-react-lite";
import React, { Suspense, lazy } from "react";
import { authStore } from "./store";
import "./styles.scss"

function App() {
  const UnauthorizedApp = lazy(() => import("./UnauthorizedApp"));
  const AuthorizedApp = lazy(() => import("./AuthorizedApp"));

  function checkAuthUser() {
    const token = localStorage.getItem('token');
    if(token) {
      authStore.setAuth(true)
    }
  }

  checkAuthUser()
  return (
    <div className="App">
      <Suspense fallback="Loading">
        {authStore.isAuth ? <AuthorizedApp />  : <UnauthorizedApp />}
      </Suspense>
    </div>
  );
}

export default observer(App);
