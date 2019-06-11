import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const Container = styled.div`
font-family: 'Poppins', sans-serif;
  text-align: center;
  text-transform: uppercase;

  .product-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50px 200px 50px 1fr;
    margin: 0 10rem;

    .content {
      margin: 0 2rem;
    }
    button {
      background: #dc0e17;
      border: none;
      border-radius: 3px;
      color: #fff;
      height: 2.5rem;
      text-transform: uppercase;
      width: 8rem;
    }
  }

`
const Product =()=> 
<Container>
  <Fade><h1 className="title">Products</h1></Fade>
  <Fade>
    <div className="product-container">
      <div className="content one">
        <h2>Content</h2>
        <img alt="play-button" src="https://bedegaming.com/wp-content/uploads/2015/03/play.png"></img>
        <p>A complete content solution with access to Bede’s powerful marketing tools and over 2000 games from industry-leading suppliers via a single integration.</p>
        <button>Go Play ></button>
      </div>
      <div className="content two">
        <h2>Content</h2>
        <img alt="play-button" src="https://bedegaming.com/wp-content/uploads/2015/03/hub1.png"></img>
        <p>A complete content solution with access to Bede’s powerful marketing tools and over 2000 games from industry-leading suppliers via a single integration.</p>
        <button>Get Hub ></button>
      </div>
      <div className="content three">
        <h2>Content</h2>
        <img alt="play-button" src="https://bedegaming.com/wp-content/uploads/2017/06/Pasted-image-at-2017_06_27-04_46-PM.png"></img>
        <p>A complete content solution with access to Bede’s powerful marketing tools and over 2000 games from industry-leading suppliers via a single integration.</p>
        <button>Launch Plus ></button>
      </div>
    </div>
  </Fade>
</Container>

export default Product