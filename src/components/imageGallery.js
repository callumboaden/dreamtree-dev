import React, { Component } from "react"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

import LazyLoad from "react-lazyload"

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

const images = [
  galleryImage1,
  galleryImage2,
  galleryImage3,
  galleryImage4,
  galleryImage5,
  galleryImage6,
  galleryImage7,
  galleryImage8,
  galleryImage9,
  galleryImage10,
  galleryImage11,
  galleryImage12,
]

console.log(images)

export default class imageGallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
  }

  render() {
    const { photoIndex, isOpen } = this.state

    return (
      <div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}

        <div className="grid grid-cols-3 gap-3 mb-20">
          <div className="col-span-3 md:col-span-1 grid grid-cols-1 gap-3 content-evenly">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
              src={galleryImage1}
              alt="Brunch"
              className="border-2 hover:border-blue-400"
            />
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}
              src={galleryImage3}
              alt="Coming Out Day"
              className="border-2 hover:border-blue-400"
            />

            <LazyLoad height={200}>
              {" "}
              <img
                onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}
                src={galleryImage4}
                alt="PopUp Box"
                className="border-2 hover:border-blue-400"
              />
            </LazyLoad>

            <LazyLoad>
              <img
                onClick={() => this.setState({ isOpen: true, photoIndex: 4 })}
                src={galleryImage5}
                alt="Paint and Sip"
                className="border-2 hover:border-blue-400"
              />
            </LazyLoad>
            <LazyLoad>
              <img
                onClick={() => this.setState({ isOpen: true, photoIndex: 8 })}
                src={galleryImage9}
                alt="Paint and Sip"
                className="border-2 hover:border-blue-400"
              />
            </LazyLoad>
          </div>
          <div className="col-span-3 md:col-span-2  grid grid-cols-2 gap-3 content-between">
            <div className="col-span-2">
              <img
                onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}
                src={galleryImage2}
                alt="Brunch"
                className="border-2 hover:border-blue-400"
              />
            </div>
            <div className="col-span-1">
              <LazyLoad>
                <img
                  onClick={() => this.setState({ isOpen: true, photoIndex: 5 })}
                  src={galleryImage6}
                  alt="Brunch"
                  className="border-2 hover:border-blue-400"
                />
              </LazyLoad>
            </div>
            <div className="col-span-1">
              <LazyLoad>
                <img
                  onClick={() => this.setState({ isOpen: true, photoIndex: 6 })}
                  src={galleryImage7}
                  alt="Out"
                  className="border-2 hover:border-blue-400"
                />
              </LazyLoad>
            </div>
            <div className="col-span-2">
              <LazyLoad>
                <img
                  onClick={() => this.setState({ isOpen: true, photoIndex: 7 })}
                  src={galleryImage8}
                  alt="Market"
                  className="border-2 hover:border-blue-400"
                />
              </LazyLoad>
            </div>
          </div>
          <div class="col-span-3 md:col-span-1">
            <LazyLoad>
              <img
                onClick={() => this.setState({ isOpen: true, photoIndex: 9 })}
                src={galleryImage10}
                alt="Wakeboarding"
                className="border-2 hover:border-blue-400"
              />
            </LazyLoad>
          </div>
          <div class="col-span-3 md:col-span-1">
            <LazyLoad>
              <img
                onClick={() => this.setState({ isOpen: true, photoIndex: 10 })}
                src={galleryImage11}
                alt="Wakeboarding"
                className="border-2 hover:border-blue-400"
              />
            </LazyLoad>
          </div>
          <div class="col-span-3 md:col-span-1">
            <LazyLoad>
              <img
                onClick={() => this.setState({ isOpen: true, photoIndex: 11 })}
                src={galleryImage12}
                alt="Mini Golf"
                className="border-2 hover:border-blue-400"
              />
            </LazyLoad>
          </div>
        </div>
      </div>
    )
  }
}
