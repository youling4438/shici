import React from 'react'
import { Hitokoto } from '../components'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as hitokotoAction from '../actions/Hitokoto'

class HitokotoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.changeWord = this.changeWord.bind(this)
    }
    changeWord() {
        this.props.changeWord()
    }
    render() {
        const { hitokotoData } = this.props;
        return (
            <Hitokoto
                hitokotoData={hitokotoData}
                changeWord={this.changeWord}
            />
        )
    }
}

const mapStateToProps = createStructuredSelector({
    hitokotoData: createSelector(
        (state) => state.hitokotoData,
        (hitokotoState) => hitokotoState
    ),
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators(hitokotoAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HitokotoContainer)
