import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Offerings from "./components/Offerings";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden antialiased selection:bg-[#D1FAE5]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Offerings />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}