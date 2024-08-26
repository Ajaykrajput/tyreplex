import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/assets/logo.webp";
import user from "../../public/assets/user.svg";
import { navTabs } from "@/constants/constants";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-light shadow-sm"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="Tyreplex_logo"
              width="100%"
              height="36"
            ></Image>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <Image
                  src={logo}
                  alt="Tyreplex_logo"
                  width="100%"
                  height="36"
                ></Image>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                {navTabs.map((tabData) => (
                  <li className="nav-item dropdown" key={tabData.id}>
                    <a
                      className="nav-link navLink fw-bold link-offset-2 link-offset-3-hover link-underline-opacity-75-hover"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {tabData.name}
                    </a>
                    <ul className="dropdown-menu">
                      {tabData.key.map((op) => (
                        <li key={op.key}>
                          <a className="dropdown-item" href="#">
                            {op.key}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              <div className="d-flex flex-col justify-item-center px-2">
                <span>
                  <Image
                    src={user}
                    alt="Tyreplex_logo"
                    width="100%"
                    height="28"
                  ></Image>
                </span>
                <span className="pl-2 mt-1">Login</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
