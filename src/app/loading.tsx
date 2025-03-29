export default function Loading() {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold animate-pulse">
            Pioneering Creating Excellence
          </h1>
          {/* Loading spinner */}
          <div className="mt-4">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          </div>
        </div>
      </div>
    );
  }