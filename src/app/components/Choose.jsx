export default function WhyChooseUs() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-serif">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 justify-items-center">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-xl p-6 py-14  text-center w-full max-w-xs text-gray-600 transition-transform  duration-300 transform ease-in-out hover:translate-y-4 hover:bg-[#6B8E23] 
          hover:text-gray-300">
            <h3 className="font-bold text-lg mb-2 text-gray-800 font-serif">Farm-Fresh Quality</h3>
            <p className=" text-sm font-serif">
              We partner directly with farmers to ensure our products are fresh, natural, and nutrient-rich.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-xl p-6 py-14 text-center w-full max-w-xs text-gray-600
          transition-transform  duration-300 transform ease-in-out hover:translate-y-4 hover:bg-[#6B8E23] hover:text-gray-300">
            <h3 className="font-bold text-lg mb-2 text-gray-800 font-serif">Wide Range of Essentials</h3>
            <p className="  text-sm font-serif">
              From spices and dry fruits to fresh produce and groceries — all under one roof.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-xl p-6 py-14 text-center w-full max-w-xs text-gray-600
          transition-transform  duration-300 transform ease-in-out hover:translate-y-4 hover:bg-[#6B8E23] 
          hover:text-gray-300">
            <h3 className="font-bold text-lg mb-2 text-gray-800 font-serif">Reliable Sourcing</h3>
            <p className="text-sm font-serif">
              We maintain trusted relationships with suppliers who value quality and sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
