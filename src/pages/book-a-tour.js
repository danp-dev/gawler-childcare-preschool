import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Bookatour = () => (
  <Layout>
    <SEO title="Book A Tour at Gawler Community Childcare Centre and Preschool" />

    <section className="section">
      <div className="columns is-mobile">
      <div className="column is-half-desktop is-offset-one-quarter-desktop is-three-full-mobile">
        <div className="container has-text-centered">
          <h1 className="title is-size-2">Request A Tour</h1>
          <h3 className="title is-size-4">We just need a little information to get you booked in.</h3>
        </div>
          
      <form name="contact" method="POST" data-netlify="true">

<div className="field">
<label className="label">Your Name</label>
<div className="control">
<input className="input" type="text" placeholder="Text input"/>
</div>
</div>

<div className="field">
<label className="label">Your preferred date of Tour</label>
<div className="control">
<input className="input" type="date" placeholder="Text input"/>
</div>
</div>


<div className="field">
<label className="label">Email</label>
<div className="control has-icons-left has-icons-right">
<input className="input is-danger" type="email" placeholder="Email input"/>
<span className="icon is-small is-left">
<i className="fas fa-envelope"></i>
</span>
<span className="icon is-small is-right">
<i className="fas fa-exclamation-triangle"></i>
</span>
</div>
</div>

<div className="field">
<label className="label">Child's Age</label>
<div className="control">
<input className="input" type="text" placeholder="Text input"/> 
</div>
</div>

<div className="field">
<label className="label">Message</label>
<div className="control">
<input className="textarea" placeholder="Textarea"></input>
</div>
</div>

<div className="field">
<div className="control">
<label className="checkbox">
<input type="checkbox"/>
I agree to the <a href="#">terms and conditions</a>
</label>
</div>
</div>

<div className="field">
<div className="control">
<label className="radio">
<input type="radio" name="question"/>
Yes
</label>
<label className="radio">
<input type="radio" name="question"/>
No
</label>
</div>
</div>

<div className="field is-grouped">
<div className="control">
<button className="button is-link">Submit</button>
</div>
<div className="control">
<button className="button is-link is-light">Cancel</button>
</div>
</div>

</form>



      </div>
      </div>
    </section>

  </Layout>
)

export default Bookatour
