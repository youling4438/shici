import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from '../history';
import { ShiciContainer, PageNavContainer, HitokotoContainer, JrscContainer, ItemDetailContainer } from '../containers'
import { Header } from '../components/'

function Routes() {
    return (
        <Router history={history}>
            <div>
                <Header />
                <Route path="/shici" component={ShiciContainer} />
                <Route path="/jrsc" component={JrscContainer} />
                <Route path="/hitokoto" component={HitokotoContainer} />
                <Route path="/detail" component={ItemDetailContainer} />
                <PageNavContainer />
            </div>
        </Router>
    )
}

export default Routes
