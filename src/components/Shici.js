import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Intro = styled.p`font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size: 40px;text-align: center;`
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

const Shici = ({ shici, changeShici }) => (
    <p>
        <Intro>{shici}</Intro>
        <ChangeShici>
            <a className={'changeButton'} onClick={changeShici}>切换诗词</a>
        </ChangeShici>
    </p>
)

Shici.propTypes = {
    shici: PropTypes.string.isRequired,
    changeShici: PropTypes.func.isRequired,
}

export default Shici
