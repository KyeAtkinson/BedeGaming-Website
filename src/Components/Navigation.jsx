import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

.navigation-container {
  background: #fff;
  box-shadow: 0px 4px 40px -22px rgba(0,0,0,0.27);
  display: grid;
  grid-template-columns: 1fr 100px 1fr;
  height: 5rem;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  .links {
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-weight: 50;
    justify-content: space-around;
    text-transform: uppercase;

    ul {
      display: flex;
      list-style: none;
      padding: 0;

      li {
        color: #707070;
        margin: 1rem 1rem;

        :hover {
          color: #000;
          border-bottom: 1px solid #dc0e17;
          font-weight: 500;
        }
      }
    }
  }

  .links {
    &.left,
    &.right {
      width: 100%;
    }

    .nav-item {
      .menu {
        background: #fff;
        border-radius: 0 0 6px 6px;
        display: none;
        flex-direction: column;
        position: absolute;
        min-width: 13rem;

        a {
          color: #cecece;
          text-decoration: none;
          margin: 1rem;
        }
        a:hover {
          color: #fff;
          border-bottom: 1px #dc0e17 solid;
        }
      }

      &:hover {
        .menu {
          display: flex;
          background: #333;
          border-top: solid #dc0e17 3px;
        }
      }
    }
  }

  .logo {
    display: flex;

    svg {
      fill: #dc0e17;
      height: 2.5rem;
      margin: auto;
    }
  }
}

`

const Navigation = () =>
<Container>
  <div className="navigation-container">
    <div className="links left">
      <ul>
        <li className='nav-item'>Home</li>
        <li className='nav-item'> About
          <div className="menu">
            <a href="#">Why Bede ?</a>
            <a href="#">Leadership</a>
            <a href="#">Candidates</a>
          </div>
        </li>
        <li className='nav-item'>Products</li>
        <li className='nav-item'>Sectors</li>
      </ul>
    </div>
    <div className="logo">
      <svg viewBox="0 0 148 51" xmlns="http://www.w3.org/2000/svg">
        <svg viewBox="0 0 112 38" id="icon-logo" xmlns="http://www.w3.org/2000/svg"><path d="M55.873 15.724A15.386 15.386 0 0 1 69.481 7.56c3.175 0 6.115.958 8.559 2.588V0h6.778v8.01l-3.327 5.3-3.451 5.888-.456.781a8.573 8.573 0 0 0-8.103-5.724c-4.736 0-8.587 3.807-8.587 8.517 0 4.697 3.838 8.518 8.587 8.518 12.659 0 8.945-23.717 26.933-23.717 8.463 0 15.338 6.805 15.338 15.213 0 .945-.083 1.876-.263 2.78H88.297l.11.301a8.577 8.577 0 0 0 7.994 5.423 8.582 8.582 0 0 0 6.447-2.903l5.356 4.08a15.35 15.35 0 0 1-11.817 5.52 15.363 15.363 0 0 1-12.094-5.862l6.074-12.132h14.137a8.57 8.57 0 0 0-8.117-5.738c-12.59 0-7.993 23.717-26.934 23.717-7.497 0-13.748-5.341-15.077-12.406H34.14l.249.548a8.581 8.581 0 0 0 7.896 5.19 8.581 8.581 0 0 0 6.447-2.903l5.08 4.409A15.367 15.367 0 0 1 42.272 38c-4.915 0-9.292-2.3-12.094-5.86l6.198-12.133H50.39a8.57 8.57 0 0 0-8.118-5.738c-12.59 0-8.366 23.717-26.934 23.717C6.861 37.973 0 31.167 0 22.76V.028h6.778v10.12a15.259 15.259 0 0 1 8.56-2.59c4.873 0 9.207 2.246 12.01 5.766l-3.907 6.655a8.573 8.573 0 0 0-8.104-5.724c-4.542 0-8.255 3.505-8.559 7.942v.575c-.014 4.697 3.824 8.518 8.573 8.518 12.66 0 8.642-23.717 26.934-23.717a15.355 15.355 0 0 1 13.588 8.151z"></path></svg>
      </svg>
    </div>
    <div className="links right">
      <ul>
        <li className='nav-item'>Partners</li>
        <li className='nav-item'>Careers</li>
        <li className='nav-item'>News</li>
        <li className='nav-item'>Contact</li>
      </ul>
    </div>
  </div>
</Container>

export default Navigation
