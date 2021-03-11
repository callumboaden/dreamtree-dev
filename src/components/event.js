import React from "react"
import calendarIcon from "../images/calendar.svg"
import clockIcon from "../images/clock.svg"
import locationIcon from "../images/pin.svg"
import facebookIcon from "../images/icon-facebook.svg"
import instagramIcon from "../images/icon-instagram.svg"

export default function Events(props) {
  const time = props.date.split("2021,")[1]
  const shareFacebookUrl = `https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2F${
    props.link.split("https://")[1]
  }`

  return (
    <div className="flex flex-col mt-10">
      <div
        style={{ backgroundColor: "#FFFBF4" }}
        className="shadow-xl rounded-b-3xl mb-10"
      >
        <a href={props.link} target="_blank">
          <img
            src={props.imageUrl}
            alt="Event name"
            className="rounded-tl-3xl rounded-tr-3xl"
          />
        </a>

        <div className="p-8">
          <div className="flex mb-5">
            <div className="flex items-end mr-6">
              <img src={calendarIcon} alt="Event Date" />
              <h4
                className="uppercase tracking-widest font-bold text-xs pl-2"
                style={{ color: "#F27270" }}
              >
                {props.date}
              </h4>
            </div>
            <div className="flex items-end mr-6">
              <img src={clockIcon} alt="Event Time" />
              <h4
                className="uppercase tracking-widest font-bold text-xs pl-2"
                style={{ color: "#F27270" }}
              >
                {time}
              </h4>
            </div>
            <div className="flex items-end mr-6">
              <img src={locationIcon} alt="Event Location" />
              <h4
                className="uppercase tracking-widest font-bold text-xs pl-2"
                style={{ color: "#F27270" }}
              >
                {props.locationName}
              </h4>
            </div>
          </div>
          <h3 className="font-bold text-2xl mb-3">{props.name}</h3>
          <p>{props.description}</p>

          <div className="flex justify-between items-center mt-10">
            <a
              style={{ background: "#FF8181" }}
              className="inline-block px-6 text-center py-4 text-xs rounded-2xl text-white font-bold uppercase tracking-widest shadow-md hover:opacity-90"
              href={props.link}
              target="_blank"
            >
              Learn More
            </a>
            <div className="flex items-center">
              <h6 className="mr-6 text-xs sm:text-sm">Share</h6>
              <a href={shareFacebookUrl} target="_blank">
                <img className="mr-2" src={facebookIcon} alt="Facebook" />
              </a>
              <img src={instagramIcon} alt="Instagram" className="hidden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
