"use client";

import { useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import MobileBackButton from "@/components/MobileBackButton";

export default function AuthPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phoneNumber.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Phone number submitted:", phoneNumber);
      setIsLoading(false);
      // Here you would typically redirect to OTP verification or main app
    }, 1500);
  };

  const formatPhoneNumber = (value) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Limit to 10 digits
    if (digits.length > 10) return phoneNumber;
    
    return digits;
  };

  return (
    <div className="min-h-screen bg-gray-50 lg:bg-white lg:flex lg:flex-row">
      
      {/* Left Panel - Green with Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-green-500"></div>
        <div className="relative z-10 p-8 flex flex-col justify-center">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Arimart</h1>
          </div>
          
          {/* Illustration Card */}
          <div className="bg-white rounded-2xl p-6 mb-8 max-w-md">
            <div className="flex items-center justify-center h-48 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl mb-4 overflow-hidden">
              <img 
                src="/login/loginimage1.jpg" 
                alt="Delivery Illustration" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Feature Text */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">
              Convenient & Fast Delivery
            </h2>
            <p className="text-green-100 text-lg">
              Order on Arimart & get it delivered by 4 hours
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel - Auth Form */}
      <div className="min-h-screen lg:min-h-0 lg:flex-1 flex items-center justify-center p-6 lg:p-8 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Mobile Logo - Only show on mobile */}
          <div className="lg:hidden text-center mb-8 pt-8">
            <h1 className="text-4xl font-bold text-green-600 mb-2">Arimart</h1>
            <p className="text-gray-500 text-sm">Always Fresh, Never Stored</p>
          </div>

          {/* Welcome Section - Desktop Only */}
          <div className="hidden lg:block text-left mb-8">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Welcome to</h2>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-green-600">Arimart</span>
                <div className="text-xs text-gray-500">
                  <div>Always Fresh, Never Stored</div>
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              Enter your phone number to get started
            </p>
          </div>

          {/* Mobile Welcome Section */}
          <div className="lg:hidden text-center mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Welcome to Arimart</h2>
            <p className="text-gray-600">Enter your phone number to get started</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-gray-500 text-sm font-medium">+91</span>
                </div>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(formatPhoneNumber(e.target.value))}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-base"
                  placeholder="Enter phone number"
                  maxLength={10}
                  required
                />
              </div>
              {phoneNumber && phoneNumber.length < 10 && (
                <p className="text-sm text-gray-500 mt-1">
                  Enter a 10-digit mobile number
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={phoneNumber.length !== 10 || isLoading}
              className="w-full bg-gray-400 disabled:bg-gray-300 hover:bg-green-600 disabled:hover:bg-gray-300 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Footer Text */}
          <div className="text-center mt-6">
            <p className="text-xs text-gray-500">
              By continuing, you agree to our{" "}
              <a href="#" className="text-green-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-green-600 hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}