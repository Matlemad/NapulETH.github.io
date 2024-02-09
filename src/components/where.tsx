/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Image from "next/image";
import { useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import p1 from "@assets/slider/p1.jpeg"
import p2 from "@assets/slider/p2.jpeg"
import p3 from "@assets/slider/p3.jpeg"
import p4 from "@assets/slider/p4.jpeg"
import p5 from "@assets/slider/p5.jpeg"
import p6 from "@assets/slider/p6.jpeg"
import p7 from "@assets/slider/p7.jpeg"

function Where() {

    const [selectedSliderIndex, setSelectedSliderIndex] = useState<number>(0)
    const indices = [0, 1, 2, 3, 4, 5, 6]

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
        <section className="w-full flex flex-col items-center justify-start mt-16 lg:mt-40">
            <h5 className=" text-black text-5xl mb-10 SemiBold leading-normal text-center">
                Where
            </h5>
            <p className=" text-[#2E2E2E] Medium text-2xl lg:text-3xl text-center leading-normal w-11/12 lg:w-8/12 mb-2">
                Discover Naples{"'"} rich history at the Monumental Complex of Santa Maria la Nova. With its iconic church and a blend of Gothic and Baroque styles, this site showcases centuries of cultural heritage through artifacts and frescoes.
            </p>
            <p className=" text-[#2E2E2E] Medium text-2xl lg:text-3xl text-center leading-normal w-11/12 lg:w-7/12">
                It is here where the infamous Count Dracula is thought to be buried.
            </p>

            <div className="mt-8 w-10/12 lg:w-6/12 h-fit flex flex-col items-center justify-center">
                <Carousel className="w-full h-fit buttonShadow" showDots renderDotsOutside renderButtonGroupOutside swipeable  autoPlay arrows={false} infinite responsive={responsive}>
                    <div className="w-full aspect-square bg-cover bg-no-repeat bg-center" style={{
                        backgroundImage: `url('${p1.src}')`
                    }}>

                    </div>
                    <div className="w-full aspect-square bg-cover bg-no-repeat bg-center" style={{
                        backgroundImage: `url('${p2.src}')`
                    }}>


                    </div>
                    <div className="w-full aspect-square bg-cover bg-no-repeat bg-center" style={{
                        backgroundImage: `url('${p3.src}')`
                    }}>


                    </div>
                    <div className="w-full aspect-square bg-cover bg-no-repeat bg-center" style={{
                        backgroundImage: `url('${p4.src}')`
                    }}>


                    </div>
                    <div className="w-full aspect-square bg-cover bg-no-repeat bg-center" style={{
                        backgroundImage: `url('${p5.src}')`
                    }}>


                    </div>
                    <div className="w-full aspect-square bg-cover bg-no-repeat bg-center" style={{
                        backgroundImage: `url('${p6.src}')`
                    }}>


                    </div>
                    <div className="w-full aspect-square bg-cover bg-no-repeat bg-center" style={{
                        backgroundImage: `url('${p7.src}')`
                    }}>


                    </div>
                    


                </Carousel>
            </div>

            

        </section>
    )
}

export default Where