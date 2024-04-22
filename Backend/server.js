const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const usersRouter = require('./Routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/admins")
  .then(() => {
    console.log("mongodb connected");
    
    // Add main routers here
    app.use('/users', usersRouter);

    app.listen(3001, () => {
      console.log("server listening on port 3001");
    });
  })
  .catch((error) => {
    console.log("error:" + error);
  });
