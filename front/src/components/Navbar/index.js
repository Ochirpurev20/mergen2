import React from 'react'
import NavMenu from '../NavMenu'

const NavBar = (props) => {
    return (
        <div className =" hidden text-white md:flex my-bg-brown h-14 fixed justify-center items-center inset-x-0 lg:text-xl">            
            <NavMenu ner="Үйлчилгээ"/>
            <NavMenu ner="Гүйцэтгэл" />
            <NavMenu ner="Холбогдох" />
           
        </div>
    )
}

export default NavBar;