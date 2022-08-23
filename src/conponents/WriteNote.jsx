import React, { useState } from "react";
import FaceIcon from "@mui/icons-material/Face";
import "./writenote.css";
import Tooltip from "@mui/material/Tooltip";
import { auth } from "../firebase";
import db from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection } from "firebase/firestore";

const WriteNote = () => {
  const [user] = useAuthState(auth);
  const [input, setInput] = useState("");
  const logout = () => {
    auth.signOut();
  };
  const addNoteToDB = () => {
    console.log("clicked");
    // collection(db, "users")
    //   .doc(user.email)
    //   .set({
    //     name: "Los Angeles",
    //     state: "CA",
    //     country: "USA",
    //   })
    //   .then(() => {
    //     console.log("Document successfully written!");
    //   })
    //   .catch((error) => {
    //     console.error("Error writing document: ", error);
    //   });
    setInput("");
  };
  return (
    <div className="write_note_section">
      <form className="input_section">
        <input
          type="text"
          placeholder="Write Your Task here"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button className="add_btn" onClick={addNoteToDB} disabled={!input}>
          + Add Note
        </button>
      </form>

      <div className="login_info_section">
        <Tooltip title={user.displayName}>
          <FaceIcon className="faceIcon" />
        </Tooltip>
        <button className="add_btn red" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default WriteNote;
