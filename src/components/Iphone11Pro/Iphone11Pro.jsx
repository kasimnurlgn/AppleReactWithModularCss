import React from 'react'

const Iphone11Pro = () => {
  return (
    <div>
      <section class="iphone-11-pro-section container-fluid py-5 bg-light">
        <div class="row text-center text-white">
          <h1 class="fw-bold">iPhone 11 Pro</h1>
          <p class="fs-3">Pro cameras. Pro display. Pro performance.</p>
          <p class="fs-6 mb-0 pb-1 text-secondary">
            From $24.95/mo. or $599 with trade‑in.
          </p>
          <div class="learn-buy">
            <ul class="list-unstyled d-flex justify-content-center">
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
        </div>
      </section>
    </div>
  );
}

export default Iphone11Pro
