import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';


const AddServices = () => {

    const [services, setServices] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...services };
        newInfo[e.target.name] = e.target.value;
        setServices(newInfo)
    }

    const handleFileChange = (e) => {
        const neFile = e.target.files[0];
        setFile(neFile)
    }


    const handleSubmit = () => {
        const formData = new FormData()
        console.log(services);
        formData.append('file', file);
        formData.append('email', services.email);
        formData.append('service', services.service);
        formData.append('project', services.project);


        fetch('http://localhost:5000/addServices', {
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
            <div className="col-md-9 pr-5 addDoctor_container" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text_color text-center">Please enter Your Services</h5>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="email" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Description</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="service" placeholder="Enter Your Description" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Services Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="project" placeholder="Enter Your Services Name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>

                    <button type="submit" className="btn button">Submit</button>
                </form>
            </div>
        </section>
    );
};


export default AddServices;