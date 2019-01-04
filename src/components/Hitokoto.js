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
    margin: 0 15px;
  }

  .changeButton:hover{
    border-bottom-style: solid;
  }
`

const Hitokoto = ({ hitokotoData, showPrevButton, showNextButton, changeHitokoto, collectHitokoto, prevHitokoto, nextHitokoto }) => {
    console.log('hitokotoData: ', hitokotoData);
    const { hitokoto, from, creator, id, created_at, type, collect, orderNumber } = hitokotoData;
    const collectHitokotoHandle = () => {
        collectHitokoto(orderNumber);
    }
    const prevHitokotoHandle = () => {
        prevHitokoto(orderNumber - 1);
    }
    const nextHitokotoHandle = () => {
        nextHitokoto(orderNumber + 1);
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
                    {showPrevButton && <a className={'changeButton'} onClick={prevHitokotoHandle}>上一条一言</a>}
                    <a className={'changeButton'} onClick={changeHitokoto}>随机一言</a>
                    {showNextButton && <a className={'changeButton'} onClick={nextHitokotoHandle}>下一条一言</a>}
                </ChangeButton>
            </p>
        </div>
    );
}

export default Hitokoto
