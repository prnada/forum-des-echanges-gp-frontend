import Category from "../components/Category";

const Frame = () => {
  return (
    <div className="relative bg-gray w-full h-[1600px] overflow-hidden text-left text-13xl text-black font-inter">
      <div className="absolute top-[144px] left-[53px] rounded-11xl bg-brown w-[1430px] h-[123px]" />
      <div className="absolute top-[144px] left-[576px] text-[64px] font-extrabold inline-block w-[353px] h-[76px]">
        Categories
      </div>
      <div className="absolute top-[1px] left-[0px] bg-black w-[1540px] overflow-hidden flex flex-row items-center justify-start py-[11px] px-[39px] box-border gap-[780px] text-white">
        <div className="relative">Forum name</div>
        <div className="relative w-[473px] h-[63px] shrink-0">
          <img
            className="absolute top-[1px] left-[219px] w-12 h-[61.6px] shrink-0 object-cover"
            alt=""
            src="/frame-6@2x.png"
          />
          <img
            className="absolute top-[0px] left-[300px] w-[101.14px] h-[63px] shrink-0 object-cover"
            alt=""
            src="/frame-5@2x.png"
          />
          <div className="absolute top-[16px] left-[401px] shrink-0 flex flex-col items-start justify-start gap-[15px]">
            <img
              className="relative max-h-full w-[49px] object-cover z-[0]"
              alt=""
              src="/line-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="relative relative mt-80">
        <Category />
        <Category />
        <Category />
      </div>

      <div className="absolute top-[1514px] left-[8px] h-[86px] flex flex-col items-start justify-start gap-[10px] text-white font-itim">
        <div className="relative bg-black w-[1540px] h-[86px] z-[0]" />
        <div className="absolute my-0 mx-[!important] top-[24px] left-[461px] w-[566px] h-[38px] z-[1]">
          <div className="absolute top-[0px] left-[0px]">
            All Rights Reserved. © 2024 Forum Name
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
