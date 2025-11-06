import React, { use, useState } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Register = () => {
  const { createUserWithEmailPass, signInWithGoogle } = use(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegisterWithEmailPass = (e) => {
    e.preventDefault();
    setError("");

    // ✅ Validation
    if (!name || !email || !photo || !password) {
      setError("All fields are required!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address!");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }

    createUserWithEmailPass(email, password)
      .then((user) => {
        // setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      })


    // console.log("✅ Registering user:", { name, email, photo, password });
  };
  const handleSignUpWithGoogle = e => {
    e.preventDefault();
    signInWithGoogle()
      .then(result => {
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL
        }
        fetch('http://localhost:5000/create/user', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
          .then(r => {
            console.log(r);
          }).catch(err => {
            console.log(err);
          })
      }).catch(error => {
        console.log(error);
      })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="card w-full max-w-sm bg-white shadow-md border border-gray-200 p-8">
        <h2 className="text-2xl font-semibold text-center mb-2">Register Now!</h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Already have an account?{" "}
          <NavLink to="/login" className="text-purple-600 hover:underline">
            Login Now
          </NavLink>
        </p>

        <form className="space-y-4">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Mariam Swarna"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="smswokothasan@gmail.com"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image-URL
            </label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Enter your image link"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="input input-bordered w-full"
            />
          </div>

          <button
            onClick={handleRegisterWithEmailPass}
            type="button"
            className="btn w-full mt-3 bg-linear-to-r from-purple-500 to-indigo-500 border-none text-white"
          >
            Register
          </button>
          {/* ✅ Error Message */}
          {error && (
            <p className="text-red-600 text-sm text-center">{error}</p>
          )}
          <div className="divider text-sm text-gray-500">OR</div>

          {/* ✅ Google Sign Up */}
          <button
            onClick={handleSignUpWithGoogle}
            type="button"
            className="btn w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 flex items-center justify-center gap-2"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign Up With Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
