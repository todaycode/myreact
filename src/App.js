import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import UserCard from "./components/UserCard";

export const QueryContext = React.createContext();

export default function App() {
  const [query, setQuery] = useState("git");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    query != ""
      ? fetch(`https://api.github.com/search/users?q=${query}`)
          .then((res) => res.json())
          .then((res) => setUsers(res.items))
          .catch((err) => setUsers([]))
      : setUsers([]);
  }, [query]);
  return (
    <div className="App">
      <QueryContext.Provider value={{ query, setQuery }}>
        <Header />
        <div className="wrapper">
          {users.map((user) => (
            <UserCard user={user} />
          ))}
        </div>
      </QueryContext.Provider>
    </div>
  );
}
