import React from 'react';


const Review = ({ review }) => {
    return (
      


        <div className="col-md-4 text-center review_container">
            <div className="row d-flex justify-content-center">
                {
                    review.image ? <img style={{ height: '50px' }} src={`data:image/png;base64,${review.image.img}`} alt="" />
                        :
                        <img style={{ height: '50px' }} className="img-fluid mb-3" src={`http://localhost:5000/${review.img}`} alt="" />
                }
                <h5 className="mt-3 mb-3">{review.name}</h5>
              </div>
            <h4><small>{review.designation}</small></h4>
            <p className="text-secondary">{review.description}</p>
        </div>
    );
};

export default Review;