import React, { useContext } from "react";

import { QueryContext } from "../App";
import "./Header.css";

export default function Header() {
  const { query, setQuery } = useContext(QueryContext);
  return (
    <header>
      <div className="container">
        <h1>
          <b>
            <i>React&nbsp;</i>
          </b>
          Skill Assessment
        </h1>
        <div id="search">
          <img src="https://img.icons8.com/office/30/000000/search--v2.png" />
          <input
            id="query"
            placeholder="Search…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
}
