import PropTypes from 'prop-types'
import { deprecatedPropType } from "@mui/material"

const Header = ({ title }) => {
    return (
        <header>
            <h1 style={{color:'red', backgroundColor:'black'}}>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.protoTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color:'red',
     backgroundColor:'black'
}

export default Header