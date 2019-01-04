import React from 'react'
import { Hitokoto } from '../components'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as hitokotoAction from '../actions/Hitokoto'

class HitokotoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.changeHitokoto = this.changeHitokoto.bind(this)
        this.collectHitokoto = this.collectHitokoto.bind(this)
        this.prevHitokoto = this.prevHitokoto.bind(this)
        this.nextHitokoto = this.nextHitokoto.bind(this)
    }
    changeHitokoto() {
        this.props.changeHitokoto()
    }
    collectHitokoto(index) {
        this.props.collectHitokoto(index)
    }
    prevHitokoto(index) {
        this.props.prevHitokoto(index)
    }
    nextHitokoto(index) {
        this.props.nextHitokoto(index)
    }
    render() {
        const { hitokotoProps: { hitokotoData, allHitokotoList } } = this.props;
        const { orderNumber } = hitokotoData;
        return (
            <Hitokoto
                hitokotoData={hitokotoData}
                showPrevButton={orderNumber > 0}
                showNextButton={orderNumber < allHitokotoList.length - 1}
                changeHitokoto={this.changeHitokoto}
                collectHitokoto={this.collectHitokoto}
                prevHitokoto={this.prevHitokoto}
                nextHitokoto={this.nextHitokoto}
            />
        )
    }
}

const mapStateToProps = createStructuredSelector({
    hitokotoProps: createSelector(
        (state) => ({ hitokotoData: state.hitokotoData, allHitokotoList: state.allHitokotoList }),
        (hitokotoState) => hitokotoState
    ),
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators(hitokotoAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HitokotoContainer)
