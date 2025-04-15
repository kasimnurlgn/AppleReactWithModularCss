import React from "react";
import styles from "./Iphone11Pro.module.css";
const Iphone11Pro = () => {
  return (
    <div>
      <section
        className={` container-fluid py-5 bg-light ${styles.iphone11ProSection}`}
      >
        <div className="row text-center text-white">
          <h1 className="fw-bold">iPhone 11 Pro</h1>
          <p className="fs-3">Pro cameras. Pro display. Pro performance.</p>
          <p className="fs-6 mb-0 pb-1 text-secondary">
            From $24.95/mo. or $599 with trade‑in.
          </p>
          <div className={styles.learnBuy}>
            <ul className="list-unstyled d-flex justify-content-center">
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
        </div>
      </section>
    </div>
  );
};

export default Iphone11Pro;
