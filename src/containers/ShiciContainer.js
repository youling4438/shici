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
        this.collectShici = this.collectShici.bind(this)
        this.prevShici = this.prevShici.bind(this)
        this.nextShici = this.nextShici.bind(this)
    }
    changeShici() {
        this.props.changeShici()
    }
    collectShici(index) {
        this.props.collectShici(index)
    }
    prevShici(index) {
        this.props.prevShici(index)
    }
    nextShici(index) {
        this.props.nextShici(index)
    }
    render() {
        const { shiciProps: { shiciData, allShiciList } } = this.props;
        return (
            <Shici
                shiciData={shiciData}
                allShiciList={allShiciList}
                changeShici={this.changeShici}
                collectShici={this.collectShici}
                prevShici={this.prevShici}
                nextShici={this.nextShici}
            />
        )
    }
}

const mapStateToProps = createStructuredSelector({
    shiciProps: createSelector(
        (state) => ({ shiciData: state.shiciData, allShiciList: state.allShiciList }),
        (shiciState) => shiciState
    ),
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators(shiciAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShiciContainer)
