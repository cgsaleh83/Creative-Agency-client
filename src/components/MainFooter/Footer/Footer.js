/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from '../../../images/logos/logo.png'
import FooterCol from '../FooterCol/FooterCol';



const Footer = () => {
    const noNamed = [
        { img: logo},
        {name: "We Plane, We Design"},
        {name: "We Create Website"},
    ]
    const ourAddress = [
        {name: "Comilla - 5000 South Cortha" },
       
    ]
    const Branch = [
        {name: "Comilla Kandir-Par"},
        { name: "Dhaka Motigil" },
        { name: "Rajshahi kotari-Para" },
        { name: "Chittagong Hali-Shohor" },
    ]
    const services = [
        { name: "Web Design" },
        { name: "Grapich Design" },
        { name: "Desigital marketing" },
        { name: "SEO" },
    ]
    return (
        <footer className="footer-area clear-both text-center">
            <div className="container pt-5">
                <div className="row py-5">
                    
                    <FooterCol key={1} menuTitle={<img src={logo} alt="" />} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Our Branch" menuItems={Branch}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <div className="mt-1 text-white">
                            <h6>Call now</h6>
                            <p>+88 01881 098383</p>
                        </div>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="https://www.facebook.com/sajjat8383" target="_blank"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="https://github.com/cgsaleh8383" target="_blank"><FontAwesomeIcon className="icon" icon={faGithub} /></a></li>
                            <li className="list-inline-item"><a href="https://www.linkedin.com/in/sajjat8383/" target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></a></li>
                        </ul>
                    </FooterCol>
                </div>
                <div className="copyRight text-center text-white">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved By Sajjat Hossain</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;