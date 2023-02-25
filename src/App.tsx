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
      <div className="lg:px-40 sm:px-20 px-10 mt-8">
        <div className=" border-b-2 border-gray-200">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum
        </div>
        <h2 className="mt-4 w-full text-center font-semibold uppercase text-3xl  border-b-2 border-gray-200 pb-4">
          We already helped:
        </h2>
        <div className="flex items-start justify-between w-full mt-12 border-b-2 border-gray-200 pb-8">
          <span className="w-200">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
          </span>
          <img
            src={carouselLinks[activeLinkIndex]}
            alt=""
            className="sm:w-64 w-200 h-64"
          />
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
