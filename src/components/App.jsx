import React from 'react'
import {FaArrowLeft, FaArrowRight} from "react-icons/fa"
import {FcAlarmClock} from "react-icons/fc"
import {FaRegQuestionCircle} from "react-icons/fa"
import {FaTrophy} from "react-icons/fa"
import {CiTimer} from "react-icons/ci"
import ExpireCard from './expireCard/ExpireCard'

const App = () => {
  return (
    <div className='max-w-[1360px] mx-auto w-full  '>
      <div className="header-container flex justify-between w-full flex-wrap items-center max-[768px]:flex-col gap-2  ">
            <div className="flex items-center relative">
                <div className="absolute left-[-20px]">
                    <img src="/main-logo.png" alt="" />
                </div>
                <div className="bg-white text-[#361d6a] p-[7px] pl-8 rounded-[25px] font-extrabold text-[20px]  flex items-center gap-2">BNBUSD <span className='text-[14px]'>$228.5332</span></div>
            </div>
            <div className="flex items-center relative translate-x-1/2 max-[768px]:translate-x-0 ">
                <div className="bg-white p-[9px] rounded-[20px] w-[65px] text-[#1fc7d3] text-[18px]">
                    <FaArrowLeft/>
                </div>
                <div className="absolute right-[40px] rounded-3xl overflow-hidden ">
                    <img src="/main-logo.png" alt="" />
                </div>
                <div className="bg-white p-[9px] rounded-[20px] w-[65px] text-[#1fc7d3] text-[18px] flex justify-end">
                    <FaArrowRight/>
                </div>
            </div>
            <div className="flex gap-2">
                <div className="flex items-center relative ">
                    <div className="bg-white w-[140px] p-[7px] rounded-3xl text-[20px] font-extrabold text-[#7240d8] ">
                        00:38 <span className='text-[14px] '>5m</span>
                    </div>
                    <div className="absolute right-[-15px]">
                        <FcAlarmClock size={60}/>
                    </div>
                </div>
                <div className="flex ml-5 gap-3">
                    <div className="w-[50px] h-[50px] text-white bg-[#7a6eaa] rounded-[16px] flex justify-center items-center  ">
                        <FaRegQuestionCircle size={23}/>
                    </div>
                    <div className="w-[50px] h-[50px] text-white bg-[#7a6eaa] rounded-[16px] flex justify-center items-center  ">
                        <FaTrophy size={17}/>
                    </div>
                    <div className="w-[50px] h-[50px] text-white bg-[#e9eaeb] rounded-[16px] flex justify-center items-center  ">
                        <CiTimer size={23}/>
                    </div>
                </div>
            </div>
      </div>
      <div className="flex pt-20 max-w-[1360px] mx-auto justify-center items-center">
        <ExpireCard />
      </div>
    </div>
  )
}

export default App
