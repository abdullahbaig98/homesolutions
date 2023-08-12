import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div className="bg-dark text-center text-white">
      <div className="container p-4">
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </section>

        <section className="">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              <div className="col-md-5 col-12">
                <div className="form-outline form-white mb-4">
                  <input type="email" id="form5Example21" className="form-control" />
                  <label className="form-label" htmlFor="form5Example21">Email address</label>
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>

        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
            eum harum corrupti dicta, aliquam sequi voluptate quas.
          </p>
        </section>

        <section className="">
          <div className="row">
            {/* Add your lists of links here */}
          </div>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
      
      </div>
    </div>
  );
};

export default Footer;
