import { useForm } from "react-hook-form";
import "../styles/adduser.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  var users = [
    {
      id: 1,
      name: "raj",
      email: "raj@gmail.com",
      password: "123",
    },
  ];

  const submitHandler = (data) => {
    var user = users.find(
      (u) => u.email === data.email && u.password === data.password
    );

    if (user != undefined) {
      localStorage.setItem("id", user.id);
      navigate(location.pathname);
    } else {
      alert("Login Failed");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validationSchema = {
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
  };

  return (
    <div className="form-container-super">
      <div className="form-box">
        <form onSubmit={handleSubmit(submitHandler)} className="form">
          <span className="title">Login</span>

          <div className="form-container">
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
            <div className="">
              <input
                type="password"
                className="input"
                placeholder="password"
                {...register("password")}
              ></input>
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
