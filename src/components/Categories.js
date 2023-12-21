import Header from "./Header";
import CategorySection from "./CategorySection";
import Header from "./Footer";
const Frame = () => {
  return (
    <>
    <Header />
    <div className="relative bg-gray w-full h-[1600px] overflow-hidden text-left text-13xl text-black font-inter">
      <div className="absolute top-[361px] left-[47px] rounded-11xl w-[1460px] h-[234px] flex flex-col items-start justify-start gap-[10px]">
        <div className="relative rounded-6xl w-[1439px] h-[246px] z-[0]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-2@2x.png"
          />
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-5@2x.png"
          />
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-3@2x.png"
          />
          <div className="absolute h-[17.32%] w-[21.77%] top-[10.98%] left-[30.58%] inline-block">
            Nombre de postes
          </div>
          <div className="absolute h-[17.32%] w-[15.96%] top-[10.98%] left-[55.73%] inline-block">
            Dernier poste
          </div>
          <div className="absolute h-[17.32%] w-[6.22%] top-[54.47%] left-[59.69%] inline-block">
            Date
          </div>
          <div className="absolute h-[28.05%] w-[15.08%] top-[67.07%] right-[1.32%] bottom-[4.88%] left-[83.6%] rounded-4xs-5 bg-black flex flex-row items-center justify-start p-[25.5px] box-border text-center text-white">
            <div className="relative flex items-center justify-center w-[147px] h-[60px] shrink-0">
            Consulter
            </div>
          </div>
          <div className="absolute top-[41.87%] left-[3.68%]">Description</div>
          <div className="absolute top-[10.98%] left-[80.19%]">Créateur</div>
        </div>
        <div className="absolute my-0 mx-[!important] top-[14px] left-[30px] text-29xl font-extrabold inline-block w-[385px] h-14 shrink-0 z-[1]">
          Titre catégorie
        </div>
      </div>
      <div className="absolute top-[144px] left-[53px] rounded-11xl bg-brown w-[1430px] h-[123px]" />
      <div className="absolute top-[144px] left-[576px] text-[64px] font-extrabold inline-block w-[353px] h-[76px]">
        Catégories
      </div>
      <Footer />
      <CategorySection
        rectangleLabel="/rectangle-2@2x.png"
        rectangleImageLabel="/rectangle-5@2x.png"
        rectangleId="/rectangle-3@2x.png"
        propTop="799px"
        propWidth="1430px"
        propHeight="246px"
        propTop1="20px"
        propLeft="34px"
      />
      <CategorySection
        rectangleLabel="/rectangle-2@2x.png"
        rectangleImageLabel="/rectangle-5@2x.png"
        rectangleId="/rectangle-3@2x.png"
        propTop="1225px"
        propWidth="1420px"
        propHeight="unset"
        propTop1="10px"
        propLeft="53px"
      />
    </div>
    </>
  );
};

export default Frame;
