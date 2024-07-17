"use client";

import config from "@/config";
import Image from "next/image";

const LoginPage = () => {
  const handleLogin = () => {
    window.open(`${config.server_url}/auth/google`, "_self");
  };

  return (
    <div className="flex h-screen">
      <div className="w-full bg-background flex flex-col items-center justify-center gap-8 h-full">
        <Image
          src="/images/logo_icon.svg"
          alt="logo"
          width={100}
          height={100}
        />
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Welcome to Viewstats</h1>
          <p className="text-2xl text-grey-darker mt-4">
            Create videos that get views.
          </p>
        </div>

        <button
          className="text-white bg-[#4262ff] hover:bg-[#334dcc] flex items-center gap-4 px-12 py-4 rounded-lg font-medium transition-all duration-200"
          onClick={handleLogin}
        >
          <Image src="/icons/google.svg" alt="google" width={20} height={20} />
          <span>Continue With Google</span>
        </button>
      </div>
      <div className="w-full bg-[#3e5bf3]"></div>
    </div>
  );
};

export default LoginPage;
