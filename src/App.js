import Expertise from "./Component/Expertise";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import CarearPath  from "./Component/CarearPath";
import WorkDemonstration from "./Component/WorkDemonstration";
import TraningCertifications from "./Component/Training_Certifications";
import Education from "./Component/Education";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <div className="bg-black min-h-dvh pb-10 overflow-hidden">
      <Navbar />  
      <Hero />
      <Expertise />
      <CarearPath />
      <WorkDemonstration />
      <TraningCertifications />
      <Education />
      <Contact />
      <Footer  />
    </div>
    </BrowserRouter>
  );
}

export default App;
