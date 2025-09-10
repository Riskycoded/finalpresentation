import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("User signed in:", user);
      
      // Redirect to dashboard after successful login
      navigate("/dashboard");
    } catch (error) {
      console.error("Sign-in error:", error);
      alert("Sign-in failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUpRedirect = () => {
    navigate("/signout"); // Navigate to your signup page
  };

  return (
    <div className="min-h-screen flex bg-[#EAEAEA]"> {/* Full screen container */}
      <div className="w-1/2">
        <div className="flex flex-col items-start">
          <img src="/images/logo.png" alt="" className="w-[150px] pl-[40px] ml-7 h-[100px]" />
          <h1 className="font-[jaina] text-[25px] leading-[100%] pl-[72px] text-left">CheckMate</h1>
        </div>
        
        <div className="pt-[50px] flex flex-col items-center">
          <h1 className="mt-[70px] text-[#808080] w-full h-[36px] opacity-100 font-semibold text-[28px] leading-[130%] tracking-[-0.02em] text-center">
            Login to your CheckMate Account
          </h1>
          
          <button 
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className={`flex rounded-full mx-auto cursor-pointer items-center justify-center gap-[10px] text-[20px] text-white w-[466px] h-[63px] opacity-100 border border-gray-300 pt-[13px] pr-[36px] pb-[13px] pl-[36px] shadow-[0px_4px_4px_0px_#00000040] mt-4 ${
              isLoading ? 'bg-gray-600 cursor-not-allowed' : 'bg-black hover:bg-gray-800'
            } transition-colors`}
          >
            <img src="/images/google.png" alt="" className="w-5 h-5" />
            {isLoading ? 'Signing in...' : 'Continue with Google'}
          </button>
          
          <h1 
            onClick={handleSignUpRedirect}
            className="w-full h-[26px] opacity-100 font-semibold text-[20px] leading-[130%] pl-[120px] gap-[11px] text-start text-[#808080] cursor-pointer mt-4 hover:text-gray-600 transition-colors"
          >
            Get an Account: Sign Up Now
          </h1>
        </div>
        
        <div className="mt-[100px] gap-[11px] flex flex-col items-center">
          <form className="flex flex-col items-center">
            <label 
              htmlFor="Email" 
              className="w-[466px] h-[36px] opacity-100 text-start text-[28px] leading-[130%] tracking-[-0.02em] text-[#808080] mb-2"
            >
              Email
            </label>
            <input 
              type="email" 
              className="w-[466px] h-[63px] text-center font-semibold text-[20px] bg-white rounded-full border shadow-[0px_4px_4px_0px_#00000040] px-5" 
              placeholder="Enter your email address" 
            />
          </form>
          
          <button className="w-[466px] h-[63px] text-center font-semibold text-[20px] text-white border shadow-[0px_4px_4px_0px_#00000040] bg-black rounded-full shadow-md mt-4">
            Continue
          </button>
          
          <p className="text-center w-[466px] h-[24px] text-[16px] text-[#808080] mt-2">
            Use an organization email to easily collaborate with teammates
          </p>
          <p className="text-center w-[450px] mt-40 text-[14px] text-[#808080] font-semibold">
            By clicking on continue you have accept the terms and condition of CheckMate
          </p>
        </div>
      </div>
      
      <div className="w-1/2">
        <img src="/images/side.jpg" alt="" className="w-[732px] h-[1024px]" />
      </div>
    </div>
  );
}