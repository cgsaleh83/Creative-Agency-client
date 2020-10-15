
import React, { useEffect, useState } from 'react';
import Review from '../Doctor/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="doctors">
            <div className="container">
                <div className='text-center'>
                    <h2>Clients <span>Feedback</span> </h2>
                </div>

                <div className='d-flex justify-content-center'>
                    <div className='w-80 row'>
                        {
                            reviews.map(doctor => <Review key={doctor._id} doctor={doctor} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;