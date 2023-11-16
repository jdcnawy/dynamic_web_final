const express = require('express');
const app = express();
const port = 4000;
const firebase = require("firebase/app")




const firebaseConfig = {
    apiKey: "AIzaSyBCAgQJ8XQyjAlNC2CyMy5khfipEDKilXk",
    authDomain: "exercise-five-fall-2023-599c6.firebaseapp.com",
    projectId: "exercise-five-fall-2023-599c6",
    storageBucket: "exercise-five-fall-2023-599c6.appspot.com",
    messagingSenderId: "308250309301",
    appId: "1:308250309301:web:f08a291ad868aa259184fc"
  };

firebase.initializeApp(firebaseConfig);

const indexRoute = require('./routes/index')
app.use("/",indexRoute);
const singlePostRoute = require('./routes/singlePost')
app.use("/post",singlePostRoute);
const createPostRoute = require('./routes/createPost')
app.use("/create",createPostRoute);

app.listen(port,() => {
    console.log(`Exercise Five listening on port ${port}`)
});