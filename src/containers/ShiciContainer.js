import React from 'react'
import { Shici } from '../components/'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as shiciAction from '../actions/Shici'

class ShiciContainer extends React.Component {
    constructor(props) {
        super(props);
        this.changeShici = this.changeShici.bind(this)
    }
    changeShici() {
        this.props.changeShici()
    }
    render() {
        const { shiciData } = this.props;
        return (
            <Shici
                shiciData={shiciData}
                changeShici={this.changeShici}
            />
        )
    }
}

const mapStateToProps = createStructuredSelector({
    shiciData: createSelector(
        (state) => state.shiciData,
        (shiciState) => shiciState
    ),
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators(shiciAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShiciContainer)
