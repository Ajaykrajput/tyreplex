import DealsCard from "@/components/DealsCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import ServiceComponent from "@/components/ServiceComponent";
import ServiceDealer from "@/components/ServiceDealer";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#f5f6f9" }}>
      <Navbar />

      <div className="">
        <div className="container">
          <ServiceComponent />
          <DealsCard />
          <ServiceDealer />
          <Product />
          <Footer />
        </div>
      </div>
    </div>
  );
}
