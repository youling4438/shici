import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import '../styles/shici-style'

const Intro = styled.p`
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 40px;
    text-align: center;
        .from{
            text-align: right;
            font-size: 14px;
        }
    `
const ChangeShici = styled.div`
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;

  .changeButton{
    cursor:pointer;
    color: #000;
    border-bottom: 1px dashed currentColor;
  }

  .changeButton:hover{
    border-bottom-style: solid;
  }
`

const Shici = ({ shiciData, changeShici }) => {
    const { content, author, origin, category } = shiciData;
    return (
        <p className={'container'}>
            <Intro>
                {content}
                <div className={'from'} >------{author} {origin} </div>
            </Intro>
            <ChangeShici>
                <a className={'changeButton'} onClick={changeShici}>切换诗词</a>
            </ChangeShici>
        </p>
    );
}

Shici.propTypes = {
    shiciData: PropTypes.object.isRequired,
    changeShici: PropTypes.func.isRequired,
}

export default Shici
