import React from "react";
import AllNote from "./conponents/AllNote";
import WriteNote from "./conponents/WriteNote";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }] = useStateValue();
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
