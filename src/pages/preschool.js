import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import backgroundimg from "../images/background-kids.jpg"
import crayonsimage from "../images/Gawler-Childcare-Crayons.webp"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Pagetitle from "../components/pagetitles"




const Preschool = () => {


return(

<Layout>
    <SEO title="Gawler Childcare and Preschool | Gawler Preschool" />
    <div>
    <Pagetitle pagetitle="PreSchool" pagesubtitle="A perfect place to start your childs education"/>

        <section className="section is-small has-background-link-light">
            <div className="container">
                <div className="box">
               <div className="content">
                   <p>
                       <h3 className="is-size-4"> Why Choose Our Preschool?</h3>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus felis justo, facilisis luctus faucibus vitae, pharetra non sem. Aenean ac lorem ut purus volutpat ornare. Mauris ut eleifend urna. Curabitur turpis ante, accumsan a semper non, gravida eget lorem. Donec consequat ex vel finibus vehicula. Vestibulum fermentum, mi id pretium tincidunt, augue sem porta velit, cursus molestie nisi lorem convallis velit. Aenean a augue vitae purus fermentum convallis quis vel velit. Phasellus porta varius tortor a mollis. Fusce egestas suscipit ultricies. Sed vitae magna mauris. Cras nec massa nec tortor luctus luctus sodales a metus. Curabitur finibus ut eros sit amet rutrum. Nullam ipsum libero, condimentum vel nunc vel, volutpat imperdiet est. Curabitur quis risus nec enim bibendum scelerisque sed vitae elit.

Praesent et feugiat nibh. Vivamus imperdiet <figure>
                       <img src={crayonsimage} align="right"/>
                   </figure>
                   <h3 className="is-size-4"> Do you have a teacher onsite?</h3>
                   hendrerit tellus, non iaculis justo finibus sit amet. Donec laoreet ligula euismod, cursus tortor ut, auctor mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam eu metus nisl. Fusce sed quam vitae dolor posuere volutpat ut sed ante. Cras at commodo nisl, sit amet placerat ipsum. Fusce aliquet enim at dictum consequat. Sed luctus purus finibus ultricies congue.

Sed sit amet efficitur sapien. Phasellus porttitor ac nulla vel hendrerit. Morbi mattis augue leo, sit amet porttitor odio pulvinar a. Sed porta lacus ac viverra feugiat. Donec convallis auctor sapien, quis ultricies quam aliquam in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam augue tortor, iaculis ac bibendum ut, pellentesque quis sem. Pellentesque quis imperdiet ante. Suspendisse facilisis pellentesque mi, vel imperdiet justo aliquam a. Curabitur mattis lacus ut ante bibendum, in tristique mi iaculis. Aliquam egestas pellentesque neque non suscipit.

<h3 className="is-size-4"> Can I enroll my child now?</h3>
Nullam ut erat a lorem malesuada aliquam et vel leo. Mauris at accumsan ligula, mollis rhoncus justo. Proin turpis neque, elementum id cursus id, rutrum sed turpis. Nulla vehicula eu risus vitae fermentum. Vivamus viverra urna purus, at euismod ante porttitor vel. Sed a neque augue. Mauris pulvinar neque non dolor interdum bibendum. Etiam porttitor lacus quam, ornare suscipit ante tincidunt sit amet. Nam non tellus in enim tempus sollicitudin. Nunc et purus non nibh pretium ullamcorper.

Aliquam mi est, aliquam in elit et, pharetra sodales eros. Ut eu semper erat. Praesent efficitur a libero non tempor. Suspendisse ut eleifend diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse sit amet mattis quam. Sed venenatis at ex non pretium. </p>
                   <Link to="/book-a-tour/" className="button is-primary" >Book A Tour Of Our Preschool</Link>
               </div>
               </div>
            </div>
            
        </section>

    </div>

    </Layout>


);

}

export default Preschool