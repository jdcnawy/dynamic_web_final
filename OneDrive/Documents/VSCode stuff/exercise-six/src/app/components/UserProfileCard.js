const UserProfileCard = ({user}) =>{
    return(
        <div>
            <h2>Email: {user?.email}</h2>
        </div>
    );
};

export default UserProfileCard;