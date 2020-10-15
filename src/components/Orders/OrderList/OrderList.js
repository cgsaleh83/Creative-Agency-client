import React, { useEffect, useState } from 'react';
// import '../../Home/Services/Services.css';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import OrderListDetails from '../OrderListDetails/OrderListDetails';


const OrderList = () => {

    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-inlet-29316.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <section className='order_container'>
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