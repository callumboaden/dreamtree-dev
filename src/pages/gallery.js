import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import galleryImage1 from "../images/brunch.jpg"
import galleryImage2 from "../images/dt-cod-1.jpg"
import galleryImage3 from "../images/dt-cod-3.jpg"
import galleryImage4 from "../images/dt-popup-box.jpg"
import galleryImage5 from "../images/paint-and-sip.jpg"
import galleryImage6 from "../images/dt-cod-4.jpg"
import galleryImage7 from "../images/out.jpg"
import galleryImage8 from "../images/market.jpg"
import galleryImage9 from "../images/second-chance.jpg"
import galleryImage10 from "../images/wakeboarding.jpg"
import galleryImage11 from "../images/wakeboarding-2.jpg"
import galleryImage12 from "../images/minigolf.jpg"

import { Link } from "gatsby"

export default function Gallery() {
  return (
    <div>
      <Layout>
        <div className="max-w-screen-lg mx-auto px-5">
          <div class="flex flex-col items-center md:flex-row md:items-start justify-start mt-10">
            <div className="w-100 md:w-4/12 mr-16">
              <h1 className="mb-5">Gallery</h1>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-20">
            <div className="col-span-3 md:col-span-1 grid grid-cols-1 gap-3 content-evenly">
              <img src={galleryImage1} alt="Brunch" />
              <img src={galleryImage3} alt="Coming Out Day" />
              <img src={galleryImage4} alt="PopUp Box" />
              <img src={galleryImage5} alt="Paint and Sip" />
              <img src={galleryImage9} alt="Paint and Sip" />
            </div>
            <div className="col-span-3 md:col-span-2  grid grid-cols-2 gap-3 content-between">
              <div className="col-span-2">
                <img src={galleryImage2} alt="Brunch" />
              </div>
              <div className="col-span-1">
                <img src={galleryImage6} alt="Brunch" />
              </div>
              <div className="col-span-1">
                <img src={galleryImage7} alt="Out" />
              </div>
              <div className="col-span-2">
                <img src={galleryImage8} alt="Market" />
              </div>
            </div>
            <div class="col-span-3 md:col-span-1">
              <img src={galleryImage10} alt="Wakeboarding" />
            </div>
            <div class="col-span-3 md:col-span-1">
              <img src={galleryImage11} alt="Wakeboarding" />
            </div>
            <div class="col-span-3 md:col-span-1">
              <img src={galleryImage12} alt="Mini Golf" />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
