import React from 'react'
import {AiOutlineStop} from "react-icons/ai"
import { FaArrowCircleDown } from 'react-icons/fa'

const ExpireCard = () => {
  return (
    <div className='w-full'>
      <div className="max-w-[360px] border rounded-3xl overflow-hidden shadow-md ">
        <div className="flex justify-between p-[10px] bg-[#dadae9] text-[#bfc5d1]">
          <div className="flex items-center gap-1">
            <AiOutlineStop size={22}/>
            Expired
          </div>
          <div className="">
            #218485
          </div>
        </div>
        <div className="p-[20px] bg-[#eaedf7] ">
         <div className="bg-[#dee4f0] max-w-[250px] mx-auto  flex flex-col justify-center items-center py-2 rounded-t-3xl ">
          <div className="text-[#66ccbc] font-bold text-[22px]">UP</div>
          <div className="text-[#948ec1] text-[14px] font-semibold ">1.76x Payout</div>
         </div>
         <div className="bg-[#e8ebf6] border-[#de6fb3] border-[2px] rounded-2xl p-[20px]">
          <div className="text-[#948ec1] font-bold text-[12px]">CLOSED PRICE</div>
          <div className="flex justify-between py-[20px]">
            <div className="font-extrabold text-[24px] text-[#db6bb1]">$228.9473</div>
            <div className="bg-[#db6bb1] flex gap-[8px] items-center justify-center text-white px-[10px] h-[35px] rounded-md  "><FaArrowCircleDown/>$-0.5791</div>
          </div>
          <div className="flex justify-between text-[#4b3980] font-semibold text-[14px] pb-1 ">
            <div className="">Locked Price:</div>
            <div className="">$229.5264</div>
          </div>
          <div className="flex justify-between text-[#4b3980] text-[17px] font-extrabold ">
            <div className="">Prize Pool:</div>
            <div className="">5.2427 BNB</div>
          </div>
         </div>
         <div className="bg-[#db6bb1] max-w-[250px] mx-auto flex flex-col justify-center items-center py-2 rounded-b-3xl">
          <div className="text-white text-[14px] font-semibold">2.32x Payout</div>
          <div className="text-white font-bold text-[22px]">DOWN</div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default ExpireCard
