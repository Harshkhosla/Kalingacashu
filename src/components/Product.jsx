import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function Product() {
  
  const sample = [
    {
      "id": 1,
      "title": "kaaju",
      "price": 29,
      "description": "this is kaaju ",
      "category": "sonali fav",
      "image": "./assets/kaju.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 2,
      "title": "Pishta",
      "price": 79,
      "description": "this is pishta ",
      "category": "sonali fav",
      "image": "./assets/kaju.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 3,
      "title": "Pishta",
      "price": 79,
      "description": "this is pishta ",
      "category": "sonali fav",
      "image": "./assets/kaju.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    }, {
      "id": 4,
      "title": "Pishta",
      "price": 79,
      "description": "this is pishta ",
      "category": "sonali fav",
      "image": "./assets/kaju.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },

  ]

  const { id } = useParams();
  // const [IdFind, setIdFind]= useState();
  // console.log(IdFind);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const dispatch = useDispatch();
  // const item = sample.find((item) => item.id === IdFind);
  // console.log(item);
  
  useEffect(() => {
    const getProduct = async () => {
      // const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      // setIdFind(id)
      // console.log(IdFind);
      // setProduct(await response.json());
      // setLoading(true);
      // setLoading(false);
    };
    getProduct();
  }, []);
  const idToFind = id;
  const itemsWithMatchingId = sample.find((item) => item.id == idToFind);
  // setProduct(itemsWithMatchingId);

console.log(itemsWithMatchingId);
    const addProduct = (itemsWithMatchingId) => {
      dispatch(addCart(itemsWithMatchingId));
    };

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={itemsWithMatchingId.image}
            alt={itemsWithMatchingId.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{itemsWithMatchingId.category}</h4>
          <h1 className="display-5">{itemsWithMatchingId.title}</h1>
          <p className="lead fw-bolder">
            Rating: {itemsWithMatchingId.rating && itemsWithMatchingId.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">₹ {itemsWithMatchingId.price}</h3>
          <p className="lead">{itemsWithMatchingId.description}</p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => {
              addProduct(itemsWithMatchingId);
            }}
          >
            Add to cart
          </button>
          <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go to cart
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </>
  );
}
