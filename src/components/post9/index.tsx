import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";

const Post9 = () => {
  return (
    <div className="border-b-2 border-gray-200 mt-8 pb-2">
      <div className="">
        <div className="flex">
          <h3>
            Благодійна Організація Благодійний Фонд "Україно рідна" опікується
            цивільним населенням Київщини, Бучанщини, Ірпеня, Гостомелю, Мощуна,
            Горенки та війсковими ЗСУ А9972 і надає допомогу для них. Невеликий
            фотозвіт.
          </h3>
        </div>
        <div className="flex flex-wrap items-center justify-center mt-4">
          <img src={img1} alt="" className="w-400 px-4 py-2" />
          <img src={img2} alt="" className="w-400 px-4 py-2" />
        </div>
        <div className="flex flex-wrap items-center justify-center mt-4">
          <img src={img3} alt="" className="w-400 px-4 py-2" />
          <img src={img4} alt="" className="w-400 px-4 py-2" />
        </div>
      </div>
    </div>
  );
};

export { Post9 };
