import React from 'react'

const WeDo = (props) => {
    const ajiluud = props.ajiluud || []
return (
<div className='my-bg-light px-10 py-5 md:text-2xl lg:w-full lg:flex lg:justify-center' id='wedo'>
<div>
    <h2 className="font-sans font-bold">{props.garchig}</h2>
          <div className="font-sans font-medium text-left">
            {ajiluud.map(ajil => {
                return <p className="my-6" key={ajiluud.indexOf(ajil)}>{ajil}</p>
            })}
            
          </div>  
</div>
</div>
)
}

export default WeDo;