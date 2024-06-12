import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { depositAmount, withDrawAmount } from "../redux/slices/BankSlice";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import "../styles/ProductCard.css";
const BankPage = () => {
  const dispatch = useDispatch();
  const [deposit, setDeposit] = useState(0);
  const [withdraw, setWithDraw] = useState(0);
  const bankBal = useSelector((state) => state.bank.amount);

  const depositHandler = () => {
    dispatch(depositAmount(deposit));
  };
  const withdrawHandler = () => {
    if (bankBal > 0 && withdraw <= deposit) {
      dispatch(withDrawAmount(withdraw));
    } else {
      toast.error("Not sufficient balance 😓", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
      <div className="prod_header">
        <div className=""></div>
        <div className="prod_header_left">
          <h1 style={{ margin: "0" }}>Bank</h1>
        </div>
        <div className="prod_header_right">
          <h2 style={{ marginLeft: "10px" }}>
            Bal: {<span style={{ color: "darkgreen" }}>{bankBal}</span>}
          </h2>
        </div>
      </div>

      <div
        style={{
          margin: "20px",
        }}
        className=""
      >
        <div>
          <label>DEPOSIT...</label>
          <input
            type="text"
            placeholder="Enter amount to deposit"
            onChange={(e) => {
              setDeposit(parseInt(e.target.value));
            }}
          />
          <button
            onClick={() => {
              depositHandler();
            }}
          >
            DEPOSIT
          </button>
        </div>
        <br />
        <div>
          <label>Withdraw..</label>
          <input
            type="text"
            placeholder="Enter amount to deposit"
            onChange={(e) => {
              setWithDraw(parseInt(e.target.value));
            }}
          />
          <button
            onClick={() => {
              withdrawHandler();
            }}
          >
            withdraw
          </button>
        </div>
      </div>
    </div>
  );
};
export default BankPage;
