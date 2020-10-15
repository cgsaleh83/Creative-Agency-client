import React from 'react';
import 'react-calendar/dist/Calendar.css';
import AddServices from '../../Services/AddServices/AddServices';
import Sidebar from '../Sidebar/Sidebar';

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