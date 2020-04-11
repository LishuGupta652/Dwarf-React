import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//Context API
import { ProductContext } from "../context/ProductContext";

const Products = () => {
  const [{ prod, loading }, dispatch] = React.useContext(ProductContext);

  if (loading) {
    return (
      <div className="products">
        <div className="card">
          <div className="wrapper">
            <h3>
              Loading...
              <span>
                <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
              </span>
            </h3>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      {prod.map((product) => {
        return (
          <div key={product.sys.id}>
            <Link to={`/products/${product.fields.title}`}>
              <div className="products">
                <div className="card">
                  <div className="wrapper">
                    <h3>
                      {product.fields.title}
                      <span>
                        <i
                          class="fa fa-arrow-circle-o-right"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Products;
