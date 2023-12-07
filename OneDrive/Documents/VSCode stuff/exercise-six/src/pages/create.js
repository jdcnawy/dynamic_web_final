import { useEffect } from "react";
import CreateUserForm from "@/app/components/CreateUserForm";
import { useRouter } from "next/router";


export default function CreateUser ({ createUser, isLoggedIn}){
    const router = useRouter();

    useEffect(() => {
        
        if (isLoggedIn) router.push("/");
    },[isLoggedIn]);
    
    return(
       
        <main>
            <h1>Create User</h1>
            <CreateUserForm createUser={createUser}/>
        </main>
    );
}