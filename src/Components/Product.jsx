import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import ImageMapper from './ImageMapper'
import VideoPlayer from './VideoPlayer'

import image from '../images/casino-icon_bold.png';

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  text-align: center;
  text-transform: uppercase;

  h1 {
    font-size: 1.5rem;
  }

  h1:after {
    border-bottom: 1px solid black;
    content:"";
    display: block;
    margin: 0 auto;
    width: 15%;
    padding-top: 20px;
  }

  .product-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    margin: 5rem 3rem;

    .content {
      margin: 0 2rem;
      padding: 0 2rem;
    }

    .content.two {
      border-left: 1px solid #e5e5e5 ;
      border-right: 1px solid #e5e5e5;
      margin: 0 1rem;
    }

    h2 {
      font-size: 1rem;
      color: #dc0e17;
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

  .image-container {
    display: flex;
    justify-content: center;
    margin: 3rem 0;

    img {
      height: 10rem;
    }
  }

  video {
    border-radius: 0.5rem;
    height: 20rem;
    margin-top: 3rem;
    opacity: 0.3;
    transition: all 1000ms ease-out;
  }

  video:hover {
    animation: scale 2s infinite;
    border-radius: 1rem;
    opacity: 1;
    transform: scale(1.5);
    }
  }
`
const Product =()=>
  <Container>
    <h1 className="title">Products</h1>
    <div className="product-container">
      <div className="content one">
        <h2>Content</h2>
        <img alt="play-button" src="https://bedegaming.com/wp-content/uploads/2015/03/play.png"></img>
        <p>A complete content solution with access to Bede’s powerful marketing tools and over 2000 games from industry-leading suppliers via a single integration.</p>
        <button>Go Play ></button>
      </div>
      <div className="content two">
        <h2>Platform</h2>
        <img alt="play-button" src="https://bedegaming.com/wp-content/uploads/2015/03/hub1.png"></img>
        <p>A complete content solution with access to Bede’s powerful marketing tools and over 2000 games from industry-leading suppliers via a single integration.</p>
        <button>Get Hub ></button>
      </div>
      <div className="content three">
        <h2>Premium Services</h2>
        <img alt="play-button" src="https://bedegaming.com/wp-content/uploads/2017/06/Pasted-image-at-2017_06_27-04_46-PM.png"></img>
        <p>A complete content solution with access to Bede’s powerful marketing tools and over 2000 games from industry-leading suppliers via a single integration.</p>
        <button>Launch Plus ></button>
      </div>
    </div>
    <div className="why-section">
      <h1>Why Bede?</h1>
      <div className="image-container">
        <img src={image} alt="cubnt" />
        {/* <img src="https://bedegaming.com/wp-content/uploads/2017/09/Monthly-Users.png" alt="" />
        <img src="https://bedegaming.com/wp-content/uploads/2017/09/Revenue-From-Mobile.png" alt="" />
        <img src="https://bedegaming.com/wp-content/uploads/2017/09/Staked-Per-Annum.png" alt="" />
        <img src="https://bedegaming.com/wp-content/uploads/2015/03/Transactions-Per-Annum.png" alt="" />
        <img src="https://bedegaming.com/wp-content/uploads/2017/09/79-YoY-Revenue-Growth.png" alt="" /> */}
      </div>
    </div>
    <div className="partners">
      <VideoPlayer src="https://dms.licdn.com/playback/C5605AQHRfZRtO86Nwg/d0bac112287240e082e59364d2ecebe2/feedshare-mp4_3300-captions-thumbnails/1507940147251-drlcss?e=1561633200&v=beta&t=Ro0g4ZE6wAbgRQfR_e4GW15YrAV8RdnJsb8LF_HVnuU"/>
    </div>
  </Container>

export default Product
