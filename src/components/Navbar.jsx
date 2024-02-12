import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../styles/NavbarStyle.css';
import logo from '../Images/logo.png';

class Navbar extends Component {
  // Tutorial para subir a producción la página
  // TODO: https://www.youtube.com/watch?v=23BHwAFIZmk&ab_channel=Tech2etc 
  
  state = {clicked: false}
  handleClick = () => {
    this.setState({clicked: !this.state.clicked});
  }

  render() {
    return (
      <nav>
        <Link className='w-32 h-5 mb-28'  to="/">
          <img className='w-full' src={logo} alt="Logo" />
        </Link>
        
        <div>
          <ul id='navbar' className={this.state.clicked ? "#navbar active" : "navbar"}>
            <li><Link className='link' to="/">Home</Link></li>
            <li><Link className='link' to="/movies">Movies</Link></li>
            <li><Link className='link' to="/shopping">Shopping</Link></li>
            <li><Link className='link' to="/favourite">Favourite movies</Link></li>
            <li><Link className='link' to="/">Contact</Link></li>
          </ul>
        </div>

        <div id='mobile' onClick={this.handleClick}>
          <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>
    )
  }
}

export default Navbar