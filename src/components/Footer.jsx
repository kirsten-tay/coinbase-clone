import React, { Fragment } from 'react';
import FooterSvg1 from './FooterSvg1';
import FooterSvg2 from './FooterSvg2';
import FooterSvg3 from './FooterSvg3';
import footer_image from '../Assets/footer_image.png'



const Footer = () => {
    return (
        <Fragment>
            <div className='flex p-9 bg-blue-500 justify-around text-white flex-row'>
                <div className='flex flex-col font-bold text-center'>
                    <span className="text-7xl">$335B</span>
                    <span className="font-thin text-2xl">Quarterly volume trade</span>
                </div>
                <div className='flex flex-col font-bold text-center'>
                    <span className="text-7xl">100+</span>
                    <span className="font-thin text-2xl">countries supported</span>
                </div>
                <div className='flex flex-col font-bold text-center'>
                    <span className="text-7xl">56M+</span>
                    <span className="font-thin text-2xl">verified users</span>
                </div>
            </div>
            <div className="my-6">
                <div className='flex flex-col'>
                    <span className='text-center text-4xl font-bold'>Get started in a few minutes</span>
                    <span className='text-center'>coinbase supports a variety of the most popular digital currencies</span>
                </div>
                <div className="flex justify-around items-center">
                    <div className="flex flex-col h-32 justify-between">
                        <FooterSvg1 />
                        <span className="font-bold text-xl">Create account</span>
                    </div>
                    <div className="bg-gray-300 h-1 w-32" >
                        {/* <hr /> */}
                    </div>
                    <div className="flex flex-col h-32 justify-between">
                        <FooterSvg2 />
                        <span className="font-bold text-xl">Link your bank account</span>
                    </div>
                    <div className="bg-gray-300 h-1 w-32" />
                    <div className="flex flex-col h-32 justify-between">
                        <FooterSvg3 />
                        <span className="font-bold text-xl">Start buying & selling</span>
                    </div>
                </div>
                <div className='flex bg-footer-bg flex-row flex-1 mt-6'>
                    <div className='flex flex-col px-20 py-16 my-10 '>
                        <span className='font-bold text-3xl'>Earn up to $31 worth</span>
                        <span className='font-bold text-3xl'>of crypto</span>
                        <span>Discover how specific cryptocurrencies work — and</span>
                        <span>get a bit of each crypto to try out for yourself</span>
                        <button className="border-o outline-none hover:bg-blue-700 font-medium p-2 bg-blue-600 text-white rounded-md">
                            Start earning.
            </button>
                    </div>
                    <div className='flex flex-1 justify-end items-center'>
                        <img src={footer_image}
                            className="h-full"

                        />
                    </div>
                </div>
                <div className='flex p-9 justify-around text-white flex-row'>
                    <div>
                        <span>
                        
                        </span>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default Footer;