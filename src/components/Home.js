import React from "react";

const Home = () => {
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
          <p>I-Phone</p>
          <p>Price: 300000</p>
        </div>
        <div className="cart-button" style={{ paddingBottom: "30px" }}>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
