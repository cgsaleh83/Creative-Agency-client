import React, { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import '../../AddReviews/AddReviews.css'

const Order = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handleFileChange = (e) => {
        const neFile = e.target.files[0];
        setFile(neFile)
    }


    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('project', info.project);
        formData.append('service', info.service);


        fetch('http://localhost:5000/order', {
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
                <h5 className="text_color text-center">Order</h5>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>

                    <div className="form-group">
                        
                        <input onBlur={handleBlur} type="text" className="form-control" name="service" placeholder="Your Services" />
                    </div>

                    <div className="form-group">
                        
                        <input onBlur={handleBlur} type="text" className="form-control" name="email" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                      
                        <input onBlur={handleBlur} type="text" className="form-control" name="project" placeholder="Enter Your description" />
                    </div>

                    <div className="form-group">
                      
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>

                    <button type="submit" className="btn button">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Order;