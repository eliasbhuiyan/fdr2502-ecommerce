import React, { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Registration = () => {
  const [passToggle, setPassToggle] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Registration</h2>
        <form className="space-y-2">
          <Input label="Full Name" placeholder="Inter your full name" />
          <Input
            label="Email"
            placeholder="Inter your email address"
            type="email"
          />
          <div className="relative">
            <Input
              label="Password"
              placeholder="Inter your password"
              type={passToggle ? "text" : "password"}
            />
            {passToggle ? (
              <IoEye
                onClick={() => setPassToggle(!passToggle)}
                className="absolute right-3 top-9 cursor-pointer text-xl"
              />
            ) : (
              <IoEyeOff
                onClick={() => setPassToggle(!passToggle)}
                className="absolute right-3 top-9 cursor-pointer text-xl"
              />
            )}
          </div>
          <p className="text-gray-900 mt-4">
            Already have an account ?
            <Link
              to="/login"
              className="text-sm text-blue-500 -200 hover:underline mt-4"
            >
              Login
            </Link>
          </p>

          <Button>Sign Up</Button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
