import React from 'react'
import styled from 'styled-components'
import { Buttonstyle } from '../styles/global-styles'

const PageNavContent = styled.div`
    margin: 40px auto;
    text-align: center;
`
const PageNav = ({ buttonClick }) => (
    <PageNavContent>
        <Buttonstyle />
        <div className={'button'} onClick={() => buttonClick('/')}>精选APP</div>
        <div className={'button'} onClick={() => buttonClick('/shici')}>精选古诗词</div>
        <div className={'button'} onClick={() => buttonClick('/hitokoto')}>精选一言</div>
        <div className={'button'} onClick={() => buttonClick('/jrsc')}>今日诗词</div>
    </PageNavContent>
)

export default PageNav
