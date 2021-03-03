import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import heroImage from "../images/home-hero-image.png"
import tree from "../images/tree.svg"
import circles from "../images/circles.svg"
import missionImage from "../images/mission.png"
import purpleCircle from "../images/purpleCircle.svg"
import vendorsImage from "../images/vendors.svg"
import zaakImage from "../images/zaak.png"
import taylorImage from "../images/taylor.png"
import MayaImage from "../images/maya.png"
import HannahImage from "../images/hannah.png"
import leaves from "../images/leaves.svg"

import { Link } from "gatsby"

const ProfileImage = props => (
  <div>
    <img src={props.imgSrc} alt={props.imgAlt} />
    <div class="flex flex-col items-center">
      <h3 className="font-bold text-2xl pr-2"> {props.name}</h3>
      <span className="text-sm">{props.title}</span>
    </div>

    <p class="uppercase text-center tracking-widest font-medium text-md mt-5">
      {props.role}
    </p>
  </div>
)

export default function About() {
  return (
    <div>
      <Layout>
        <Container>
          <div class="flex flex-col items-center md:flex-row md:items-start justify-center mt-10">
            <div className="w-100 md:w-4/12 mr-16">
              <h1 className="mb-5">What we do</h1>
              <p className="mb-5 leading-loose text-lg">
                Dream Tree creates all inclusive spaces where folks can make
                meaningful connections and be comfortable to express who they
                are.
              </p>
              <p className="mb-5 leading-loose text-lg">
                Our main focus is creating LGBTQIA+ education programs, media,
                events and activities which help us become closer as a community
                while encouraging intersectional interaction between lots of
                different folks!
              </p>
            </div>
            <div className="w-1/2 md:w-4/12">
              <img src={tree} alt="Dreamtree" />
            </div>
          </div>
        </Container>
        <section className="pt-20" style={{ backgroundColor: "#1C2C40" }}>
          <Container>
            <div className="flex flex-col items-center sm:flex-row justify-center">
              <div class="w-1/2 md:w-4/12 mr-20">
                <img
                  src={missionImage}
                  alt="Our Mission"
                  className="sm:w-100"
                />
              </div>
              <div className="w-100 sm:w-3/4 md:w-4/12">
                <img
                  className="inline-block w-10 lg:w-20 mb-5"
                  src={circles}
                  alt="circles"
                />
                <h2 className="text-3xl font-bold text-white mb-10">
                  Our Misson
                </h2>
                <p className="mb-5 leading-loose text-lg text-white">
                  Our mission is to foster a colourful and conscious queer
                  community by creating inclusive spaces and products that
                  support growth, creativity and uniqueness.
                </p>
              </div>
            </div>
          </Container>
        </section>
        <section
          className="pt-20 pb-20 overflow-hidden"
          style={{ backgroundColor: "#1C2C40" }}
        >
          <Container>
            <div className="flex flex-col items-center md:flex-row justify-center relative">
              <div className="w-100 sm:w-4/4 md:w-8/12 lg:w-6/12">
                <img
                  className="inline-block w-10 lg:w-20 mb-5"
                  src={circles}
                  alt="circles"
                />
                <h2 className="text-3xl font-bold text-white mb-10">
                  Core Values
                </h2>
                <div className="flex flex-col md:flex-row">
                  <div className="w-100 md:w-1/2 mr-14">
                    <ul>
                      <li className="flex items-start mb-7">
                        <img className="mr-5" src={purpleCircle} alt="circle" />{" "}
                        <p className="text-white text-lg">
                          Create a physical #spacetogrow for the queer community
                          in Bangkok to learn, share and express.
                        </p>
                      </li>
                      <li className="flex items-start mb-7">
                        <img className="mr-5" src={purpleCircle} alt="circle" />{" "}
                        <p className="text-white text-lg">
                          Develop awareness through education and advocacy.
                        </p>
                      </li>
                      <li className="flex items-start mb-7">
                        <img className="mr-5" src={purpleCircle} alt="circle" />{" "}
                        <p className="text-white text-lg">
                          Coordinate events which promote meaningful
                          connections.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="w-100 md:w-1/2">
                    <ul>
                      <li className="flex items-start mb-7">
                        <img className="mr-5" src={purpleCircle} alt="circle" />{" "}
                        <p className="text-white text-lg">
                          Support and empower vulnerable queer populations.
                        </p>
                      </li>
                      <li className="flex items-start mb-7">
                        <img className="mr-5" src={purpleCircle} alt="circle" />{" "}
                        <p className="text-white text-lg">
                          Create media produced for and by queer folks in Asia.
                        </p>
                      </li>
                      <li className="flex items-start mb-7">
                        <img className="mr-5" src={purpleCircle} alt="circle" />{" "}
                        <p className="text-white text-lg">
                          Create a physical #spacetogrow for the queer community
                          in Bangkok to learn, share and express.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-3/12 relative"></div>
              <img
                className="absolute w-6/12 lg:w-5/12"
                src={vendorsImage}
                alt="vendors"
                style={{ right: -150 }}
              />
            </div>
          </Container>
        </section>

        <section className="py-20" style={{ backgroundColor: "#FFFBF4" }}>
          <div className="text-center mb-20">
            <img
              className="inline-block w-10 lg:w-32"
              src={leaves}
              alt="leaves"
            />
            <h2 className="text-3xl font-bold">Meet The Team</h2>
          </div>
          <Container>
            <div class="grid grid-cols-4 gap-4">
              <ProfileImage
                imgSrc={zaakImage}
                name="Zaak"
                title="(he/him, they/ them)"
                role="Co-founder"
              ></ProfileImage>
              <ProfileImage
                imgSrc={taylorImage}
                name="Taylor"
                title="(he/him, they/ them)"
                role="Co-founder"
              ></ProfileImage>
              <ProfileImage
                imgSrc={MayaImage}
                name="Maya"
                title="(she/her)"
                role="Social Media Manager"
              ></ProfileImage>
              <ProfileImage
                imgSrc={HannahImage}
                name="Hannah"
                title="(she/her)"
                role="Digital Designer"
              ></ProfileImage>
            </div>
          </Container>
        </section>
      </Layout>
    </div>
  )
}
