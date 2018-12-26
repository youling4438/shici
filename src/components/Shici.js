import * as React from 'react'
import PropTypes from 'prop-types'

const Shici = ({ shici, onIncrementAsync }) => (
    <p>
        <div>{shici}</div>
        <button onClick={onIncrementAsync}>change shici</button>
    </p>
)

Shici.propTypes = {
    shici: PropTypes.string.isRequired,
    onIncrementAsync: PropTypes.func.isRequired,
}

export default Shici
