import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import UserCard from "./components/UserCard";

export const QueryContext = React.createContext();

export default function App() {
  const [query, setQuery] = useState("git");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    query != ""
      ? fetch(`https://api.github.com/search/users?q=${query}`)
          .then((res) => res.json())
          .then((res) => {
            setUsers(res.items);
            setIsLoading(false);
          })
          .catch((err) => setUsers([]))
      : setUsers([]);
  }, [query]);
  return (
    <div className="App">
      <QueryContext.Provider value={{ query, setQuery }}>
        <Header />
        <div className="container users">
          {!isLoading ? (
            users.map((user) => <UserCard key={user.id} user={user} />)
          ) : (
            <h2>'Loading...'</h2>
          )}
        </div>
      </QueryContext.Provider>
      <div className="container" style={{background:'red', color:'white', position:'fixed', bottom:'0', width:'100%'}}>
        <h3>My upwork account is currently on temporarily hold due to my credit card issue. So I can't chat with you via upwork.</h3>
        <h2>I hope to be hired on this position. If you would to keep going with me, please contact me.<a href="https://calendly.com/alex-lim-software">Meet Me</a></h2>
        <h2></h2>
        <h2>
          Email: <b>alex.lim.software@gmail.com</b>&nbsp;&nbsp;
          <a href="https://alex-lim.info"><b>My Personal Site</b></a>&nbsp;&nbsp;
          <a href="https://linkedin.com/in/alex-lim-specialist/"><b>Linkedin</b></a>
        </h2>
      </div>
    </div>
  );
}
