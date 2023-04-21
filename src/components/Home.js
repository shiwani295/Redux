import React from "react";

const Home = (props) => {
  //console.warn(props); here we get home conatinger addtocarthandler
  console.warn(props);
  return (
    <div>
      <div className="cartitem">
        <p>cart(0)</p>
      </div>

      <h2>Home Component</h2>
      <div
        style={{
          border: "2px solid",
          width: "500px ",
          marginLeft: "600px",
          marginTop: "50px",
        }}
      >
        <div className="cart-title">
          <h3>Mobile</h3>
        </div>
        <div>
          <p>iPhone 14</p>
          <p>Price: 300000</p>
        </div>
        <div className="cart-button" style={{ paddingBottom: "30px" }}>
          <button
            onClick={() =>
              props.AddToCartHandler({ price: 300000, name: "iPhone 14" })
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
