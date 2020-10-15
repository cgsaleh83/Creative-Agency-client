import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css';


const InfoCard = ({ info }) => {
    return (
        <div className="col-md-2 text-white info-card">
            <div className={`d-flex justify-content-center info_container info-${info.background}`}>
                <div className="mr-3">
                    <img src={info.img} alt=""/>
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;