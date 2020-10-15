import React from 'react';

const ServiceDetail = ({ service }) => {
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
                <p>{service.service}</p>
            </div>
        </section>
    );
};

export default ServiceDetail;