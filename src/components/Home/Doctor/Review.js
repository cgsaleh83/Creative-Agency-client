import React from 'react';


const Review = ({ doctor }) => {
    return (
      


        <div className="col-md-4 text-center review_container">
            <div className="row d-flex justify-content-center">
                {
                    doctor.image ? <img style={{ height: '50px' }} src={`data:image/png;base64,${doctor.image.img}`} alt="" />
                        :
                        <img style={{ height: '50px' }} className="img-fluid mb-3" src={`http://localhost:5000/${doctor.img}`} alt="" />
                }
                <h5 className="mt-3 mb-3">{doctor.name}</h5>
              </div>
            <h4><small>{doctor.designation}</small></h4>
            <p className="text-secondary">{doctor.description}</p>
        </div>
    );
};

export default Review;