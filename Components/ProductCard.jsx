/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/slices/CartSlice";

const ProductCard = ({
  imageUrl,
  productTile,
  price,
  onClickEvent,
  btnTitle,
  addToCartEvent,
  id,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <div className="image_container">
        <img className="img-prd" src={imageUrl} />
      </div>
      <div className="title">
        <span>{productTile}</span>
      </div>

      <div className="action">
        <div className="price">
          <span>${price}</span>
        </div>
        <button
          onClick={() => {
            addToCartEvent
              ? dispatch(addItem({ productTile, price, imageUrl }))
              : dispatch(removeItem({ id }));
          }}
          className="cart-button"
        >
          <svg
            className="cart-icon"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
          <span>{btnTitle}</span>
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
