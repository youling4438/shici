import React from 'react'
import { PageNav } from '../components/'
// import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as pageNavAction from '../actions/PageNav'

class PageNavContainer extends React.Component {
    constructor(props) {
        super(props);
        this.bottonClickHandle = this.bottonClickHandle.bind(this)
    }
    bottonClickHandle(router) {
        console.log('changeRouter -------------------------');
        this.props.changeRouter(router)
    }
    render() {
        return (
            <PageNav
                buttonClick={this.bottonClickHandle}
            />
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(pageNavAction, dispatch)
}

export default connect(mapDispatchToProps)(PageNavContainer)
