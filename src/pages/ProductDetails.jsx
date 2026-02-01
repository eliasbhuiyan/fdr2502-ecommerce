import React from "react";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
const ProductDetails = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  const settings = {
    dots: false,
    arrows: false,
  };
  return (
    <section className="py-120">
      <div className="container">
        <div className="grid grid-cols-3">
          <div>
            {/* Mega Image */}
            <div className="bg-secondary border mb-5 border-primary/20 rounded-4xl flex items-center justify-center">
              <Slider
                {...settings}
                asNavFor={nav2}
                ref={(slider) => (sliderRef1 = slider)}
                className="w-full h-full max-w-3/5"
              >
                <div>
                  <img src="/product-4.png" alt="" className="w-full h-full" />
                </div>
                <div>
                  <img src="/product-2.png" alt="" className="w-full h-full" />
                </div>
                <div>
                  <img src="/product-3.png" alt="" className="w-full h-full" />
                </div>
              </Slider>
            </div>
            {/* Images List */}
            <Slider
              {...settings}
              asNavFor={nav1}
              ref={(slider) => (sliderRef2 = slider)}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              <div>
                <div className="border border-primary/30 w-fit mx-2 flex items-center justify-center rounded-xl">
                  <img src="/product-4.png" alt="" className="w-4/5" />
                </div>
              </div>
              <div>
                <div className="border border-primary/30 w-fit mx-2 flex items-center justify-center rounded-xl">
                  <img src="/product-2.png" alt="" className="w-4/5" />
                </div>
              </div>
              <div>
                <div className="border border-primary/30 w-fit mx-2 flex items-center justify-center rounded-xl">
                  <img src="/product-3.png" alt="" className="w-4/5" />
                </div>
              </div>
            </Slider>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
