import React from "react";

const LogoHeader = (props) => {
    const uria = props.uria || []
  return (
    <div className="md:text-2xl lg:text-4xl" id="showcase">
      <div className="h-full my-bg-uusalt flex justify-center text-center p-4 items-center lg:text-5xl " >
    <div className="md:w-3/4 lg:w-1/2 ">

      <img
        src={props.logo}
        alt="Mergenholding logo"
        className=" mb-8 p-4 rounded-lg my-logo-animation "
        />
        {uria.map((item) => {
            return (
                <h2 className="font-bold text-white" key={uria.indexOf(item)}>{item}</h2>
            )
        })}
        <div className="text-xs absolute bottom-3 right-0 text-white lg:right-5">
          <p>{props.photoCredit}</p>
        </div>
        </div>
        </div>
    </div>
  );
};

export default LogoHeader;
