import React, { useState } from "react";
import FaceIcon from "@mui/icons-material/Face";
import "./writenote.css";
import Tooltip from "@mui/material/Tooltip";
import { useStateValue } from "../StateProvider";
import db from "../firebase";
import firebase from "firebase";
const WriteNote = () => {
  const [{ user }] = useStateValue();
  const [inputs, setInput] = useState("");

  const addNoteToDB = () => {
    console.log("clicked");
    db.collection("users").doc(user.email).collection("notes").add({
      note: inputs,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="write_note_section">
      <form className="input_section">
        <input
          type="text"
          placeholder="Write Your Task here"
          value={inputs}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button className="add_btn" onClick={addNoteToDB} disabled={!inputs}>
          + Add Note
        </button>
      </form>

      <div className="login_info_section">
        <Tooltip title={user?.displayName}>
          <FaceIcon className="faceIcon" />
        </Tooltip>
        {/* <button className="add_btn red" onClick={logout}>
          Logout
        </button> */}
      </div>
    </div>
  );
};

export default WriteNote;
