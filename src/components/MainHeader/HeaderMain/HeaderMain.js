import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <main>
            <div style={{ height: '600px' }} className="row d-flex align-items-center header_main">
                <div className="col-md-4 offset-md-2 header_content_write">
                    <h1 style={{ color: '#3A4256' }}>Let’s Grow Your <br /> Brand To <span>The Next Level</span></h1>
                    <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                    <Link to='/sidebar'><button className="btn ">Hire us</button></Link>
                </div>
                <div className="col-md-5">
                    <img src={chair} alt="" className="img-fluid" />
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;