import React from "react";
import ActionComponent from "./ActionComponent";
import './Main.scss'

export default function Main() {
  return (
    <div className="main_container">
    <div className="main">
        <div className="left_section_main" 
            data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out">
      <h2>Download Uifry, Open an Account!</h2>
      <p className="scan_instruction">
        Scan the QR code below with your phone camera to download the Uifry app.
      </p>

      <span>
        <p>Fully Licensed by CBN, Deposits insured by </p> <h3>NDIC</h3>
      </span>
      <img src="/images/barcode.png" alt="barcode" />
      </div>
      <div className="right_section_main"
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out">
        <img src="/images/kuda.png" alt="diplay_icon"/>
      </div>
    </div>
    <div className="component">
    <ActionComponent/>
    <ActionComponent/>
    <ActionComponent/>
    </div>
    </div>
  );
}
