import React, { useState, useEffect } from "react";
import "./note.css";
import db from "../firebase";
import { useStateValue } from "../StateProvider";
const Note = ({ id, note_description }) => {
  const [{ user }] = useStateValue();

  const deleteNote = () => {
    db.collection("users")
      .doc(user.email)
      .collection("notes")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Note Deleted");
      })
      .catch((e) => window.alert(e));
  };

  return (
    <div className="note_section">
      <div className="note">{note_description}</div>
      <div className="btns">
        <button className="btn1" onClick={deleteNote}>
          Done ✔
        </button>
        <button className="btn2" onClick={deleteNote}>
          Delete ❎
        </button>
      </div>
    </div>
  );
};

export default Note;
