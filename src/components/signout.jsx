import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import logoImage from '../assets/logo.png'
import sideImage from '../assets/side.jpg'
import googleImage from '../assets/google.png'

export default function Signout() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("User signed up:", user);
      
      // Redirect to dashboard after successful signup
      navigate("/dashboard");
    } catch (error) {
      console.error("Sign-up error:", error);
      // You can show an error message to the user here
      alert("Sign-up failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-[#EAEAEA]"> {/* Full screen container */}
      <div className="w-1/2">
        <div className="flex flex-col items-start">
          <img src={logoImage} alt="" className="w-[150px] ml-7 pl-[40px] h-[100px]" />
          <h1 className="font-[jaina] text-[25px] leading-[100%] pl-[72px] text-left">CheckMate</h1>
        </div>
        
        <div className="pt-[50px] flex flex-col items-center">
          <h1 className="mt-[70px] text-[#808080] w-full h-[36px] opacity-100 font-semibold text-[28px] leading-[130%] tracking-[-0.02em] text-start ml-[220px]">
            Create your CheckMate Account
          </h1>
          
          <button 
            onClick={handleGoogleSignUp}
            disabled={isLoading}
            className={`flex rounded-full mx-auto cursor-pointer items-center justify-center gap-[10px] text-[20px] text-white w-[466px] h-[63px] opacity-100 border border-gray-300 pt-[13px] pr-[36px] pb-[13px] pl-[36px] shadow-[0px_4px_4px_0px_#00000040] mt-4 ${
              isLoading ? 'bg-gray-600 cursor-not-allowed' : 'bg-black hover:bg-gray-800'
            } transition-colors`}
          >
            <img src={googleImage} alt="" className="w-5 h-5" />
            {isLoading ? 'Creating Account...' : 'Continue with Google'}
          </button>
          
          <h1 
            onClick={handleLoginRedirect}
            className="w-full h-[26px] opacity-100 font-semibold text-[20px] leading-[130%] pl-[120px] gap-[11px] text-start text-[#808080] cursor-pointer mt-4 hover:text-gray-600 transition-colors"
          >
            Already have an Account: Login
          </h1>
        </div>
        
        {/* Remove the email form section since we're using Google-only auth */}
        <div className="mt-[100px] flex flex-col items-center">
          <p className="text-center w-[466px] h-[24px] text-[16px] text-[#808080] mt-2">
            Sign up with your Google account to easily collaborate with teammates
          </p>
          <p className="text-center w-[450px] mt-100 text-[14px] text-[#808080] font-semibold">
            By clicking on continue you accept the terms and conditions of CheckMate
          </p>
        </div>
      </div>
      
      <div className="w-1/2">
        <img src={sideImage}alt="" className="w-[732px] h-[1024px]" />
      </div>
    </div>
  );
}