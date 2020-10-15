import React from 'react';
import BusinessInfo from '../../BusnessShareCompany/BusinessInfo/BusinessInfo';
import Contact from '../../MainFooter/Contact/Contact';
import Footer from '../../MainFooter/Footer/Footer';
import Header from '../../MainHeader/Header/Header';
import Reviews from '../../Review/Reviews/Reviews';
import Services from '../../Services/Services/Services';
import Works from '../Works/Works';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BusinessInfo></BusinessInfo>
            <Services></Services>
            <Works></Works>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
