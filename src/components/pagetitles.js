import React from "react"
import kidsonhillimage from "../images/kids-holding-hands-on-grass.jpeg"

const Pagetitle = ({pagetitle, pagesubtitle}) => (

    <section className="section is-small page-section-header">
        <div className="container">
            <div className="columns">
                <div className="column is-two-thirds">
                    <h1 className="title is-1">
                        {pagetitle}
                    </h1>
                    <h3 className="subtitle is-size-6">
                        {pagesubtitle}
                    </h3>
                </div>
                <div className="column is-one-third">
                    <figure>
                        <img src={kidsonhillimage}/>
                    </figure>
                </div>
            </div>
            
            </div>

    </section>
    

)

export default Pagetitle
