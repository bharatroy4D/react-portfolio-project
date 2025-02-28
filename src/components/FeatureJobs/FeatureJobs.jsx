import React, { useEffect, useState } from 'react';
import Job from '../job/Job';

const FeatureJobs = () => {
    const [jobs, setJobs] = useState([]);
    console.log(jobs)
useEffect(()=>{
    fetch('jobs.json')
    .then(res => res.json())
    .then(data => setJobs(data))
},[])
    return (
        <div>
            <h2 className='text-5xl'>Feature Jobs:{jobs.length}</h2>
            <div className='grid grid-cols-4 gap-5'>
                {
                    jobs.map(job =><Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeatureJobs;