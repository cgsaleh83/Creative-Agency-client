import React from 'react';

const InputForm = () => {
    return (
        <div className='input_From'>
            <input type="text" name="" id="" placeholder="Email Address*" />
            <br />
            <input type="text" name="" id="" placeholder="Subject*" />
            <br />
            <textarea placeholder="Your Message*"></textarea>
            <br />
            <button className='button'>Submit</button>
        </div>
    );
};

export default InputForm;