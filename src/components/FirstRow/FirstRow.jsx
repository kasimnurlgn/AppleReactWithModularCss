import React from "react";
import styles from "./FirstRow.module.css";
import watchSeries from "../../assets/images/icons/watch-series5-logo.png";
import appleCard from "../../assets/images/icons/apple-card-logo.png";
const FirstRow = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className={` row mb-3 mt-1 mx-2 g-3 ${styles.firstRow}`}>
          {/* <!-- first row left --> */}
          <div
            className={`${styles.firstRowLeft} text-center col-md me-md-2 ${styles.rightAndLeft} pt-5`}
          >
            <div>
              <img src={watchSeries} alt="Watch Series 5 Logo" />
            </div>

            <div
              className={`fs-5 ${styles.firstRowDescription} mb-2 mx-auto pt-3`}
            >
              With the new Always-On Retina display.
              <br />
              You’ve never seen a watch like this.
            </div>

            <div className="learn-buy fs-5 mb-5">
              <ul className="list-unstyled d-flex justify-content-center">
                <li>
                  <a href="#" className="text-decoration-none pe-3 mt-0">
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
          {/* <!-- first row right side---> */}
          <div
            className={`${styles.firstRowRight} text-center col-md ${styles.rightAndLeft} ms-md-2 pt-5`}
          >
            <div>
              <img src={appleCard} alt="Apple Card Logo" />
            </div>

            <div
              className={`${styles.firstRowDescription} mx-auto pt-3 mb-2 fs-5`}
            >
              Get 3% Daily Cash on purchases from Apple using Apple Card.
            </div>

            <div className="learn-buy fs-5">
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
        {/* <!-- first row ends here  --> */}
      </div>
    </div>
  );
};

export default FirstRow;
