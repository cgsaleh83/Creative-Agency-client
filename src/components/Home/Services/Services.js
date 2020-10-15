import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css';


const Services = () => {

    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <section className='services_container'>
            <div className='text-center'>
                <h2>Services We <span>Provide</span></h2>
            </div>

            <div className='d-flex justify-content-center'>
                <div className='w-75 row'>
                    {
                        doctors.map(doctor => <ServiceDetail key={doctor._id} doctor={doctor}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;