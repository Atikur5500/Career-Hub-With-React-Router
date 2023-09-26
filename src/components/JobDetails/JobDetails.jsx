import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    const { job_description, job_responsibility, educational_requirements, experiences } = job;
    console.log(job)

    const appliedSuccessful = () =>{
        toast.success('Apply Successful!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    return (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-4 p-5">
           <div className="col-span-3">
            <div className="p-5 space-y-3">
                <p><span className="font-bold">Job Description:</span>{job_description}</p>
                <p><span className="font-bold">Job Responsibility:</span>{job_responsibility}</p>
                <p><span className="font-bold">Educational Requirements:</span>{educational_requirements}</p>
                <p><span className="font-bold">Experiences:</span>{experiences}</p>
            </div>
           </div>
           <div className="border col-span-1">
            <div className="p-5">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi iste rerum, vel earum provident vero officia minima. Quasi blanditiis itaque repellat animi, molestiae officiis exercitationem odio provident harum ea, obcaecati voluptatibus dolor dolores </p>
                <button onClick={appliedSuccessful} className="btn mt-4 bg-blue-400 text-white w-full rounded-sm">Apply Now</button>
                    <ToastContainer 
                       
                    />
            </div>
           </div>
        </div>
    );
};

export default JobDetails;