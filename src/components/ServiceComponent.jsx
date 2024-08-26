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
];

const ServiceComponent = () => {
  return (
    <div className="container mt-3">
      <div className="card shadow-sm">
        <div className="row g-0">
          <div className="col-md-5">
            <div className="card-body">
              <h5 className="card-title">
                SHREE HEMKUNT TYRES AND SERVICES{" "}
                <span className="badge bg-success">Verified</span>
              </h5>
              <p className="card-text">
                <span className="badge bg-success">
                  <strong>4.9</strong>
                </span>{" "}
                <span className="text-warning fs-5">★ ★ ★ ★ ☆</span> &nbsp; |
                &nbsp;{" "}
                <span className="text-muted text-decoration-underline">
                  2278 Reviews
                </span>
                <a href="#" className="btn btn-light btn-sm ms-2">
                  Rate
                </a>
              </p>
              <p className="card-text">
                PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
                INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
                <br />
                Open - Monday to Sunday: 10:00AM to 8:00PM
              </p>
              <a
                href="#"
                className="btn btn-outline-danger px-5 fw-medium"
                style={{ borderRadius: "0px" }}
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="col-md-7 mt-5">
            <div className="d-flex flex-row overflow-x-auto gap-4 scrollbar-hidden mx-3">
              {serviceImages.map((img) => (
                <Image
                  key={img.id}
                  src={img.image}
                  className="d-block w-100"
                  alt="hemkunt_image"
                ></Image>
              ))}
            </div>
          </div>
        </div>
        <div className="p-3">
          <h6>2278 Google Reviews</h6>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  {/* <div
                    className=" bg-body-primary"
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50px",
                      backgroundColor: "red",
                    }}
                  ></div> */}
                  <h6 className="card-title">Md Nasir</h6>
                  <p
                    className="card-text"
                    style={{ color: "GrayText", fontSize: "15px" }}
                  >
                    Excellent service from start to finish. 100% satisfaction
                    with the job, professionalism and overall service...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h6 className="card-title">Rohit Bhati</h6>
                  <p
                    className="card-text"
                    style={{ color: "GrayText", fontSize: "15px" }}
                  >
                    Went for Tyre change. Ultimate service by shoppe boys. Owner
                    behavior very cool. Guide as per ur budget...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h6 className="card-title">Pradeep Kumar</h6>
                  <p
                    className="card-text"
                    style={{ color: "GrayText", fontSize: "15px" }}
                  >
                    Best tyre shop in Indirapuram. Good dealing with customer.
                    All types tyre available here. Price also responsible.
                    Overall good experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
