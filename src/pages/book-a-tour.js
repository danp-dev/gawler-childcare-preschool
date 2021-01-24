import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Bookatour = () => (
  <Layout>
    <SEO title="Book A Tour at Gawler Community Childcare Centre and Preschool" />
    <Link to="/">Go back to the homepage</Link>
    <section className="section">
      <div className="columns is-mobile">
      <div className="column is-three-fifths is-offset-one-fifth">
        <div className="container has-text-centered">
          <h1 className="title is-size-2">Book A Tour</h1>
          <h3 className="title is-size-4">Send Us A Message</h3>
        </div>
          
      <form name="contact" method="POST" data-netlify="true">

<div className="field">
<label className="label">Name</label>
<div className="control">
<input className="input" type="text" placeholder="Text input"/>
</div>
</div>

<div className="field">
<label className="label">Best Date</label>
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
<label className="label">Which Room are you interested in?</label>
<div className="control">
<div className="select">
<select>
  <option>Select</option>
  <option>Nursery</option>
  <option>Toddler</option>
  <option>Kindy</option>
  <option>Preschool</option>
</select>
</div>
</div>
</div>

<div className="field">
<label className="label">Message</label>
<div className="control">
<textarea className="textarea" placeholder="Textarea"></textarea>
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
