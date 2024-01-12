import React from "react";
import dogToyData from "../Data/ToysData";

function DogToy() {
  return (
    <div className="container container fluid">
      <h1 className="text-center mb-4">Dog Toys</h1>
      <div className="Container py-5">
        <div className="row justify-content-center">
          {dogToyData.map((product) => (
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
}

export default DogToy;
