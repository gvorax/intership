import React ,{useState} from 'react';
import logo from '../assets/logo.svg';
import cart from '../assets/cart.svg'
const Header = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <header class="header">
      <div class="header--top">
        <span class="header--text">
          One week only—50% off all courses with code 50OFF at checkout
        </span>
      </div>
      <div class="main-container">
        <div class="header--bottom">
          <div class="header--logo">
            <a href="./index.html">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <nav class="header--nav">
            <ul class="header--list">
              <li class="header--list__item">
                <a href="#"> Courses</a>
              </li>
              <li class="header--list__item">
                <a href="#"> Free Workshops</a>
              </li>
              <li class="header--list__item">
                <a href="#"> Blog</a>
              </li>
              <li class="header--list__item">
                <a href="#"> About</a>
              </li>
              <li class="header--list__item">
                <a href="#"> Contact</a>
              </li>
            </ul>
            <i class="uil uil-times"></i>
          </nav>
          <div class="header--cart">
            <img src={cart} alt="cart" />
            <div class="header--cart__count">0</div>
          </div>
          <button class={`header--btn ${isActive ? 'open--nav' : null}`}>
            <i class="uil uil-bars" onClick={()=>setIsActive(!isActive)}></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
