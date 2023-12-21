import Page from "../components/Page";

const Frame = () => {
  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden">
      <div className="absolute top-[0px] left-[0px] w-[1536px] h-[1213px]">
        <div className="absolute top-[0px] left-[0px] rounded-[5px] box-border w-[1536px] h-[1213px] border-[2px] border-dashed border-blueviolet">
          <Page />
        </div>
      </div>
    </div>
  );
};

export default Frame;
