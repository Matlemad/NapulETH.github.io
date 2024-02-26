"use client"

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from "react-i18next";
import dynamic from 'next/dynamic'
const DynamicRibbonSecond = dynamic(() => import("@components/dynamicRibbon2").then(module => module.default), { ssr: false });
const DynamicGrayRibbonSecond = dynamic(() => import("@components/grayedribbon2").then(module => module.default), { ssr: false });

import soldOut from '@assets/SOLD OUT PNG.png'

function Pricing() {

    const { t, i18n } = useTranslation();

    return (
        <>
        <h5 className=" text-black w-full text-4xl mt-8 SemiBold leading-normal text-center">
                Tickets Rounds
            </h5>
        <section className="w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 lg:px-20 mt-20 lg:mt-32">
            <div className="w-11/12 lg:w-1/2 flex-grow flex flex-col items-center justify-start">
                <div className='w-7/12 h-fit py-4 bg-white border-4 border-[#eddb55]  relative z-40'>
                    <h5 className='Bold text-Black text-xl w-full text-center'>Innovators</h5>
                </div>
                <div className='w-full h-fit lg:h-full bg-[#E38B84] border-4 border-[#eddb55] relative z-10 -mt-9 flex flex-col items-center justify-center pt-4 pb-2 lg:pt-2 lg:pb-4 px-4'>
                    <Image src={soldOut} alt="munaciello sold out" className='w-7/12 lg:w-11/12 aspect-square mt-6 lg:mt-0 brightness-0'></Image>
                    
                    
                    
                    
                </div>
            </div>
            <div className="w-11/12 lg:w-1/2 flex-grow flex flex-col items-center justify-start">
                <div className='w-7/12 h-fit py-4 bg-white border-4 border-[#eddb55]  relative z-40'>
                    <h5 className='Bold text-black text-xl w-full text-center'>Early Adopters</h5>
                </div>
                <div className='w-full h-fit lg:h-full border-4 border-[#eddb55] relative z-10 -mt-9 flex flex-col items-center justify-start pt-16 pb-2 lg:pt-16 lg:pb-4 px-4' style={{
                    background: "#c3cbdc",
                    backgroundImage: "linear-gradient(147deg, #91CE35 0%, #91CE35 74%)"
                }}>
                    <h5 className='text-black Bold text-xl mb-8'>
                        {t('tickets')}
                    </h5>
                    <h5 className='text-black Bold text-4xl'>
                        26/02 - 03/03
                    </h5>
                    <p className='mt-8 text-lg Medium text-black w-10/12 text-center'>
                        {t('earlyPara')}
                    </p>
                    <p className='hidden lg:block text-lg Medium text-black w-10/12 mt-4 text-center'>
                        {t('earlyPara2')}
                    </p>
                    <p className=' hidden lg:block text-lg Medium text-black w-10/12 mt-4 text-center'>
                        {t('getBack')}
                    </p>
                    <Link href={'https://napuleth.mego.tickets/'} target='_blank' className=" relative z-50 p-0 w-full flex flex-row items-center justify-center h-fit">
                        <div className="min-w-[85vw] md:min-w-[50vw] xl:min-w-[15vw] xl:w-10/12 h-fit flex flex-row items-center justify-center gap-2 py-4 px-12 bg-[#FFFFFF] border-4 border-[#eddb55] mt-8">


                            <h5 className=" text-black Medium text-xl">
                                {t('gettickets')} (8€)
                            </h5>
                        </div>
                    </Link>
                    <Link href={'/'} className=" cursor-default grayscale-[0.9] relative z-50 p-0 w-full flex flex-row items-center justify-center h-fit mt-4 -ml-[20%] lg:-ml-0 " onClick={(e) => { e.preventDefault() }}>
                        <DynamicRibbonSecond></DynamicRibbonSecond>

                    </Link>
                </div>
            </div>
            
        </section>
        </>
        
    )
}

export default Pricing;
