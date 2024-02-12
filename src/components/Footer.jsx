import React from 'react'
import { Link } from "react-router-dom"
import '../styles/Footer.css'
import fb from '../Images/facebook.png';
import twitter from '../Images/twitter.png';
import insta from '../Images/instagram.png';
import linkedin from '../Images/linkedin.png';

function Footer() {
  return (
    <div className='footer'>
        <div className='sb__footer section__padding'> 
            <div className='sb__footer-links'> 
                <div className='sb__footer-links_div'> 
                    <h4>Portal</h4>
                    <Link className='enlaces' to="/">
                        <p>Movie news</p>
                    </Link>
                    <Link className='enlaces' to="/">
                        <p>Premieres</p>
                    </Link>
                    <Link className='enlaces' to="/">
                        <p>Critics</p>
                    </Link>
                </div>

                <div className='sb__footer-links_div'> 
                    <h4>Resources</h4>
                    <Link className='enlaces' to="/">
                        <p>Resources center</p>
                    </Link>
                </div> 

                <div className='sb__footer-links_div'> 
                    <h4>Partners</h4>
                    <Link className='enlaces' to="/">
                        <p>React Tech</p>
                    </Link>
                </div>

                <div className='sb__footer-links_div'> 
                    <h4>Company</h4>
                    <Link className='enlaces' to="/">
                        <p>About</p>
                    </Link>
                    <Link className='enlaces' to="/">
                        <p>Career</p>
                    </Link>
                    <Link className='enlaces' to="/">
                        <p>Contact</p>
                    </Link>
                </div>

                <div className='sb__footer-links_div'> 
                    <h4>Coming soon on</h4>
                    <div className='socialmedia'> 
                        <p><img src={fb} alt="Facebook" /></p>
                        <p><img src={twitter} alt="Twitter" /></p>
                        <p><img src={linkedin} alt="Linkedin" /></p>
                        <p><img src={insta} alt="Instagram" /></p>
                    </div>
                </div>
            </div>

            <hr />

            <div className='sb__footer-below'> 
                <div className='sb__footer-copyright'> 
                    <p>
                        @{new Date().getFullYear()} CodeInn. All right reserved.
                    </p>
                </div>
                <div className='sb__footer-below-links'> 
                    <Link className='enlaces' to="/"><div><p>Terms & Conditions</p></div></Link>
                    <Link className='enlaces' to="/"><div><p>Privacy</p></div></Link>
                    <Link className='enlaces' to="/"><div><p>Security</p></div></Link>
                    <Link className='enlaces' to="/"><div><p>Cookie Declaration</p></div></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer