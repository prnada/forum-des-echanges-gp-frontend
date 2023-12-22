const Category = () => {
    return (
        <>
            {/* <div className="absolute top-[1225px] left-[58px] w-[1420px] flex flex-col items-start justify-start gap-[10px]"> */}
            <div className="relative rounded-6xl w-[1439px] h-[246px] z-[0]">
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    alt=""
                    src="/rectangle-2@2x.png"
                />
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    alt=""
                    src="/rectangle-2@2x.png"
                />
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    alt=""
                    src="/rectangle-2@2x.png"
                />
                <div className="absolute h-[17.32%] w-[21.77%] top-[10.98%] left-[30.58%] inline-block">
                    Posts created
                </div>
                <div className="absolute h-[17.32%] w-[15.96%] top-[10.98%] left-[55.73%] inline-block">
                    Latest Post
                </div>
                <div className="absolute h-[17.32%] w-[6.22%] top-[54.47%] left-[59.69%] inline-block">
                    Date
                </div>
                <div className="absolute h-[28.05%] w-[15.08%] top-[67.07%] right-[1.32%] bottom-[4.88%] left-[83.6%] rounded-4xs-5 bg-black flex flex-row items-center justify-start p-[25.5px] box-border text-center text-white">
                    <div className="relative flex items-center justify-center w-[147px] h-[60px] shrink-0">
                        Explore
                    </div>
                </div>
                <div className="absolute top-[41.87%] left-[3.68%]">Description</div>
                <div className="absolute top-[10.98%] left-[80.19%]">Creator</div>
            </div>
            <div className="absolute my-0 mx-[!important] top-[10px] left-[53px] text-29xl font-extrabold inline-block w-[385px] h-14 shrink-0 z-[1]">
                Category Title
            </div>
            {/* </div> */}
        </>
    );
};

export default Category;
