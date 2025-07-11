import Benefits from "./BenefitsSection";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import "./HomePage.css";
import Testimonials from "./Testimonial";



function HomePage() {
  return (
    <div className="homepage-background">
      <Hero />
      <Benefits />
      <Features />
      <Testimonials/>
      <Footer />
    </div>
  );
}

export default HomePage;