import * as React from 'react'
import styled from 'styled-components'
import { Containerstyle } from '../styles/global-styles'
import { ChangeButton } from './common'

const Title = styled.div`
    font-family: cursive;
    font-size: 25px;
    margin-top: 20px;
    margin-bottom: 20px;
`
const Author = styled.div`
    font-family: cursive;
    font-size: 16px;
`
const Content = styled.div`
    font-family: cursive;
    font-size: 20px;
`

const ItemDetail = ({ itemDetail, index, allCollectList, jrShiciDetail }) => {
    const { origin: { content, author, dynasty, title, translate } } = itemDetail;
    const contentList = content.map(item => (<h3>{item}</h3>));
    const showTranslate = translate !== null;
    const translateList = showTranslate && translate.map(item => (<h5>{item}</h5>));
    const showPrevButton = index > 0;
    const showNextButton = index < allCollectList.length - 1;
    const prevJrShiciHandle = () => {
        jrShiciDetail(allCollectList[index - 1]);
    };
    const nextJrShiciHandle = () => {
        jrShiciDetail(allCollectList[index + 1]);
    };
    return (
        <div>
            <Containerstyle />
            <p className={'container'}>
                <Title>{title}</Title>
                <Author>{dynasty} • {author}</Author>
                <Content>{contentList}</Content>
                {showTranslate &&
                    <span>译： </span>
                }
                {showTranslate &&
                    translateList
                }
            </p>
            <ChangeButton>
                {showPrevButton && <a className={'changeButton'} onClick={prevJrShiciHandle}>上一句诗词</a>}
                {showNextButton && <a className={'changeButton'} onClick={nextJrShiciHandle}>下一句诗词</a>}
            </ChangeButton>
        </div>
    );
}

export default ItemDetail
