import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ShareHolder.css';


const InfoCard = ({ info }) => {
    return (
        <div className="col-md-2 text-white info-card">
            <div className={'d-flex justify-content-center info_container'}>
                <div className="mr-3">
                    <img src={info.img} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;