import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
  return (
   
<div className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">WELOCOME</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="btn btn-outline-success me-2" type="button" to="/add">Add User</Link>
    </div>
    </div>
      )
  }
