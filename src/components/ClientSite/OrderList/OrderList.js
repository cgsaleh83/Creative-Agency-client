import React, { useEffect, useState } from 'react';
import OrderListDetails from '../Order/OrderListDetails/OrderListDetails';
import '../../Home/Services/Services.css';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';


const OrderList = () => {

    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <section className='Order_container'>
            <Sidebar></Sidebar>
            <div className='d-flex justify-content-center'>
                <div className='w-75 row'>
                    {
                        orders.map(order => <OrderListDetails key={order._id} order={order}></OrderListDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default OrderList;