import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import OurDoctors from "./components/OurDoctors/OurDoctors";
import OurServices from "./components/OurServices/OurServices";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WhyChooseUs />
      <OurServices />
      <OurDoctors />
      <Footer />
    </div>
  );
}

export default App;
