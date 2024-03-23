/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Image from "next/image"
import Link from "next/link"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Marquee from "react-fast-marquee";

import degate from '@assets/degate.svg'
import square from '@assets/20square.svg'
import wovlabs from '@assets/wovlabs.svg'

import spaghett from '@assets/spaghetteth.png'
import wehub from '@assets/wehub svg.svg'
import mego from '@assets/mego.svg'
import mood from '@assets/mood.svg' 
import gate from '@assets/gate.svg'
import canal from '@assets/LOGO CRYTOCANAL- horizontal (new - black).svg'
import nexlabs from '@assets/nexlabs.webp'
import hg from '@assets/hg.png'
import evLabs from '@assets/ev labs.webp'
import niftyz from '@/assets/Niftyz.webp'
import nifty from '@assets/nifty.svg'
import ethmilan from '@assets/ethmilan.svg'
import bucharest from '@assets/BucharestBlack.svg'
import bankless from '@assets/BanklessAcademy Black Bg.svg'
import chilliBanks from '@assets/chilli.svg'
import { useTranslation } from "react-i18next";

function Partners() {

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

      const { t, i18n } = useTranslation();
    return (
        <section className="w-full flex flex-col items-center justify-start mt-20 lg:mt-32">
            <h5 className=" text-black text-4xl mb-10 SemiBold leading-normal text-center">
                {t('partners')}
            </h5>
            <div className="hidden lg:block w-full h-fit relative my-4">
                <Marquee direction="right" className=" overflow-hidden" pauseOnHover>
                <Link href={'https://www.ethbucharest.xyz/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">

                            <Image className=" w-auto h-20 scale-[2] " alt="degate" src={bucharest}></Image>
                        </div>
                    </Link>
                    <Link href={'https://www.spaghett-eth.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">

                            <Image className=" w-auto h-20 scale-150" alt="degate" src={spaghett}></Image>
                        </div>
                    </Link>
                    <Link href={'https://wehub.it/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">

                            <Image className=" w-auto scale-[2] h-20" alt="degate" src={wehub}></Image>
                        </div>
                    </Link>
                    <Link href={'https://mego.tickets/#/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">

                            <Image className=" invert w-auto h-20" alt="degate" src={mego}></Image>
                        </div>
                    </Link>
                    
                    <Link href={'https://thecryptogateway.it/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">

                            <Image className=" w-auto h-20" alt="degate" src={gate}></Image>
                        </div>
                    </Link>
                    <Link href={'https://www.cryptocanal.org/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">

                            <Image className=" w-auto scale-125 h-20" alt="degate" src={canal}></Image>
                        </div>
                    </Link>
                    <Link href={'https://www.nexlabs.io/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">

                            <Image className=" w-auto h-20" alt="degate" src={nexlabs}></Image>
                        </div>
                    </Link>
                    <Link href={'https://hgvis.io/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">

                            <Image className=" w-auto h-20" alt="degate" src={hg}></Image>
                        </div>
                    </Link>
                    <Link href={'https://www.3vlabs.io/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">

                            <Image className=" invert w-auto h-20" alt="degate" src={evLabs}></Image>
                        </div>
                    </Link>
                    <Link href={'https://www.niftyz.io/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">

                            <Image className=" w-auto h-20" alt="degate" src={niftyz}></Image>
                        </div>
                    </Link>
                    <Link href={'https://www.ethmilan.xyz/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">

                            <Image className=" scale-[2] w-auto h-20" alt="degate" src={ethmilan}></Image>
                        </div>
                    </Link>
                    <Link href={'https://app.banklessacademy.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">

                            <Image className=" scale-125 w-auto h-20" alt="degate" src={bankless}></Image>
                        </div>
                    </Link>
                    <Link href={'https://t.me/Chilicommunity'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">

                            <Image className=" scale-125 w-auto h-20 rounded-full" alt="degate" src={chilliBanks}></Image>
                        </div>
                    </Link>
                    



                </Marquee>
            </div>
            <div className="w-full h-fit block lg:hidden">
            <Carousel className="w-full h-fit block lg:hidden" showDots={false} renderDotsOutside renderButtonGroupOutside swipeable  autoPlay arrows={false} infinite responsive={responsive}>
            <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://www.ethbucharest.xyz/'} target="_blank" className="p-0 w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">
                                <div className="w-28 scale-[2.5] h-20 bg-contain bg-center bg-no-repeat" style={{
                                        backgroundImage: `url('${bucharest.src}')`
                                    }}></div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://www.spaghett-eth.com/'} target="_blank" className="p-0 w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">
                                <div className="w-28 scale-150 h-20 bg-contain bg-center bg-no-repeat" style={{
                                        backgroundImage: `url('${spaghett.src}')`
                                    }}></div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://wehub.it/'} target="_blank" className="w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                    <Image className="w-auto h-20 scale-[2] " alt="degate" src={wehub}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://mego.tickets/'} target="_blank" className=" w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                    <Image className=" invert w-auto h-20" alt="degate" src={mego}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://thecryptogateway.it/'} target="_blank" className="w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                    <Image className="w-auto h-20" alt="degate" src={gate}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://www.cryptocanal.org/'} target="_blank" className="w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                    <Image className=" w-auto h-20  " alt="degate" src={canal}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://www.nexlabs.io/'} target="_blank" className=" w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">
                                    <div className="w-20 aspect-square bg-contain bg-center bg-no-repeat" style={{
                                        backgroundImage: `url('${nexlabs.src}')`
                                    }}></div>
                                    
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://hgvis.io/'} target="_blank" className="w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                    <Image className="w-auto h-20" alt="degate" src={hg}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://www.3vlabs.io/'} target="_blank" className=" w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                    <Image className=" invert w-auto h-20" alt="degate" src={evLabs}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://www.niftyz.io/'} target="_blank" className="w-full h-full">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                    <Image className="w-auto h-20" alt="degate" src={niftyz}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://www.ethmilan.xyz/'} target="_blank" className="w-full h-full">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                    <Image className="w-auto h-20 scale-[2] " alt="degate" src={ethmilan}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://app.banklessacademy.com/'} target="_blank" className="w-full h-full">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                    <Image className="w-auto h-20 scale-125 " alt="degate" src={bankless}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://t.me/Chilicommunity'} target="_blank" className="w-full h-full">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                    <Image className="w-auto h-20 scale-125 rounded-full" alt="degate" src={chilliBanks}></Image>
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

export default Partners