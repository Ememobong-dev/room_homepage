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
            <div className="bg-white w-full h-full ">
              <div className="flex flex-col justify-center text-black md:p-28 items-center">
                <div>
                  <h2 className="font-bold text-4xl">Discover innovative ways to decorate</h2>
                  <p className="my-5 text-darkGray">
                  We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love. 
                  </p>
                  <span className="flex text-xl font-semibold items-center gap-5">
                    <p className="tracking-[0.7em] uppercase">Shop</p>
                    <p className="tracking-[0.7em] uppercase">Now</p>
                    <span>
                      <Image src={arrowRight} alt="arrow right" />
                    </span>
                  </span>
                </div>
              </div>
              <div className="bg-black w-40 flex justify-between p-8">
                <span>
                  <Image src={carouselLeftIcon} alt="carouselLeftIcon" />
                </span>
                <span>
                  <Image src={carouselRightIcon} alt="carouselRightIcon" />
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <Col lg={7}>
            <span>
              <Image src={subHero1} className="w-full h-full" alt="sub-hero" />
            </span>
          </Col>
          <Col lg={10}>
          <div className="bg-white w-full h-full ">
              <div className="flex flex-col justify-center text-black md:p-14 items-center">
                <div>
                  <h2 className="font-bold uppercase text-4xl">About our funitures</h2>
                  <p className="my-5 font-semibold text-lg text-darkGray">
                  Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <span>
              <Image src={subHero2} className="w-full h-full"  alt="sub-hero" />
            </span>
          </Col>

        </Row>
      </div>

    </div>
      
  );
}
