import React from "react";

const Header = (props) => {
  return (
    <div>
      <div className="cartitem">
        <p>cart({props.DataCart.length})</p>
      </div>
    </div>
  );
};

export default Header;
