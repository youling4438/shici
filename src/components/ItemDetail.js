import * as React from 'react'
import { Containerstyle } from '../styles/global-styles'

const ItemDetail = ({ itemDetail }) => {
    const { origin: { content } } = itemDetail;
    const contentList = content.map(item => (<h3>{item}</h3>))
    return (
        <div>
            <Containerstyle />
            <p className={'container'}>
                {contentList}
            </p>
        </div>
    );
}

export default ItemDetail
