/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Image from "next/image"
import Link from "next/link"
import Marquee from "react-fast-marquee";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import mood from '@assets/mood.svg'
import moodMobile from '@assets/moodMobile.svg'
import commune from "@assets/commune.png"
import degate from '@assets/degate.svg'
import square from '@assets/sq20.svg'
import wovlabs from '@assets/newLogos/WowLabs.png'
import nifty from '@assets/nifty.svg'
import { useTranslation } from "react-i18next";
import yh from '@assets/mark+word-colorful.svg'
import socialSquare from '@assets/newLogos/Bitcashback.svg'
import money from "@assets/money.svg"
import vault from "@assets/newLogos/Criptovaluta.png"
import sfondo from '@assets/Sfondo scuro-scritta bianca omino bianchi.png'
import barbera from '@assets/newLogos/Caffè Barbera.png'
import esp from '@assets/esp-logo.96fc01cc.svg'
import QJ from '@assets/QJ.jpg.jpeg'
import lilic from '@assets/johnLilic.jpg'
import bybit from '@assets/Bybit_Logotype_Web3_Light_Vert.svg'
import { useState } from "react";
import { BsGlobe } from "react-icons/bs";
import lilicCircle from '@assets/lilicCircle.png'
import CH from '@assets/newLogos/ICP.svg'
//from here
import chainLabo from '@assets/newLogos/ChainLabo.svg'
import lido from '@assets/newLogos/Lido.svg'
import sella from '@assets/newLogos/BancaSella.svg'
import gcm from '@assets/newLogos/GCM Verse.svg'
import theia from '@assets/newLogos/Theia.png'
import xga from '@assets/newLogos/XGA.svg'

function Sponsors() {
    const { t, i18n } = useTranslation();

    const [type, setType] = useState("main");

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="w-full flex flex-col items-center justify-start mt-20 lg:mt-32">
            <h5 className=" text-black text-4xl mb-10 SemiBold leading-normal text-center">
                Diamond Sponsors
            </h5>
            <div className="flex-row items-start justify-center w-11/12 hidden lg:flex">
                <div className="flex flex-col items-center justify-center w-1/5 mx-auto mb-4">
                    <Link href={"https://www.johnlilic.info/"} target="_blank" className="w-full aspect-square">
                        <div className="w-full aspect-square bg-cover bg-center bg-no-repeat mb-2" style={{
                            backgroundImage: `url('${lilicCircle.src}')`
                        }}></div>
                    </Link>
                    <div className="w-full flex-grow flex flex-row items-center justify-between py-2 px-4 bg-white border-4 border-[#eddb55]">
                        <div className="h-fit w-10/12 flex flex-col items-start justify-between">
                            <h5 className=" text-black SemiBold text-md whitespace-nowrap text-left mb-2">
                                John Lilic
                            </h5>
                            <h5 className=" text-[#EDDB55] Medium text-md">
                                Seed Investor
                            </h5>
                        </div>
                        <div className="h-full w-2/12 flex flex-col items-end justify-center gap-3">
                            <Link href={"https://www.johnlilic.info/"} target="_blank"><BsGlobe color="#252525" size={26}></BsGlobe></Link>

                        </div>

                    </div>
                </div>
            </div>
            <div className='w-full h-fit block lg:hidden'>
                <Carousel className="w-full h-fit block lg:hidden" showDots={false} renderDotsOutside renderButtonGroupOutside swipeable autoPlay arrows={false} infinite responsive={responsive}>
                    <Link href={"https://www.johnlilic.info/"} target="_blank" className="w-full h-fit">
                        <div className="w-full h-fit flex flex-row items-center justify-center">
                            <div className="w-full flex flex-col flex-grow items-center justify-center">
                                <div className="w-8/12 aspect-square bg-cover bg-top bg-no-repeat mb-2" style={{
                                    backgroundImage: `url('${lilicCircle.src}')`
                                }}></div>
                                <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                                    <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">
                                        John Lilic
                                    </h5>
                                    <h5 className=" text-[#EDDB55] SemiBold text-center text-xl">
                                        Seed Investor
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Carousel>
            </div>

            <h5 className=" text-black text-4xl mt-14 mb-10 lg:mb-0 SemiBold leading-normal text-center">
                Gold Sponsors
            </h5>
            <div className="hidden lg:grid lg:grid-cols-5 gap-4 col-span-8 lg:auto-rows-auto lg:w-10/12 items-center justify-center w-full h-fit relative my-4">
                <Link href="https://www.youhodler.com/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${yh.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "85% 110%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="http://degate.com/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${degate.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "65% 100%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://20squares.xyz/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${square.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "65% 100%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="http://moodglobalservices.com/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${mood.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "65% 100%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.bybit.com/en/web3/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${bybit.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "65% 100%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
            </div>
            <div className="w-full h-fit block lg:hidden">
                <Carousel className="w-full h-fit block lg:hidden" showDots={false} renderDotsOutside renderButtonGroupOutside swipeable autoPlay arrows={false} infinite responsive={responsive}>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.youhodler.com/'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">
                                        <div className="w-28 h-20 scale-[2] bg-contain bg-center bg-no-repeat" style={{
                                            backgroundImage: `url('${yh.src}')`
                                        }}></div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">

                                        <Image className=" w-10 scale-[4] h-20" alt="degate" src={degate}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://20squares.xyz/'} target="_blank" className="w-full h-fit">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className="w-auto h-20" alt="degate" src={square}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'http://moodglobalservices.com/'} target="_blank" className="w-full h-fit">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className=" w-auto h-20" alt="degate" src={moodMobile}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>

            <h5 className=" text-black text-4xl mt-14 mb-10 lg:mb-0 SemiBold leading-normal text-center">
                Silver Sponsors
            </h5>
            <div className="hidden lg:grid lg:grid-cols-5 gap-4 col-span-8 lg:auto-rows-auto lg:w-10/12 items-center justify-center w-full h-fit relative my-4">
                <Link href="https://esp.ethereum.foundation/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${esp.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "65% 90%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://wovlabs.com/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${wovlabs.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "65% 100%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://niftynaples.it/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${nifty.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "85% 140%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://bitcashback.net/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${socialSquare.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "70% 110%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.moneyviz.it/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${money.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "65% 100%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.criptovaluta.it/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${vault.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "90% 90%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.caffebarbera.com/en/?utm_source=google&utm_medium=cpc&utm_campaign=brand_dubai&gad_source=1&gclid=EAIaIQobChMIhJHBvJujhQMV8UZBAh15BQ6QEAAYASAAEgLkgfD_BwE" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${barbera.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "65% 110%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://twitter.com/icphub_IT" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${CH.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "65% 80%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.chinlabo.com/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${chainLabo.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "180% 360%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://lido.fi/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${lido.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "65% 80%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.sella.it/banca-on-line" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${sella.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "50% 65%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${gcm.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "65% 80%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://theiainnovations.com/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${theia.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "70% 60%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://docs.xga.com/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${xga.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "80% 70%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
            </div>
            <div className="w-full h-fit block lg:hidden">
                <Carousel className="w-full h-fit block lg:hidden" showDots={false} renderDotsOutside renderButtonGroupOutside swipeable autoPlay arrows={false} infinite responsive={responsive}>

                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://esp.ethereum.foundation/'} target="_blank" className="p-0 w-full h-fit">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">
                                        <div className="w-28 h-20 scale-150 bg-contain bg-center bg-no-repeat" style={{
                                            backgroundImage: `url('${esp.src}')`
                                        }}></div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://wovlabs.com/'} target="_blank" className=" w-full h-fit">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className=" w-auto h-20" alt="degate" src={wovlabs}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://niftynaples.it/'} target="_blank" className=" w-full h-fit">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className=" scale-[2] w-auto h-20" alt="degate" src={nifty}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.youhodler.com/'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">
                                        <div className="w-28 h-20 scale-[2] bg-contain bg-center bg-no-repeat" style={{
                                            backgroundImage: `url('${yh.src}')`
                                        }}></div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://bitcashback.net/'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">
                                        <div className="w-28 h-20 scale-[1.5] bg-contain bg-center bg-no-repeat" style={{
                                            backgroundImage: `url('${socialSquare.src}')`
                                        }}></div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.moneyviz.it/'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">
                                        <div className="w-28 h-20 scale-[1.5] bg-contain bg-center bg-no-repeat" style={{
                                            backgroundImage: `url('${money.src}')`
                                        }}></div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.criptovaluta.it/'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">
                                        <div className="w-28 h-20 scale-[2.5] bg-contain bg-center bg-no-repeat" style={{
                                            backgroundImage: `url('${vault.src}')`
                                        }}></div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.caffebarbera.com/en/?utm_source=google&utm_medium=cpc&utm_campaign=brand_dubai&gad_source=1&gclid=EAIaIQobChMIhJHBvJujhQMV8UZBAh15BQ6QEAAYASAAEgLkgfD_BwE'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className="w-auto h-20 scale-[2] rounded-full" alt="degate" src={barbera}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.chinlabo.com/'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className="w-auto h-20 scale-[2] rounded-full" alt="degate" src={chainLabo}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.lido.fi'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className="w-auto h-20 scale-[2] rounded-full" alt="degate" src={lido}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.sella.it/banca-on-line'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className="w-auto h-20 scale-[2] rounded-full" alt="degate" src={sella}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.caffebarbera.com/en/?utm_source=google&utm_medium=cpc&utm_campaign=brand_dubai&gad_source=1&gclid=EAIaIQobChMIhJHBvJujhQMV8UZBAh15BQ6QEAAYASAAEgLkgfD_BwE'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className="w-auto h-20 scale-[2] rounded-full" alt="degate" src={gcm}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://theiainnovations.com/'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className="w-auto h-20 scale-[2] rounded-full" alt="degate" src={theia}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://docs.xga.com/'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className="w-auto h-20 scale-[2] rounded-full" alt="degate" src={xga}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>




                </Carousel>
            </div>

            



        </section>
    )
}

export default Sponsors