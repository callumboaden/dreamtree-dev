import React from "react"
import Layout from "../components/layout"
import heroImage from "../images/home-hero-image.webp"
import circles from "../images/circles.svg"
import leaves from "../images/leaves.svg"
import aboutUsTileImage from "../images/about-us-tile.png"
import eventsTileImage from "../images/events-tile.png"
import galleryTileImage from "../images/gallery-tile.png"
import crowdfundingTileImage from "../images/crowdfunding-tile.png"
import dividerTop from "../images/dividerTop.svg"
import dividerBottom from "../images/dividerBottom.svg"

import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      <Layout>
        <div
          style={{ height: "120vh" }}
          className="bg-hero-pattern w-full absolute top-0 left-0 z-0"
        ></div>
        <div className="text-center mt-10 relative ">
          <h1 className="text-4xl md:text-5xl">
            A space to explore <br />
            <span className="text-lg sm:text-xl md:text-2xl inline-block">
              the LGBTQ+ community in Thailand with #friendsofdreamtree
            </span>
          </h1>
          <div className="w-full md:w-7/12 m-auto relative">
            <img
              className="mb-0 relative left-0 top-0"
              src={heroImage}
              alt="Dreamtree team"
            />
          </div>
        </div>

        <section
          className="relative z-100 py-20"
          style={{ backgroundColor: "#1C2C40" }}
        >
          <img
            src={dividerTop}
            alt="divider"
            className="inline-block absolute z-10 -top-12 md:-top-16 lg:-top-20 xl:-top-28"
          />
          <div className="max-w-screen-sm m-auto text-center relative z-50">
            <img
              className="inline-block w-14 lg:w-20 mb-10"
              src={circles}
              alt="circles"
            />
            <p className="text-center text-gray-50 px-5 lg:text-xl lg:leading-loose z-10 relative">
              Dream Tree is a new initiative in Thailand. We support and empower
              the queer community through a variety of programs including:
              community events, queer media and education programs.
            </p>
          </div>
          <div class="mt-20 max-w-screen-md m-auto text-center">
            <iframe
              className="m-auto w-full h-64 md:h-96 z-40 relative"
              src="https://www.youtube.com/embed/200XuXYv4VY"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </section>
        <section
          className="py-20 relative"
          style={{ backgroundColor: "#FFFBF4" }}
        >
          <img
            src={dividerBottom}
            alt="divider"
            className="inline-block absolute z-20 sm:-top-10 -top-4 md:-top-24"
          />
          <div className="text-center mb-20">
            <img
              className="inline-block w-28 md:w-32 mb-4"
              src={leaves}
              alt="leaves"
            />
            <h2 className="text-3xl font-bold">Gather, Understand, Grow.</h2>
          </div>
          <div className="max-w-screen-md m-auto px-5 sm:px-0 grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
            <Link to="/about" className="text-center">
              <img
                src={aboutUsTileImage}
                alt="About Us"
                className="w-40 md:w-full mb-3"
              />
              <p className="font-medium tracking-widest">About Us</p>
            </Link>
            <Link to="/events" className="text-center">
              <img
                src={eventsTileImage}
                alt="Events"
                className="w-40 md:w-full mb-3"
              />
              <p className="font-medium tracking-widest">Events</p>
            </Link>
            <Link to="/gallery" className="text-center">
              <img
                src={galleryTileImage}
                alt="About Us"
                className="w-40 md:w-full mb-3"
              />
              <p className="font-medium tracking-widest">Gallery</p>
            </Link>
            <Link to="/crowdfunding" className="text-center">
              <img
                src={crowdfundingTileImage}
                alt="About Us"
                className="w-40 md:w-full mb-3"
              />
              <p className="font-medium tracking-widest">Crowdfunding</p>
            </Link>
          </div>
        </section>
      </Layout>
    </div>
  )
}
