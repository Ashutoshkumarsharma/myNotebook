import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    
  const host = "http://localhost:5000"

 const notesInitial = [  ];
 const [notes, setNotes] = useState(notesInitial);

  // GET all Note
  const getNotes =async ()=>{
    //API call
    const response = await fetch(`${host}/api/note/fetchallnotes`,{
      method : 'GET',
      headers:{
          'Content-Type':'application/json',
          "auth-token": localStorage.getItem('token')
      }
  });
  const json = await response.json()
   setNotes(json)
  }
  // Add a Note
  const addNote =async (title, description, tag)=>{
    //TODO:API Call
    //API call
    const response = await fetch(`${host}/api/note/addnote`,{
      method : 'POST',
      headers:{
          'Content-Type':'application/json',
          "auth-token": localStorage.getItem('token')
      },
      body:JSON.stringify({title, description, tag})
  });
  const note = await response.json();
  setNotes(notes.concat(note))
  
  }

  // Delete a Note
  const deleteNote =async (id)=>{
    //API Call
    const response = await fetch(`${host}/api/note/deletenote/${id}`,{
      method : 'DELETE',
      headers:{
          'Content-Type':'application/json',
          "auth-token": localStorage.getItem('token')
      },
  });
  const json =  response.json();
  console.log(json)


    const newNotes = notes.filter((note)=> {return note._id!==id})
    setNotes(newNotes)
  }

  // Edit a Note
  const editNote =async (id, title, description, tag)=>{
    //API Call
    const response = await fetch(`${host}/api/note/updatenote/${id}`,{
      method : 'PUT',
      headers: {
          'Content-Type':'application/json',
          "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag}),
  });
  const json = await response.json();
  console.log(json)

  // let newNotes = JSON.parse(JSON.stringify(notes));
  //   //Logic to edit in client
  //   for (let index = 0; index < newNotes.length; index++) {
  //     const element = newNotes[index];
  //     if(element.id === id){
  //       newNotes[index].title = title;
  //       newNotes[index].description = description;
  //       newNotes[index].tag = tag;
  //       break;
  //     }
  //   }
    // console.log(id, newNotes)
    // setNotes(newNotes);

    setNotes(prevNotes => 
      prevNotes.map(note => note._id === id ? { ...note, title, description, tag } : note)
    );
  }

  return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
                {props.children}
        </NoteContext.Provider>
    )

}
export default NoteState;