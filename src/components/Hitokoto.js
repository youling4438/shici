import * as React from 'react'
import { Intro, ChangeButton } from './common'
import { Containerstyle } from '../styles/global-styles'
import collectedIcon from '../assets/collected.svg'

const Hitokoto = ({ hitokotoData, showPrevButton, showNextButton, changeHitokoto, collectHitokoto, prevHitokoto, nextHitokoto }) => {
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
