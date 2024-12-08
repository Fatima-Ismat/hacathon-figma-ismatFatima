import React from "react";
import Image from "next/image";

interface HeroProps {
  text?: string;  // text prop ko optional banaya
}

function Hero({ text }: HeroProps) {  // text ko destructure kar ke receive kiya
  return (
    <section className="bg-black px-3 md:px-[80px] lg:px-[135px] flex flex-col justify-evenly md:flex-row md:items-center py-[50px]">
      {/* Heading */}
      <div className="text-white w-full md:w-[50%]">
        {/* Agar text prop pass ho, toh wo yahan show hoga */}
        {text && (
          <h1 className="text-[24px] md:text-[40px] lg:text-[50px] font-bold whitespace-normal mt-3 text-center md:text-left">
            <span className="text-[#FF9F0D]">{text}</span>
          </h1>
        )}

        <p className="text-[12px] md:text-[14px] lg:text-[16px] font-normal mt-4 text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-6">
          <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[160px] md:h-[50px] lg:w-[190px] lg:h-[60px] rounded-[40px] hover:bg-yellow-800">
            See More
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="mt-[30px] md:mt-0 md:w-[50%] flex justify-center">
        <Image
          src="/hero.png"
          alt="Hero Image"
          width={800} height={950} className="max-w-full"
        />
      </div>
    </section>
  );
}

export default Hero;
