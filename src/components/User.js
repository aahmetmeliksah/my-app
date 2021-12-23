function User(props) {
    return (
        <>
        <h1>
            {
            props.loggedIn ? `My name is ${props.name}, my surname is ${props.surname}` : "Login please" 
            } 
        </h1>
        </>
    );
}

export default User;