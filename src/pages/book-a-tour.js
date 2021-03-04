import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BookTour from "../components/booktour"
import Pagetitle from "../components/pagetitles"


const Bookatour = () => (
  <Layout>
    <SEO title="Book A Tour Of The Gawler Community Childcare Centre and Preschool" />
    <Pagetitle pagetitle="Book A Tour" pagesubtitle="Ask any questions and find out everything you need to know by booking a tour of our centre."/>
    
    <BookTour />

  </Layout>
)

export default Bookatour
