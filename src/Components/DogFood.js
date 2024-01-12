import React from "react";
import dogFoodData from "../Data/FoodData";

const DogFood = () => {
  return (
    <div className="container container fluid">
      <h1 className="text-center mb-4">Dog Food</h1>
      <p>
        We use only the highest quality ingredients in our dog food products to ensure that your pet receives the best
        possible nutrition. Our team of experienced staff is passionate about dogs and dedicated to providing the best
        possible care for your furry friend.
      </p>
      <div className="Container py-5">
        <div className="row justify-content-center">
          {dogFoodData.map((product) => (
            <div className="col-md-8 col-lg-6 col-xl-4">
              <div className="card text-balck">
                <section>
                  <img className="card-img-top" src={product.imageUrl} alt={product.name} key={product.id} />
                  <div className="card-body">
                    <div className="text-center">
                      <h5>{product.name}</h5>
                      <p>{product.description}</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <p>${product.price.toFixed(2)}</p>
                  </div>
                </section>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DogFood;
