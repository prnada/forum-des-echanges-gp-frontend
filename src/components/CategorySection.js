import { useMemo } from "react";

const CategorySection = ({
  rectangleLabel,
  rectangleImageLabel,
  rectangleId,
  propTop,
  propWidth,
  propHeight,
  propTop1,
  propLeft,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      top: propTop,
      width: propWidth,
      height: propHeight,
    };
  }, [propTop, propWidth, propHeight]);

  const titreCatgorieStyle = useMemo(() => {
    return {
      top: propTop1,
      left: propLeft,
    };
  }, [propTop1, propLeft]);

  return (
    <div
      className="absolute top-[799px] left-[55px] w-[1430px] h-[246px] flex flex-col items-start justify-start gap-[10px] text-left text-13xl text-black font-inter"
      style={frameDivStyle}
    >
      <div className="relative rounded-6xl w-[1439px] h-[246px] z-[0]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={rectangleLabel}
        />
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={rectangleImageLabel}
        />
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={rectangleId}
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
      <div
        className="absolute my-0 mx-[!important] top-[20px] left-[34px] text-29xl font-extrabold inline-block w-[385px] h-14 shrink-0 z-[1]"
        style={titreCatgorieStyle}
      >
        Titre catégorie
      </div>
    </div>
  );
};

export default CategorySection;
