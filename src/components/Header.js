const Header = () => {
  return (
    <div className="absolute top-[0px] left-[0px] bg-black w-[1540px] overflow-hidden flex flex-row items-center justify-start py-[11px] px-[39px] box-border gap-[780px] font-inter">
      <div className="relative">Forum name</div>
      <div className="relative w-[473px] h-[63px] shrink-0 font-itim">
        <img
          className="absolute top-[0px] left-[0px] w-12 h-[61.6px] shrink-0 object-cover"
          alt=""
          src="/frame-6@2x.png"
        />
        <div className="absolute top-[8px] left-[61px] inline-block w-[102px] h-[38px]">
        <a href="/singup">Sign Up</a>
        </div>
        <div className="absolute top-[0px] left-[176px] bg-salmon shrink-0 flex flex-row items-center justify-center py-2.5 px-[18px] text-black">
        <div className="relative">
          <a href="/login">Login</a>
        </div>
        </div>
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
  )
};
export default Header;

