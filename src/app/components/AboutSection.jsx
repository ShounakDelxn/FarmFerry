export default function AboutSection() {
  return (
    <section id="about" className="py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-center text-[#1E3A2F] font-serif">
          About Us
        </h2>

        {/* Top Description Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-[#6B8E23] text-black font-serif transition-colors duration-300 p-8 rounded-2xl hover:rounded-2xl hover:shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 md:mb-0 font-serif leading-snug">
            <span className="block">Discover Our</span>
            <span className="block">Features</span>
          </h3>
          <p className="md:w-2/3 text-sm font-serif">
            Our platform is designed to deliver fresh, high-quality groceries with speed and transparency.
            We partner directly with farmers and trusted suppliers, ensuring you get the best products while supporting
            sustainable agriculture and ethical sourcing.
          </p>
        </div>

        {/* Cards Section */}
        <div className="space-y-12">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white text-gray-700 rounded-xl shadow-md text-center p-10 py-14 hover:bg-[#6B8E23] hover:text-gray-200 transition-transform transition-colors duration-300 transform ease-in-out hover:translate-y-4 ">
              <h4 className="text-lg font-bold mb-2 text-[#1E3A2F] font-serif">Fresh from the Source</h4>
              <p className="text-sm font-serif">
                We ensure our produce is picked at peak freshness and delivered quickly, maintaining its natural flavor and nutrition.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white text-gray-700 rounded-xl text-center shadow-md p-10 py-14 hover:bg-[#6B8E23] hover:text-gray-200 transition-transform transition-colors duration-300 transform ease-in-out hover:translate-y-4 ">
              <h4 className="text-lg font-bold mb-2 text-[#1E3A2F] font-serif">Trusted Partnerships</h4>
              <p className="text-sm font-serif">
                We work directly with farmers and certified suppliers who share our commitment to quality, hygiene, and sustainability.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white text-gray-700 rounded-xl shadow-md text-center p-10 py-14 hover:bg-[#6B8E23] hover:text-gray-200 transition-transform transition-colors duration-300 transform ease-in-out hover:translate-y-4 ">
              <h4 className="text-lg font-bold mb-2 text-[#1E3A2F] font-serif">Customer First</h4>
              <p className="text-sm font-serif">
                Your satisfaction is our priority — we offer timely delivery, reliable support, and an easy shopping experience.
              </p>
            </div>
          </div>

          {/* Second row  */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-6 md:w-2/3 md:px-16">
              {/* Card 1 */}
              <div className="bg-white shadow-md rounded-xl p-6 py-14 text-center w-full text-gray-600
                transition-transform duration-300 transform ease-in-out hover:translate-y-4 hover:bg-[#6B8E23] hover:text-gray-300">
                <h3 className="font-bold text-lg mb-2 text-gray-800 font-serif">Wide Range of Essentials</h3>
                <p className="text-sm font-serif">
                  From spices and dry fruits to fresh produce and groceries — all under one roof.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white shadow-md rounded-xl p-6 py-14 text-center w-full text-gray-600
                transition-transform duration-300 transform ease-in-out hover:translate-y-4 hover:bg-[#6B8E23] 
                hover:text-gray-300">
                <h3 className="font-bold text-lg mb-2 text-gray-800 font-serif">Reliable Sourcing</h3>
                <p className="text-sm font-serif">
                  We maintain trusted relationships with suppliers who value quality and sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}