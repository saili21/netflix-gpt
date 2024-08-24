import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSingIn, setIsSingIn] = useState(true);
  const toggleSingInForm = () => {
    setIsSingIn(!isSingIn);
  };
  return (
    <div>
      <Header />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"
        alt="bg-img"
      />
      <form className="absolute my-36 mx-auto right-0 left-0 p-12 bg-black w-3/12 text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-4 mx-4">
          {isSingIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSingIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 m-4 w-full bg-gray-600"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 m-4 w-full bg-gray-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 m-4 w-full bg-gray-600"
        />
        <button className="py-4 mx-4 my-6 bg-red-700 w-full rounded-lg">
          {isSingIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 mx-5 cursor-pointer" onClick={toggleSingInForm}>
          {isSingIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered, Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
