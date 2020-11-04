import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight,faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

const ServiceDetail = ({ service }) => {
    const [descriptionCollapse, setDescriptionCollapse] = useState(false);

    const showMore = () => {
        console.log("Show More");
        setDescriptionCollapse(true);
    }
    const showLess = () => {
        console.log("Show less");
        setDescriptionCollapse(false);
    }
    return (
     
        <section className='col-md-4 text-center services_box '>
            <div className="services_detail">
                <div className="layer"></div>
                <div className="d-flex justify-content-center ">
                    {
                        service.image ? <img style={{ height: '50px' }} src={`data:image/png;base64,${service.image.img}`} alt="" />
                            :
                            <img style={{ height: '50px' }} className="img-fluid mb-3" src={`https://enigmatic-inlet-29316.herokuapp.com/${service.img}`} alt="" />
                    }
                </div>
                <h3>{service.project}</h3>
                <p> 
                                {
                                    descriptionCollapse ? service.service : service.service.substr(0,150)
                                }
                            </p>
                            {
                                descriptionCollapse? 
                                <span onClick={showLess} className="card-link collapse-btn">See Less <FontAwesomeIcon className="icon" icon={faArrowAltCircleLeft} /></span>
                                :
                                <span onClick={showMore} className="card-link collapse-btn">See More <FontAwesomeIcon className="icon" icon={faArrowAltCircleRight} /></span>
                            }
                {/* <p>{service.service}</p> */}
            </div>
        </section>
    );
};

export default ServiceDetail;