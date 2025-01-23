import Navbar from "@/components/Navbar";
import { Col, Row } from "antd";
import Image from "next/image";
import firstCarouselImage from "../../public/images/desktop-image-hero-1.jpg"
import arrowRight from "../../public/images/icon-arrow.svg"
import carouselRightIcon from "../../public/images/icon-angle-right.svg"
import carouselLeftIcon from "../../public/images/icon-angle-left.svg"
import subHero1 from "../../public/images/image-about-dark.jpg";
import subHero2 from "../../public/images/image-about-light.jpg";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Row>
          <Col lg={14}>
            <span>
              <Image src={firstCarouselImage} className="w-full h-full" alt="hero 1" />
            </span>
          </Col>
          <Col lg={10}>
            <div className="relative flex flex-col justify-center  bg-white w-full h-full ">
              <div className="flex flex-col justify-center text-black md:p-28 items-center">
                <div>
                  <h2 className="font-bold text-4xl">Discover innovative ways to decorate</h2>
                  <p className="my-5 text-darkGray">
                  We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love. 
                  </p>
                  <span className="flex text-xl cursor-pointer hover:translate-x-3 font-semibold items-center gap-5 hover:text-darkGray">
                    <p className="tracking-[0.7em] uppercase">Shop</p>
                    <p className="tracking-[0.7em] uppercase">Now</p>
                    <span>
                      <Image src={arrowRight} alt="arrow right" />
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex absolute left-0 bottom-0">
                <div className="bg-black hover:bg-veryDarkGray hover:cursor-pointer flex justify-between p-8">
                  <span className="h-full">
                    <Image src={carouselLeftIcon} alt="carouselLeftIcon" />
                  </span>
                </div>
                <div className="hover:bg-veryDarkGray  hover:cursor-pointer  bg-black flex justify-between p-8">
                  <span className=" h-full">
                    <Image src={carouselRightIcon} alt="carouselRightIcon" />
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <Col lg={5} xxl={8}>
            <span>
              <Image src={subHero1} className="w-full h-full" alt="sub-hero" />
            </span>
          </Col>
          <Col lg={12} xxl={8}>
          <div className="bg-white w-full h-full ">
              <div className="flex flex-col justify-center text-black md:p-14 items-center">
                <div>
                  <h2 className="font-bold uppercase tracking-[0.5em] text-2xl">About our funitures</h2>
                  <p className="my-5 text-lg text-darkGray">
                  Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={7} xxl={8}>
            <span>
              <Image src={subHero2} className="w-full h-full"  alt="sub-hero" />
            </span>
          </Col>

        </Row>
      </div>

    </div>
      
  );
}
