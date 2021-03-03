import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import eventImage from "../images/event.jpg"
import calendarIcon from "../images/calendar.svg"
import clockIcon from "../images/clock.svg"
import locationIcon from "../images/pin.svg"
import facebookIcon from "../images/icon-facebook.svg"
import instagramIcon from "../images/icon-instagram.svg"

export default function Events() {
  return (
    <div>
      <Layout>
        <div className="max-w-screen-sm	 m-auto mt-20 mb-20 z-100 relative px-5 md:px-0">
          <h1 className="mb-5">Events</h1>
          <p>Check out all our exciting upcoming events. Come join us!</p>
          <div className="flex flex-col mt-10">
            <div
              style={{ backgroundColor: "#FFFBF4" }}
              className="shadow-xl rounded-b-3xl mb-10"
            >
              <img src={eventImage} alt="Event name" />
              <div className="p-8">
                <div className="flex mb-5">
                  <div className="flex items-end mr-6">
                    <img src={calendarIcon} alt="Event Date" />
                    <h4
                      className="uppercase tracking-widest font-bold text-xs pl-2"
                      style={{ color: "#F27270" }}
                    >
                      Event Date
                    </h4>
                  </div>
                  <div className="flex items-end mr-6">
                    <img src={clockIcon} alt="Event Time" />
                    <h4
                      className="uppercase tracking-widest font-bold text-xs pl-2"
                      style={{ color: "#F27270" }}
                    >
                      Event Time
                    </h4>
                  </div>
                  <div className="flex items-end mr-6">
                    <img src={locationIcon} alt="Event Location" />
                    <h4
                      className="uppercase tracking-widest font-bold text-xs pl-2"
                      style={{ color: "#F27270" }}
                    >
                      Event Location
                    </h4>
                  </div>
                </div>
                <h3 className="font-bold text-2xl mb-3">Event Name</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit
                  magnis lectus non vel fames. Cras ipsum orci luctus dictumst
                  in venenatis. Placerat egestas rutrum quis aenean.
                </p>

                <div className="flex justify-between items-center mt-10">
                  <a
                    style={{ background: "#FF8181" }}
                    className="inline-block w-1/3 text-center py-4 text-sm rounded-2xl text-white font-bold uppercase tracking-widest shadow-md hover:opacity-90"
                    href="https://www.gofundme.com/f/fund-dream-tree"
                    target="_blank"
                  >
                    More details
                  </a>
                  <div className="flex items-center">
                    <h6 className="mr-6">Share</h6>
                    <img className="mr-2" src={facebookIcon} alt="Facebook" />
                    <img src={instagramIcon} alt="Instagram" />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#FFFBF4" }}
              className="shadow-xl rounded-b-3xl mb-10"
            >
              <img src={eventImage} alt="Event name" />
              <div className="p-8">
                <div className="flex mb-5">
                  <div className="flex items-end mr-6">
                    <img src={calendarIcon} alt="Event Date" />
                    <h4
                      className="uppercase tracking-widest font-bold text-xs pl-2"
                      style={{ color: "#F27270" }}
                    >
                      Event Date
                    </h4>
                  </div>
                  <div className="flex items-end mr-6">
                    <img src={clockIcon} alt="Event Time" />
                    <h4
                      className="uppercase tracking-widest font-bold text-xs pl-2"
                      style={{ color: "#F27270" }}
                    >
                      Event Time
                    </h4>
                  </div>
                  <div className="flex items-end mr-6">
                    <img src={locationIcon} alt="Event Location" />
                    <h4
                      className="uppercase tracking-widest font-bold text-xs pl-2"
                      style={{ color: "#F27270" }}
                    >
                      Event Location
                    </h4>
                  </div>
                </div>
                <h3 className="font-bold text-2xl mb-3">Event Name</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit
                  magnis lectus non vel fames. Cras ipsum orci luctus dictumst
                  in venenatis. Placerat egestas rutrum quis aenean.
                </p>

                <div className="flex justify-between items-center mt-10">
                  <a
                    style={{ background: "#FF8181" }}
                    className="inline-block w-1/3 text-center py-4 text-sm rounded-2xl text-white font-bold uppercase tracking-widest shadow-md hover:opacity-90"
                    href="https://www.gofundme.com/f/fund-dream-tree"
                    target="_blank"
                  >
                    More details
                  </a>
                  <div className="flex items-center">
                    <h6 className="mr-6">Share</h6>
                    <img className="mr-2" src={facebookIcon} alt="Facebook" />
                    <img src={instagramIcon} alt="Instagram" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
