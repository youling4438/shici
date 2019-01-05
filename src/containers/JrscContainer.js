import React from 'react'
import { Jrsc } from '../components/'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as jrscAction from '../actions/Shici'

class JrscContainer extends React.Component {
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
        // const { shiciData, allShiciList } = this.props;
        // const { orderNumber } = shiciData;
        return (
            <Jrsc

            />
        )
    }
}

const mapStateToProps = state => state

function mapDispatchToProps(dispatch) {
    return bindActionCreators(jrscAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(JrscContainer)
