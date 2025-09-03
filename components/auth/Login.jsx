"use client";

import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Login submitted:", { emailOrPhone, password });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="flex w-full max-w-6xl flex-col lg:flex-row rounded-xl shadow-md overflow-hidden">
        {/* Image Section */}
        <div className="flex w-full lg:w-1/2 items-center justify-center bg-green-500 p-4 sm:p-6">
          <img
            src="/login/loginimage1.jpg"
            alt="Shopping"
            className="w-full max-w-sm sm:max-w-md h-auto object-contain rounded-md"
          />
        </div>

        {/* Right Form */}
        <div className="flex w-full lg:w-1/2 items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md space-y-6">
            <h1 className="text-2xl font-bold text-gray-900 text-center lg:text-left">
              Welcome Back to <span className="text-green-600">Arimart</span>
            </h1>
            <p className="text-gray-600 text-center lg:text-left">
              Login to continue shopping
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-4">
              <input
                type="text"
                placeholder="Email or Phone"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />

              <div className="flex justify-between text-sm">
                <a
                  href="#"
                  className="text-yellow-600 hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg">
                Login
              </button>
            </form>

            <div className="text-center text-sm text-gray-600">
              New to Arimart?{" "}
              <Link
                href="/register"
                className="text-yellow-600 font-medium hover:underline">
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
