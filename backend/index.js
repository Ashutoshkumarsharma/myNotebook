const connectToMongo = require('./db'); // Ensure the correct relative path to db.js
const express = require('express');
var cors = require('cors')


const app = express();
const port = 5000;
// Call the function to connect to MongoDB
connectToMongo();

app.use(cors())
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Hello, Ashu');
// });

app.use('/api/auth',require('./routes/auth'))
app.use('/api/note',require('./routes/note'))

app.listen(port, () => {
    console.log(`iNotebook backend listening at http://localhost:${port}`);
});

