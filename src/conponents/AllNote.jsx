import React, { useState, useEffect } from "react";
import "./allnote.css";
import db from "../firebase";
import Note from "./Note";
import { useStateValue } from "../StateProvider";

const AllNote = () => {
  const [{ user }] = useStateValue();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("users")
      .doc(user?.email)
      .collection("notes")
      .onSnapshot((snapshot) =>
        setNotes(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );

    return () => {
      unsubscribe();
    };
    // console.log(notes);
  }, []);

  return (
    <div className="all_notes">
      {notes.length == 0 ? (
        <h2 style={{ fontWeight: 600 }}>No Data to show</h2>
      ) : (
        <>
          <div className="number_of_task">Task({notes.length})</div>
          {notes.map((_note) => (
            <Note
              key={_note.id}
              id={_note.id}
              note_description={_note.data.note}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default AllNote;
