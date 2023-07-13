import React from "react";
import Card from "./Card";

const Container = () => {
  return (
    <div>
      {/* <div className="w-full  p-4 flex overflow-x-auto whitespace-nowrap space-x-8 shadow-2xl px-4 scrollbar-thumb-[#030303] scrollbar-thin border-2 border-green-400">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}
      <div className="">
        <h1 className="my-5 text-[45px] font-bold">What’s your mood? </h1>
        <div className= "overflow-x-auto whitespace-nowrap space-x-8 shadow-2xl px-4 scrollbar-thumb-[#030303] scrollbar-thin h-full">
          <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
         
        </div>
      </div>
    </div>
  );
};

export default Container;
