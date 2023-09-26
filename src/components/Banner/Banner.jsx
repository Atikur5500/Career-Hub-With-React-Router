const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex flex-col lg:flex-row-reverse">
               <div className="flex-1">
                    <figure><img  src="https://i.ibb.co/YZMcvwz/user.png" /></figure>
               </div>
                <div className="flex-1 px-5">
                    <h1 className="text-2xl lg:text-5xl tracking-tighter font-bold lg:w-4/5">One Step Closer To Your Dream Job</h1>
                    <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;