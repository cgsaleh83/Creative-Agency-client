import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import './MakeAdmin.css'


const MakeAdmin = () => {

    

    return (
        <section className="container-fluid row header_bg">
            <Sidebar></Sidebar>
            <div className="col-md-9 pr-5 addAdmin_container" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text_color text-center">Make A Admin</h5>

                <form>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="text" className="form-control" name="email" placeholder="Enter email" />
                    </div>

                    <button type="submit" className="btn button">Submit</button>
                </form>
            </div>
        </section>
    );
};


export default MakeAdmin;