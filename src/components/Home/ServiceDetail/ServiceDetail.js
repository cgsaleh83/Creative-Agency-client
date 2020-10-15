import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center review_container">
            <div className="row d-flex justify-content-center">
                {
                    service.image ? <img style={{ height: '50px' }} src={`data:image/png;base64,${service.image.img}`} alt="" />
                        :
                        <img style={{ height: '50px' }} className="img-fluid mb-3" src={`http://localhost:5000/${service.img}`} alt="" />
                }
               
            </div>
            <p className="">{service.project}</p>
            <h5 className="mt-3 mb-3">{service.service}</h5>
        </div>
    );
};

export default ServiceDetail;