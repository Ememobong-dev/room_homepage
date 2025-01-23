"use client";

import Navbar from "@/components/Navbar";
import { Col, Row } from "antd";
import Image from "next/image";
import arrowRight from "../../public/images/icon-arrow.svg";
import carouselRightIcon from "../../public/images/icon-angle-right.svg";
import carouselLeftIcon from "../../public/images/icon-angle-left.svg";
import subHero1 from "../../public/images/image-about-dark.jpg";
import subHero2 from "../../public/images/image-about-light.jpg";
import { useState } from "react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCarouselPrev = () => {
    setActiveIndex((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };

  const handleCarouselNext = () => {
    setActiveIndex((prev) =>
      prev + 1 > shopData.length - 1 ? shopData.length - 1 : prev + 1
    );
  };

  const shopData = [
    {
      mobileImage: "/images/mobile-image-hero-1.jpg",
      image: "/images/desktop-image-hero-1.jpg",
      header: "Discover innovative ways to decorate ",
      description:
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
      mobileImage: "/images/mobile-image-hero-2.jpg",
      image: "/images/desktop-image-hero-2.jpg",
      header: "We are available all across the globe ",
      description:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today. ",
    },
    {
      mobileImage: "/images/mobile-image-hero-3.jpg",
      image: "/images/desktop-image-hero-3.jpg",
      header: "Manufactured with the best materials",
      description:
        "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office. ",
    },
  ];

  return (
    <>
      <Navbar />
      <div>
        <div className="flex md:hidden">
          <Row>
            <Col xs={24}>
              <div className="relative">
                <Image
                  src={shopData[activeIndex].mobileImage}
                  width={300}
                  height={300}
                  className="w-full h-full"
                  alt="hero 1"
                />
                <div className="flex absolute right-0 bottom-0">
                  <span
                    className="bg-black h-full hover:bg-veryDarkGray hover:cursor-pointer flex justify-between py-4 px-6"
                    onClick={handleCarouselPrev}
                  >
                    <Image src={carouselLeftIcon} alt="carouselLeftIcon" />
                  </span>
                  <span
                    className="hover:bg-veryDarkGray  hover:cursor-pointer  bg-black flex justify-between py-4 px-6 h-full"
                    onClick={handleCarouselNext}
                  >
                    <Image src={carouselRightIcon} alt="carouselRightIcon" />
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={24}>
              <div className="relative flex flex-col justify-center px-10 py-14 bg-white w-full h-full ">
                <div className="flex flex-col justify-center text-black items-center">
                  <div>
                    <h2 className="font-leagueSpartanBold text-4xl">
                      {shopData[activeIndex].header}
                    </h2>
                    <p className="my-5 text-base font-leagueSpartanBold text-darkGray">
                      {shopData[activeIndex].description}
                    </p>
                    <span className="flex text-base cursor-pointer hover:translate-x-3 font-semibold items-center gap-3 hover:text-darkGray my-10">
                      <p className="tracking-[0.7em] uppercase">Shop</p>
                      <p className="tracking-[0.7em] uppercase">Now</p>
                      <span>
                        <Image src={arrowRight} alt="arrow right" />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>


        {/* DESKTOP MODE */}
        <div className="hidden md:block">
          <Row>
            <Col lg={14}>
              <span>
                <Image
                  src={shopData[activeIndex].image}
                  fill
                  className="w-full h-full"
                  alt="hero 1"
                />
              </span>
            </Col>
            <Col lg={10}>
              <div className="relative flex flex-col justify-center  bg-white w-full h-full ">
                <div className="flex flex-col justify-center text-black md:p-28 items-center">
                  <div>
                    <h2 className="font-leagueSpartanBold text-4xl">
                      {shopData[activeIndex].header}
                    </h2>
                    <p className="my-5 text-base font-leagueSpartanBold text-darkGray">
                      {shopData[activeIndex].description}
                    </p>
                    <span className="flex text-xl cursor-pointer hover:translate-x-3 font-semibold items-center gap-5 hover:text-darkGray my-10">
                      <p className="tracking-[0.7em] uppercase">Shop</p>
                      <p className="tracking-[0.7em] uppercase">Now</p>
                      <span>
                        <Image src={arrowRight} alt="arrow right" />
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex absolute left-0 bottom-0">
                  <span
                    className="bg-black h-full hover:bg-veryDarkGray hover:cursor-pointer flex justify-between p-8"
                    onClick={handleCarouselPrev}
                  >
                    <Image src={carouselLeftIcon} alt="carouselLeftIcon" />
                  </span>
                  <span
                    className="hover:bg-veryDarkGray  hover:cursor-pointer  bg-black flex justify-between p-8 h-full"
                    onClick={handleCarouselNext}
                  >
                    <Image src={carouselRightIcon} alt="carouselRightIcon" />
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="">
          <Row>
            <Col xs={24} lg={7} xxl={8}>
              <span>
                <Image
                  width={300}
                  height={300}
                  src={subHero1}
                  className="w-full h-full"
                  alt="sub-hero"
                />
              </span>
            </Col>
            <Col xs={24} lg={10} xxl={8}>
              <div className="bg-white px-10 py-14 md:p-0  w-full h-full ">
                <div className="flex flex-col justify-center text-black md:p-14 ">
                  <div>
                    <h2 className="font-bold uppercase tracking-wider font-leagueSpartanReg text-xl">
                      About our furnitures
                    </h2>
                    <p className="my-5 text-lg  font-leagueSpartanReg text-darkGray">
                      Our multifunctional collection blends design and function
                      to suit your individual taste. Make each room unique, or
                      pick a cohesive theme that best express your interests and
                      what inspires you. Find the furniture pieces you need,
                      from traditional to contemporary styles or anything in
                      between. Product specialists are available to help you
                      create your dream space.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={7} xxl={8}>
              <span>
                <Image
                  width={300}
                  height={300}
                  src={subHero2}
                  className="w-full h-full"
                  alt="sub-hero"
                />
              </span>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
