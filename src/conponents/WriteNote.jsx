import React from "react";
import "./writenote.css";

const WriteNote = () => {
  const addNoteToDB = () => {};
  return (
    <div className="write_note_section">
      <div className="input_section">
        <input type="text" placeholder="Write Your Task here" />
      </div>
      <button className="add_btn" onClick={addNoteToDB}>
        + Add Note
      </button>
    </div>
  );
};

export default WriteNote;
