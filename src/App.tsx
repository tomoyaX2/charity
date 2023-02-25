import { useEffect, useState } from "react";
import "./App.css";
import image1 from "./img/1.jpg";
import image2 from "./img/2.jpg";
import image3 from "./img/3.jpg";
import avatar1 from "./img/avatar1.jpg";
import avatar2 from "./img/avatar2.jpg";
import avatar3 from "./img/avatar3.jpg";
import "rsuite/dist/rsuite.min.css";
import { Header } from "./components/Header";
import post2 from "./img/post2.jpg";
import { Post1 } from "./components/post1";

const carouselLinks = [image1, image2, image3];

function App() {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setActiveLinkIndex((prevLinkIndex) =>
        prevLinkIndex + 1 >= carouselLinks.length ? 0 : prevLinkIndex + 1
      );
    }, 3000);
  }, [activeLinkIndex]);

  return (
    <>
      <Header />
      <div className="lg:px-40 sm:px-20 px-10">
        <Post1 />
        <div className="border-b-2 border-gray-200 mt-2 pb-2">
          <h3>
            Громадська організація «Офіс на Банковій» та БО БФ Украіна Рідна
            передали 3D-принтер до медичних сил ЗСУ!
          </h3>
          <div className="flex flex-row items-start justify-between mt-2">
            <span className="text-xl mr-2">
              Сьогодні наша волонтерська команда завітала до Регіонального
              санітарно-епідеміологічного управління командування медичних сил
              ЗСУ. На прохання медиків-захисників України, на основі підписаного
              нами меморандуму, ми передали до установи 3D-принтер, який має
              значно полегшити працівникам процеси виготовлення ємностей та
              іншого потрібного лабораторного обладнання.
              <br />
              <br />
              Висловлюємо щиру подяку за сприяння у наших добрих справах
              Комітету гуманітарно-інформаційної політики ВРУ та його голові
              Микиті Руслановичу Потураєву! Ваша допомога неоціненна!
              <br />
              <br />
              Разом до перемоги!
              <br />
              Слава Україні!
            </span>
            <img src={post2} alt="" className="w-88 h-80" />
          </div>
        </div>
        <h2 className="mt-4 w-full text-center font-semibold uppercase text-3xl  border-b-2 border-gray-200 pb-4">
          Founders:
        </h2>
        <div className="flex items-center lg:justify-between sm:justify-center w-full flex-wrap">
          <div className="flex flex-col items-center shadow-md mt-4 w-64">
            <img src={avatar1} alt="" className="h-64 w-60" />
            <span className="font-semibold text-lg mt-4">Test User 1</span>
            <span className="font-semibold text-md mt-4 text-center">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only
            </span>
          </div>
          <div className="flex flex-col items-center shadow-md mt-4 w-64">
            <img src={avatar2} alt="" className="h-64 w-60" />
            <span className="font-semibold text-lg mt-4">Test User 1</span>
            <span className="font-semibold text-md mt-4 text-center">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only
            </span>
          </div>
          <div className="flex flex-col items-center shadow-md mt-4 w-64">
            <img src={avatar3} alt="" className="h-64 w-60" />
            <span className="font-semibold text-lg mt-4">Test User 1</span>
            <span className="font-semibold text-md mt-4 text-center">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only
            </span>
          </div>
          <div className="flex flex-col items-center shadow-md mt-4 w-64">
            <img src={avatar1} alt="" className="h-64 w-60" />
            <span className="font-semibold text-lg mt-4">Test User 1</span>
            <span className="font-semibold text-md mt-4 text-center">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
