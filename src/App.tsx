import React, { Suspense, lazy } from "react";
import "./styles.scss"

function App() {
  const UnauthorizedApp = lazy(() => import("./UnauthorizedApp"));
  const AuthorizedApp = lazy(() => import("./AuthorizedApp"));

  const isUnauthorized = true;

  return (
    <div className="App">
      <Suspense fallback="Loading">
        {isUnauthorized ? <UnauthorizedApp /> : <AuthorizedApp />}
      </Suspense>
    </div>
  );
}

export default App;
