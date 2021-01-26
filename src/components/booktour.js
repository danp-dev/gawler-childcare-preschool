import React from "react"
import { Link } from "gatsby"


const Booktour = () => (
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
<input className="input" type="email" placeholder="Email input"/>
<span className="icon is-small is-left">
<i className="fas fa-envelope"></i>
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


<div className="field is-grouped">
<div className="control">
<button type="submit" className="button is-link">Submit</button>
</div>
</div>

</form>



      </div>
      </div>
    </section>

)

export default Booktour
