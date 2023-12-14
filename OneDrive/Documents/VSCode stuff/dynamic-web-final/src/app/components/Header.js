import Link from "next/link";
import styles from "../components/components.module.css"

const Header = ({isLoggedIn, logoutUser}) => {
    console.log(styles)
    return ( 
        <header className={styles.Header}>
            <nav className={styles.HeaderNav}>
              
            { isLoggedIn && (
                <>
                 <Link href="/profile">User Profile</Link>
                 <Link href="/">Dashboard</Link>
                 <Link href="/createPost">Create a Post</Link>
                 <a onClick={logoutUser}>Log Out</a>
                
                </>
            )}
            {!isLoggedIn && (
                <>
                <Link href="/login">Login</Link>
                <Link href="/createUser">Create New User</Link> 
                </>
            )}
                </nav>
        </header>
    );
};

export default Header;