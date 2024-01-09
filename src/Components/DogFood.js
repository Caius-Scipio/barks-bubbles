import React from "react";
import { Route, Routes } from "react-router-dom";

const DogFood = ({ id, name, description, price }) => {
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <div className="card text-black">
              <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
              <img
                src="https://wwbenefits.com/wp-content/uploads/2016/10/head_unavailable.jpg"
                className="card-img-top"
                alt="Purina One Chicken and Rice"
              />
              <div className="card-body">
                <div className="text-center">
                  <h5 className="card-title">Believing is seeing</h5>
                  <p className="text-muted mb-4">{name}</p>
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <span>{description}</span>
                    <span>Price ${price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route
          path={`/dog-food/${id}`}
          element={<DogFoodDetail name={name} description={description} price={price} />}
        />
      </Routes>
    </section>
  );
};

const DogFoodDetail = ({ name, description, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      {/* Add more details or components as needed */}
    </div>
  );
};

export default DogFood;
