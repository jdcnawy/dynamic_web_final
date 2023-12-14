import { useEffect } from "react"; 
import { useRouter } from "next/router"; 
import Header from "@/app/components/Header";
import CreateUserForm from "@/app/components/CreateUserForm";

export default function Create( { createUser, isLoggedIn } ) {
    const router = useRouter(); 
    useEffect(() => {
        if (isLoggedIn) router.push("/"); 
    }, [isLoggedIn]); 
    return (
        <>
        <main>
            <CreateUserForm createUser={createUser}/> 
        </main>
        </>
    )
} 