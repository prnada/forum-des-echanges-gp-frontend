import Post from "../components/Post"
const Posts = () => {
  return (
    <div className="relative w-full h-[1600px] text-left text-13xl text-white font-inter">
      <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[1536px] h-[1600px] overflow-hidden" />
      <div className="absolute top-[0px] left-[0px] w-[1540px] h-[1421px]">
        <div className="absolute top-[0px] left-[0px] bg-black w-[1540px] overflow-hidden flex flex-row items-center justify-start py-[11px] px-[39px] box-border gap-[780px]">
          <div className="relative">Forum name</div>
          <div className="relative w-[473px] h-[63px] shrink-0">
            <img
              className="absolute top-[1px] left-[213px] w-12 h-[61.6px] shrink-0 object-cover"
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
              <img
                className="relative max-h-full w-[49px] object-cover z-[1]"
                alt=""
                src="/line-3@2x.png"
              />
              <img
                className="absolute my-0 mx-[!important] top-[31px] left-[0px] max-h-full w-[49px] object-cover z-[2]"
                alt=""
                src="/line-2@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="relative mt-80">
          <Post title="Post Title 1" date="2023-01-01" creator="John Doe" comments={5} category="Tech" />
          <Post title="Post Title 1" date="2023-01-01" creator="John Doe" comments={5} category="Tech" />
        </div>
      </div>
    </div>
  );
};

export default Posts;
