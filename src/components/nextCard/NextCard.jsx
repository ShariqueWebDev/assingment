import React from 'react'
import { FaRegPlayCircle } from 'react-icons/fa'

const NextCard = () => {
  return (
    <div className='w-full'>
    <div className='main-container'>
   <div className="w-[360px] border rounded-3xl overflow-hidden shadow-md ">
     <div className="flex justify-between p-[10px] bg-[#7645d9] text-[#fff]">
       <div className="flex items-center gap-1 font-bold">
         <FaRegPlayCircle size={22}/>
         Next
       </div>
       <div className="">
         #218487
       </div>
     </div>
     <div className="p-[20px] bg-[#fff] ">
      <div className="bg-[#eff4f5] max-w-[250px] mx-auto  flex flex-col justify-center items-center py-2 rounded-t-3xl ">
       <div className="text-[#24cfa7] font-bold text-[22px]">UP</div>
       <div className="text-[#8275af] text-[14px] font-bold ">1.35x Payout</div>
      </div>
      <div className="bg-[#ffff] border-[#f696c6] border-[2px] rounded-2xl p-[20px]">
      <div className="flex justify-between text-[#180052] text-[18px] font-extrabold mb-2 ">
         <div className="">Prize Pool:</div>
         <div className="">8.5143 BNB</div>
       </div>
       <div className="bg-[#32d0aa] h-[50px] rounded-2xl text-[#ffff] font-bold flex justify-center items-center mb-1">Enter UP</div>
       <div className="bg-[#ed4b9e] h-[50px] rounded-2xl text-[#ffff] font-bold flex justify-center items-center">Enter DOWN</div>
      
      </div>
      <div className="bg-[#eff4f5] max-w-[250px] mx-auto flex flex-col justify-center items-center py-2 rounded-b-3xl">
       <div className="text-[#8275af] text-[14px] font-semibold">3.84x Payout</div>
       <div className="text-[#ed4b9e] font-bold text-[22px]">DOWN</div>
      </div>
     </div>
   </div>
 </div>
 </div>
  )
}

export default NextCard
