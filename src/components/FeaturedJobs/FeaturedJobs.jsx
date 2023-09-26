import { useEffect, useState } from "react";
import JobItem from "../JobItem/JobItem";

const FeaturedJobs = () => {

   const [jobs, setJobs] = useState([])
   const [dataLength, setDataLength] = useState(4)
   useEffect(() =>{
    fetch('jobs.json')
        .then(response => response.json())
        .then(data => setJobs(data))
   } ,[])

    return (
        <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold">Featured Jobs</h1>
            <p className="text-lg">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 lg:p-10 lg:px-24">
               {
                    jobs.slice(0, dataLength).map(job => <JobItem key={job.id} job={job}></JobItem>)
               }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <button onClick={() => setDataLength(jobs.length)} className="btn bg-blue-400 text-white mb-5">See All</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;