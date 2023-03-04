import React, { useState, StrictMode } from "react";
// import * as ReactDOMClient from "react-dom/client";
import Carousel from "react-simply-carousel";

import useFetchApiData from "../utils/useFetchApiData";
const IMG_URL_API = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
export const Carosals = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const carosalData = useFetchApiData();

  console.log("carosal", carosalData.carosal)
return (
  <div>
    <Carousel
      containerProps={{
        style: {
          width: "100%",
          justifyContent: "space-between",
          userSelect: "none"
        }
      }}
      preventScrollOnSwipe
      swipeTreshold={60}
      activeSlideIndex={activeSlide}
      activeSlideProps={{
        style: {
          background: "blue"
        }
      }}
      onRequestChange={setActiveSlide}
      forwardBtnProps={{
        children: ">",
        style: {
          width: 60,
          height: 30,
          minWidth: 60,
          alignSelf: "center"
        }
      }}
      backwardBtnProps={{
        children: "<",
        style: {
          width: 60,
          height: 30,
          minWidth: 60,
          alignSelf: "center"
        }
      }}
      // itemsToShow={4}
      speed={400}
    >
      <div style={{ marginTop: "5%", display: "flex" }}>
        {carosalData.carosal.map((item, index) => (
        
          <div style={{
            width: 300,
            height: 300,
            border: "30px solid white",
            textAlign: "center",
            lineHeight: "240px",
            boxSizing: "border-box"
          }}>
            
            <img src={IMG_URL_API + item.data.creativeId}></img> </div>
        
        ))}
      </div>
         
    </Carousel>
  </div>
  );
}