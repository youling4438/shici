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
            line-height: 35px;
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
    cursor: pointer;
    color: #000;
    border-bottom: 1px dashed currentColor;
    margin: 0 15px;
  }

  .changeButton:hover{
    border-bottom-style: solid;
  }
`

const Shici = ({ shiciData, showPrevButton, showNextButton, changeShici, collectShici, prevShici, nextShici }) => {
    const { content, author, origin, category, collect, orderNumber } = shiciData;
    const collectShiciHandle = () => {
        collectShici(orderNumber);
    }
    const prevShiciHandle = () => {
        prevShici(orderNumber - 1);
    }
    const nextShiciHandle = () => {
        nextShici(orderNumber + 1);
    }
    return (
        <div>
            <Containerstyle />
            <p className={'container'}>
                <Intro>
                    {content}
                    <div className={'from'} >
                        ------{author} {origin}
                        <span className={collect ? 'collected' : 'collect'} onClick={collectShiciHandle} ><img src={collectedIcon} /></span>
                    </div>
                </Intro>
                <ChangeButton>
                    {showPrevButton && <a className={'changeButton'} onClick={prevShiciHandle}>上一句诗词</a>}
                    <a className={'changeButton'} onClick={changeShici}>随机诗词</a>
                    {showNextButton && <a className={'changeButton'} onClick={nextShiciHandle}>下一句诗词</a>}
                </ChangeButton>
            </p>
        </div>
    );
}

export default Shici
