function User({ name, surname, loggedIn, age, friends }) {
  return (
    <>
      <h1>{loggedIn ? `${name} ${surname} (${age})` : "Login please"}</h1>

      {friends.map((friend) => (
        <div key={friend.id}>{friend.name}</div>
      ))}
    </>
  );
}

export default User;
