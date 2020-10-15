import React from 'react';
import uber from '../../../images/logos/uber.png';
import slack from '../../../images/logos/slack.png';
import netflix from '../../../images/logos/netflix.png';
import google from '../../../images/logos/google.png';
import airbnb from '../../../images/logos/airbnb.png';
import ShareHolder from '../../BusnessShareCompany/ShareHolder/ShareHolder'

const shareHolderData = [
    {
        img: uber,
        id: 1
    },
    {
        img: slack,
        id: 2
    },
    {
        img: netflix,
        id: 3
    },
    {
        img: google,
        id: 4
    },
    {
        img: airbnb,
        id: 5
    },
]
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row  offset-md-1">
                {
                    shareHolderData.map(info => <ShareHolder info={info} key={info.id}></ShareHolder>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;