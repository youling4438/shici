import React from 'react'
import { Jrsc } from '../components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as jrscAction from '../actions/Jrsc'

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
        const { jrshiciData } = this.props;
        console.log('jrshiciData :', jrshiciData);
        return (
            <Jrsc
                jrshiciData={jrshiciData}
                changeJrShici={this.props.changeJrShici}
            />
        )
    }
}

const mapStateToProps = (state) => state.Jrsc

function mapDispatchToProps(dispatch) {
    return bindActionCreators(jrscAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(JrscContainer)
