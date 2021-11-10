import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {

    const doThis=()=>{
        alert("hellooo")
    }
    
    
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" text="Add" onClick={doThis} />
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

