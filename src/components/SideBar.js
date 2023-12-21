const SideBar = () => {
    return (
<div className="absolute top-[79px] left-[1162px] bg-darkslategray-100 w-[378px] h-[347px] overflow-hidden">
        <div className="absolute top-[9px] left-[56px] inline-block w-[244px] h-[57px]">
          Help
        </div>
        <div className="absolute top-[74px] left-[56px] inline-block w-[244px] h-[57px]">
          About
        </div>
        <div className="absolute top-[139px] left-[56px] inline-block w-[244px] h-[57px]">
          Terms of service
        </div>
        <div className="absolute top-[204px] left-[56px] inline-block w-[244px] h-[57px]">
          Q/A
        </div>
        <img
          className="absolute top-[269px] left-[0px] w-[356px] h-1 object-contain"
          alt=""
          src="/line-4@2x.png"
        />
        <div className="absolute top-[281px] left-[56px] inline-block w-[244px] h-[57px]">
          logout
        </div>
      </div>)
};
export default SideBar;