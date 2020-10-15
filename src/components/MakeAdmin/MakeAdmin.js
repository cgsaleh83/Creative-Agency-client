import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import './MakeAdmin.css'


const MakeAdmin = () => {

    const [services, setServices] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...services };
        newInfo[e.target.name] = e.target.value;
        setServices(newInfo)
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('email', services.email);

        fetch('http://localhost:5000/admin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <section className="container-fluid row header_bg">
            <Sidebar></Sidebar>
            <div className="col-md-9 pr-5 addAdmin_container" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text_color text-center">Make A Admin</h5>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="email" placeholder="Enter email" />
                    </div>

                    <button type="submit" className="btn button">Submit</button>
                </form>
            </div>
        </section>
    );
};


export default MakeAdmin;