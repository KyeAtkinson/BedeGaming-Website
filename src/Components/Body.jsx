import React from 'react';
import styled from 'styled-components';
import Breaker from '../images/Breaker.png';
import VideoPlayer from './VideoPlayer';
import Video from '../Videos/video.mp4';

const Container = styled.div`
  margin: 0;
  height: 30rem;
  background: linear-gradient(rgba(14, 0, 2, 0.75),rgba(41, 41, 41, 0.66));
  padding-top: 3rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 992px) {
    height: 40rem;
  }

  .logo {
    display: flex;
    justify-content: center;

    svg {
      margin: 10rem 0 0;
      height: 6rem;
      fill: #E21317;
      filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.2));
      z-index: 0;

      @media (min-width: 992px) {
        margin: 10rem 0 0;
        height: 10rem;
      }
    }
  }

  h1 {
    font-size: 1.5rem;
    text-align: center;
    color: white;

    @media (min-width: 992px) {
      font-size: 2.5rem;
    }
  }
  
  .breaker-lines {
    bottom: 0;
    filter: brightness(0) invert(13);
    height: auto;
    position: absolute;
    width: 100%;
    z-index: -1;
  }


  video {
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    background-size: cover;
    overflow: hidden;
  }
`;

const Body = () => (
  <Container>
    <div className="logo">
      <svg viewBox="0 0 148 51">
        <svg viewBox="0 0 112 38" id="icon-logo"><path d="M55.873 15.724A15.386 15.386 0 0 1 69.481 7.56c3.175 0 6.115.958 8.559 2.588V0h6.778v8.01l-3.327 5.3-3.451 5.888-.456.781a8.573 8.573 0 0 0-8.103-5.724c-4.736 0-8.587 3.807-8.587 8.517 0 4.697 3.838 8.518 8.587 8.518 12.659 0 8.945-23.717 26.933-23.717 8.463 0 15.338 6.805 15.338 15.213 0 .945-.083 1.876-.263 2.78H88.297l.11.301a8.577 8.577 0 0 0 7.994 5.423 8.582 8.582 0 0 0 6.447-2.903l5.356 4.08a15.35 15.35 0 0 1-11.817 5.52 15.363 15.363 0 0 1-12.094-5.862l6.074-12.132h14.137a8.57 8.57 0 0 0-8.117-5.738c-12.59 0-7.993 23.717-26.934 23.717-7.497 0-13.748-5.341-15.077-12.406H34.14l.249.548a8.581 8.581 0 0 0 7.896 5.19 8.581 8.581 0 0 0 6.447-2.903l5.08 4.409A15.367 15.367 0 0 1 42.272 38c-4.915 0-9.292-2.3-12.094-5.86l6.198-12.133H50.39a8.57 8.57 0 0 0-8.118-5.738c-12.59 0-8.366 23.717-26.934 23.717C6.861 37.973 0 31.167 0 22.76V.028h6.778v10.12a15.259 15.259 0 0 1 8.56-2.59c4.873 0 9.207 2.246 12.01 5.766l-3.907 6.655a8.573 8.573 0 0 0-8.104-5.724c-4.542 0-8.255 3.505-8.559 7.942v.575c-.014 4.697 3.824 8.518 8.573 8.518 12.66 0 8.642-23.717 26.934-23.717a15.355 15.355 0 0 1 13.588 8.151z" /></svg>
      </svg>
    </div>
    <VideoPlayer src={Video} />
    <h1>THE FIRST CHOICE GAMING PLATFORM</h1>
    <img className="breaker-lines" src={Breaker} alt="" />
  </Container>
);

export default Body;
