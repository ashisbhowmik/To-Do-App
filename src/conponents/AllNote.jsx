import React from "react";
import "./allnote.css";
import Note from "./Note";

const AllNote = () => {
  return (
    <div className="all_notes">
      <div className="number_of_task">Task(5) </div>
      <Note note_no={1} note_description={"Go to Market To Buy some Fruit"} />
      <Note note_no={2} note_description={"Go to Market To Buy some Fruit"} />
      <Note note_no={3} note_description={"Go to Market To Buy some Fruit"} />
    </div>
  );
};

export default AllNote;
