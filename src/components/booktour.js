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
  }
export default Booktour
