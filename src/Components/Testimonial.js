import React from "react";

function Testimonial() {
  return (
    <section className="container container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10 col-xl-8 text-center">
          <h3 className="mb-4">Testimonials</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate
            esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </div>
      </div>

      <div className="row text-center d-flex align-items-stretch">
        <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
          <div className="card testimonial-card">
            <div className="card-up" style={{ backgroundColor: "#9d789b" }}></div>
            <div className="avatar mx-auto bg-white">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                className="rounded-circle img-fluid"
                alt="reviewer's face"
              />
            </div>
            <div className="card-body">
              <h4 className="mb-4">Jane S.</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <i className="fas fa-quote-left pe-2"></i>“Barks and Bubbles is the best dog grooming salon in town!
                They always take great care of my dog and make him look and smell amazing.”
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
          <div className="card testimonial-card">
            <div className="card-up" style={{ backgroundColor: "#7a81a8" }}></div>
            <div className="avatar mx-auto bg-white">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                className="rounded-circle img-fluid"
                alt="reviewer's face"
              />
            </div>
            <div className="card-body">
              <h4 className="mb-4">Sarah L.</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <i className="fas fa-quote-left pe-2"></i>“Barks and Bubbles is the only place I trust to groom my dog.
                They always do an amazing job and my dog loves going there!”
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-0 d-flex align-items-stretch">
          <div className="card testimonial-card">
            <div className="card-up" style={{ backgroundColor: "#6d5b98" }}></div>
            <div className="avatar mx-auto bg-white">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                className="rounded-circle img-fluid"
                alt="reviewer's face"
              />
            </div>
            <div className="card-body">
              <h4 className="mb-4">Mike T.</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <i className="fas fa-quote-left pe-2"></i>“I've been taking my dog to Barks and Bubbles for years and I
                wouldn't trust anyone else with his grooming needs. The staff is friendly, professional, and always goes
                above and beyond to make sure my dog is happy and healthy.”
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-0 d-flex align-items-stretch">
          <div className="card testimonial-card">
            <div className="card-up" style={{ backgroundColor: "#6d5b98" }}></div>
            <div className="avatar mx-auto bg-white">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                className="rounded-circle img-fluid"
                alt="reviewer's face"
              />
            </div>
            <div className="card-body">
              <h4 className="mb-4">John D.</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <i className="fas fa-quote-left pe-2"></i>“I recently took my dog to Barks and Bubbles for grooming and
                I was blown away by the level of service. The staff was friendly and professional, and my dog looked and
                smelled amazing when I picked him up.”
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
          <div className="card testimonial-card">
            <div className="card-up" style={{ backgroundColor: "#9d789b" }}></div>
            <div className="avatar mx-auto bg-white">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                className="rounded-circle img-fluid"
                alt="reviewer's face"
              />
            </div>
            <div className="card-body">
              <h4 className="mb-4">Lisa M.</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <i className="fas fa-quote-left pe-2"></i>“I highly recommend Barks and Bubbles to anyone looking for
                high-quality dog grooming services. The staff is knowledgeable and friendly, and they always go above
                and beyond to make sure my dog is happy and healthy.”
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
          <div className="card testimonial-card">
            <div className="card-up" style={{ backgroundColor: "#9d789b" }}></div>
            <div className="avatar mx-auto bg-white">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
                className="rounded-circle img-fluid"
                alt="reviewer's face"
              />
            </div>
            <div className="card-body">
              <h4 className="mb-4">Emily R.</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <i className="fas fa-quote-left pe-2"></i>“I recently took my dog to Barks and Bubbles for grooming and
                I was impressed by the level of care and attention that the staff provided. They took the time to listen
                to my concerns and made sure that my dog was comfortable throughout the grooming process. When I picked
                up my dog, he looked and smelled amazing! I highly recommend Barks and Bubbles to anyone looking for
                high-quality dog grooming services.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
