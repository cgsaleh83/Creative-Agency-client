import React from 'react';
import '../Order/Order.css'

const OrderListDetails = ({ order }) => {
    return (
        <div className="col-md-4 text-center orders_container">
            <div className="row d-flex justify-content-center ">
                {
                    order.image ? <img style={{ height: '60px' }} src={`data:image/png;base64,${order.image.img}`} alt="" />
                        :
                        <img style={{ height: '60px' }} className="img-fluid mb-3" src={`https://enigmatic-inlet-29316.herokuapp.com/${order.img}`} alt="" />
                }
                
            </div>
            <h5 className="">{order.service}</h5>
            <h4><small>{order.project}</small></h4>
        </div>
    );
};

export default OrderListDetails;