import React, { useEffect, useState } from 'react';
import Job from '../job/Job';

const FeatureJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);
useEffect(()=>{
    fetch('jobs.json')
    .then(res => res.json())
    .then(data => setJobs(data))
},[])
    return (
        <div>
            <h2 className='text-5xl'>Feature Jobs:{jobs.length}</h2>
            <div className='grid grid-cols-2 gap-5'>
                {
                    jobs.slice(0, dataLength).map(job =><Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <button onClick={()=>setDataLength(jobs.length)} className='btn btn-primary my-3'>View All</button>
            </div>
        </div>
    );
};

export default FeatureJobs;