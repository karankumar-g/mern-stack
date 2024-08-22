import { useState } from "react";
import "./App.css";
import Home from "./Home";

function App() {
  let firstname = "Karan";
  // let email = "karankumar.g0csa@gmail.com";
  const [email, setEmail] = useState("");
  // const [address, setAddress] = useState("abc\tefg\txyz");
  const [phone, setPhone] = useState("");

  const validate = () => {
    if (email == "") {
      alert("email is empty");
    } else if (phone == "") {
      alert("phone is empty");
    } else {
      alert("everything is fine");
    }
  };
  return (
    <div className="App">
      <h1>This is React App</h1>
      <Home />
      {firstname}
      <h2>{email}</h2>
      {/* <h2>{address}</h2> */}
      <h2>{phone}</h2>
      <h2>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          placeholder="Email"
        />
      </h2>
      <h2>
        <input
          type="number"
          onChange={(e) => setPhone(e.target.value)}
          id="phone"
          placeholder="phone"
        />
      </h2>
      <h2>
        <button type="submit" onClick={() => validate()}>
          Submit
        </button>
      </h2>
    </div>
  );
}

export default App;
