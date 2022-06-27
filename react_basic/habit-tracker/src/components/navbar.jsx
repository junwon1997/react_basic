import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navbarBox">
            <span className="navbarTitle">Habit Tracker</span>
            <span className="navbarCount">{this.props.totalCount}</span>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
