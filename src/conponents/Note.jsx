import React from "react";
import "./note.css";

const Note = ({ note_no, note_description }) => {
  return (
    <div className="note_section">
      <div className="note">{note_description}</div>
      <div className="btns">
        <button className="btn1">Done ✔</button>
        <button className="btn2">Delete ❎</button>
      </div>
    </div>
  );
};

export default Note;
