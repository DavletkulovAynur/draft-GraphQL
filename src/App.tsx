import { observer } from "mobx-react-lite";
import { Suspense, lazy } from "react";
import { authStore } from "./store";
import "./styles.scss"
import { Loader } from "./view/UI/common/Loader";

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
      <Suspense fallback={ <Loader/>}>
        {authStore.isAuth ? <AuthorizedApp />  : <UnauthorizedApp />}
      </Suspense>
    </div>
  );
}

export default observer(App);
