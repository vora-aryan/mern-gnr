import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import "../styles/ProductCard.css";
import { fetchUSers } from "../redux/slices/UsersSlice";
// import { fetchData } from "../redux/slices/CartSlice";

const ProductPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const fetchedUserData = useSelector((state) => state.users.userData);
  console.log(cartItems);
  console.log(fetchedUserData);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <div className="prod_header">
        <div className="">
          <button onClick={() => dispatch(fetchUSers())}>Fetch Data</button>
        </div>
        <div className="prod_header_left">
          <h1 style={{ margin: "0" }}>Products</h1>
        </div>
        <div className="prod_header_right">
          <h2 style={{ marginLeft: "10px" }}>🛒{cartItems.length}</h2>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(4, auto)",
          gap: "100px",
        }}
        className="prod-container"
      >
        <ProductCard
          imageUrl="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT4J3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1693594197616"
          price={1200}
          productTile="Iphone"
          btnTitle="Add to Cart"
          addToCartEvent={true}
        />

        <ProductCard
          imageUrl="https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          price={400}
          productTile="Shoes"
          btnTitle="Add to Cart"
          addToCartEvent={true}
        />
      </div>
    </div>
  );
};

export default ProductPage;
