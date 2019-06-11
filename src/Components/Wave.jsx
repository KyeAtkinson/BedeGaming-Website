import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
z-index: -1;

.wave.one {
  height: 2rem;
  width: 100%;
  transform: rotate(180deg);
  animation: wave 10s infinite linear;
  filter: drop-shadow(0px -2px 5px rgba(0, 0, 0, 0.2));
}
`
const Wave = () =>
<Container>
  <svg className="wave one" preserveAspectRatio="none" viewBox="0 0 90 85" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-50"><stop stop-color="" offset="0%" stop-opacity="0.8"></stop><stop stop-color="#dc0e17" offset="50%"></stop></linearGradient></defs><path class="sc-ckVGcZ krQqVQ sc-dxgOiQ hTjMfW" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" fill="white"></path></svg>
</Container>
 
export default Wave