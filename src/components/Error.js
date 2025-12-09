import { useRouteError } from "react-router-dom";    

const Error = () => {
  const err = useRouteError();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-red-50 to-orange-100 p-6 text-center space-y-6">

      <h1 className="text-6xl font-extrabold text-red-600 drop-shadow-md">
        ⚠️ Oops!
      </h1>

      <h3 className="text-2xl font-semibold text-gray-700">
        Something went wrong
      </h3>

      <h3 className="text-xl font-medium text-gray-600 bg-white shadow-md px-6 py-3 rounded-lg border border-red-200">
        {err.status} : {err.statusText}
      </h3>

      <a
        href="/"
        className="mt-4 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition shadow-md"
      >
        ⬅ Go Back to Home
      </a>
      
    </div>
  );
};

export default Error;
