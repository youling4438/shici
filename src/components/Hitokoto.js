import * as React from 'react'
import styled from 'styled-components'
import { Containerstyle } from '../styles/global-styles'

const Intro = styled.p`
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 40px;
    text-align: center;
        .from{
            text-align: center;
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

const Hitokoto = ({ hitokotoData, changeWord }) => {
    console.log('hitokotoData: ', hitokotoData);
    const { hitokoto, from, creator, id, created_at, type } = hitokotoData;
    return (
        <div>
            <Containerstyle />
            <p className={'container'}>
                <Intro>
                    {hitokoto}
                    <div className={'from'} >------{creator} {from} </div>
                </Intro>
                <ChangeButton>
                    <a className={'changeButton'} onClick={changeWord}>切换一言</a>
                </ChangeButton>
            </p>
        </div>
    );
}

export default Hitokoto
