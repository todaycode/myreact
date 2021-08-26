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
    </div>
  );
}
