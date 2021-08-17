import React from "react";
import Header from "/Users/lethuy/my-app/src/components/Header.jsx";
import Note from "/Users/lethuy/my-app/src/components/Note.jsx";
import Footer from "/Users/lethuy/my-app/src/components/Footer.jsx";
import notes from "./notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((note) => (
        <Note title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
