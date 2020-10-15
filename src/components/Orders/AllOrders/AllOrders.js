import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import OrderDataTable from '../../Orders/OrderDataTable/OrderDataTable'

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('https://enigmatic-inlet-29316.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])

    return (
        <div className="container-fluid row " >
            <Sidebar></Sidebar>
            <div className="col-md-9 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Orders</h5>
                <OrderDataTable allOrder={allOrders} />
            </div>
        </div>
    );
};

export default AllOrders;