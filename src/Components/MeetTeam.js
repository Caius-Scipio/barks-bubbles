import React from "react";
import Carol from "../Images/Carol.jpg";
import Erica from "../Images/Erica.jpg";

function MeetTeam() {
  return (
    <>
      <h1 className="text-center">Meet the Team</h1>
      <div className="container contianer-fluid">
        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              Carol Wyrick, <span className="text-muted">Owner</span>
            </h2>
            <p className="lead">
              Carol has been grooming dogs since 1994 and is passionate about providing the best possible care for your
              furry friend.
            </p>
            <p className="lead">She is a proud owner of two dogs, Little Bit and Mater.</p>
          </div>
          <div className="col-md-5">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src={Carol}
              aria-label="Carol sitting in a field of yellow flowers with a dog next to her"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              Erica, <span className="text-muted">Groomer/Manager</span>
            </h2>
            <p className="lead">
              Erica is a level 3 qualified dog groomer and a certified canine first aider. She is passionate about dogs
              and dedicated to providing the best possible care for your furry friend.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src={Erica}
              aria-label="Erica grooming a dog with scissors"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MeetTeam;
