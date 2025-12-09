const Shimmer = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-10 mt-10">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-full sm:w-[45%] lg:w-[260px] bg-gray-200 rounded-xl p-4 shadow animate-pulse"
          >
            <div className="w-full h-[150px] bg-gray-300 rounded-lg"></div>
            <div className="h-4 bg-gray-300 rounded mt-4"></div>
            <div className="h-4 bg-gray-300 rounded mt-2 w-2/3"></div>
            <div className="h-4 bg-gray-300 rounded mt-2 w-1/2"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
