
import React, { useContext, useState } from 'react';
import noteContext from "../context/notes/noteContext";
import './AddNote.css';  

const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        props.showAlert("Added Successfully", "success");
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <div className="addNote-container">
            <div className="addNote-box">
                <h2 className="addNote-title">Add a Note</h2>
                <p className="addNote-subtitle">Please enter the details of your note below</p>
                <form className="add-note-form" onSubmit={handleClick}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={note.title}
                            onChange={onChange}
                            minLength={5}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            value={note.description}
                            onChange={onChange}
                            minLength={5}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tag">Tag (optional)</label>
                        <input
                            type="text"
                            className="form-control"
                            id="tag"
                            name="tag"
                            value={note.tag}
                            onChange={onChange}
                        />
                    </div>
                    {/* <button
                        disabled={note.title.length < 5 || note.description.length < 5}
                        type="submit"
                        className="addNote-btn"
                    >
                        Add Note
                    </button> */}
           <button disabled={note.title.length <5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>

                </form>
            </div>
        </div>
    );
};

export default AddNote;









