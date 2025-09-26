"use client";

import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Register submitted:", {
      fullName,
      emailOrPhone,
      password,
      confirmPassword,
    });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-green-50 to-white px-4">
      <div className="flex w-full max-w-5xl flex-col lg:flex-row rounded-2xl shadow-xl overflow-hidden border border-green-200">
        {/* Left Image */}
        <div className="hidden lg:flex w-1/2 items-center justify-center bg-green-500 p-6">
          <img
            src="/login/loginimage1.jpg"
            alt="Register Shopping"
            className="w-full max-w-sm h-auto object-contain rounded-xl"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 bg-white flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 text-center lg:text-left">
            Create Your <span className="text-green-600">Arimart</span> Account
          </h1>
          <p className="mt-2 text-gray-600 text-center lg:text-left">
            Join us and start shopping today
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
            />

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition">
              Register
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-green-600 font-medium hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
