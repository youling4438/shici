import * as React from 'react'
import { Intro, ChangeButton, CollectList } from './common'
import { Containerstyle } from '../styles/global-styles'
import collectedIcon from '../assets/collected.svg'

const Shici = ({ shiciData, allShiciList, showPrevButton, showNextButton, changeShici, collectShici, prevShici, nextShici }) => {
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
    const collectDom = allShiciList.filter((item) => item.collect).map((item, index) => {
        const { content, author } = item;
        return <li key={index}>{content} <span>-------{author}</span></li>;
    });
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
                {collectDom.length > 0 && <CollectList>
                    <span className={'title'}>我的收藏：</span>
                    {collectDom}
                </CollectList>}
            </p>
        </div>
    );
}

export default Shici
