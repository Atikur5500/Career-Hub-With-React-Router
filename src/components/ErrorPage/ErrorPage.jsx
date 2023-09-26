import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div className="space-y-2 text-center mt-[20%]">
            <h2>Oops!</h2>
            <p>{error.data}</p>
            <Link to='/'>
                <button className="btn bg-blue-400 text-white rounded-sm mt-2">Go Back</button>
            </Link>
        </div>
    );
};

export default ErrorPage;