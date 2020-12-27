import React from 'react'
import '../../index.css'

const NavMenu = (props) => {
    return (
        <div >
            <a href='#we' className="my-bg-prime px-6 py-1 m-3 rounded-md ">
                {props.ner} 
                </a> 
        </div>
    )
}

export default NavMenu;