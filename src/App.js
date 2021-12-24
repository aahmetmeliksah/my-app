import "./App.css";
import "./components/User";
import User from "./components/User";

const friends = [
  {
    id: 1,
    name: "Micheal",
  },
  {
    id: 2,
    name: "Mustafa",
  },
  {
    id: 3,
    name: "Daniel",
  },
  {
    id: 4,
    name: "Sara",
  },
];

function App() {
  return (
    <>
      <User
        name="Ahmet Meliksah"
        surname="Akdeniz"
        loggedIn={true}
        age={24}
        friends={friends}
      />
    </>
  );
}

export default App;
