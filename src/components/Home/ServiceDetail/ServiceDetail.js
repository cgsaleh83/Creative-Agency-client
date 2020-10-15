import React from 'react';

const ServiceDetail = ({ doctor }) => {
    return (
        <div className="col-md-4 text-center review_container">
            <div className="row d-flex justify-content-center">
                {
                    doctor.image ? <img style={{ height: '50px' }} src={`data:image/png;base64,${doctor.image.img}`} alt="" />
                        :
                        <img style={{ height: '50px' }} className="img-fluid mb-3" src={`http://localhost:5000/${doctor.img}`} alt="" />
                }
               
            </div>
            <p className="">{doctor.project}</p>
            <h5 className="mt-3 mb-3">{doctor.service}</h5>
        </div>
    );
};

export default ServiceDetail;