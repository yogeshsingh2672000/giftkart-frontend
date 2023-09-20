import React, { useState } from "react";
import Banner from "../assets/banner.png";
import Logo from "../assets/logo.png";
import Notification from "../assets/notification.png";
import Setting from "../assets/setting.png";
import Modal from "../helper/Modal";

function CreateNewProject() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState("");

  const handleName = (e) => {
    const { value } = e.currentTarget;
    setProjectName(value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-start pt-[30px] px-[30px]">
        <img
          className="w-[52px] h-[52px]"
          src={Logo}
          alt="logo"
          loading="lazy"
        />
        <div className="text-4xl font-[800] text-[#7E22CE]">LAMA.</div>
      </div>
      <div className="flex items-center justify-end px-[64px] gap-[19px]">
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
        <button
          onClick={openModal}
          className="bg-[#211935] mt-[12px] px-[66px] rounded-[12px] text-[54px] text-white font-[400]"
        >
          Create New Project
        </button>
      </div>

      {/* modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="font-[700]">Create Project</div>
        <div className="flex flex-col pt-[20px]">
          <label htmlFor="input">Enter Project Name:</label>
          <input
            onChange={handleName}
            value={projectName}
            className="border rounded-[5px] py-[5px] px-[10px]"
            type="text"
            placeholder="Type here"
          />
          {projectName.length < 3 && (
            <label htmlFor="warning" className="text-red-800">
              Project Name Can't be empty
            </label>
          )}
        </div>
        <div className="p-6 flex justify-end">
          <button
            onClick={closeModal}
            className="text-red-800 text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
          >
            Cancel
          </button>
          <button
            onClick={closeModal}
            className="text-white bg-purple-700 rounded-lg text-md font-medium px-5 py-2.5 "
          >
            Create
          </button>
        </div>
      </Modal>
    </>
  );
}

export default CreateNewProject;
