import React from 'react'
import { PageNav } from '../components/'
import { changeRouter } from '../lib/RouterHeaple'

class PageNavContainer extends React.Component {
    constructor(props) {
        super(props);
        this.bottonClickHandle = this.bottonClickHandle.bind(this)
    }
    bottonClickHandle(router) {
        changeRouter(router)
    }
    render() {
        return (
            <PageNav
                buttonClick={this.bottonClickHandle}
            />
        )
    }
}

export default PageNavContainer
