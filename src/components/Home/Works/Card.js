// import React from 'react';

// const Card = ({ number }) =>
//  <div className="card">{number}</div>

// export default Card;

import React from 'react';

const Card = ({ number}) => {
    return (
        <div className="card">
            <img src={number} alt=""/>
        </div>
    );
};

export default Card;