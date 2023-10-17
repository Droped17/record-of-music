import axios from "axios";
import { useState } from "react";
import registerSchema from "../validate/register-validate";


const registerValidate = (inputdata) => {
  const { value, error } = registerSchema.validate(inputdata, {
    abortEarly: false,
  });
  console.log(value);
  if (error) {
    // console.log(error.details); // {message:}
    // console.log(error.message); //error messsaage
    // console.log(error.isJoi); //boolean
    const result = error.details.reduce((acc, data) => {
      const { message, path } = data;
      acc[path[0]] = message;
      console.log(message); //error message
      return acc;
    }, {});
    return result;
  }
};

export default function RegisterPage() {
  const [inputdata, setInputData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
  });

  const [checkError, setCheckError] = useState({});

  const handleOnChange = (e) => {
    setInputData({ ...inputdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateError = registerValidate(inputdata);
      console.log(validateError);
      if (validateError) {
        return setCheckError(validateError);
      }
      setCheckError({});
      const res = await axios.post("http://localhost:1112/authen/register", {
        firstName: inputdata.firstName,
        lastName: inputdata.lastName,
        email: inputdata.email,
        password: inputdata.password,
        confirmPassword: inputdata.confirmPassword,
        mobile: inputdata.mobile,
        profileImage: "",
        isAdmin: "",
        addressId: "",
      });

      

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen items-center">
      <div className="flex-1">
        <div className="text-xl font-bold flex justify-center">
          Create Account
        </div>
        <form
          className="flex flex-col w-5/12 mx-auto gap-8"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className={`border p-3 ${
              checkError.firstName ? "border-red-500 " : ""
            }`}
            placeholder="firstName"
            name="firstName"
            onChange={handleOnChange}
            value={inputdata.firstName}
          />
          {checkError.firstName ? (
            <span className="text-red-500">{checkError.firstName}</span>
          ) : undefined}
          <input
            type="text"
            className={`border p-3 ${
              checkError.lastName ? "border-red-500 " : ""
            }`}
            placeholder="lastname"
            name="lastName"
            onChange={handleOnChange}
            value={inputdata.lastName}
          />
          {checkError.lastName ? (
            <span className="text-red-500">{checkError.lastName}</span>
          ) : undefined}
          <input
            type="email"
            className={`border p-3 ${
              checkError.email ? "border-red-500 " : ""
            }`}
            placeholder="email"
            name="email"
            onChange={handleOnChange}
            value={inputdata.email}
          />
          {checkError.email ? (
            <span className="text-red-500">{checkError.email}</span>
          ) : undefined}
          <input
            type="password"
            className={`border p-3 ${
              checkError.password ? "border-red-500 " : ""
            }`}
            placeholder="password"
            name="password"
            onChange={handleOnChange}
            value={inputdata.password}
          />
          {checkError.password ? (
            <span className="text-red-500">{checkError.password}</span>
          ) : undefined}
          <input
            type="password"
            className={`border p-3 ${
              checkError.confirmPassword ? "border-red-500 " : ""
            }`}
            placeholder="confirm password"
            name="confirmPassword"
            onChange={handleOnChange}
            value={inputdata.confirmPassword}
          />
          {checkError.confirmPassword ? (
            <span className="text-red-500">{checkError.confirmPassword}</span>
          ) : undefined}
          <input
            type="text"
            className={`border p-3 ${
              checkError.mobile ? "border-red-500 " : ""
            }`}
            placeholder="mobile"
            name="mobile"
            onChange={handleOnChange}
            value={inputdata.mobile}
          />
          {checkError.mobile ? (
            <span className="text-red-500">{checkError.mobile}</span>
          ) : undefined}
          <button className="bg-black text-white px-4 py-3">Register</button>
        </form>
      </div>
    </div>
  );
}
