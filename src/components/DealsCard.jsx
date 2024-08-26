import React from "react";
import image1 from "../../public/assets/hemkunt.jpg";
import image2 from "../../public/assets/hemkunt1.jpg";
import Image from "next/image";

const serviceImages = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image1,
  },
  {
    id: 3,
    image: image2,
  },
  {
    id: 4,
    image: image2,
  },
  {
    id: 5,
    image: image1,
  },
  {
    id: 6,
    image: image1,
  },
  {
    id: 7,
    image: image1,
  },
  {
    id: 4,
    image: image2,
  },
  {
    id: 5,
    image: image1,
  },
  {
    id: 6,
    image: image1,
  },
  {
    id: 7,
    image: image1,
  },
];

const DealsCard = () => {
  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Deals In</h5>
          <div className="d-flex flex-row overflow-x-auto gap-3 scrollbar-hidden">
            {serviceImages.map((img) => (
              <div className=" d-flex flex-col w-100 shadow-sm" key={img.id}>
                <div className="card p-3">
                  <Image
                    key={img.id}
                    src={img.image}
                    // className=" w-100"
                    style={{ maxWidth: "200px" }}
                    alt="hemkunt_image"
                  ></Image>
                  <div className="card-body">
                    <p
                      className="card-text text-center"
                      style={{ color: "GrayText" }}
                    >
                      MRF
                    </p>
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

export default DealsCard;
