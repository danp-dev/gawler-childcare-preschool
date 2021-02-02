import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import backgroundimg from "../images/background-kids.jpg"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Pagetitle from "../components/pagetitles"


const Faqs = () => {


return(

<Layout>
    <SEO title="Gawler Childcare and Preschool | Gawler Preschool" />
    <div>
    <Pagetitle pagetitle="FAQs" pagesubtitle="Your questions answered"/>

    <section className="section">
        <div className="container">
            <div className="columns">
                <div className="column">
                    <div className="content">
                        <h3 className="is-size-4">How much are the fees?</h3>
                        <p>Depending on your personal situation, you may be eligble for a subsidy.
                            This depends on your current situation.
                        </p>
                    </div>
                    <div className="content">
                        <h3 className="is-size-4">What do I need to pack for my child?</h3>
                        <p>We provide a snack, lunch and afternoon tea. We also provide nappies
                            in the nursery and toddler rooms.
                        </p>
                    </div>
                    <div className="content">
                        <h3 className="is-size-4">What hours are the centre open?</h3>
                        <p>We are open from Monday to Friday
                            6:15am to 6:15pm.
                        </p>
                    </div>
                </div>
                <div className="column">
                    <figure>
                        <img src={backgroundimg}/>
                    </figure>
                    <figure>
                        <img src={backgroundimg}/>
                    </figure>
                    <figure>
                        <img src={backgroundimg}/>
                    </figure>
                </div>
            </div>
        </div>
    </section>

    </div>

    </Layout>


);

}

export default Faqs