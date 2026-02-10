import { useEffect, useState } from "react";
import api from "../api";
import type { Note } from "../types/Note";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [text, setText] = useState<string>("");


  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get<Note[]>("/notes");
        setNotes(res.data);
      } catch (error) {
        console.error("Failed to fetch notes", error);
      }
    };

    fetchNotes();
  }, []);

  
  const createNote = async () => {
    if (!text) return;

    try {
      await api.post("/notes", { text });
      setText("");

      
      const res = await api.get<Note[]>("/notes");
      setNotes(res.data);
    } catch (error) {
      console.error("Failed to create note", error);
    }
  };

 
  const deleteNote = async (id: string) => {
    try {
      await api.delete(`/notes/${id}`);

      // optimistic UI update
      setNotes((prev) => prev.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Failed to delete note", error);
    }
  };


  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>My Notes</h2>

     
      <button onClick={handleLogout} style={{ marginBottom: 20 }}>
        Logout
      </button>

      <br />

      
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a note"
      />
      <button onClick={createNote} style={{ marginLeft: 8 }}>
        Add
      </button>

      
      <ul style={{ marginTop: 20 }}>
        {notes.map((note) => (
          <li key={note._id}>
            {note.text}
            <button
              onClick={() => deleteNote(note._id)}
              style={{ marginLeft: 10 }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
