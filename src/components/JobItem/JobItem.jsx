import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const JobItem = ({job}) => {
    const {id, logo, job_title, company_name, job_type, location, salary, remote_or_onsite } = job;
    return (
        <div className="text-left flex-grow"> 
            <div className="border p-10 h-full space-y-4 flex-grow">
                <figure><img src={logo} /></figure>
                
                    <h2 className="card-title">{job_title}</h2>
                    <small>{company_name}</small>
                    <div className="flex gap-5">
                    <button className="btn btn-outline btn-secondary rounded-md">{remote_or_onsite}</button>
                    <button className="btn btn-outline btn-accent rounded-md">{job_type}</button>
                    </div>
                    <div className="flex text-left flex-grow">
                        <p>Location:{location}</p>
                        <p className="ml-10 md:ml-12">Salary:{salary}</p>
                    </div>
                    <div className="card-actions justify-start flex-grow">
                        <Link to={`/job/${id}`}>
                            <button className="btn bg-blue-400 text-white capitalize">View Details</button>
                        </Link>
                    </div>
                
            </div>
        </div>
    );
};

JobItem.propTypes = {
    job: PropTypes.object.isRequired
}

export default JobItem;