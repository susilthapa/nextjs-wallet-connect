"use client";

import React from "react";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";

const Connect = () => {
  const { address } = useAccount();
  const { open } = useWeb3Modal();
  return (
    <div className=" text-white flex flex-col gap-2 justify-center items-center w-full h-[100vh]">
      <div>{address}</div>
      <button onClick={() => open()} className="bg-green-500 p-2 rounded-lg">
        CONNECT
      </button>
    </div>
  );
};

export default Connect;
