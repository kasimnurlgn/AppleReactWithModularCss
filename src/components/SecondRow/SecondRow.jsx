import React from "react";
import styles from "./SecondRow.module.css";
import appleTv from "../../assets/images/icons/apple-tv-logo.png";
import servantLogo from "../../assets/images/icons/servant-logo.png";
const SecondRow = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className={`${styles.secondRow} mb-3 mx-2 row g-3`}>
          {/* <!-- second row left side --> */}
          <div
            className={`${styles.secondRowLleft} col-md text-center ${styles.rightAndLeft} me-md-2 pt-5`}
          >
            <div className="fs-1 fw-bold">
              <img src={appleTv} />
            </div>
            <div className={styles.tvShowLogoContainer}>
              <img src={servantLogo} alt="Servant TV Show Logo" />
            </div>
            <div className={`${styles.watchMoreContainer} fs-5`}>
              <ul className="list-unstyled d-flex justify-content-center">
                <li>
                  <a href="#" className="text-decoration-none fs-5">
                    Watch the trailer
                  </a>
                </li>
                <li>
                  <a href="" className="text-decoration-none">
                    <i className="fa-solid fa-circle-play ps-3"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- second row right side --> */}
          <div
            className={`${styles.secondRowRight} text-center col-md ${styles.rightAndLeft} ms-md-2 pt-5`}
          >
            <div className="fs-1 fw-bold mx-auto">AirPods Pro</div>

            <div className="fs-5 mx-auto py-2">
              Magic like you’ve never heard.
            </div>

            <div className={`${styles.learnBuy} fs-5`}>
              <ul className="list-unstyled d-flex justify-content-center">
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
        {/* <!-- second row ends here  --> */}
      </div>
    </div>
  );
};

export default SecondRow;
