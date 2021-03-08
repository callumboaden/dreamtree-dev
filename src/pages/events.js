import React from "react"
import Layout from "../components/layout"
import Event from "../components/event"

import { useStaticQuery, graphql, Link } from "gatsby"

export default function Events() {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulEvent {
          edges {
            node {
              date
              description
              name
            }
          }
        }
      }
    `
  )

  return (
    <div>
      <Layout>
        <div className="max-w-screen-sm	 m-auto mt-20 mb-20 z-100 relative px-5 md:px-0">
          <h1 className="mb-5">Events</h1>
          <p>Check out all our exciting upcoming events. Come join us!</p>

          {data.allContentfulEvent.edges.map(edge => {
            return (
              <Event
                name={edge.node.name}
                date={edge.node.date}
                description={edge.node.description}
              ></Event>
            )
          })}
        </div>
      </Layout>
    </div>
  )
}
