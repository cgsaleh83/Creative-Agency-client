import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css';


const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className='services_container'>
            <div className='text-center'>
                <h2>Services We <span>Provide</span></h2>
            </div>

            <div className='d-flex justify-content-center'>
                <div className='w-75 row'>
                    {
                        services.map(service => <ServiceDetail key={service._id} service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;