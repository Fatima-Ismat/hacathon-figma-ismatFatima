import React from "react";
import Image from "next/image";

const FoodCategory = () => {
  // Items array containing food details
  const items = [
    { id: 1, img: "/food1.png", label: "Save 50% on Fast Food" },
    { id: 2, img: "/food2.png", label: "Delicious Burgers" },
    { id: 3, img: "/food3.png", label: "Healthy Salads" },
    { id: 4, img: "/food4.png", label: "Desserts" },
  ];

  return (
    // <section className="bg-black text-white py-16 px-6">
    //   <div className="container mx-auto text-center">
    //     {/* Title */}
    //     <h2 className="text-3xl md:text-4xl font-bold mb-12">
    //       <span className="text-orange-500">Choose</span> Food Item
    //     </h2>

    <section className="bg-black md:px-[135px] px-6 py-[50px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font-whitespace-nowrap font-greatVibes">
            Food Category
          </h1>
          <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal text-center">
            <span className="text-[#FF9F0D]">Ch</span>oose Food Item
          </h1>
        </div>

        {/* Grid of food items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="relative">
              {/* Image of the food item */}
              <Image
                src={item.img}
                alt={item.label}
                className="rounded-lg"
                width={400}
                height={224}
              />

              {/* Overlay label */}
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 rounded-md">
                <span className="text-orange-500 font-semibold">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      
    </section>
  );
};

export default FoodCategory;
