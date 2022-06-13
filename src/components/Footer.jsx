import React from 'react';
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer class="footer">
      <div class="main-container">
        <div class="contact--banner">
          <h2 class="banner--title">
            You have the power to define your future.
          </h2>
          <form class="banner--form">
            <input type="email" placeholder="EMAIL ADDRESS" />
            <button>SUBMIT</button>
          </form>
        </div>
        <div class="logo">
          <a href="./index.html">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div class="footer--links">
          <ul class="list">
            <li class="list--item">learning Platform</li>
            <li class="list--item">
              <a href="#">Home</a>
            </li>
            <li class="list--item">
              <a href="#">Courses</a>
            </li>
            <li class="list--item">
              <a href="#">Free Workshops</a>
            </li>
            <li class="list--item">
              <a href="#">Blog</a>
            </li>
            <li class="list--item">
              <a href="#">About</a>
            </li>
            <li class="list--item">
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul class="list">
            <li class="list--item">Template</li>
            <li class="list--item">
              <a href="#">Instructions</a>
            </li>
            <li class="list--item">
              <a href="#">Style Guide</a>
            </li>
            <li class="list--item">
              <a href="#">Licenses</a>
            </li>
            <li class="list--item">
              <a href="#">Changelog</a>
            </li>
          </ul>
          <div>
            <div class="title">Follow skillz</div>
            <ul class="social--list">
              <li>
                <a href="#">
                  <i class="uil uil-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="uil uil-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="uil uil-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="uil uil-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="uil uil-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="subfooter">
        <div class="main-container">
          <span>© Skillz Template</span>
          <span>Powered by Webflow</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
