/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Link from "next/link"
import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { CgMenuRight } from "react-icons/cg";
import { IoChevronDown, IoCloseSharp } from "react-icons/io5";
import logo from '@assets/Napul_ETH_logo.webp'

import { fallDown as MobileMenu } from 'react-burger-menu'
import menuIcon from '@assets/menu.svg'
import EnglishFlag from "@assets/english.png";
import ItalianFlag from "@assets/italian.png";


import { useTranslation } from "react-i18next";
import '@utils/i18n'
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";


function Navbar() {

    const [selectedLanguage, setSelectedLanguage] = useState<{
        name: string;
        image: StaticImageData;
    }>({
        name: "en", // Set English as the default language
        image: EnglishFlag,
    });
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (
        language: string,
        flagImage: StaticImageData,
    ) => {
        setSelectedLanguage({ name: language, image: flagImage });
        localStorage.setItem("lang", language);
        i18n.changeLanguage(language);
    };

    useEffect(() => {
        if (
            localStorage.getItem("lang") == "en" ||
            localStorage.getItem("lang") == "" ||
            localStorage.getItem("lang") == " " ||
            !localStorage.getItem("lang")
        ) {
            localStorage.setItem("lang", "en");
            handleLanguageChange("en", EnglishFlag);
        } else if (localStorage.getItem("lang") == "it") {
            localStorage.setItem("lang", "it");
            handleLanguageChange("it", ItalianFlag);
        }
    }, []);

    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
    

    return (
        <nav className="w-full h-fit fixed bg-[#6FCAF3] z-[99] lg:bg-none lg:relative top-0 flex flex-row items-center justify-between px-4 lg:pl-8 lg:pr-0 pt-6 pb-6 lg:pb-0 lg:pt-10">
            <Link href={"/"} className=" relative z-50 p-0 w-fit h-fit">
                <div className="w-fit h-fit flex flex-row items-center justify-start gap-2">
                    <Image src={logo} alt="logo" className=" w-[8%] lg:w-[4%] lg:-mt-1"></Image>
                    <h5 className=" text-black SemiBold text-3xl">NapulETH</h5>
                </div>

            </Link>

            <div className="w-fit h-fit flex flex-row items-center justify-end lg:gap-10">
                <div className="w-fit h-fit hidden lg:flex flex-row items-center justify-end gap-10">
                    <Link href={'/'} className=" relative z-50 p-0 w-fit h-fit">
                        <h5 className=" text-black text-xl whitespace-nowrap Medium">
                            {t('home')}
                        </h5>
                    </Link>
                    <Link href={'/tickets'} className=" relative z-50 p-0 w-fit h-fit">
                        <h5 className=" text-black text-xl whitespace-nowrap Medium">
                            {t('tickets')}
                        </h5>
                    </Link>
                    <Link href={'/about'} className=" relative z-50 p-0 w-fit h-fit">
                        <h5 className=" text-black text-xl whitespace-nowrap Medium">
                            {t('about')}
                        </h5>
                    </Link>

                </div>
                <Menu
                    align={"end"}
                    direction="bottom"
                    arrow={true}
                    menuButton={
                        <MenuButton>
                            <div className=" flex flex-row h-10 bg-center bg-cover bg-no-repeat aspect-square items-center justify-center gap-2 rounded-full border border-[#F7E16B] " style={{
                                backgroundImage: `url('${selectedLanguage.image.src}')`
                            }}>
                                
                            </div>
                        </MenuButton>
                    }
                    transition
                >
                    <MenuItem
                        onClick={() => {
                            localStorage.setItem("lang", "en");
                            handleLanguageChange("en", EnglishFlag);
                        }}
                    >
                        <div className="flex h-fit w-full flex-row items-center justify-start">
                            <Image
                                src={EnglishFlag}
                                alt="English"
                                className="mr-3 aspect-square h-6 w-6"
                            />
                            <h5 className={` my-0 text-xl text-black Medium`}>EN</h5>
                        </div>
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            localStorage.setItem("lang", "it");
                            handleLanguageChange("it", ItalianFlag);
                        }}
                    >
                        <div className="flex h-fit w-full flex-row items-center justify-start">
                            <Image
                                src={ItalianFlag}
                                alt="English"
                                className="mr-3 aspect-square h-6 w-6"
                            />
                            <h5 className={` my-0 text-xl text-black Medium`}>IT</h5>
                        </div>
                    </MenuItem>


                </Menu>
                <Link href={'/join'} className=" hidden lg:block relative z-50 p-0 w-fit h-fit">
                    <div className="w-fit h-fit flex flex-row items-center justify-center py-4 px-12 bg-[#CA75AB] buttonShadow">
                        <h5 className=" text-black Medium text-xl whitespace-nowrap">
                            {t('joinus')}
                        </h5>
                    </div>
                </Link>
                <div className="block lg:hidden w-10 aspect-square bg-contain bg-center bg-no-repeat relative z-50" onClick={() => { setMobileMenuOpen(true) }} style={{
                    backgroundImage: `url('${menuIcon.src}')`
                }}></div>
                <MobileMenu isOpen={mobileMenuOpen} className="bg-white w-fit h-fit" id="burgerMenu">
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
                </MobileMenu>
            </div>
        </nav>
    )
}

export default Navbar