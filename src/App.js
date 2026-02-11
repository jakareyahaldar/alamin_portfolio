import Expertise from "./Component/Expertise";
import Hero from "./Component/Hero2";
import Navbar from "./Component/Navbar";
import CarearPath from "./Component/CarearPath";
import WorkDemonstration from "./Component/WorkDemonstration";
import TraningCertifications from "./Component/Training_Certifications";
import Education from "./Component/Education";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Admin from "./AdminPanel/Admin";
import CarearPathManage from "./AdminPanel/CarearPathManager";
import CoreExpertise from "./AdminPanel/CoreExpertiseManage";
import ManageWorkDemonstration from "./AdminPanel/ManageWorkDemonstration"
import ManageCertifications from "./AdminPanel/ManageCertifications";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { GetAllData } from "./feature/globalState/state";
import PrivateRoutes from "./AdminPanel/Auth/PrivetComponent";
import Login from "./AdminPanel/Auth/Login";



function App() {


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetAllData())
  }, [dispatch])

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoutes />}>

          <Route path="/admin" element={<Admin />} />
          <Route path="/manage-carearpath" element={<CarearPathManage />} />
          <Route path="/manage-exparties" element={<CoreExpertise />} />
          <Route path="/manage-certifications" element={<ManageCertifications />} />
          <Route path="/manage-workdemon" element={<ManageWorkDemonstration />} />

        </Route>


        <Route path="/" element={<div className="bg-black min-h-dvh pb-10 overflow-hidden">
          <Navbar />
          <Hero />
          <Expertise />
          <CarearPath />
          <TraningCertifications />
          <WorkDemonstration />
          <Education />
          <Contact />
          <Footer />
        </div>} />
      </Routes>



    </BrowserRouter>
  );
}

export default App;
