import React from 'react'
import { Jrsc } from '../components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as jrscAction from '../actions/Jrsc'

class JrscContainer extends React.Component {
    constructor(props) {
        super(props);
        this.changeJrShici = this.changeJrShici.bind(this)
        this.collectJrShici = this.collectJrShici.bind(this)
        this.prevShici = this.prevShici.bind(this)
        this.nextShici = this.nextShici.bind(this)
    }
    changeJrShici() {
        this.props.changeJrShici()
    }
    collectJrShici(index) {
        this.props.collectJrShici(index)
    }
    prevShici(index) {
        this.props.prevShici(index)
    }
    nextShici(index) {
        this.props.nextShici(index)
    }
    render() {
        const { jrshiciData } = this.props;
        return (
            <Jrsc
                jrshiciData={jrshiciData}
                changeJrShici={this.changeJrShici}
                collectJrShici={this.collectJrShici}
            />
        )
    }
}

const mapStateToProps = (state) => state.Jrsc

function mapDispatchToProps(dispatch) {
    return bindActionCreators(jrscAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(JrscContainer)
