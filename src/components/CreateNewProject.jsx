import React from "react";
import Banner from "../assets/banner.png";
import Logo from "../assets/logo.png";
import Notification from "../assets/notification.png";
import Setting from "../assets/setting.png";

function CreateNewProject() {
  return (
    <>
      <div className="flex items-center justify-start pt-[30px]">
        <img
          className="w-[52px] h-[52px]"
          src={Logo}
          alt="logo"
          loading="lazy"
        />
        <div className="text-4xl font-[800] text-[#7E22CE]">LAMA.</div>
      </div>
      <div className="flex items-center justify-end">
        <img className="w-[54px] h-[54px]" src={Setting} alt="setting" />
        <img
          className="w-[64px] h-[64px]"
          src={Notification}
          alt="notification"
        />
      </div>
      <div className="flex flex-col items-center justify-center h-[calc(100%-150px)] px-[212px]">
        <div className="text-7xl text-[#7E22CE] font-[700]">
          Create New Project
        </div>
        <img
          className="w-[540px] h-[360px] pt-[25px] pb-[33px]"
          src={Banner}
          alt="banner"
          loading="lazy"
        />
        <div className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          consequuntur officiis repudiandae, autem aut libero voluptate cum ut
          nam itaque. Reiciendis ullam assumenda fugit hic accusamus blanditiis,
          eligendi voluptatibus iste. Cumque in eligendi distinctio veniam, unde
          eaque voluptatem sed dolores. Laborum minus explicabo exercitationem
          assumenda praesentium similique mollitia quae incidunt, voluptatum
          sint. Hic eaque quidem corrupti!
        </div>
        <button className="bg-[#211935] mt-[12px] px-[66px] rounded-[12px] text-[54px] text-white font-[400]">
          Create New Project
        </button>
      </div>
    </>
  );
}

export default CreateNewProject;
