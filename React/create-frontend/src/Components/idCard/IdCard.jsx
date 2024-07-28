import React from "react";
import logo from '../idCard/mega.png'

const idCard = ({ name, level, faculty, valid, profile }) => {
  return (
    <div className="border-2 w-[310px] flex flex-col items-center justify-center border-blue-500">
      <img src={logo} className="w-[] h-[150px] pt-0" alt="" />
      <h1 className="text-red-500 font-bold text-2xl">STUDENT ID-CARD</h1>
      <img src={profile} alt="" className="w-[150px] h-[150px]" />

      <div className="flex-col items-center justify-center text-blue-500">
        <p>Name &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;: {name}</p>
        <p>Level &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : {level}</p>
        <p>Faculty &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; : {faculty}</p>
        <p>Valid Date&nbsp;&nbsp;&nbsp;: {valid}</p>
      </div>

      <div className="border-t-2 border-red-500 flex flex-col items-center justify-center w-full text-red-500">
        <p>Babarmahal,Kathmandu, Tel:01-5705488</p>
        <p>www.nepalmegacollege.edu.np</p>
      </div>
    </div>
  );
};

export default idCard;
