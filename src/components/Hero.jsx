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
        
        <div className="flex flex-col my-5 text-1.5xl font-medium ">
          <span>Coinbase is the easiest place to buy and sell</span>
          <span>cryptocurrency. Sign up and get started today.</span>
        </div>
        <div className="flex flex-1 text-2xl font-medium  ">
          <form  >
           
            <input  type="email" id="email" name="email"  placeholder="Email address" ></input>

           
        
          </form>
          <button className="border-o outline-none hover:bg-blue-700 font-medium p-2 bg-blue-600 text-white rounded-md">
              Get Started
            </button>
        </div>

        </div>
      <div className="flex flex-1 justify-center items-center">
        <PhoneSvg />
      </div>
    </div>


  )

}





export default Hero;