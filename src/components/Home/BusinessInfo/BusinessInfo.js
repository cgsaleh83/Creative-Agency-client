import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import uber from '../../../images/logos/uber.png';
import slack from '../../../images/logos/slack.png';
import netflix from '../../../images/logos/netflix.png';
import google from '../../../images/logos/google.png';
import airbnb from '../../../images/logos/airbnb.png';

const infosData = [
    {
        img: uber
    },
    {
        img: slack
    },
    {
        img: netflix
    },
    {
        img: google
    },
    {
        img: airbnb
    },
]
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row  offset-md-1">
                {
                    infosData.map(info => <InfoCard info={info} key={info.title}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;