// import React from 'react'
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { genres } from "../mock/constants";

const NavBar = () => {
  const navigate = useNavigate();
  const inputRef = useRef();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.length) {
      navigate(`/search/${searchTerm}`)
    } else {
      inputRef.current.focus();
    }
  };

  return (
    <div className="nav">
      <div className="main-nav">
        <div className="logo" />

        <div className="nav-links">
          {genres.map((item) => (
            <p key={item.id} className="link" onClick={() => navigate(`/genre/${item.name.toLocaleLowerCase()}/${item.id}`)}>{item.name}</p>
            ))}
        </div>
        <div className="logo" />
      </div>
      <div className="main-search">
        <form className="form" onSubmit={handleSearch}>
          <input ref={inputRef} type="text" placeholder="Find Movies..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </form>
      </div>
    </div>
  );
};

export default NavBar;
