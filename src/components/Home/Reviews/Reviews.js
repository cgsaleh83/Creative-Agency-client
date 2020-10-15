
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
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
                            reviews.map(review => <Review key={review._id} review={review} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;