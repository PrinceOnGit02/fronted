import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Univers";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/image/kite.png"
        productName="Kite"
        ProductDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices"
        tryDemo=""
        LearnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/image/console.png"
        productName="Console"
        ProductDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        LearnMore=""
      />
      <LeftSection
        imageURL="media/image/coin.png"
        productName="Coin"
        ProductDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        LearnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/image/kiteconnect.png"
        productName="Kite Connect API"
        ProductDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go"
        LearnMore=""
      />
      <LeftSection
        imageURL="media/image/varsity.png"
        productName="Varsity Mobile"
        ProductDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go"
        tryDemo=""
        LearnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductPage;
