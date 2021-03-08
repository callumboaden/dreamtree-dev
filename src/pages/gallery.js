import React from "react"
import Layout from "../components/layout"
import ImageGallery from "../components/imageGallery"

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
          <ImageGallery></ImageGallery>
        </div>
      </Layout>
    </div>
  )
}
