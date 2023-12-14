import { useEffect, useCallback} from "react"; 
import { useRouter } from "next/router"; 
import Header from "@/app/components/Header";
import CreatePostForm from "@/app/components/CreatePostForm";
import {getFirestore, collection, addDoc, setDoc} from "firebase/firestore";
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";


export default function CreatePost( {  isLoggedIn, userInformation } ) {
    const router = useRouter(); 
    useEffect(() => {
        if (!isLoggedIn) router.push("/"); 
    }, [isLoggedIn]);
    
    const createPostFunction = useCallback(
        async (e, imageUpload) =>  {
    e.preventDefault(); // stops form from submitting until we tell it to.
    const storage = getStorage();
    const db = getFirestore();
    // get post content from form
    const albumTitle = e.currentTarget.albumTitle.value;
    const artist = e.currentTarget.artist.value;
    const review = e.currentTarget.review.value;

    // image variable
    let imageURL;
    const storageRef = ref(storage, imageUpload?.name);

        await uploadBytes(storageRef, imageUpload)
            .then(async (snapshot) => {
                await getDownloadURL(snapshot.ref).then((url) => {
                    imageURL=url;
                });
        })
        .catch((error) => {
            console.warn(error);
        });
    
   
            // get user information to link post to user
    const userId = userInformation.uid;
            // send post to firebase with addDoc
    const data = await addDoc(collection(db, "posts"), { 
        albumTitle: albumTitle,
        artist: artist,
        review: review,
        userId: userId,
        imageURL: imageURL, 
    });
    if(data) {
     router.push("/");   
    }
}, [addDoc, collection, getFirestore, userInformation, router]);
    return (
        <>
        <main>
            <CreatePostForm createPostFunction={createPostFunction}/> 
        </main>
        </>
    );
};