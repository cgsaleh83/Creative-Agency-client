import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css'

const Sidebar = () => {

    const toggleMenu = () => {
        let navigation = document.querySelector('.navigation');
        let toggle = document.querySelector('.toggle');
        navigation.classList.toggle('active')
        toggle.classList.toggle('active')
    };




    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://enigmatic-inlet-29316.herokuapp.com/admin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
            .then(data => setIsAdmin(data))
    },[]);

    return (
        <div className="sidebar_Container">
            <div className='navigation'>
                <ul>

                    {isAdmin ? <div>
                      
                        <li>
                            <Link to='/allOrders'>
                                <span className='icon'><i class="fa fa-shopping-basket" aria-hidden="true"></i></span>
                                <span className='title'>All Service List</span>
                            </Link>
                        </li>
                       
                        <li>
                            <Link to='/AddService'>
                                <span className='icon'><i class="fa fa-plus" aria-hidden="true"></i></span>
                                <span className='title'>Add Service</span>
                            </Link>
                        </li>
                       
                        
                        <li>
                            <Link to='/makeAdmin'>
                                <span className='icon'><i class="fa fa-user-plus" aria-hidden="true"></i></span>
                                <span className='title'>Make Admin</span>
                            </Link>
                        </li>
                    
                    </div> :
                    <div>
                            <li>
                                <Link to='/'>
                                    <span className='icon'><i class="fa fa-home" aria-hidden="true"></i></span>
                                    <span className='title'>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/order'>
                                    <span className='icon'><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                                    <span className='title'>Order</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/orderList'>
                                    <span className='icon'><i class="fa fa-shopping-basket" aria-hidden="true"></i></span>
                                    <span className='title'>Service List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/review'>
                                    <span className='icon'><i class="fa fa-commenting-o" aria-hidden="true"></i></span>
                                    <span className='title'>Review</span>
                                </Link>
                            </li> 
                   </div>
                    }
                    <li className='signOut'>
                        <Link to='/'>
                            <span className='icon'><i class="fa fa-sign-out" aria-hidden="true"></i></span>
                            <span className='title'>Sign Out</span>
                        </Link>
                    </li>
                </ul>
            </div>

           <div className='dashboard_header'>
                <div className="toggle" onClick={toggleMenu}></div>
           </div>
        </div>
        
    );
};

export default Sidebar;