const express = require("express");
const router = express.Router();
const firestore = require("firebase/firestore")
const db = firestore.getFirestore();



router.get('/:postID',(req, res) => {
    const postID = req.params.postID;
    const postQuery = firestore.getDoc(firestore.doc(db,"posts", postID));

    postQuery.then((response => {
        res.send(response.data());
    })).catch((error)=>{
        res.send(error);
    });
    console.log(postID)

})

module.exports = router;