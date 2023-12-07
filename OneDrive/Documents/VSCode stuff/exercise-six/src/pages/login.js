import { useEffect } from "react";
import LoginForm from "@/app/components/LoginForm";
import { useRouter } from "next/router";


export default function Login ({ loginUser, isLoggedIn}){
    const router = useRouter();

    useEffect(() => {
        
        if (isLoggedIn)  router.push("/");
    },[isLoggedIn]);
    
    return(
       
        <main>
            <h1>Login</h1>
            <LoginForm loginUser = {loginUser}/>
        </main>
    );
}