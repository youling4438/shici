import * as React from 'react'
import { Intro, ChangeButton } from './common'
import { Containerstyle } from '../styles/global-styles'
import collectedIcon from '../assets/collected.svg'

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
