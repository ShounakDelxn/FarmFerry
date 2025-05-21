import AboutSection from "./components/AboutSection";
import Banner from "./components/Banner";
import WhyChooseUs from "./components/Choose";
import Navbar from "./components/NavBar";
import { Products } from "./components/Products";


export default function Home() {
  return (
    <div className="bg-[#F8F7F0] font-times">
      <Navbar />
      <Banner />
      <Products />
      <AboutSection />
    </div>
  );
}
