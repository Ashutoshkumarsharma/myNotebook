// const mongoose = require('mongoose')

// const mongoURI = "mongodb://127.0.0.1:27017/Database Name"

// const connectToMongo = ()=>{
//     mongoose.connect(mongoURI,()=>{
//         console.log("connected to Mongo Successfully");
//     })
// } 

// module.exports = connectToMongo;

// const mongoose = require('mongoose');

// // Replace "Database Name" with your actual database name
// const mongoURI = "mongodb://127.0.0.1:27017/DatabaseName";

// const connectToMongo = async () => {
//     try {
//         await mongoose.connect(mongoURI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("Connected to Mongo Successfully");
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//         process.exit(1); // Exit the process with failure code
//     }
// };

// module.exports = connectToMongo;



const mongoose = require('mongoose');

// Replace "DatabaseName" with your actual database name
const mongoURI = "mongodb://127.0.0.1:27017/iNotebook";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        // console.log("Connected to Mongo Successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process with failure code
    }
};

module.exports = connectToMongo;
