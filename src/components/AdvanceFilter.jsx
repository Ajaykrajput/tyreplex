import { vehicleData } from "@/constants/constants";
import React, { useState } from "react";
import { ListFilter } from "./ListFilter";

const AdvanceFilter = ({ productData }) => {
  const brandData = productData.filter((item) => item.brand);

  const modelData = productData.filter((item) => item.model);

  const varientData = productData.filter((item) => item.varient);

  const [vehicle, setVehicle] = useState(vehicleData[0]);

  const [byBrand, setByBrand] = useState(brandData[0]);
  const [byModel, setByModel] = useState(modelData[0]);
  const [byVarient, setByVarient] = useState(varientData[0]);

  const vehicleUpdateHandler = (data) => {
    setVehicle(data);
  };

  const brandUpdateHandler = (data) => {
    setByBrand(data);
  };

  const modelUpdateHandler = (data) => {
    setByModel(data);
  };

  const varientUpdateHandler = (data) => {
    setByVarient(data);
  };

  return (
    <div className="d-flex flex-column flex-lg-row justify-content-end gap-4">
      <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-end align-items-center align-items-lg-end gap-4">
        {/* by vehicle */}
        <ListFilter
          item={vehicle}
          itemData={vehicleData}
          onClick={vehicleUpdateHandler}
          type="key"
        />
        {/* by brand */}
        <ListFilter
          item={byBrand}
          itemData={brandData}
          onClick={brandUpdateHandler}
          type="brand"
        />
        {/* by model */}
        <ListFilter
          item={byModel}
          itemData={modelData}
          onClick={modelUpdateHandler}
          type="model"
        />
        {/* by variant */}
        <ListFilter
          item={byVarient}
          itemData={varientData}
          onClick={varientUpdateHandler}
          type="varient"
        />
        <div role="button" className="text-primary btn btn-danger px-3 mt-2">
          <i className="bi bi-search text-light"></i>
        </div>
      </div>
    </div>
  );
};

export default AdvanceFilter;
