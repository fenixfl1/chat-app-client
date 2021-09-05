import React from "react";
import { AuthProvider } from "./context";
import Routes from "./routes";

const App = (): React.ReactElement => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
