import React from "react";
import AllNote from "./conponents/AllNote";
import WriteNote from "./conponents/WriteNote";
import Login from "./Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="App">
      {/* <WriteNote />
      <AllNote /> */}
      {user ? (
        <>
          <WriteNote />
          <AllNote />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
