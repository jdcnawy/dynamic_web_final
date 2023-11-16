const express = require("express");
const router = express.Router();
const firestore = require("firebase/firestore")
const db = firestore.getFirestore();

router.get("/",(req,res) => {
    const postsQuery = firestore.getDocs(firestore.collection(db,"posts"));
    const postsArray = [];


    postsQuery.then((response) => {
            response.forEach((post) => {
                console.log(post.data());
                postsArray.push({id: post.id, ...post.data() })
            })
            res.send(postsArray);
    })
    .catch((error) => {
        console.log(error);
        return res.send(error);
    })
});    
module.exports = router;