import * as React from 'react'
import PropTypes from 'prop-types'

const Shici = ({ shici, changeShici }) => (
    <p>
        <div>{shici}</div>
        <button onClick={changeShici}>change shici</button>
    </p>
)

Shici.propTypes = {
    shici: PropTypes.string.isRequired,
    changeShici: PropTypes.func.isRequired,
}

export default Shici
