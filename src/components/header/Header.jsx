import React from 'react'
import './Header.css'

const Header = ({ title }) => {
    return (
        <>
            <div className='headtext__neuton app__font_italic'>
                <p>{title}</p>
            </div>
            <div className='divider' />
        </>
    )
}

export default Header