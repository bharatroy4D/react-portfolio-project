import React from 'react';

const Job = ({job}) => {
    const {logo, job_title} = job;
    return (
        <div>
            <div className='border  border-blue-600 rounded-lg p-4'>
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Job;