import { useForm } from "react-hook-form";
import "../styles/adduser.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: async () => {
      const res = await axios.get(
        "https://node5.onrender.com/user/user/" + userId
      );

      return {
        name: res.data.data.name,
        age: res.data.data.age,
        email: res.data.data.email,
        isActive: res.data.data.isActive,
      };
    },
    mode: "onChange",
  });

  const navigate = useNavigate();
  const userId = useParams().id;

  const submitHandler = async function (userData) {
    const toastId = toast.loading("User is being updated.");
    // console.log(userData);
    const res = await axios.put(
      "https://node5.onrender.com/user/user/" + userId,
      userData
    );

    // console.log(res);

    if (res.status === 200) {
      toast.update(toastId, {
        render: "User Updated Successfully",
        type: "success",
        isLoading: false,
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  };

  console.log(errors);

  const validationSchema = {
    name: {
      required: {
        value: true,
        message: "name is required",
      },
      minLength: {
        value: 3,
        message: "Name should have atleast 3 characters",
      },
      maxLength: {
        value: 45,
        message: "Name should not exceed 10 characters",
      },
    },
    age: {
      required: {
        value: true,
        message: "age is required",
      },
      min: {
        value: 18,
        message: "age must be greater than 18",
      },
    },
    email: {
      required: {
        value: true,
        message: "email is required",
      },
      pattern: {
        value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
        message: "Invalid Email",
      },
    },
    active: {
      required: {
        value: true,
        message: "above field is required",
      },
    },
  };
  return (
    <div className="form-container-super">
      <ToastContainer
        position="top-left"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="form-box">
        <form onSubmit={handleSubmit(submitHandler)} className="form">
          <span className="title">Update User</span>

          <div className="form-container">
            <div className="">
              <input
                type="text"
                className="input"
                placeholder="Full Name"
                {...register("name", validationSchema.name)}
              ></input>
              {errors?.name && <p className="err-msg">{errors.name.message}</p>}
            </div>
            <div className="">
              <input
                type="number"
                className="input"
                placeholder="age"
                {...register("age", validationSchema.age)}
              ></input>
              {errors?.age && <p className="err-msg">{errors.age.message}</p>}
            </div>
            <div className="">
              <input
                type="email"
                className="input"
                placeholder="Email"
                {...register("email", validationSchema.email)}
              ></input>
              {errors?.email && (
                <p className="err-msg">{errors.email.message}</p>
              )}
            </div>
            <div className="radio-cnt">
              <div>
                <p className="flex-cstm">Active</p>
              </div>
              <div className="radio-itm">
                <div>
                  <label htmlFor="yes">Yes</label>
                </div>
                <div>
                  <input
                    name="active"
                    id="yes"
                    type="radio"
                    value={true}
                    {...register("isActive", validationSchema.active)}
                  ></input>
                </div>
              </div>
              <div className="radio-itm">
                <div className="">
                  <label htmlFor="no">No</label>
                </div>
                <div className="">
                  <input
                    name="active"
                    id="no"
                    type="radio"
                    value={false}
                    {...register("isActive", validationSchema.active)}
                  ></input>
                </div>
              </div>
            </div>
            {errors?.isActive && (
              <p className="err-msg">{errors.isActive.message}</p>
            )}
          </div>
          <button type="submit">Update user</button>
        </form>
      </div>
    </div>
  );
};
export default UpdateUser;
