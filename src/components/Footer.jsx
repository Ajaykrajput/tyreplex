import React from "react";
import logo from "../../public/assets/logo.webp";
import haveQuestion from "../../public/assets/haveQuestion.webp";
import Image from "next/image";
import style from "./styles.module.css";

const Footer = () => {
  return (
    <div className="container mt-4">
      {/* payment mode section  */}

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Payment Mode</h5>
          <ul className="list-unstyled !text-center mx-auto items-center">
            <li className="">
              <i
                className="bi bi-check-lg text-success align-middle"
                style={{ fontSize: "24px" }}
              ></i>{" "}
              Deposit to Account
            </li>
            <li>
              <i
                className="bi bi-check-lg text-success align-middle"
                style={{ fontSize: "24px" }}
              ></i>{" "}
              Credit Card/Debit Card
            </li>
            <li>
              <i
                className="bi bi-check-lg text-success align-middle"
                style={{ fontSize: "24px" }}
              ></i>{" "}
              Wallets (PayTM/PhonePe/Amazon etc.)
            </li>
            <li>
              <i
                className="bi bi-check-lg text-success align-middle"
                style={{ fontSize: "24px" }}
              ></i>{" "}
              Net Banking
            </li>
            <li>
              <i
                className="bi bi-check-lg text-success align-middle"
                style={{ fontSize: "24px" }}
              ></i>{" "}
              UPI
            </li>
          </ul>
        </div>
      </div>

      {/* // have a question */}

      <div className={`${style.questionsection}`}>
        <div className="row g-0">
          <div className="col-md-6">
            <h5>Have a question about Tyres?</h5>
            <p>Get an answer in 24 hours from our experts.</p>
            <input
              type="text"
              className={style.questioninput}
              placeholder="Ask or search your question"
            />
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <Image
              src={haveQuestion}
              alt="Have Question image"
              className="img-fluid mt-2"
              style={{ maxWidth: "120px" }}
            />
          </div>
        </div>
      </div>
      {/* Footer Section  */}
      <div className={style.footersection}>
        <div className="row">
          <div className="col-md-3 d-flex justify-content-center">
            <Image
              src={logo}
              alt="TyrePlex Logo"
              className="img-fluid"
              style={{ maxWidth: "120px" }}
            />
          </div>
          <div className={`${style.footerlinks} col-md-3`}>
            <a href="#">Who We Are</a>
            <br />
            <a href="#">Are you a Tyre Dealer?</a>
          </div>

          <div className={`${style.footerlinks} col-md-3`}>
            <a href="#">Privacy Policy</a>
            <br />
            <a href="#">Terms of use</a>
            <br />
          </div>

          <div className={`${style.footerlinks} col-md-3`}>
            <a href="#">Contact Us</a>
            <br />
            <a href="#">Career</a>
            <br />
            <a href="#">Shipping & Return Policy</a>
          </div>
        </div>

        <div className={`${style.footerbottom} mt-4`}>
          <p>
            ©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
