import React from 'react'
import { Shici } from '../components/'
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
        const { shiciData, allShiciList } = this.props;
        const { orderNumber } = shiciData;
        return (
            <Shici
                shiciData={shiciData}
                allShiciList={allShiciList}
                showPrevButton={orderNumber > 0}
                showNextButton={orderNumber < allShiciList.length - 1}
                changeShici={this.changeShici}
                collectShici={this.collectShici}
                prevShici={this.prevShici}
                nextShici={this.nextShici}
            />
        )
    }
}

const mapStateToProps = state => state.Shici

function mapDispatchToProps(dispatch) {
    return bindActionCreators(shiciAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShiciContainer)
