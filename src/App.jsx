import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "@/components/organisms/Layout";
import Booking from "@/components/pages/Booking";
import Pricing from "@/components/pages/Pricing";
import Tracking from "@/components/pages/Tracking";
import Fleet from "@/components/pages/Fleet";
import Contact from "@/components/pages/Contact";
import RoutesPage from "@/components/pages/Routes";
import Services from "@/components/pages/Services";
import Home from "@/components/pages/Home";
import LocalTaxi from "@/components/pages/services/LocalTaxi";
import AirportTransfer from "@/components/pages/services/AirportTransfer";
import WeddingPackages from "@/components/pages/services/WeddingPackages";
import CorporateServices from "@/components/pages/services/CorporateServices";
import OutstationCabs from "@/components/pages/services/OutstationCabs";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/local-taxi" element={<LocalTaxi />} />
          <Route path="/services/outstation-cabs" element={<OutstationCabs />} />
          <Route path="/services/airport-transfer" element={<AirportTransfer />} />
          <Route path="/services/corporate-services" element={<CorporateServices />} />
          <Route path="/services/wedding-packages" element={<WeddingPackages />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/routes" element={<RoutesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/track" element={<Tracking />} />
        </Routes>
      </Layout>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName="toast-container"
        style={{ zIndex: 9999 }}
      />
    </>
  );
}

export default App;