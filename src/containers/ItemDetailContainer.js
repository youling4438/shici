import React from 'react'
import { bindActionCreators } from 'redux'
import { ItemDetail } from '../components'
import { connect } from 'react-redux'
import * as jrscAction from '../actions/Jrsc'

class ItemDetailContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { itemDetail, allJrShiciList, jrShiciDetail } = this.props;
        const allCollectList = allJrShiciList.filter(item => item.collect);
        const { id } = itemDetail;
        const index = allCollectList.findIndex(item => item.id == id);
        return (
            <ItemDetail
                index={index}
                itemDetail={itemDetail}
                allCollectList={allCollectList}
                jrShiciDetail={jrShiciDetail}
            />
        )
    }
}

const mapStateToProps = (state) => state.Jrsc

function mapDispatchToProps(dispatch) {
    return bindActionCreators(jrscAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailContainer)
