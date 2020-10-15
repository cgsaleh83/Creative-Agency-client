import React from 'react';
import './OrderDataTable.css'

const AppointmentDataTable = ({appointments}) => {
    return (
       <div className='table_container'>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        {/* <th className="co-md-2">Sr No</th> */}
                        <th className="co-md-2">Name</th>
                        <th className="co-md-2">Email</th>
                        <th className="co-md-2">Service</th>
                        <th className="co-md-2" >Project Details</th>
                        <th className="co-md-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((appointment, index) =>

                            <tr>
                                {/* <td>{index + 1}</td> */}
                                <td>{appointment.name}</td>
                                <td>{appointment.email}</td>
                                <td>{appointment.service}</td>
                                <td>{appointment.project}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
       </div>
    );
};

export default AppointmentDataTable;