"use client"
import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaWallet, FaMoneyCheckAlt, FaTruck } from "react-icons/fa";



export const ExpandableInfoCard = ({ 
  title, 
  description, 
  img, 
  colour = "f5f5f5", 
  scale = "1",
  padding = "1",
  width = "72",
  margin = "2",
  marginR = "0",
  marginL = "0",
  imgH1 = "12",
  imgH2 = "12",
  expandedImage1 = "", //  large image
  expandedImage2 = "", //  top image
  expandedImage3 = "", //  bottom image
  expandedText = "",   //  text content
}) => {

  const marginTopClasses = {
    "0": "mt-0",
    "1": "mt-1",
    "2": "mt-2",
    "3": "mt-3",
    "4": "mt-4",
    "5": "mt-5",
    "6": "mt-6",
  };
  const marginRightClasses = {
  "1": "mr-1",
  "2": "mr-2",
  "3": "mr-3",
  "4": "mr-4"
};
  const scaleNum = parseFloat(scale);
  
  // State to track if card is expanded
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Toggle expanded state
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  
  // Prevent scrolling when overlay is open
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isExpanded]);
  
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-11/12 max-w-lg">
          {/* Main card that triggers expansion */}
          <div
            onClick={handleClick}
            style={{ backgroundColor: `#${colour}` }}
            className={`rounded-tr-4xl rounded-bl-4xl p-6 py-${padding} flex flex-col items-center justify-around min-h-[260px] cursor-pointer transition-all duration-300 hover:shadow-lg`}
          >
            {/* Title and Image */}
            <div className="flex flex-row items-center w-full mb-6">
              <h2 className="text-2xl font-bold text-gray-800 font-serif flex-shrink-1 max-w-[50%]">
                {title}
              </h2>
              
              <div className="flex-1 flex items-center justify-around">
                {/* Container with padding to accommodate scaled image */}
                <div className="overflow-visible" style={{ padding: `${(scaleNum - 1) * 16}px` }}>
                  <img
                    src={img}
                    alt={title}
                    className="object-contain h-28 w-28 ml-2  hover:scale-105 ease-in-out duration-300"
                    style={{ transform: `scale(${scale})`, transformOrigin: "center center" }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="w-full mt-2">
              <p className="text-gray-700 text-sm font-serif text-center">{description}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Full-screen overlay with blur background*/}
      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm p-4">
          <div 
            className="relative w-full max-w-5xl rounded-lg shadow-2xl overflow-hidden"
            style={{ backgroundColor: `#${colour}` }}
          >
            {/* Close button at top-right */}
            <button 
              onClick={() => setIsExpanded(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors z-10"
              aria-label="Close"
            >
              <span className="text-xl font-bold">&times;</span>
            </button>
            
            <div className="w-full p-4">
              <h2 className="text-2xl font-bold text-gray-800 font-serif">{title}</h2>
            </div>
            
            {/* Three-column content */}
            <div className="flex flex-col md:flex-row w-full p-2">
              {/* Column 1: Single large image */}
              <div className={`md:w-${width} flex items-center justify-center overflow-hidden`}>
                <img 
                  src={expandedImage1 || img} 
                  alt="Detailed View" 
                  className={`object-contain max-h-96 ml-${marginL} w-full hover:scale-105 ease-in-out duration-300`}
                  loading="lazy"
                />
              </div>
              
              {/* Column 2: Two images stacked  */}
              <div className={`md:w-70 ${marginTopClasses[margin] || 'mt-2'} ${marginRightClasses[marginR] || 'mr-0'}  flex flex-col space-y-1`}>
                <div className="flex items-center justify-center">
                  <img 
                    src={expandedImage2} 
                    alt="Additional View 1" 
                    className={`object-contain max-h-${imgH1} w-full hover:scale-105 ease-in-out duration-300`}
                    loading="lazy"
                    style={{ maxHeight: `${imgH1}rem` }}
                  />
                </div>
                <div className="flex items-center justify-center py-2">
                  <img 
                    src={expandedImage3} 
                    alt="Additional View 2" 
                    className={`object-contain max-h-${imgH2} w-full hover:scale-105 ease-in-out duration-300`}
                    loading="lazy"
                    style={{ maxHeight: `${imgH1}rem` }}
                  />
                </div>
              </div>
              
              {/* Column 3: Text content */}
              <div className="md:w-80 ml-14 p-3">
                <h3 className="text-2xl font-bold font-serif">Why We Are The Best?</h3>
                <div className="text-gray-800 font-serif mt-6 overflow-auto max-h-96">
                  {expandedText || description}
                </div>

                
                {/* Icons List */}
                <div className="mt-6 space-y-4 text-gray-700">
                  {/* Shopping */}
                  <div className="flex items-start">
                    <FaShoppingCart size={24} className="text-gray-800 mt-3" />
                    <div className="ml-3">
                      <h4 className="text-md font-semibold font-serif">Easy Shopping</h4>
                      <p className="text-xs text-gray-600 font-serif">Browse and buy with a few clicks</p>
                    </div>
                  </div>

                  {/* Wallet */}
                  <div className="flex items-start">
                    <FaWallet size={24} className="text-gray-800 mt-3" />
                    <div className="ml-3">
                      <h4 className="text-md font-semibold font-serif">Secure Wallet</h4>
                      <p className="text-xs text-gray-600 font-serif">Your transactions are always safe</p>
                    </div>
                  </div>

                  {/* Payment */}
                  <div className="flex items-start">
                    <FaMoneyCheckAlt size={24} className="text-gray-800 mt-3" />
                    <div className="ml-3">
                      <h4 className="text-md font-semibold font-serif">Flexible Payment</h4>
                      <p className="text-xs text-gray-600 font-serif">Multiple payment options supported</p>
                    </div>
                  </div>

                  {/* Shipping */}
                  <div className="flex items-start">
                    <FaTruck size={24} className="text-gray-800 mt-3" />
                    <div className="ml-3">
                      <h4 className="text-md font-semibold font-serif">Fast Delivery</h4>
                      <p className="text-xs text-gray-600 font-serif">Swift and reliable shipping</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExpandableInfoCard;