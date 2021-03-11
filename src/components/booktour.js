import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"


const Booktour = () => {
  
  return (
   

    <section className="section">
       <Helmet defer="false">
    <script type='text/javascript'>
      {`(function(f,o,r,m){
        r=f.createElement('script');r.async=1;r.src=o+'js/mf.js';
        m=f.getElementById('mf_placeholder'); m.parentNode.insertBefore(r, m);
      })(document,'//upeuuyenjop.machform-trial.com/');`}
    </script>
        </Helmet>
        
      <div className="columns is-mobile">
      <div className="column is-half-desktop is-offset-one-quarter-desktop is-three-full-mobile">
        <div id="mf_placeholder" 
     data-formurl="//upeuuyenjop.machform-trial.com/embed.php?id=10695" 
     data-formheight="553"  
     data-formtitle="Untitled Form"  
     data-paddingbottom="10">
</div>
          
      <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact"/>
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Preferred Date of Tour: <input type="date" name="date" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>


      </div>
      </div>
    </section>

)
  }
export default Booktour
