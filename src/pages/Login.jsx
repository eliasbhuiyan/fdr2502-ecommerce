import React, { useEffect } from "react";
import Input from "../components/ui/Input";
import { Link } from "react-router";
import Button from "../components/ui/Button";

const Login = () => {


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
        <form className="space-y-2">
          <Input
            label="Email"
            placeholder="Inter your email address"
            type="email"
          />
          <Input
            label="Password"
            placeholder="Inter your password"
            type="password"
          />
          <p className="text-gray-900 mt-4">
            Don't have an account? ?
            <Link
              to="/registration"
              className="text-sm text-blue-500 -200 hover:underline mt-4"
            >
              Sign Up
            </Link>
          </p>

          <Button>Sign In</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
