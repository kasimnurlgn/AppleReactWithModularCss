import React from "react";
import styles from "./ThirdRow.module.css";
import ipadLogo from "../../assets/images/icons/new-ipad-logo.png";
const ThirdRow = () => {
  return (
    <div>
      <div className="container-fluid">
        <div class={`${styles.thirdRow} row mx-2 g-3`}>
          {/* <!-- third-row left side --> */}
          <div
            class={`${styles.thirdRowLeft} text-center col-md me-md-2 ${styles.rightAndLeft} pt-5`}
          >
            <p className="mb-0 fs-5">16-inch model</p>

            <h2 className="fw-bold fs-1 mb-0">MacBook Pro</h2>

            <div className="fs-4 pb-2">The best for the brightest.</div>

            <div class={styles.learnBuy}>
              <ul className="list-unstyled d-flex justify-content-center fs-5">
                <li>
                  <a href="#" className="text-decoration-none pe-3">
                    Learn more{" "}
                    <i className="fa-sharp fa-solid fa-angle-right"></i>
                  </a>
                </li>

                <li>
                  <a href="#" className="text-decoration-none pe-3">
                    Buy <i className="fa-sharp fa-solid fa-angle-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- third-row right side --> */}
          <div
            class={`${styles.thirdRowRight} text-center right col-md ms-md-2 ${styles.rightAndLeft} pt-5`}
          >
            <div>
              <img src={ipadLogo} alt="New iPad Logo" />
            </div>

            <div className="fs-4 py-2">
              Like a computer. Unlike any computer.
            </div>

            <div class={styles.learnBuy}>
              <ul className="list-unstyled d-flex justify-content-center fs-5">
                <li>
                  <a href="#" className="text-decoration-none pe-3">
                    Learn more{" "}
                    <i className="fa-sharp fa-solid fa-angle-right"></i>
                  </a>
                </li>

                <li>
                  <a href="#" className="text-decoration-none pe-3">
                    Buy <i className="fa-sharp fa-solid fa-angle-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- third row ends here  --> */}
      </div>
    </div>
  );
};

export default ThirdRow;
