import React from 'react'
import styled, { keyframes } from 'styled-components'
import logo from '../assets/logo.svg'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
    filter: hue-rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    filter: hue-rotate(360deg);
  }
`

const TopBar = styled.div`
  background-color: #5c9291;
  height: 150px;
  padding: 20px;
  color: #fff;
  text-align: center;
  margin-top: 15px;

  .redux-logo {
    animation: ${rotate360} infinite 20s linear;
    height: 80px;
  }
`

function Jrsc() {
    return (
        <TopBar>
            <img src={logo} className="redux-logo" alt="logo" />
            <h2>今日诗词</h2>
        </TopBar>
    )
}

export default Jrsc
