import img4 from "./4.jpg";
import img6 from "./6.jpg";

const Post3 = () => {
  return (
    <div className="border-b-2 border-gray-200 mt-8 pb-2 xsm:px-4 sm:px-0">
      <div className="">
        <div className="flex">
          <h3>
            Медичні облаштунки, хірургічні халати, перчатки, ларингоскопи,
            системи для ендотрахеальноі інтубаціі, дезасоби передані другій
            дитячій лікарні Київської області з метою попередження інфекційної
            захворюваності серед дитячого населення в зимовий період завершення
            2022 року.
          </h3>
        </div>
        <div className="flex flex-wrap items-center justify-center mt-4">
          <img src={img4} alt="" className="w-400 px-4 py-2" />
          <img src={img6} alt="" className="w-400 px-4 py-2" />
        </div>
      </div>
    </div>
  );
};

export { Post3 };
