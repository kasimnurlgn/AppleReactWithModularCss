import React from "react";
import macbook from "../../assets/images/home/mac-laptop.jpg";
import styles from "./Macbook.module.css";
const Macbook = () => {
  return (
    <div>
      <section class={` container-fluid py-1 mt-4 ${styles.macbook}`}>
        <div className="row text-center pt-5">
          <p className="fs-5 mb-0">16-inch model</p>
          <h1 className="fw-bold mb-0">MacBook Pro</h1>
          <p className="mb-0 fs-4">The best for the brightest.</p>
          <div className="learn-buy">
            <ul className="list-unstyled d-flex justify-content-center mt-2">
              <li>
                <a href="#" className="text-decoration-none fs-5 me-3">
                  Learn more <i className="fas fa-chevron-right"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none fs-5">
                  Buy <i className="fas fa-chevron-right"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <img src={macbook} alt="MacBook Pro" className="img-fluid" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Macbook;
