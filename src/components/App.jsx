import React from "react"
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

const App = () => {
    return (<div><Header/><Footer/>
        {notes.map(note => <Note key={note.key} title={note.title} content={note.content}/>)}
    </div>)
}

export default App