import React from 'react'
import { CounterContainer, ShiciContainer } from 'containers'
import { Header } from 'components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`text-align: center;`

function Routes() {
    return (
        <Router>
            <Container>
                <Header />
                <Route path="/shici" component={ShiciContainer} />
                <Header />
                <Route path="/counter" component={CounterContainer} />
            </Container>
        </Router>
    )
}

export default Routes
