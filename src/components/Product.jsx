"use client";
import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import ProductCard from "./ProductCard";
import { filterData, priceData, productData } from "@/constants/constants";

const Product = () => {
  const [brand, setBrand] = useState(filterData[0]);
  const [byPrice, setByPrice] = useState(priceData[0]);

  const [productDataByFilter, setProductDataByFilter] = useState([]);

  const [visibleProducts, setVisibleProducts] = useState(8);

  const handleShowMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + 8);
  };

  useEffect(() => {
    let updatedProducts = [...productData];

    //  Brand Filter
    if (brand && brand.key !== "filter by") {
      updatedProducts = updatedProducts.filter((product) =>
        product.brand.toLowerCase().includes(brand.key.toLowerCase())
      );
    }

    // Price Sorting
    if (byPrice.type === "inc") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (byPrice.type === "dec") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setProductDataByFilter(updatedProducts);
  }, [brand, byPrice]);
  return (
    <div className="container mt-4">
      <h6>Tyres sold by this Dealer</h6>
      <div className="position-relative">
        <Filter
          setBrand={setBrand}
          setByPrice={setByPrice}
          priceData={priceData}
          filterData={filterData}
          productData={productData}
        />
      </div>
      {brand && brand.key !== "filter by" && (
        <div className="position-relative">
          <div
            onClick={() => setBrand(filterData[0])}
            className="px-2 rounded mx-4 gap-4"
            style={{
              border: "1px solid black",
              width: "100px",
              backgroundColor: "white",
            }}
          >
            {brand.key}
            <i class="bi bi-x-lg mx-2"></i>
          </div>
        </div>
      )}
      <div className="row">
        {productDataByFilter.slice(0, visibleProducts).map((product) => (
          <div
            key={product.id}
            id={product.brand}
            className="col-xs-6 gap-4 mt-3 col-sm-6 col-lg-3"
          >
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
      <div className="card-body justify-content-center text-center mt-5">
        {visibleProducts < productDataByFilter.length && (
          <div
            className="btn btn-danger px-4 fw-medium"
            style={{ borderRadius: "0px" }}
            onClick={handleShowMore}
          >
            More
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
