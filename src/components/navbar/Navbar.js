import './Navbar.css';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


function Navbar(props) {

  useEffect(() => {
    document.title = 'QueryBeryNet'
  }, [])

  return (
    <div>
      <header className="navbar-header">
        <nav>
          <Link to="/">
            <h1>QueryBerryNet</h1>
          </Link>
        </nav>
      </header>
    </div>
  )
}

export default Navbar