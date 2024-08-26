"use client";
import React, { useEffect, useState } from "react";
import AdvanceFilter from "./AdvanceFilter";

const Filter = ({
  setBrand,
  setByPrice,
  priceData,
  filterData,
  productData,
}) => {
  const [filterBy, setFilterBy] = useState({
    id: 1,
    key: "filter by",
  });
  const [searchValue, setSearchValue] = useState("");
  const [searchFilters, setSearchFilters] = useState(filterData);
  const [showMoreFilter, setShowMoreFilter] = useState(false);
  const [popularBy, setPopularBy] = useState(priceData[0]);

  useEffect(() => {
    if (searchValue.length > 0) {
      const searchedData = filterData.filter((item) =>
        item.key.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSearchFilters(searchedData);
    } else {
      setSearchFilters(filterData);
    }
  }, [searchValue]);

  const toggleAdvanceFilter = () => {
    setShowMoreFilter(!showMoreFilter);
  };
  return (
    <div className="d-flex row justify-content-end gap-4">
      <div className=" d-flex justify-content-end align-middle gap-4">
        {/* fliter by */}
        <ul className="nav nav-tabs">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-uppercase"
              style={{ color: "black" }}
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              {filterBy.key}
            </a>
            <ul className="dropdown-menu">
              <input
                className=" p-2"
                type="search"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                style={{
                  outline: "#fff3cd",
                  border: "1px solid gray",
                  backgroundColor: "white",
                  margin: "2px",
                  color: "black",
                }}
              />

              <div
                className="overflow-y-auto scrollbar-hidden flex"
                style={{ maxHeight: "150px" }}
              >
                {searchFilters.map((filter) => (
                  <li key={filter.id}>
                    <div
                      className="dropdown-item"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setFilterBy(filter);
                        setBrand(filter);
                      }}
                    >
                      {filter.key}
                    </div>
                  </li>
                ))}
              </div>
            </ul>
          </li>
        </ul>
        <ul className="nav nav-tabs">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-uppercase"
              style={{ color: "black" }}
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              {popularBy.key}
            </a>
            <ul className="dropdown-menu">
              <input
                className=" p-2"
                type="search"
                placeholder="Search"
                // value={popularBy.key}
                style={{
                  outline: "#fff3cd",
                  border: "1px solid gray",
                  backgroundColor: "white",
                  margin: "2px",
                  color: "black",
                }}
              />
              {priceData.map((filter) => (
                <li key={filter.id}>
                  <div
                    className="dropdown-item"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setPopularBy(filter);
                      setByPrice(filter);
                    }}
                  >
                    {filter.key}
                  </div>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <div
          role="button"
          onClick={toggleAdvanceFilter}
          className="text-primary text-decoration-underline px-4 mt-2 cur"
        >
          Advanced <i className="bi bi-chevron-down"></i>
        </div>
      </div>
      {showMoreFilter && (
        <div className="d-flex justify-content-end">
          <AdvanceFilter productData={productData} />
        </div>
      )}
    </div>
  );
};

export default Filter;
