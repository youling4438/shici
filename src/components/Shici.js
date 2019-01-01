import * as React from 'react'
import styled from 'styled-components'
import { Containerstyle } from '../styles/global-styles'

const Intro = styled.p`
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 40px;
    text-align: center;
        .from{
            text-align: right;
            font-size: 14px;
        }
    `
const ChangeButton = styled.div`
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;

  .changeButton{
    cursor:pointer;
    color: #000;
    border-bottom: 1px dashed currentColor;
  }

  .changeButton:hover{
    border-bottom-style: solid;
  }
`

const Shici = ({ shiciData, changeShici }) => {
    const { content, author, origin, category } = shiciData;
    return (
        <div>
            <Containerstyle />
            <p className={'container'}>
                <Intro>
                    {content}
                    <div className={'from'} >------{author} {origin} </div>
                </Intro>
                <ChangeButton>
                    <a className={'changeButton'} onClick={changeShici}>切换诗词</a>
                </ChangeButton>
            </p>
        </div>
    );
}

export default Shici
