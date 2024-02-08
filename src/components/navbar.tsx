/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Link from "next/link"
import Image from "next/image";
import { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { CgMenuRight } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
import logo from '@assets/Napul_ETH_logo.webp'

import { fallDown as Menu } from 'react-burger-menu'


function Navbar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

    return (
        <nav className="w-full h-fit fixed bg-[#6FCAF3] z-[99] lg:bg-none lg:relative top-0 flex flex-row items-center justify-between px-4 lg:pl-8 lg:pr-0 pt-6 pb-6 lg:pb-0 lg:pt-10">
            <Link href={"/"} className=" relative z-50 p-0 w-fit h-fit">
                <div className="w-fit h-fit flex flex-row items-center justify-start gap-2">
                <Image src={logo} alt="logo" className=" w-[4%] lg:-mt-1"></Image>
                    <h5 className=" text-black SemiBold text-3xl">NapulEth</h5>
                </div>

            </Link>

            <div className="w-fit h-fit flex flex-row items-center justify-end lg:gap-10">
                <div className="w-fit h-fit hidden lg:flex flex-row items-center justify-end gap-10">
                    <Link href={'/'} className=" relative z-50 p-0 w-fit h-fit">
                        <h5 className=" text-black text-2xl Medium">
                            Home
                        </h5>
                    </Link>
                    <Link href={'/tickets'} className=" relative z-50 p-0 w-fit h-fit">
                        <h5 className=" text-black text-2xl Medium">
                            Tickets
                        </h5>
                    </Link>
                    <Link href={'/about'} className=" relative z-50 p-0 w-fit h-fit">
                        <h5 className=" text-black text-2xl Medium">
                            About
                        </h5>
                    </Link>

                </div>
                <Link href={'/join'} className=" hidden lg:block relative z-50 p-0 w-fit h-fit">
                    <div className="w-fit h-fit flex flex-row items-center justify-center py-4 px-12 bg-[#CA75AB] buttonShadow">
                        <h5 className=" text-black Medium text-2xl whitespace-nowrap">Join Us</h5>
                    </div>
                </Link>
                <CgMenuRight color="#000000" size={45} className="block lg:hidden w-fit h-fit relative z-50" onClick={() => { setMobileMenuOpen(true) }}></CgMenuRight>
                <Menu isOpen={mobileMenuOpen} className="bg-white w-fit h-fit" id="burgerMenu">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-10">
                        <div className="py-6 w-full px-4 flex flex-row items-center justify-end">
                            <IoCloseSharp color="#000000" size={35} onClick={() => { setMobileMenuOpen(false) }}></IoCloseSharp>
                        </div>
                        <div className="w-fit h-fit flex flex-col items-center justify-center gap-8 mt-20">
                            <Link href={'/'} className=" relative z-50 p-0 w-fit h-fit" onClick={() => { setMobileMenuOpen(false) }}>
                                <h5 className=" text-black text-3xl Medium text-center">
                                    Home
                                </h5>
                            </Link>
                            <Link href={'/tickets'} className=" relative z-50 p-0 w-fit h-fit" onClick={() => { setMobileMenuOpen(false) }}>
                                <h5 className="text-center text-black text-3xl Medium">
                                    Tickets
                                </h5>
                            </Link>
                            <Link href={'/about'} className=" relative z-50 p-0 w-fit h-fit" onClick={() => { setMobileMenuOpen(false) }}>
                                <h5 className=" text-black text-3xl Medium text-center">
                                    About
                                </h5>
                            </Link>
                            <Link href={'/join'} className=" relative z-50 p-0 w-fit h-fit" onClick={() => { setMobileMenuOpen(false) }}>
                                <h5 className=" text-black text-3xl text-center Medium">
                                    Join us
                                </h5>
                            </Link>

                        </div>

                    </div>
                </Menu>
            </div>
        </nav>
    )
}

export default Navbar