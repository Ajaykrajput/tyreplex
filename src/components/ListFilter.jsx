import React from "react";

export const ListFilter = ({ item, itemData, onClick, type }) => {
  return (
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
          {item[type]}
        </a>
        <ul className="dropdown-menu">
          <input
            className=" p-2"
            type="search"
            placeholder="Search"
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
            {itemData.map((filter) => (
              <li key={filter.id}>
                <div
                  className="dropdown-item"
                  style={{ cursor: "pointer" }}
                  onClick={() => onClick(filter)}
                >
                  {filter[type]}
                </div>
              </li>
            ))}
          </div>
        </ul>
      </li>
    </ul>
  );
};
