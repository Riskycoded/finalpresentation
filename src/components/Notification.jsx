import React from "react";

export default function Notification() {
    return (
        <div className="w-[353] pt-[18px] pr-[12px] pb-[6px] pl-[12px] h-[616px] bg-[#EAEAEA]">
            <div>
                <div className="flex ">
                    <p className=" text-[20px] font-semibold">Notification</p>
                    <img src="/images/no.png" alt="" className="ml-120"/>
                </div>

                <div className="flex gap-4">
                    <img src="/images/notification-square.png" alt="" className="w-[20px] my-center h-[20px] mt-4" />

                    <div>
                        <p className="text-[16px] font-semibold">New Task</p>

                        <div className="flex justify-between gap-[58px] pt-[12px] pb-[12px]">
                            <p>"Content writing" was added to your task list</p>
                            <p className="ml-43">01.09.2025</p>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="flex gap-4">
                    <img src="/images/notification-square.png" alt=""  className="w-[20px] my-center h-[20px] mt-4"/>

                    <div>
                        <p className="text-[16px] font-semibold">Deadline missed</p>

                        <div className="flex justify-between gap-[100px] pt-[12px] pb-[12px]">
                            <p>Task “Carshow log” missed its deadline</p>
                            <p className="ml-43">01.09.2025</p>
                        </div>
                    </div>
                </div>
                <hr />

                <div>
                    <div >
                        <p className="text-[18px] font-semibold">New Task</p>
                        

                        <div className="flex mt-3  ">
                            <p>Task “Carshow log” missed its deadline</p>
                            <p className="ml-77">01.09.2025</p>
                        </div>
                    </div>
                </div>
                <hr />

                <div>
                    <div>
                        <p className="text-[18px] font-semibold">New Task</p>
                        

                        <div className="flex mt-3">
                            <p>“New Employees” was added your Tasklist</p>
                            <p className="ml-73">01.09.2025</p>
                        </div>
                    </div>
                </div>
                <hr />

                <div>
                    <button className="w-[347px] h-[41px bg-black text-white]">Read All</button>
                </div>

                
            </div>

        </div>
    )
}