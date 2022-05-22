import React from "react";
import "./Home.css";
import HeaderBanner from "../images/header-banner.jpg";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_iamge"
          src={HeaderBanner}
          alt="Amazon Header Banner"
        />

        <div className="home_row">
          <Product
            title="Mi Notebook Ultra 3K Resolution Display Intel Core i5-11300H 11th Gen 15.6-inch(39.62 cms) Thin & Light Laptop (8GB/512GB SSD/Iris Xe Graphics/Win 11)"
            price={"55,999.00"}
            image="https://m.media-amazon.com/images/I/81RHHnGydgL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            title="HP v236w 64GB USB 2.0 Pen Drive"
            price={"479"}
            image="https://m.media-amazon.com/images/I/61xNG4wjOuL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            title="STRIFF Adjustable Laptop Stand Patented Riser Ventilated Portable Foldable with MacBook Notebook Tablet Tray Desk Table with Free Phone Stand"
            price={"329"}
            image="https://m.media-amazon.com/images/I/71Zf9uUp+GL._AC_UY218_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            title="boAt Wave Lite Smartwatch with 1.69 Inches, Heart Rate & SpO2 Level Monitor, Multiple Watch Faces"
            price={"1,899"}
            image="https://m.media-amazon.com/images/I/61yMzD6RG8L._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            title="Zebronics Zeb-Klarity USB Gaming Mic for Recording / Streaming, compatible with PC, Omni Directional"
            price={"799"}
            image="https://m.media-amazon.com/images/I/71hcfezLonL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            title="RESONATE RouterUPS | Upto 4 Hours Power Backup for Wi-Fi |Modem| FTTH| ONT|ONU| CCTV"
            price={"199"}
            image="https://m.media-amazon.com/images/I/71-WEg8j+-L._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            title="TP-Link Archer AC1200 Archer C6 Wi-Fi Speed Up to 867 Mbps/5 GHz + 300 Mbps/2.4 GHz"
            price={"2,349"}
            image="https://m.media-amazon.com/images/I/51ax8peHlPL._AC_UY218_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            title="Mi Smart Band 5 – India’s No. 1 Fitness Band, 1.1 (2.8 cm) AMOLED Color Display, Magnetic Charging, 2 Weeks Battery Life, Personal Activity Intelligence (PAI), Women’s Health Tracking (Black)"
            price={"2,424"}
            image="https://m.media-amazon.com/images/I/71X8NdnCsvL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
