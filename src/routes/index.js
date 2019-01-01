import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from '../history';
import { ShiciContainer, PageNavContainer } from '../containers'
import { Header } from '../components/'

function Routes() {
    return (
        <Router history={history}>
            <div>
                <Header />
                <Route path="/shici" component={ShiciContainer} />
                <PageNavContainer />
                <Header />
            </div>
        </Router>
    )
}

export default Routes
