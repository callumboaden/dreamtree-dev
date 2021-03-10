import React from "react"
import Layout from "../components/layout"

export default function Crowdfunding() {
  return (
    <div>
      <Layout>
        <div className="max-w-screen-sm	px-5 m-auto mt-20 mb-20">
          <h1 className="mb-5">Crowdfunding</h1>
          <p className="mb-5 leading-loose text-lg">
            Dream Tree is a new initiative in Thailand which aims to foster a
            conscious queer community by creating inclusive spaces and products
            that support growth, creativity and uniqueness. We support and
            empower the queer community and are looking to expand our reach.
          </p>
          <iframe
            className="m-auto w-full h-64 md:h-96 mb-5"
            src="https://www.youtube.com/embed/oE31CIyTk20"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p className="mb-5 leading-loose text-lg">
            We aim to do this through a variety of programs including: Community
            Events, Queer Media, and education programs.
          </p>
          <p className="mb-5 leading-loose text-lg">
            Our goal is to create a physical #spacetogrow for the queer
            community in Bangkok to learn share and express. This space will
            also be used as a base to provide mental and physical well being
            activities and programs for vulnerable queer populations.
          </p>
          <p className="mb-5 leading-loose text-lg">
            We believe in the power of the queer community, and with a little
            bit of help together we can make a difference.
          </p>
          <div className="text-center">
            <a
              style={{ background: "#FF8181" }}
              className="text-sm inline-block w-1/2 text-center py-5 rounded-2xl text-white font-bold uppercase tracking-widest shadow-md hover:opacity-90"
              href="https://www.gofundme.com/f/fund-dream-tree"
              target="_blank"
            >
              Donate today
            </a>
          </div>
        </div>
      </Layout>
    </div>
  )
}
