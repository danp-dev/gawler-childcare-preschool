import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"


const Booktour = () => {
  
  return (
   

    <section className="section">
        
      <div className="columns is-mobile">
      <div className="column is-half-desktop is-offset-one-quarter-desktop is-three-full-mobile">
          
      <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact"/>
  <p>
    <label className="label">Your Name: <input type="text" className="input" name="name" /></label>   
  </p>
  <p>
    <label className="label">Your Email: <input type="email" className="input" name="email" /></label>
  </p>
  <p>
    <label className="label">Your Preferred Date of Tour: <input type="date" className="input" name="date"/></label>
  </p>
  <p>
    <label className="label">Message: <textarea name="message" className="textarea"></textarea></label>
  </p>
  <p>
    <button type="submit" className="button">Book Tour</button>
  </p>
</form>


      </div>
      </div>
    </section>

)
  }
export default Booktour
