import Image from "next/image";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="row g-0">
        <div className="col-6">
          <div className="card-body">
            <Image
              key={product.id}
              src={product.image}
              className="d-block w-100"
              alt={product.brand}
              width={100}
              height={50}
            ></Image>
            <h5 className="card-text mt-2 fw-normal fs-6 text-uppercase">
              {product.brand}
            </h5>
            <h5 className="" style={{ color: "GrayText", fontSize: "14px" }}>
              {product.varient}
            </h5>

            <p className="card-text col">
              <span className="badge bg-success"> ★ {product.rating}</span>{" "}
              <span className="text-muted px-2" style={{ fontSize: "12px" }}>
                {product.review} Reviews
              </span>
            </p>
            <h6 className="">₹ {product.price}</h6>
            <p className="card-text text-success" style={{ fontSize: "12px" }}>
              Offer available
            </p>
            <p className="" style={{ color: "GrayText", fontSize: "14px" }}>
              Tubeless
            </p>
          </div>
        </div>

        <div className="col-6 d-flex align-items-end flex-column">
          <div className="d-flex justify-content-end rounded">
            <span
              className=" d-flex px-1"
              style={{ backgroundColor: "#fff3cd", whiteSpace: "nowrap" }}
            >
              <i
                className="bi bi-shield-fill-check text-dark px-2 align-middle"
                style={{ fontSize: "20px" }}
              ></i>{" "}
              {product.warranty} Years Warranty
            </span>
          </div>
          <div
            className="mt-auto"
            style={{ width: "200px", height: "200px", overflow: "hidden" }}
          >
            <Image
              className="img-fluid lazy"
              data-original="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&amp;tr=w-178,q-78,q-60"
              src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&amp;tr=w-178,q-78,q-60"
              alt="Apollo AMAZER 4G LIFE"
              width={200}
              height={200}
              style={{ marginLeft: "70px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
