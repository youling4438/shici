import * as React from 'react'
import styled from 'styled-components'
import { Containerstyle } from '../styles/global-styles'

const Title = styled.div`
	font-family: cursive;
`
const Author = styled.div`
	font-family: cursive;
`
const Content = styled.div`
	font-family: cursive;
`

const ItemDetail = ({ itemDetail }) => {
    const { origin: { content, author, dynasty, title, translate } } = itemDetail;
    const contentList = content.map(item => (<h3>{item}</h3>))
    const showTranslate = translate !== null;
    const translateList = showTranslate && translate.map(item => (<h5>{item}</h5>))
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
        </div>
    );
}

export default ItemDetail
