import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import './Header.css'

class Header extends Component {
  buttonRenders() {
    if (this.props.authenticated) {
      return (
        <div>
          <Link to="/signout">Log Out</Link>
          <Link to="/feature">Feature</Link>
        </div>
      )
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      )
    }
  }
  
  render() {
    return (
      <header className="header">
          <Link to="/">Redux Auth</Link>
          {this.buttonRenders()}
      </header>
    )
  }
}

const mapStatetoProps = state => ({
  authenticated: state.auth.authenticated
})

export default connect(mapStatetoProps)(Header)