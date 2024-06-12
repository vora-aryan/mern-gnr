import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Components/Loader";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MyButton from "../Components/MyButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchUSers, searchOneUser } from "../redux/slices/UsersSlice";

const App = () => {
  // const [userData, setUserData] = useState([]);
  const userData = useSelector((state) => state.users.userData);
  const isLoading = useSelector((state) => state.users.isLoading);
  const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [show, setShow] = useState(false);
  const [detailUser, setDetailUser] = useState({});
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDetailUser = function (user) {
    setDetailUser(user);
  };

  async function searchUser(event) {
    try {
      if (event.target.value.trim() == "") {
        // const users = await axios.get("https://node5.onrender.com/user/user");
        dispatch(fetchUSers());
        return;
      }

      const res = await axios.get("https://node5.onrender.com/user/filter", {
        params: {
          name: event.target.value,
        },
      });
      // setUserData(res.data.data);
      dispatch(searchOneUser(res.data.data));

      console.log(res);
    } catch (error) {
      console.log("Error=", error);
    }
  }

  // async function getUserData() {
  //   setIsLoading(true);

  //   try {
  //     const users = await axios.get("https://node5.onrender.com/user/user");

  //     if (users.status === 404) {
  //       setUserData([]);
  //     }

  //     setUserData(users?.data?.data);
  //   } catch (error) {
  //     console.log("Error in getting data= " + error);
  //   } finally {
  //     setIsLoading(false);
  //     setIsDeleting(false);
  //   }
  // }

  const deleteUser = async function (id, userName) {
    setIsDeleting(true);

    const toastId = toast.loading("User is being deleted..");

    try {
      const res = await axios.delete(
        "https://node5.onrender.com/user/user/" + id
      );

      if (res.status === 204) {
        toast.update(toastId, {
          render: `User ${userName} Deleted Successfully`,
          type: "success",
          isLoading: false,
          position: "top-left",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        console.log("val of del=" + isDeleting);

        // getUserData();
        dispatch(fetchUSers());
      } else {
        toast.update(toastId, {
          render: `Something went wrong!`,
          type: "error",
          isLoading: false,
          abc: 123,
        });
      }
    } catch (error) {
      toast.update(toastId, {
        render: `Something went wrong`,
        type: "error",
        isLoading: false,
      });
    }
  };

  useEffect(() => {
    // getUserData();
    dispatch(fetchUSers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="super-container">
      {isLoading && !isDeleting ? (
        <div className="show-loader">
          <Loader />
        </div>
      ) : (
        <>
          <div className="search-bar">
            <div className="group">
              <input
                onChange={(event) => {
                  searchUser(event);
                }}
                placeholder="Search"
                type="search"
                className="input"
              />
            </div>
          </div>

          <div className="main-container">
            <div className=""></div>

            <ToastContainer
              draggablePercent={60}
              position="top-left"
              autoClose={3000}
              // autoClose={false}
              draggableDirection="x"
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />

            <table className="table table-bordered">
              <thead className="thead-dark ">
                <tr className="table-dark">
                  <th className="text-center" scope="col">
                    ID
                  </th>
                  <th className="text-center" scope="col">
                    Name
                  </th>
                  <th className="text-center" scope="col">
                    Email
                  </th>
                  <th className="text-center" scope="col">
                    Age
                  </th>
                  <th className="text-center" scope="col">
                    isActive
                  </th>
                  <th className="text-center" scope="col" colSpan={3}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {userData.length == 0 ? (
                  <tr align="center">
                    <td colSpan={6}>
                      <h1>No Data Found</h1>
                    </td>
                  </tr>
                ) : (
                  userData?.map((user) => (
                    <tr key={user?._id}>
                      <th className="text-center" scope="col">
                        {user?._id}
                      </th>
                      <th scope="col">{user.name}</th>
                      <td scope="col">{user.email}</td>
                      <td className="text-center" scope="col">
                        {user.age}
                      </td>
                      <td className="text-center" scope="col">
                        {user.isActive ? (
                          <p style={{ color: "darkgreen", fontWeight: "bold" }}>
                            Active
                          </p>
                        ) : (
                          <p style={{ color: "red", fontWeight: "bold" }}>
                            Not-active
                          </p>
                        )}
                      </td>
                      {/* <td scope="col">
                        <MyButton
                          text={"Hello"}
                          type="danger"
                          onClickEvent={() =>
                            navigate("/updateuser/" + user._id)
                          }
                        />
                      </td> */}
                      <td scope="col">
                        {/* <button
                          onClick={() => navigate("/updateuser/" + user._id)}
                          className="btn btn-primary"
                        >
                          Update
                        </button> */}
                        <MyButton
                          text="Update"
                          type="warning"
                          onClickEvent={() =>
                            navigate("/updateuser/" + user._id)
                          }
                        />
                      </td>
                      <td scope="col">
                        {/* <button
                          onClick={() => deleteUser(user._id, user?.name)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button> */}
                        <MyButton
                          text="Delete"
                          type="danger"
                          onClickEvent={() => deleteUser(user._id, user?.name)}
                        />
                      </td>
                      <td scope="col">
                        {/* <Button
                          variant="primary"
                          onClick={() => {
                            handleShow();
                            handleDetailUser(user);
                          }}
                        >
                          Show Details
                        </Button> */}
                        <MyButton
                          text="Show Details"
                          type="primary"
                          onClickEvent={() => {
                            handleShow();
                            handleDetailUser(user);
                          }}
                        />
                      </td>
                    </tr>
                  ))
                )}
                {/* {} */}
              </tbody>
            </table>
          </div>
        </>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <p style={{ fontWeight: "bold" }}></p> User ID: {detailUser._id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ fontWeight: "bold" }}>User Name:</p> {detailUser.name}
        </Modal.Body>
        <Modal.Body>
          <p style={{ fontWeight: "bold" }}>User email:</p> {detailUser.email}
        </Modal.Body>
        <Modal.Body>
          <p style={{ fontWeight: "bold" }}>User status:</p>
          {detailUser.isActive ? (
            <p style={{ color: "darkgreen", fontWeight: "bold" }}>Active</p>
          ) : (
            <p style={{ color: "red", fontWeight: "bold" }}>Not-Active</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;
