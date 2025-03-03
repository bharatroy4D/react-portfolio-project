import React from 'react';
import { AiOutlineDollar } from 'react-icons/ai';
import { MdLocationOn } from "react-icons/md";


const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary, } = job;
    return (

        <div className=" bg-base-100 shadow-sm border border-blue-200 p-5 rounded">
            <figure>
                <img
                    src={logo}
                    alt="Shoes" />
            </figure>
            <div>
                <h2 className="card-title">{job_title}</h2>
                <h3 className='text-start'>{company_name}</h3>
                <div className='text-start py-3'>
                    <button className='border border-blue-600 text-blue-600 font-bold rounded mr-3 px-5 py-2'>{remote_or_onsite}</button>
                    <button  className='border border-blue-600 text-blue-600 font-bold rounded mr-3 px-5 py-2'>{job_type}</button>
                </div>
                <div className='pb-3 flex gap-6 font-medium text-red-500'>
                    <p className='flex
                     gap-2 items-center'><MdLocationOn className='text-2xl'></MdLocationOn>
                    {location}</p>
                    <p className='flex
                     gap-2 items-center'><AiOutlineDollar className='text-2xl'></AiOutlineDollar>
                    Salary: {salary}</p>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;