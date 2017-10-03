import React from 'react';
import {Link} from 'react-router'; 

const Main = React.createClass({
  render() {
    return(
      <div>
      <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li><Link to={"/home"}>Home</Link></li>
            <li><Link to={"/user"}>User</Link></li>
          </ul>
        </div>
      </div>
    </nav>


        <h1>
          <Link to="/">Spir()</Link>
        </h1>
        {React.cloneElement(this.props.children,this.props)}
      </div>
    )
  }
});

export default Main;