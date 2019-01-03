import * as React from 'react'
import styled from 'styled-components'
import { Containerstyle } from '../styles/global-styles'
import collectedIcon from '../assets/collected.svg'

const Intro = styled.p`
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 40px;
    text-align: center;
        .from{
            margin-top: 20px;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            color: #5c9291;
            .collect, .collected{
                float: right;
                cursor: pointer;
                filter: brightness(0);
                img{
                    padding: 5px 10px;
                    width: 25px;
                }
            }
            .collect:hover, span.collected{
                filter: brightness(1);
            }
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

const Hitokoto = ({ hitokotoData, changeHitokoto, collectHitokoto }) => {
    console.log('hitokotoData: ', hitokotoData);
    const { hitokoto, from, creator, id, created_at, type, collect, orderNumber } = hitokotoData;
    const collectHitokotoHandle = () =>{
        collectHitokoto(orderNumber);
    }
    return (
        <div>
            <Containerstyle />
            <p className={'container'}>
                <Intro>
                    {hitokoto}
                    <div className={'from'} >------{creator} {from}
                        <span className={collect ? 'collected' : 'collect'} onClick={collectHitokotoHandle} ><img src={collectedIcon} /></span>
                    </div>
                </Intro>
                <ChangeButton>
                    <a className={'changeButton'} onClick={changeHitokoto}>切换一言</a>
                </ChangeButton>
            </p>
        </div>
    );
}

export default Hitokoto
