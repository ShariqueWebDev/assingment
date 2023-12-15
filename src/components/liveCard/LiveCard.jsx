import React from 'react'
import { FaArrowCircleDown, FaRegPlayCircle } from 'react-icons/fa'

const LiveCard = () => {
  return (
    <div className='w-full'>
       <div className='main-container'>
      <div className="max-w-[360px] border rounded-3xl overflow-hidden  ">
        <div className="flex justify-between p-[10px] bg-[#fff] text-[#7645d9]">
          <div className="flex items-center gap-1 font-bold">
            <FaRegPlayCircle size={22}/>
            LIVE
          </div>
          <div className="">
            #218486
          </div>
        </div>
        <div className="w-[280px] h-[8px] bg-[#7645d9]"></div>
        <div className="p-[20px] bg-[#fff] ">
         <div className="bg-[#eff4f5] max-w-[250px] mx-auto  flex flex-col justify-center items-center py-2 rounded-t-3xl ">
          <div className="text-[#24cfa7] font-bold text-[22px]">UP</div>
          <div className="text-[#8275af] text-[14px] font-bold ">2.15x Payout</div>
         </div>
         <div className="bg-[#ffff] border-[#f696c6] border-[2px] rounded-2xl p-[20px]">
          <div className="text-[#8579b1] font-bold text-[12px]">LAST PRICE</div>
          <div className="flex justify-between py-[20px]">
            <div className="font-extrabold text-[24px] text-[#ed4b9e]">$228.5332</div>
            <div className="bg-[#ed4b9e] flex gap-[8px] items-center justify-center text-white px-[10px] h-[35px] rounded-md  "><FaArrowCircleDown/>$-0.5791</div>
          </div>
          <div className="flex justify-between text-[#2b1161] font-semibold text-[14px] pb-1 ">
            <div className="">Locked Price:</div>
            <div className="">$228.9473</div>
          </div>
          <div className="flex justify-between text-[#180052] text-[17px] font-extrabold ">
            <div className="">Prize Pool:</div>
            <div className="">8.5143 BNB</div>
          </div>
         </div>
         <div className="bg-[#ed4b9e] max-w-[250px] mx-auto flex flex-col justify-center items-center py-2 rounded-b-3xl">
          <div className="text-white text-[14px] font-semibold">1.87x Payout</div>
          <div className="text-white font-bold text-[22px]">DOWN</div>
         </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default LiveCard
