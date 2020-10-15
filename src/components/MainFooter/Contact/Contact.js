import React from 'react';
import './Contact.css';
import InputForm from './InputForm';
import Map from './Map';

const Contact = () => {
    return (
        <div className='contact_container'>
            <div className="text-center contact_text">
                <h4>CONTACT US</h4>
                <h3>If You have any questions ?</h3>
            </div>
            <div className='d-flex justify-content-center'>
                <div className=" w-75 row">
                    <div className="col-md-6">
                        <InputForm></InputForm>
                    </div>
                    <div className="col-md-6">
                        <Map></Map>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;