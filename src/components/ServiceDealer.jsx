import React from "react";

import wheelBalancing from "../../public/assets/wheel-bal.webp";
import wheelAlignment from "../../public/assets/wheel-alignment.webp";
import Image from "next/image";

const serviceImages = [
  {
    id: 1,
    image: wheelBalancing,
  },
  {
    id: 2,
    image: wheelAlignment,
  },
  {
    id: 3,
    image: wheelBalancing,
  },
  {
    id: 4,
    image: wheelAlignment,
  },
];

const ServiceDealer = () => {
  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Services offered by this dealer</h5>
          <div className="d-flex flex-row overflow-x-auto gap-3 scrollbar-hidden">
            {serviceImages.map((img) => (
              <div className=" d-flex flex-col w-100 shadow-sm">
                <div className="card p-3 my-2 w-100">
                  <Image
                    key={img.id}
                    src={img.image}
                    className=" mx-auto"
                    style={{ maxWidth: "350px" }}
                    alt="hemkunt_image"
                  ></Image>
                  <div className="card-body justify-content-center text-center">
                    <p className="card-text">
                      Wheel Balancing
                    </p>
                    <a
                      href="#"
                      className="btn btn-danger px-2 fw-medium"
                      style={{ borderRadius: "0px" }}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDealer;
