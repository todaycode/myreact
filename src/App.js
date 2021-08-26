import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import UserCard from './components/UserCard';

export const QueryContext = React.createContext();

export default function App() {
  const [query, setQuery] = useState("git");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    query != ""
      ? axios
          .get(`https://api.github.com/search/users?q=${query}`)
          .then((res) => setUsers(res.data.items))
          .catch((err) => setUsers([]))
      : setUsers([]);
  }, [query]);
  return (
    <div className="App">
      <QueryContext.Provider value={{query, setQuery}}>
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
