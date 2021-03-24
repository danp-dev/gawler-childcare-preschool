import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import backgroundimg from "../images/background-kids.jpg"
import crayonsimage from "../images/Gawler-Childcare-Crayons.webp"
import kindyimage from "../images/Gawler-Community-Childcare-Centre-9.webp"



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

    <section className="section has-background-primary-light">
        <div className="container">
            <div className="box">
            <div className="columns">
                <div className="column">
                    <div className="content">
                        <h3 className="is-size-4">What is included in our fees?</h3>
                        <p>
                        <ul>
                        <li>We provide morning tea that includes fresh fruit, crackers and cheese.</li> 
                        <li>Lunch is a choice of two home cooked meals made fresh from our kitchen</li>
                        <li>Afternoon tea is provided ranging from freshly baked scones, muffins and banana bread, to name a few.</li>
                        <li>A snack is also offered later in the day</li>
                        <li>We provide nappies for all rooms as well as 50+ sensitive sunscreen</li>
                        </ul>
                        </p>
                    </div>
                    <div className="content">
                        <h3 className="is-size-4">What is provided by the centre?</h3>
                        <p>We provide a snack, lunch and afternoon tea. We also provide nappies
                            in the nursery and toddler rooms as well as sunscreen for all children.
                        </p>
                    </div>
                    <div className="content">
                        <h3 className="is-size-4">What do I need to pack for my child?</h3>
                        <p>
                        <ul>
                        <li>A broad brimmed hat</li> 
                        <li>Children's bottles, formulas and comforters</li>
                        <li>Several changes of clothes</li>
                        <li>We request that all personal items are named</li>
                        </ul>
                        </p>
                    </div>
                    <div className="content">
                        <h3 className="is-size-4">What hours are the centre open?</h3>
                        <p>We are open from Monday to Friday
                            6:45 am to 6:15 pm.
                            * The centre is closed for 2 weeks at the end of the year.  This provides families with an opportunity to spend time with their child and ensure that our Educator’s wellbeing is maintained *
                        </p>
                    </div>
                    <div className="content">
                        <h3 className="is-size-4">What National Quality Standards Assessment and Rating does the centre hold?</h3>
                        <p>We are pleased to let you know that we are exceeding in all 7 National Quality Standards
                        </p>
                    </div>
                </div>
                <div className="column">
                    <figure>
                        <img src={kindyimage}/>
                    </figure>
                    <figure>
                        <img src={backgroundimg}/>
                    </figure>
                    <figure>
                        <img src={crayonsimage}/>
                    </figure>
                </div>
                </div>
            </div>
        </div>
    </section>

    </div>

    </Layout>


);

}

export default Faqs