import react from 'react';
import React, { Fragment } from "react";
import ArrowSvg from "./ArrowSvg";
import BlueBtcSvg from "./BlueBtcSvg";
import PhoneSvg from "./PhoneSvg";

const Hero = (Hero) => {
  return (
    <div className="flex flex-row">
      <div className="flex-1 px-20 py-16">
        <div className="flex flex-row items-center text-blue-600 font-medium">
          <BlueBtcSvg />
          <span className="mx-2">jump start your portfolio</span>
          <ArrowSvg />
        </div>

        <div className="flex flex-col text-7xl font-medium">
          <span>Jump Start</span>
          <span>your crypto</span>
          <span>portfolio</span>
        </div>
        

        </div>
        </div>


  )

}





export default Hero;