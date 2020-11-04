import React from 'react';

const InputForm = () => {
    return (
        // <div className='input_From' action="https://formspree.io/f/mdopzeng" method="POST" >
        //     <input type="text" name="" id="" placeholder="Email Address*" />
        //     <br />
        //     <input type="text" name="" id="" placeholder="Subject*" />
        //     <br />
        //     <textarea placeholder="Your Message*"></textarea>
        //     <br />
        //     <button className='button'>Submit</button>
        // </div>


        <div className="col-md-6  " >
        <form className='from_control_group' action="https://formspree.io/f/mdopzeng" method="POST" >
            <div className="row from_control_row">
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" name="name" placeholder="Name" />
                </div>

                <div className="form-group col-md-6 email">
                    <input type="text" className="form-control " name="email" placeholder="Enter email" />
                </div>
            </div>

            <div className="row from_control_row">
                <div className="form-group col-md-6">
                    <input type="number" className="form-control" name="number" placeholder="Number" />
                </div>

                <div className="form-group col-md-6 email">
                <input type="text" className="form-control" name="subject" placeholder="Enter Your Subject" />
                </div>
            </div>

            <div className="form-group">
                <textarea type="text" className="form-control " name='description' id="exampleInputPassword1" placeholder="Enter Your Massage" />
            </div>

            <button type="submit" className="btn button contact_btn">Submit</button>
        </form>
    </div>
    );
};

export default InputForm;