import React from "react";
const SwapyItems = () => {
  return (
    <div className="flex gap-8">
      <div
        className="w-auto h-auto"
        data-swapy-slot="doo"
      >
        <div
          className="flex flex-col rounded-2xl w-80 bg-[#ffffff] shadow-xl"
          data-swapy-item="d"
        >
          <figure className="flex justify-center items-center rounded-2xl"></figure>
          <div className="flex flex-col p-8">
            <div className="text-3xl font-bold uppercase text-center text-[#374151] pb-6">
              swappable 1
            </div>
            <div className=" text-base  text-center text-[#374151]">
              try swapping with other cards
            </div>
            <div className="flex justify-end pt-6">
              <button className="bg-[#7e22ce] text-[#ffffff]  font-bold text-sm  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">
                tryyy
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-auto h-auto"
        data-swapy-slot="eoo"
      >
        <div
          className="flex flex-col rounded-2xl w-80 bg-[#ffffff] shadow-xl"
          data-swapy-item="e"
        >
          <div className="flex flex-col p-8">
            <div className="text-3xl font-bold uppercase text-center text-[#374151] pb-6">
              swappable 2
            </div>
            <div className=" text-base  text-center text-[#374151]">
              try swapping with other cards
            </div>
            <div className="flex justify-end pt-6">
              <button className="bg-[#7e22ce] text-[#ffffff]  font-bold text-sm  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">
                tryyy
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-auto h-auto"
        data-swapy-slot="aoo"
      >
        <div
          className="flex flex-col rounded-2xl w-80 bg-[#ffffff] shadow-xl"
          data-swapy-item="ae"
        >
          <div className="flex flex-col p-8">
            <div className="text-3xl font-bold uppercase text-center text-[#374151] pb-6">
              swappable 3
            </div>
            <div className=" text-base  text-center text-[#374151]">
              try swapping with other cards
            </div>
            <div className="flex justify-end pt-6">
              <button className="bg-[#7e22ce] text-[#ffffff]  font-bold text-sm  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">
                tryyy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapyItems;
