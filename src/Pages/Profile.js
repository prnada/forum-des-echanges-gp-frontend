const Frame = () => {
  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-13xl text-white font-itim">
      <div className="absolute top-[0px] left-[0px] w-[1536px] h-[1024px]">
        <div className="absolute top-[0px] left-[0px] rounded-[5px] box-border w-[1536px] h-[1024px] border-[2px] border-dashed border-blueviolet">
          <div className="absolute top-[0px] left-[-4px] bg-white w-[1540px] h-[1024px] overflow-hidden">
            <section className="absolute top-[0px] left-[-18px] bg-black w-[1558px] h-[86px]" />
            <div className="absolute top-[23px] left-[39px] font-inter">
              Forum name
            </div>
            <div className="absolute top-[938px] left-[0px] h-[86px] flex flex-col items-start justify-start gap-[10px]">
              <div className="relative bg-darkslategray-200 w-[1540px] h-[86px] z-[0]" />
              <div className="absolute my-0 mx-[!important] top-[24px] left-[461px] w-[566px] h-[38px] z-[1]">
                <div className="absolute top-[0px] left-[0px]">
                  All Rights Reserved. © 2024 Forum Name
                </div>
              </div>
            </div>
            <div className="absolute top-[12px] left-[989px] w-[473px] h-[63px]">
              <img
                className="absolute top-[0px] left-[213px] w-12 h-[61.6px] shrink-0 object-cover"
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
            <div className="absolute top-[86px] left-[1162px] bg-darkslategray-100 w-[378px] h-[347px] overflow-hidden">
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
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[147px] left-[111px] w-[824px] h-[399px] text-21xl text-black">
        <div className="absolute top-[34px] left-[303px] text-[54px] inline-block w-[398px] h-[101px]">
          Full name
        </div>
        <div className="absolute top-[97px] left-[303px] text-gray">
          email address
        </div>
        <div className="absolute top-[187px] left-[308px]">
          number of posts :
        </div>
        <div className="absolute top-[192px] left-[624px] inline-block w-[137px] h-[19px]">
          50
        </div>
        <div className="absolute top-[253px] left-[298px] bg-palegreen flex flex-row items-center justify-center p-2.5">
          <div className="relative">Edit profile</div>
        </div>
        <div className="absolute top-[331px] left-[298px] bg-red flex flex-row items-center justify-center p-2.5">
          <div className="relative">Delete account</div>
        </div>
        <div className="absolute top-[343px] left-[587px]">are you sure ?</div>
        <img
          className="absolute top-[0px] left-[0px] rounded-[50%] w-[260px] h-[270px] object-cover"
          alt=""
          src="/ellipse-36@2x.png"
        />
      </div>
    </div>
  );
};

export default Frame;
