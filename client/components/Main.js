import React, { Component } from 'react';
import { Link } from 'react-router';
import css from '../styles/Navbar.styl';


const Main = React.createClass({
  render() {
    return(
      <div>
        {/* Nav Bar */}
              <nav className="navbar navbar-default">
                <div className="navbar-header">
                  <ul>
                  <li className="dropdown">
                    <a href="javascript:void(0)" className="dropbtn">SpIr</a>
                    <div className="dropdown-content">
                        <a href="#">Submit</a>
                        <a href="#">Rankings</a>
                    </div>
                    </li>
                  </ul>
                </div>
                <ul className="nav navbar-nav">
                </ul>
                <ul className="nav navbar-nav navbar-right">
                <li><button className="btn btn-danger log">Log out </button></li>
                  <li><button className="btn btn-info log">Log In</button></li>                  
                </ul>
              </nav>

<div>
        <h1>
          <Link to="/">Spir()</Link>
        </h1>
        {React.cloneElement(this.props.children,this.props)}
      </div>
      </div>
    )
  }
});


export default Main;