import React from 'react';

function Footer() {
  return (
    <footer className="pt-lg-10 pt-5 footer">
      <div className="pb-0 container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 text-white col-md-6 col">
            <div className="mb-4">
              <img src="../../footerLogo.svg" alt="" />
              <div className="mt-4">
                <p className="h5 fw-light lh-26 mb-5">2024</p>
                <p className="h5 fw-light lh-26 mb-5">DOWNLOAD THE APP</p>

                <a href="tel:+919703454549" className="text-white h4 fw-light">
                  <img src="../../whatsAppIcon.svg" alt="" /> +91 9703454549
                </a>
                <div className="fs-4 mt-4 d-flex mt-6">
                  <a href="#" className="me-2"><img src="../../facebookIcon.svg" alt="Facebook Icon" /></a>
                  <a href="#" className="me-2"><img src="../../instagramIcon.svg" alt="Instagram Icon" /></a>
                  <a href="#" className=""><img src="../../twitterIcon.svg" alt="Twitter Icon" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="offset-lg-1 col-lg-2 col-md-3 col-6 col-md-3 col">
            <div className="mb-4">
              <h3 className="fw-bold mb-9 h4 text-white">National Games 2024</h3>
              <ul className="list-unstyled nav nav-footer flex-column nav-x-0">
                <li><a href="#" className="nav-link px-0 text-white h5 fw-light">Home</a></li>
                <li><a href="#" className="nav-link px-0 text-white h5 fw-light">Schedule and Results</a></li>
                <li><a href="#" className="nav-link px-0 text-white h5 fw-light">Medal Tally</a></li>
                <li><a href="#" className="nav-link px-0 text-white h5 fw-light">Media</a></li>
                <li><a href="#" className="nav-link px-0 text-white h5 fw-light">Visit</a></li>
                <li><a href="#" className="nav-link px-0 text-white h5 fw-light">Teams</a></li>
                <li><a href="#" className="nav-link px-0 text-white h5 fw-light">Milestone</a></li>
                <li><a href="#" className="nav-link px-0 text-white h5 fw-light">Game Culture</a></li>

              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-6 col-md-3 col">
            <div className="mb-4">
              <h3 className="fw-bold mb-9 h4 text-white">Other Link</h3>
              <ul className="list-unstyled nav nav-footer flex-column nav-x-0">
                <li><a href="#" className="nav-link px-0 text-white h5 fw-light">Media</a></li>
                <li><a href="#" className="nav-link px-0 text-white h5 fw-light">Influencers</a></li>
                <li><a href="#" className="nav-link px-0 text-white h5 fw-light">Blog</a></li>
                <li><a href="#" className="nav-link px-0 text-white h5 fw-light">For Startup Hiring</a></li>
                <li><a href="#" className="nav-link px-0 text-white h5 fw-light">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-6 col-md-3 col">
            <div className="mb-4">
              <h3 className="fw-bold mb-9 h4 text-white">Legal</h3>
              <ul className="list-unstyled nav nav-footer flex-column nav-x-0">
                <li><a href="#" className="nav-link px-0 text-white h5 fw-light">Privacy Policy</a></li>
                <li><a href="#" className="nav-link px-0 text-white h5 fw-light">Terms and conditions</a></li>
              </ul>
              <button type="submit" className="fw-bold h3 px-5 py-5 mt-7 mb-0 btn btn-primary">
                <img src="../../phone-in-talk.svg" alt="Phone Icon" className="me-2" /> Schedule a call
              </button>
            </div>
          </div>
        </div>
        <div className="align-items-center g-0 border-top border-white py-6 mt-6 row">
          <div className="col-12 text-center text-white col-md-12 col">
            <span className="h5 fw-light">Copyright © Uttarakhand National Games organizing committee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
