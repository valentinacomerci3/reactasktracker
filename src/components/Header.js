import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title,onAddBtn,showAddValue}) => {

    
    
    
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAddValue? "red" : "green"} text={showAddValue? "close" : "add"} onClick={onAddBtn} />
        </header>
    )

}

Header.defaultProps={
    title: "tll"
}

Header.propTypes={
    title: PropTypes.string
}

// const headingStyle={
//     color:'red',
//     backgroundColor:'blue'
// }

export default Header

