import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import UserProfileCard from "@/app/components/UserProfileCard";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import styles from "../app/components/components.module.css"

export default function UserProfile({ isLoggedIn, userInformation }) {
  const router = useRouter();
  const [user, setUser] = useState({});

  useEffect(() => {
    if (!isLoggedIn) router.push("/login");
  }, [isLoggedIn]);

  useEffect(() => {
    console.log("Login Information:", userInformation)
    async function getUser() {
      console.log("Fetching user data...");
    
      if (userInformation?.uid) {
        let user = {};
        const db = getFirestore();
        const q = query(
          collection(db, "users"),
          where("userId", "==", userInformation?.uid)
        );
    
        try {
          const querySnapshot = await getDocs(q);
    
          console.log("Query Snapshot:", querySnapshot);
    
          querySnapshot.forEach((doc) => {
            user = doc.data();
            console.log("User data from Firestore:", user);
          });
    
          setUser(user);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    }
    
    getUser();
  }, [userInformation]);

  return (
    <main className={styles.UserProfileContainer}>
      <UserProfileCard user={user} userInformation={userInformation} />
    </main>
  );
}
