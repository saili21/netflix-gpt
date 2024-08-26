import { useRef, useState } from "react";
import { checkValidData } from "../utlis/validate";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utlis/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utlis/userSlice";
import { USER_AVATAR } from "../utlis/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSingIn, setIsSingIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSingInForm = () => {
    setIsSingIn(!isSingIn);
  };
  const handleButtonClick = () => {
    const message = checkValidData(
      email?.current?.value,
      password?.current?.value,
      name?.current?.value,
      isSingIn
    );
    setErrorMessage(message);
    if (message) return;
    // create a new user, SignIn or SignUp
    if (!isSingIn) {
      // Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"
        alt="bg-img"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute my-36 mx-auto right-0 left-0 p-12 bg-black w-3/12 text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4 mx-4">
          {isSingIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSingIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 m-4 w-full bg-gray-600"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 m-4 w-full bg-gray-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 m-4 w-full bg-gray-600"
        />
        {errorMessage && (
          <p className="text-red-500 mx-4 font-bold text-lg py-2">
            {errorMessage}
          </p>
        )}
        <button
          className="py-4 mx-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
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
