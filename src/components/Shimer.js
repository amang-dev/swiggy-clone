const Shimer = () => {
    return (
      <div className="shimmer-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
        {Array(8) 
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="shimmer-card bg-gray-200 rounded-lg shadow-lg animate-pulse"
            >
              <div className="shimmer-image bg-gray-300 h-44 rounded-t-lg"></div>
  
              <div className="shimmer-content p-5 space-y-3">
                <div className="shimmer-title bg-gray-300 h-5 w-3/4 rounded"></div>
                <div className="shimmer-line bg-gray-300 h-4 w-1/2 rounded"></div>
                <div className="shimmer-line bg-gray-300 h-4 w-1/4 rounded"></div>
              </div>
            </div>
          ))}
      </div>
    );
  };
  
  export default Shimer;
  