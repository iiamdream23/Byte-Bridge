import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import JoinForm from "./components/JoinForm";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-4">
      <div className="flex-grow">
        <Navbar />
        <HeroSection />
      </div>
      <div>
        <div className="lg:hidden flex flex-col-reverse">
        <FAQSection />
        <JoinForm />
        </div>
        <div className="hidden lg:flex lg:items-center lg:justify-center p-10">
        <FAQSection />
        <JoinForm />
        </div>
        <Footer />
      </div>
    </div>
  );
}
