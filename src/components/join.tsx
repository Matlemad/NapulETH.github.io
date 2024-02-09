/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Image from "next/image"
import Link from "next/link"

import degate from '@assets/degate.svg'
import square from '@assets/20square.svg'
import wovlabs from '@assets/wovlabs.svg'
import decripto from '@assets/decripto.webp'
import spaghett from '@assets/spaghetteth.png'
import { useTranslation } from "react-i18next"

function JoinSection() {
    const { t, i18n } = useTranslation();
    return (
        <section className="w-full flex flex-col items-center justify-start mt-24 lg:mt-32">
            <h5 className=" text-black text-5xl mt-16 lg:mt-0 lg:mb-10 SemiBold leading-normal text-center">
                {t('joinus')}
            </h5>
            <p className="mt-6 Medium text-2xl text-[#2E2E2E] w-11/12 lg:w-7/12 text-center leading-normal">
                {t('join1')}
            </p>
            <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSe1U6zRTRp671KrtyW1U1fBvbrVal_irFUjTy5Oum_K7mVryg/viewform'} target="_blank" className=" relative z-50 p-0 w-fit h-fit">
                <div className="w-fit h-fit flex flex-row items-center justify-center gap-2 py-4 px-12 bg-[#FFFFFF] border-4 border-[#eddb55] my-10">


                    <h5 className=" text-black Medium text-xl lg:text-2xl">
                        {t('joinbtn1')}
                    </h5>
                </div>
            </Link>
            <p className="lg:mt-6 Medium text-2xl text-[#2E2E2E] w-11/12 lg:w-7/12 text-center leading-normal">
                {t('join2')}
            </p>
            <Link href={'https://docs.google.com/forms/d/e/1FAIpQLScxTrj8mKZHx_X8y7ChZoFM4TT8-rG74K2CsHz09_eXiTaqYQ/viewform'} target="_blank" className=" relative z-50 p-0 w-fit h-fit">
                <div className="w-fit h-fit flex flex-row items-center justify-center gap-2 py-4 px-12 bg-[#E38B84] border-4 border-[#eddb55] my-10">


                    <h5 className=" text-black Medium text-xl lg:text-2xl">
                        {t('joinbtn2')}
                    </h5>
                </div>
            </Link>
            <p className="mt-6 Medium text-2xl text-[#2E2E2E] w-11/12 lg:w-7/12 text-center leading-normal">
                {t('join3')}
            </p>
            <Link href={'https://docs.google.com/forms/d/e/1FAIpQLScVN8T-k_r-qMjI5Z4KFgzb1ShksHdhFMBcsWRTA1qNcrVKWw/viewform'} target="_blank" className=" relative z-50 p-0 w-fit h-fit">
                <div className="w-fit h-fit flex flex-row items-center justify-center gap-2 py-4 px-12 bg-[#9ECC51] border-4 border-[#eddb55] my-10">


                    <h5 className=" text-black Medium text-xl lg:text-2xl">
                        {t('joinbtn3')}
                    </h5>
                </div>
            </Link>
            <p className="mt-6 Medium text-2xl text-[#2E2E2E] w-11/12 lg:w-7/12 text-center leading-normal">
                {t('join4')}
            </p>
            <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSf5t-L7kW2xCzN-kggLruouCEi_hEKQFkJHjiN781r5lZyxaA/viewform'} target="_blank" className=" relative z-50 p-0 w-fit h-fit">
                <div className="w-fit h-fit flex flex-row items-center justify-center gap-2 py-4 px-12 bg-[#CA75AA] border-4 border-[#eddb55] my-10">


                    <h5 className=" text-black Medium text-xl lg:text-2xl">
                        {t('joinbtn4')}
                    </h5>
                </div>
            </Link>
            
        </section>
    )
}

export default JoinSection