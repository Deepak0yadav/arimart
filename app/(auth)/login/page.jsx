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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-green-50 to-white px-4">
      <div className="flex w-full max-w-5xl flex-col lg:flex-row rounded-2xl shadow-xl overflow-hidden border border-green-200">
        {/* Left Image */}
        <div className="hidden lg:flex w-1/2 items-center justify-center bg-green-500 p-6">
          <img
            src="/login/loginimage1.jpg"
            alt="Shopping"
            className="w-full max-w-sm h-auto object-contain rounded-xl"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 bg-white flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 text-center lg:text-left">
            Welcome Back to <span className="text-green-600">Arimart</span>
          </h1>
          <p className="mt-2 text-gray-600 text-center lg:text-left">
            Login to continue shopping
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Email or Phone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
            />

            <div className="flex justify-end text-sm">
              <Link
                href="#"
                className="text-green-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition">
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600 text-sm">
            New to Arimart?{" "}
            <Link
              href="/register"
              className="text-green-600 font-medium hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
