export default function Banner() {
  return (
    // Main container
    <div className="w-full h-96 flex mt-5">

      {/* Left Side - Text Section */}
      <div 
        dir="ltr" 
        className="w-1/2 h-full bg-[#5B8C51] flex items-center justify-center rounded-s-xl ml-8"
      >
        
        <div className="">
          
          {/* Stamp image  */}
          <div className="flex justify-end">
            <img
              src="/images/slider3-stamp.png.png"
              alt="Sample"
              className="h-20 w-20 top-2 right-2"
            />
          </div>

          {/* Heading Text */}
          <h1 className="text-white text-4xl font-thin">Respect Nature ,</h1>
          <h1 className="text-white text-4xl font-extrabold">Gain Benefits</h1>

          {/* Button */}
          <div>
            <button 
              type="button" 
              className="mt-9 text-gray-900 bg-white border border-gray-300 
                         focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 
                         font-medium rounded-full text-sm px-10 py-2.5 me-2 mb-2
                         dark:bg-gray-800 dark:text-white dark:border-gray-600 
                         dark:hover:bg-gray-700 dark:hover:border-gray-600 
                         dark:focus:ring-gray-700"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Image Section */}
      <div 
        dir="rtl" 
        className="w-1/2 h-full pr-8"
      >
        <img
          src="/images/banner.png"
          alt="Sample"
          className="w-full h-full object-cover rounded-s-xl"
        />
      </div>

    </div>
  );
}
