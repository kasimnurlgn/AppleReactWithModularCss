import React from 'react'
import styles from "./Iphone11.module.css"
const Iphone11 = () => {
  return (
    <div>
      <section className={` container-fluid py-5 ${styles.iphone11Section}`}>
        <div className="row text-center">
          <h1 className="fw-bold mb-0">iPhone 11</h1>
          <p className="fs-4 mb-1">Just the right amount of everything.</p>
          <p className="text-secondary fs-6 mb-1">
            From $16.62/mo. or $399 with trade‑in.
          </p>
          <div className="learn-buy">
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
}

export default Iphone11
