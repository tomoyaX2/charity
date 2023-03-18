import img1 from "./1.jpg";
import img2 from "./2.jpg";

const Post7 = () => {
  return (
    <div className="border-b-2 border-gray-200 mt-8 pb-2 xsm:px-4 sm:px-0">
      <div className="">
        <div className="flex">
          <h3>
            Вчора ми уклали меморандум про співпрацю з Громадською Організацією
            "Офіс на Банковій" і однією з частин ЗСУ
          </h3>
        </div>
        <div className="flex flex-wrap items-center justify-center mt-4">
          <img src={img1} alt="" className="w-400 px-4 py-2" />
          <img src={img2} alt="" className="w-400 px-4 py-2" />
        </div>
      </div>
    </div>
  );
};

export { Post7 };
