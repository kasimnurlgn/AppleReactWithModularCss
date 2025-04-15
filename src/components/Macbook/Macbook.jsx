import React from "react";
import macbook from "../../assets/images/home/mac-laptop.jpg";
import styles from "./Macbook.module.css";
const Macbook = () => {
  return (
    <div>
      <section class={` container-fluid py-1 mt-4 ${styles.macbook}`}>
        <div class="row text-center pt-5">
          <p class="fs-5 mb-0">16-inch model</p>
          <h1 class="fw-bold mb-0">MacBook Pro</h1>
          <p class="mb-0 fs-4">The best for the brightest.</p>
          <div class="learn-buy">
            <ul class="list-unstyled d-flex justify-content-center mt-2">
              <li>
                <a href="#" class="text-decoration-none fs-5 me-3">
                  Learn more <i class="fas fa-chevron-right"></i>
                </a>
              </li>
              <li>
                <a href="#" class="text-decoration-none fs-5">
                  Buy <i class="fas fa-chevron-right"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-4">
            <img src={macbook} alt="MacBook Pro" class="img-fluid" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Macbook;
