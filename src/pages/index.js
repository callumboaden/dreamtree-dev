import React from "react"
import Layout from "../components/layout"
import heroImage from "../images/home-hero-image.png"
import circles from "../images/circles.svg"
import leaves from "../images/leaves.svg"
import videoImage from "../images/video.jpg"
import aboutUsTileImage from "../images/about-us-tile.png"
import eventsTileImage from "../images/events-tile.png"
import galleryTileImage from "../images/gallery-tile.png"
import crowdfundingTileImage from "../images/crowdfunding-tile.png"
import dividerTop from "../images/dividerTop.svg"
import background from "../images/background.jpg"

import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      <Layout>
        <div className="text-center mt-10">
          <h1>
            A space to explore <br />
            <span className="text-2xl">
              the LGBTQ+ community in Thailand with #friendsofdreamtree
            </span>
          </h1>
          <div className="w-1/2 m-auto">
            <img className="mb-0" src={heroImage} alt="Dreamtree team" />
          </div>
        </div>

        <section
          className="relative py-20"
          style={{ backgroundColor: "#1C2C40" }}
        >
          <img
            src={dividerTop}
            alt="divider"
            className="inline-block absolute z-0 -top-12 md:-top-16 lg:-top-20 xl:-top-32"
          />
          <div className="max-w-screen-sm m-auto text-center">
            <img
              className="inline-block w-10 lg:w-20 relative z-10"
              src={circles}
              alt="circles"
            />
            <p className="text-center text-gray-50 text-sm lg:text-lg lg:leading-loose z-10 relative">
              Dream Tree is a new initiative in Thailand. We support and empower
              the queer community through a variety of programs including:
              community events, queer media and education programs.
            </p>
          </div>
          <div class="mt-20 max-w-screen-md m-auto text-center">
            <iframe
              width="600"
              height="360"
              className="m-auto"
              src="https://www.youtube.com/embed/oE31CIyTk20"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </section>
        <section className="py-20" style={{ backgroundColor: "#FFFBF4" }}>
          <div className="text-center mb-20">
            <img
              className="inline-block w-10 lg:w-32"
              src={leaves}
              alt="leaves"
            />
            <h2 className="text-3xl font-bold">Gather, Understand, Grow.</h2>
          </div>
          <div className="max-w-screen-md m-auto grid grid-cols-4 gap-4">
            <Link to="/about" className="text-center">
              <img src={aboutUsTileImage} alt="About Us" />
              <p className="font-medium tracking-widest">About Us</p>
            </Link>
            <Link to="/gallery" className="text-center">
              <img src={eventsTileImage} alt="Events" />
              <p className="font-medium tracking-widest">Events</p>
            </Link>
            <Link to="/events" className="text-center">
              <img src={galleryTileImage} alt="About Us" />
              <p className="font-medium tracking-widest">Gallery</p>
            </Link>
            <Link to="/crowdfunding" className="text-center">
              <img src={crowdfundingTileImage} alt="About Us" />
              <p className="font-medium tracking-widest">Crowdfunding</p>
            </Link>
          </div>
        </section>
      </Layout>
    </div>
  )
}
