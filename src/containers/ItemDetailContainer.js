import React from 'react'
import { ItemDetail } from '../components'
import { connect } from 'react-redux'

class ItemDetailContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { itemDetail } = this.props;
        return (
            <ItemDetail
                itemDetail={itemDetail}
            />
        )
    }
}

const mapStateToProps = (state) => state.Jrsc

export default connect(mapStateToProps)(ItemDetailContainer)
