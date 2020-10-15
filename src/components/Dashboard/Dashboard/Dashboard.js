
import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import AddServices from '../../AddServices/AddServices';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

const Dashboard = () => {
    
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 d-flex justify-content-center">
                 <AddServices></AddServices>
                </div>
              
            </div>
        </section>
    );
};

export default Dashboard;