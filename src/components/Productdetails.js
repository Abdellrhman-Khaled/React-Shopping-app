import { Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-bootstrap";
import { Addproduct } from "../rtk/slices/Cart-slices";

function Productdetails() {

  const dispatch = useDispatch();
  const products_url = 'https://fakestoreapi.com/products';
  const [product, setProduct] = useState([]);
  let { productID } = useParams();

  useEffect(() => {
    fetch(`${products_url}/${productID}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }
    , [])

  return (

   
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <img src={product.image} height="400px" width="400px" />
            </div>

            <div className="col-md-6">
              <h4 className="text-uppercase text-black-50">
                {product.category}
              </h4>
              <h1 className="display-5">{product.title}</h1>
              <p className="lead fw-bolder">
                Rating {product.rating && product.rating.rate}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6 fw-bold my-4">
                $ {product.price}
              </h3>
              <p className="lead"> {product.description}</p>
              <Button variant="primary" className=" px-4 py-2" onClick={() => { dispatch(Addproduct(product)) }}>ADD TO CART</Button>
              <Link to="/cart" className="btn btn-dark ms-2 px-3 py-2">GO TO CART </Link>
            </div>
          </div>
        </div>
      </div>
  );

}
export default Productdetails;



