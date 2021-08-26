import React from "react";
import './UserCard.css';

export default function GitUserCard(props) {
  const { user } = props;

  return (
      <div className="card" title={user.login} onClick={e => window.open(user.html_url,'_blank')}>
          <img className="avatar" src={user.avatar_url} height="140px"/>
          <h3 className="username">{user.login}</h3>
      </div>
  );
}
