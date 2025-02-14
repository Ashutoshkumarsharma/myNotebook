const mongoose = require('mongoose');
const {Schema} = mongoose;

// eslint-disable-next-line no-undef
const NoteSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title:{
        type : String,
        required : true
    },
    description:{
        type : String,
        required : true
        // unique: true
    },
    tag:{
        type : String,
        default:"General"
    },
    date:{
        type : Date,
        default: Date.now
    },
  });

  const Note = mongoose.model('note',NoteSchema);
//   module.exports = mongoose.model('user',UserSchema);
  module.exports = Note;