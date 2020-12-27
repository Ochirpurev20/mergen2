import React, { Fragment, useEffect } from 'react'


const WeDid = (props) => {
    useEffect(() => {
        slide(1)
        })
const zuragnuud = props.zuragnuud

let currentImgIndex = 1;
let lastIndex = 0;

function slide(n) {
    
  let slides = document.getElementsByClassName("mySlides");
  currentImgIndex = currentImgIndex + n;
  // console.log('curr ==', currentImgIndex)
  if (currentImgIndex > 0 && currentImgIndex < 5) {
    // console.log('slides ==',slides)
    slides[lastIndex].style.display = "none";
    slides[currentImgIndex - 1].style.display = "block";
    lastIndex = currentImgIndex - 1;
  } else if (currentImgIndex > 4) {
    currentImgIndex = 0;
  } else {
    currentImgIndex = 4;
  }
}
const urt = zuragnuud.length
return (
    <div className='md:text-2xl' id="wedid">
<h2 className="text-base">{props.garchigWedid}</h2>
<Fragment>
    {props.zuragGarchig}
{zuragnuud.map(zurag => {
    const index = zuragnuud.indexOf(zurag)+1
    return (
        <div className="mySlides fade" key={zuragnuud.indexOf(zurag)}>
            <div className="numberText">
                {index+ "/" +  urt}
            </div>
                <div>
                    <img id={`imageId${index}`} src={zurag} alt='Ажлын зураг' />
                </div>
                <div>
                    {props.zuragTailbar}
                </div>
        </div>
    )
})}
</Fragment>
<div className="flex justify-between lg:justify-around">
    <button className="bg-green-600 p-2 rounded-md m-3" onClick={() => slide(-1)} >&#10094;</button>
    <button className="bg-green-600 p-2 rounded-md m-3" onClick={() => slide(1)} >&#10095;</button>
          </div>
</div>
)
}

export default WeDid;